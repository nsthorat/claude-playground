import { chromium, Page } from 'playwright'

const CHROMIUM_PATH = '/root/.cache/ms-playwright/chromium-1194/chrome-linux/chrome'

async function fetchDailyPuzzle(): Promise<{
  id: string
  map: string
  budget: number
  name: string
}> {
  const today = new Date().toISOString().split('T')[0]
  const res = await fetch(`https://enclose.horse/api/daily/${today}`)
  return res.json()
}

function parseMap(mapStr: string) {
  const lines = mapStr.trim().split('\n')
  const rows = lines.length
  const cols = lines[0].length

  const grid: string[][] = []
  let horse: [number, number] = [-1, -1]
  const cherries: [number, number][] = []

  for (let r = 0; r < rows; r++) {
    grid[r] = []
    for (let c = 0; c < cols; c++) {
      const cell = lines[r][c]
      grid[r][c] = cell
      if (cell === 'H') horse = [r, c]
      if (cell === 'C') cherries.push([r, c])
    }
  }

  return { grid, rows, cols, horse, cherries }
}

// Find walls that create an enclosure using BFS-based min-cut approximation
function findEnclosingWalls(
  grid: string[][],
  rows: number,
  cols: number,
  horse: [number, number],
  budget: number
): [number, number][] {
  const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]] as const

  function isPassable(r: number, c: number, blocked: Set<string>): boolean {
    if (r < 0 || r >= rows || c < 0 || c >= cols) return false
    if (blocked.has(`${r},${c}`)) return false
    const cell = grid[r][c]
    return cell === '.' || cell === 'C' || cell === 'H'
  }

  function canEscape(blocked: Set<string>): { escaped: boolean, reachable: Set<string> } {
    const visited = new Set<string>()
    const queue: [number, number][] = [[horse[0], horse[1]]]
    visited.add(`${horse[0]},${horse[1]}`)
    let escaped = false

    while (queue.length > 0) {
      const [r, c] = queue.shift()!
      if (r === 0 || r === rows - 1 || c === 0 || c === cols - 1) {
        escaped = true
      }

      for (const [dr, dc] of dirs) {
        const nr = r + dr
        const nc = c + dc
        const key = `${nr},${nc}`
        if (!visited.has(key) && isPassable(nr, nc, blocked)) {
          visited.add(key)
          queue.push([nr, nc])
        }
      }
    }

    return { escaped, reachable: visited }
  }

  // Get all grass cells (potential wall positions)
  const grassCells: [number, number][] = []
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === '.' && !(r === horse[0] && c === horse[1])) {
        grassCells.push([r, c])
      }
    }
  }

  // Try to find enclosure using iterative deepening with pruning
  console.log('Searching for minimum enclosure...')

  // Start with cells near the horse and work outward
  const horseR = horse[0]
  const horseC = horse[1]

  // Sort cells by distance from horse
  grassCells.sort((a, b) => {
    const distA = Math.abs(a[0] - horseR) + Math.abs(a[1] - horseC)
    const distB = Math.abs(b[0] - horseR) + Math.abs(b[1] - horseC)
    return distA - distB
  })

  // Try combinations of increasing size
  for (let numWalls = 1; numWalls <= budget; numWalls++) {
    console.log(`Trying ${numWalls} walls...`)

    // For small numbers, try exhaustive search
    // For larger, use greedy with lookahead
    if (numWalls <= 6) {
      const result = findEnclosureExhaustive(grassCells.slice(0, 60), numWalls, canEscape)
      if (result) {
        console.log(`Found enclosure with ${numWalls} walls!`)
        return result
      }
    } else {
      // Greedy with verification
      const result = findEnclosureGreedy(grassCells, numWalls, canEscape, isPassable)
      if (result) {
        console.log(`Found enclosure with ${numWalls} walls (greedy)!`)
        return result
      }
    }
  }

  console.log('Could not find enclosure within budget')
  return []

  function findEnclosureExhaustive(
    cells: [number, number][],
    n: number,
    canEscapeFn: (blocked: Set<string>) => { escaped: boolean, reachable: Set<string> }
  ): [number, number][] | null {
    // Generate combinations
    function* combinations(arr: [number, number][], k: number, start = 0): Generator<[number, number][]> {
      if (k === 0) {
        yield []
        return
      }
      for (let i = start; i <= arr.length - k; i++) {
        for (const rest of combinations(arr, k - 1, i + 1)) {
          yield [arr[i], ...rest]
        }
      }
    }

    let best: [number, number][] | null = null
    let bestArea = 0

    let count = 0
    for (const combo of combinations(cells, n)) {
      count++
      if (count > 50000) break // Limit search

      const blocked = new Set(combo.map(([r, c]) => `${r},${c}`))
      const { escaped, reachable } = canEscapeFn(blocked)

      if (!escaped && reachable.size > bestArea) {
        best = combo
        bestArea = reachable.size
      }
    }

    return best
  }

  function findEnclosureGreedy(
    cells: [number, number][],
    maxWalls: number,
    canEscapeFn: (blocked: Set<string>) => { escaped: boolean, reachable: Set<string> },
    isPassableFn: (r: number, c: number, blocked: Set<string>) => boolean
  ): [number, number][] | null {
    const blocked = new Set<string>()
    const walls: [number, number][] = []

    for (let i = 0; i < maxWalls; i++) {
      let bestCell: [number, number] | null = null
      let bestScore = -Infinity

      for (const [r, c] of cells) {
        const key = `${r},${c}`
        if (blocked.has(key)) continue

        const testBlocked = new Set([...blocked, key])
        const { escaped, reachable } = canEscapeFn(testBlocked)

        // Score: prefer cells that enclose (huge bonus) or reduce reachable area
        let score = -reachable.size
        if (!escaped) {
          score = reachable.size + 10000 // Prefer larger enclosed area
        }

        if (score > bestScore) {
          bestScore = score
          bestCell = [r, c]
        }
      }

      if (bestCell) {
        walls.push(bestCell)
        blocked.add(`${bestCell[0]},${bestCell[1]}`)

        const { escaped, reachable } = canEscapeFn(blocked)
        console.log(`  Wall ${walls.length}: (${bestCell[0]}, ${bestCell[1]}), area=${reachable.size}, escaped=${escaped}`)

        if (!escaped) {
          return walls
        }
      }
    }

    return null
  }
}

async function setupPage(): Promise<Page> {
  const browser = await chromium.launch({
    headless: true,
    executablePath: CHROMIUM_PATH
  })
  const page = await browser.newPage({ viewport: { width: 500, height: 900 } })

  await page.route('https://enclose.horse/**', async route => {
    try {
      const res = await fetch(route.request().url(), {
        method: route.request().method(),
        headers: { 'User-Agent': 'Mozilla/5.0', 'Accept': '*/*' },
        body: route.request().method() === 'POST' ? route.request().postData() : undefined,
      })
      const contentType = res.headers.get('content-type') || ''
      const body = contentType.includes('text') || contentType.includes('javascript') ||
                   contentType.includes('json') || contentType.includes('css')
        ? await res.text()
        : Buffer.from(await res.arrayBuffer())
      await route.fulfill({ status: res.status, headers: Object.fromEntries(res.headers.entries()), body })
    } catch { await route.abort() }
  })

  await page.route('https://fonts.googleapis.com/**', async route => {
    try { await route.fulfill({ status: 200, body: await (await fetch(route.request().url())).text() }) }
    catch { await route.abort() }
  })
  await page.route('https://fonts.gstatic.com/**', async route => {
    try { await route.fulfill({ status: 200, body: Buffer.from(await (await fetch(route.request().url())).arrayBuffer()) }) }
    catch { await route.abort() }
  })

  return page
}

async function playGame() {
  console.log('🐴 Enclose.horse Solver v2\n')

  console.log('Fetching daily puzzle...')
  const puzzle = await fetchDailyPuzzle()
  console.log(`Puzzle: "${puzzle.name}" (${puzzle.id})`)
  console.log(`Budget: ${puzzle.budget} walls\n`)

  const { grid, rows, cols, horse, cherries } = parseMap(puzzle.map)
  console.log(`Grid: ${cols}x${rows}`)
  console.log(`Horse at: (${horse[0]}, ${horse[1]})`)
  console.log(`Cherries: ${cherries.length}`)

  console.log('\n=== MAP ===')
  for (let r = 0; r < rows; r++) {
    console.log(`${r.toString().padStart(2)}: ${grid[r].join('')}`)
  }

  console.log('\n=== SOLVING ===')
  const wallsToPlace = findEnclosingWalls(grid, rows, cols, horse, puzzle.budget)

  if (wallsToPlace.length === 0) {
    console.log('No solution found!')
    return
  }

  console.log(`\n✅ Solution: ${wallsToPlace.length} walls`)
  wallsToPlace.forEach(([r, c], i) => console.log(`  ${i + 1}. (${r}, ${c})`))

  // Play in browser
  console.log('\n=== PLAYING IN BROWSER ===')
  const page = await setupPage()

  await page.goto('https://enclose.horse/', { waitUntil: 'domcontentloaded', timeout: 60000 })

  console.log('Waiting for game...')
  await page.waitForSelector('#game', { timeout: 10000 })
  await page.waitForTimeout(3000)

  await page.screenshot({ path: '/tmp/enclose-loaded.png' })

  // Close help modal by clicking X button at top right of modal
  console.log('Closing help modal...')
  // The X button is visible in the modal - click it directly
  await page.click('.modal-close', { timeout: 5000 }).catch(async () => {
    // Fallback: click at the X button coordinates
    await page.mouse.click(427, 198)
  })
  await page.waitForTimeout(500)

  // Verify modal is closed
  const modalOpen = await page.evaluate(() => {
    const overlay = document.querySelector('.modal-overlay.visible')
    return !!overlay
  })

  if (modalOpen) {
    console.log('Modal still open, trying escape key...')
    await page.keyboard.press('Escape')
    await page.waitForTimeout(500)
  }

  await page.screenshot({ path: '/tmp/enclose-board.png' })

  // Check again
  const stillOpen = await page.evaluate(() => !!document.querySelector('.modal-overlay.visible'))
  console.log('Modal closed:', !stillOpen)

  const canvasBox = await page.locator('#game').boundingBox()
  if (!canvasBox) {
    console.error('Canvas not found')
    await page.context().browser()?.close()
    return
  }

  const cellSize = Math.min(canvasBox.width / cols, canvasBox.height / rows)
  console.log(`Canvas: ${canvasBox.width.toFixed(0)}x${canvasBox.height.toFixed(0)}, Cell: ${cellSize.toFixed(1)}px`)

  console.log('\nPlacing walls...')
  for (const [r, c] of wallsToPlace) {
    const x = canvasBox.x + c * cellSize + cellSize / 2
    const y = canvasBox.y + r * cellSize + cellSize / 2
    console.log(`  (${r}, ${c}) -> (${Math.round(x)}, ${Math.round(y)})`)
    await page.mouse.click(x, y)
    await page.waitForTimeout(300)
  }

  await page.screenshot({ path: '/tmp/enclose-walls.png' })
  console.log('Walls placed: /tmp/enclose-walls.png')

  // Hover over horse
  const hx = canvasBox.x + horse[1] * cellSize + cellSize / 2
  const hy = canvasBox.y + horse[0] * cellSize + cellSize / 2
  await page.mouse.move(hx, hy)
  await page.waitForTimeout(500)
  await page.screenshot({ path: '/tmp/enclose-hover.png' })

  // Click Submit button (the actual button, not the text)
  console.log('\nSubmitting...')
  try {
    await page.click('button.btn-submit', { timeout: 5000 })
  } catch {
    // Try finding it differently
    await page.evaluate(() => {
      const btns = document.querySelectorAll('button')
      for (const btn of btns) {
        if (btn.textContent?.includes('Submit')) {
          btn.click()
          return
        }
      }
    })
  }
  await page.waitForTimeout(2000)
  await page.screenshot({ path: '/tmp/enclose-result.png' })

  const text = await page.evaluate(() => document.body.innerText)
  console.log('\n=== RESULT ===')
  const scoreMatch = text.match(/Score:?\s*(\d+)/i)
  if (scoreMatch) {
    console.log(`🏆 SCORE: ${scoreMatch[1]}`)
  } else {
    console.log(text.split('\n').slice(0, 15).join('\n'))
  }

  await page.context().browser()?.close()
  console.log('\n✅ Done!')
}

playGame().catch(console.error)
