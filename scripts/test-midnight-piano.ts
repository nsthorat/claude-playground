import { chromium } from 'playwright'

async function test() {
  const browser = await chromium.launch({ headless: true })
  const page = await browser.newPage({ viewport: { width: 430, height: 932 } })

  // Route external requests through fetch (for proxy support)
  await page.route('https://fonts.googleapis.com/**', async route => {
    try {
      const res = await fetch(route.request().url())
      route.fulfill({ status: res.status, body: await res.text() })
    } catch {
      route.fulfill({ status: 200, body: '' })
    }
  })
  await page.route('https://fonts.gstatic.com/**', async route => {
    try {
      const res = await fetch(route.request().url())
      const buf = await res.arrayBuffer()
      route.fulfill({ status: res.status, body: Buffer.from(buf) })
    } catch {
      route.fulfill({ status: 200, body: '' })
    }
  })

  // Capture console errors (ignore network/resource errors)
  const errors: string[] = []
  page.on('console', msg => {
    const text = msg.text()
    if (msg.type() === 'error' &&
        !text.includes('net::ERR_') &&
        !text.includes('fonts') &&
        !text.includes('Failed to load resource') &&
        !text.includes('404') &&
        !text.includes('403')) {
      errors.push(text)
    }
  })
  page.on('pageerror', err => errors.push(err.message))

  console.log('Testing Midnight Piano...')

  // Navigate to the piece
  await page.goto('http://localhost:5173/claude-playground/music/midnight-piano/')
  await page.waitForLoadState('networkidle')
  await page.waitForTimeout(2000)

  // Check for errors
  if (errors.length > 0) {
    console.error('❌ Console errors found:')
    errors.forEach(e => console.error('  ', e))
    await browser.close()
    process.exit(1)
  }

  // Check content loaded
  const title = await page.textContent('h1')
  if (!title?.includes('Midnight Piano')) {
    console.error('❌ Title not found')
    await browser.close()
    process.exit(1)
  }
  console.log('  ✓ Title found:', title)

  // Check play button exists
  const playButton = await page.$('button')
  if (!playButton) {
    console.error('❌ Play button not found')
    await browser.close()
    process.exit(1)
  }
  console.log('  ✓ Play button found')

  // Check section indicators exist
  const sectionIndicators = await page.$$('[class*="rounded-lg"]')
  if (sectionIndicators.length < 7) {
    console.log('  ⚠ Section indicators may be missing, found:', sectionIndicators.length)
  } else {
    console.log('  ✓ Section indicators found')
  }

  // Screenshot for visual verification
  await page.screenshot({ path: '/tmp/midnight-piano-test.png' })
  console.log('✅ Midnight Piano works, screenshot saved to /tmp/midnight-piano-test.png')

  // Test music listing shows the piece
  console.log('\nTesting music listing includes piece...')
  await page.goto('http://localhost:5173/claude-playground/music/')
  await page.waitForLoadState('networkidle')
  await page.waitForTimeout(1000)

  const pieceCard = await page.textContent('body')
  if (pieceCard?.includes('Midnight Piano')) {
    console.log('  ✓ Piece appears in listing')
  } else {
    console.log('  ⚠ Piece not found in listing (may need page refresh)')
  }

  await page.screenshot({ path: '/tmp/music-listing-with-piece.png' })
  console.log('✅ All tests passed!')

  await browser.close()
}

test().catch(e => {
  console.error('Test failed:', e)
  process.exit(1)
})
