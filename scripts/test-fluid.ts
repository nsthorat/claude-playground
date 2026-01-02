import { chromium } from 'playwright'
import { spawn } from 'child_process'
import { resolve } from 'path'

const BASE_URL = 'http://localhost:4173/claude-playground'

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

async function test() {
  console.log('Starting preview server...')

  // Start the preview server
  const server = spawn('bun', ['run', 'preview'], {
    cwd: resolve(import.meta.dir, '..'),
    stdio: ['ignore', 'pipe', 'pipe'],
  })

  // Wait for server to be ready
  console.log('Waiting for server to be ready...')
  const serverReady = await waitForServer(`${BASE_URL}/`)

  if (!serverReady) {
    console.error('Server failed to start')
    server.kill()
    process.exit(1)
  }

  console.log('Server ready! Launching browser...')

  const browser = await chromium.launch({ headless: true })

  try {
    const page = await browser.newPage({
      viewport: { width: 390, height: 844 } // iPhone 14 Pro dimensions for mobile-first test
    })

    // Capture console errors
    const errors: string[] = []
    page.on('console', msg => {
      if (msg.type() === 'error') {
        const text = msg.text()
        // Ignore font loading errors (expected in test environment)
        if (!text.includes('ERR_NAME_NOT_RESOLVED')) {
          errors.push(text)
        }
      }
    })
    page.on('pageerror', err => errors.push(err.message))

    // Navigate to fluid app
    console.log('Navigating to fluid app...')
    await page.goto(`${BASE_URL}/fluid/`, { waitUntil: 'networkidle' })

    // Wait for the canvas to be present
    console.log('Checking for canvas element...')
    const canvas = await page.waitForSelector('canvas', { timeout: 5000 })
    if (!canvas) {
      console.error('❌ Canvas element not found')
      process.exit(1)
    }
    console.log('✅ Canvas element found')

    // Check for title
    const title = await page.title()
    if (!title.includes('Fluid Simulation')) {
      console.error(`❌ Unexpected title: ${title}`)
      process.exit(1)
    }
    console.log(`✅ Title correct: ${title}`)

    // Check for header text
    const headerText = await page.locator('h1').textContent()
    if (!headerText?.includes('Fluid')) {
      console.error(`❌ Header text incorrect: ${headerText}`)
      process.exit(1)
    }
    console.log(`✅ Header text correct: ${headerText}`)

    // Check for back button
    const backButton = await page.locator('a[href*="/claude-playground/"]').first()
    if (!backButton) {
      console.error('❌ Back button not found')
      process.exit(1)
    }
    console.log('✅ Back button found')

    // Check for control buttons
    const tiltButton = await page.locator('button:has-text("Tilt")').first()
    const touchButton = await page.locator('button:has-text("Touch")').first()
    if (await tiltButton.isVisible() && await touchButton.isVisible()) {
      console.log('✅ Control mode buttons visible')
    } else {
      console.error('❌ Control mode buttons not visible')
      process.exit(1)
    }

    // Check for palette buttons
    const paletteButtons = await page.locator('button:has-text("rainbow"), button:has-text("fire"), button:has-text("ocean"), button:has-text("neon")').count()
    if (paletteButtons === 4) {
      console.log('✅ All color palette buttons found')
    } else {
      console.error(`❌ Expected 4 palette buttons, found ${paletteButtons}`)
      process.exit(1)
    }

    // Wait a bit for any animations
    await page.waitForTimeout(1000)

    // Take screenshot
    await page.screenshot({ path: '/tmp/fluid-test.png' })
    console.log('✅ Screenshot saved to /tmp/fluid-test.png')

    // Check for critical errors
    if (errors.length > 0) {
      console.error('❌ Console errors found:')
      errors.forEach(e => console.error(`    ${e}`))
      process.exit(1)
    }

    console.log('\n✅ All tests passed!')
  } finally {
    await browser.close()
    server.kill()
  }
}

test().catch(err => {
  console.error('Error:', err)
  process.exit(1)
})
