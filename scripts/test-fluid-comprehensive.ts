import { chromium, Page } from 'playwright'
import { spawn, ChildProcess } from 'child_process'
import { resolve } from 'path'
import { mkdirSync, existsSync } from 'fs'

const BASE_URL = 'http://localhost:4173/claude-playground'
const SCREENSHOT_DIR = resolve(import.meta.dir, '..', 'screenshots')

// Ensure screenshots directory exists
if (!existsSync(SCREENSHOT_DIR)) {
  mkdirSync(SCREENSHOT_DIR, { recursive: true })
}

async function waitForServer(url: string, maxAttempts = 30): Promise<boolean> {
  for (let i = 0; i < maxAttempts; i++) {
    try {
      const response = await fetch(url)
      if (response.ok) return true
    } catch {
      // Server not ready yet
    }
    await new Promise(r => setTimeout(r, 1000))
  }
  return false
}

async function screenshot(page: Page, name: string) {
  const path = resolve(SCREENSHOT_DIR, `${name}.png`)
  await page.screenshot({ path })
  console.log(`📸 ${name}.png`)
}

async function simulateTouch(page: Page, startX: number, startY: number, endX: number, endY: number, steps = 10) {
  // Simulate a drag gesture
  await page.mouse.move(startX, startY)
  await page.mouse.down()

  for (let i = 1; i <= steps; i++) {
    const x = startX + (endX - startX) * (i / steps)
    const y = startY + (endY - startY) * (i / steps)
    await page.mouse.move(x, y)
    await page.waitForTimeout(16) // ~60fps
  }

  await page.mouse.up()
}

async function runTests() {
  console.log('Starting preview server...')

  const server = spawn('bun', ['run', 'preview'], {
    cwd: resolve(import.meta.dir, '..'),
    stdio: ['ignore', 'pipe', 'pipe'],
  })

  console.log('Waiting for server to be ready...')
  const serverReady = await waitForServer(`${BASE_URL}/`)

  if (!serverReady) {
    console.error('Server failed to start')
    server.kill()
    process.exit(1)
  }

  console.log('Server ready! Launching browser...\n')

  const browser = await chromium.launch({ headless: true })

  try {
    // Mobile viewport (iPhone 14 Pro)
    const page = await browser.newPage({
      viewport: { width: 390, height: 844 }
    })

    // Navigate to fluid app
    console.log('=== FLUID SIMULATION TEST ===\n')
    await page.goto(`${BASE_URL}/fluid/`, { waitUntil: 'networkidle' })
    await page.waitForTimeout(500)

    // 1. Initial state
    await screenshot(page, '01-initial-state')

    // 2. Wait for initial splats to render
    await page.waitForTimeout(1000)
    await screenshot(page, '02-after-initial-splats')

    // 3. Simulate touch interactions - drag across canvas
    console.log('\n--- Simulating touch interactions ---')

    // Drag from center to right
    await simulateTouch(page, 195, 400, 350, 400)
    await page.waitForTimeout(200)
    await screenshot(page, '03-after-drag-right')

    // Drag from top to bottom
    await simulateTouch(page, 195, 200, 195, 600)
    await page.waitForTimeout(200)
    await screenshot(page, '04-after-drag-down')

    // Circular motion
    const centerX = 195, centerY = 400, radius = 100
    for (let angle = 0; angle < Math.PI * 2; angle += Math.PI / 4) {
      const x = centerX + Math.cos(angle) * radius
      const y = centerY + Math.sin(angle) * radius
      const nextAngle = angle + Math.PI / 4
      const nextX = centerX + Math.cos(nextAngle) * radius
      const nextY = centerY + Math.sin(nextAngle) * radius
      await simulateTouch(page, x, y, nextX, nextY, 5)
      await page.waitForTimeout(50)
    }
    await page.waitForTimeout(300)
    await screenshot(page, '05-after-circular-motion')

    // 4. Test different color palettes
    console.log('\n--- Testing color palettes ---')

    // Clear first
    await page.click('button:has-text("Clear")')
    await page.waitForTimeout(300)
    await screenshot(page, '06-after-clear')

    // Test fire palette
    await page.click('button:has-text("fire")')
    await simulateTouch(page, 100, 400, 300, 400)
    await simulateTouch(page, 200, 300, 200, 500)
    await page.waitForTimeout(300)
    await screenshot(page, '07-fire-palette')

    // Test ocean palette
    await page.click('button:has-text("Clear")')
    await page.click('button:has-text("ocean")')
    await simulateTouch(page, 100, 400, 300, 400)
    await simulateTouch(page, 200, 300, 200, 500)
    await page.waitForTimeout(300)
    await screenshot(page, '08-ocean-palette')

    // Test rainbow palette
    await page.click('button:has-text("Clear")')
    await page.click('button:has-text("rainbow")')
    await simulateTouch(page, 100, 400, 300, 400)
    await simulateTouch(page, 200, 300, 200, 500)
    await page.waitForTimeout(300)
    await screenshot(page, '09-rainbow-palette')

    // Test neon palette (default)
    await page.click('button:has-text("Clear")')
    await page.click('button:has-text("neon")')
    await simulateTouch(page, 100, 400, 300, 400)
    await simulateTouch(page, 200, 300, 200, 500)
    await page.waitForTimeout(300)
    await screenshot(page, '10-neon-palette')

    // 5. Test tilt mode simulation
    console.log('\n--- Testing tilt mode ---')

    // First, let's click "Enable Tilt Control" button if visible
    const tiltButton = page.locator('button:has-text("Enable Tilt Control")')
    if (await tiltButton.isVisible()) {
      console.log('Tilt permission button visible - cannot simulate device orientation in headless mode')
      await screenshot(page, '11-tilt-permission-needed')
    }

    // Switch to Touch mode and add some fluid
    await page.click('button:has-text("Touch")')
    await page.click('button:has-text("Reset")')
    await page.waitForTimeout(500)
    await screenshot(page, '12-touch-mode-reset')

    // 6. Watch fluid dissipate over time
    console.log('\n--- Watching fluid behavior over time ---')
    await page.waitForTimeout(1000)
    await screenshot(page, '13-after-1-second')
    await page.waitForTimeout(2000)
    await screenshot(page, '14-after-3-seconds')
    await page.waitForTimeout(2000)
    await screenshot(page, '15-after-5-seconds')

    // 7. Heavy interaction test
    console.log('\n--- Heavy interaction test ---')
    await page.click('button:has-text("Clear")')

    // Many rapid touches
    for (let i = 0; i < 10; i++) {
      const x1 = 50 + Math.random() * 290
      const y1 = 150 + Math.random() * 500
      const x2 = 50 + Math.random() * 290
      const y2 = 150 + Math.random() * 500
      await simulateTouch(page, x1, y1, x2, y2, 3)
    }
    await page.waitForTimeout(300)
    await screenshot(page, '16-heavy-interaction')

    // 8. Final state after settling
    await page.waitForTimeout(2000)
    await screenshot(page, '17-final-settled')

    // 9. Hide controls to see full canvas
    await page.click('button:has-text("−")')
    await page.waitForTimeout(300)
    await screenshot(page, '18-controls-hidden')

    console.log('\n✅ All screenshots captured!')
    console.log(`📁 Screenshots saved to: ${SCREENSHOT_DIR}`)

  } finally {
    await browser.close()
    server.kill()
  }
}

runTests().catch(err => {
  console.error('Error:', err)
  process.exit(1)
})
