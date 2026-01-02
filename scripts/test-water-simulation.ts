import { chromium } from 'playwright'

async function testWaterSimulation() {
  console.log('Starting Water Simulation visual test...\n')

  const browser = await chromium.launch({ headless: true })
  const context = await browser.newContext({
    viewport: { width: 800, height: 800 },
  })
  const page = await context.newPage()

  // Capture console output
  const errors: string[] = []
  const logs: string[] = []

  const ignoredErrors = [
    'net::ERR_NAME_NOT_RESOLVED',
    'net::ERR_TUNNEL_CONNECTION_FAILED',
    'Failed to load resource',
  ]

  page.on('console', (msg) => {
    const text = msg.text()
    if (msg.type() === 'error') {
      if (!ignoredErrors.some((e) => text.includes(e))) {
        errors.push(text)
      }
    } else {
      logs.push(text)
    }
  })

  page.on('pageerror', (err) => {
    if (!ignoredErrors.some((e) => err.message.includes(e))) {
      errors.push(err.message)
    }
  })

  try {
    // Load the water page
    console.log('1. Loading water simulation page...')
    await page.goto('http://localhost:5174/claude-playground/water/')
    await page.waitForLoadState('networkidle')
    console.log('   ✅ Page loaded')

    // Wait for canvas and simulation to initialize
    console.log('2. Waiting for WebGL canvas...')
    await page.waitForSelector('canvas', { timeout: 10000 })
    console.log('   ✅ Canvas found')

    // Wait for loading to complete
    console.log('3. Waiting for simulation to initialize...')
    await page.waitForFunction(
      () => !document.querySelector('.animate-pulse'),
      { timeout: 15000 }
    )
    console.log('   ✅ Simulation initialized')

    // Take initial screenshot
    console.log('4. Taking initial screenshot...')
    await page.screenshot({ path: '/tmp/water-initial.png' })
    console.log('   ✅ Saved to /tmp/water-initial.png')

    // Wait a bit for any initial animation
    await page.waitForTimeout(500)

    // Inject simulated tilt movement to create waves
    console.log('5. Simulating tilt movement...')
    await page.evaluate(() => {
      // Access the React fiber to update tilt
      const canvas = document.querySelector('canvas')
      if (!canvas) return

      // Dispatch pointer events to simulate interaction
      const rect = canvas.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      // Simulate a circular motion
      for (let i = 0; i < 60; i++) {
        const angle = (i / 60) * Math.PI * 2
        const x = centerX + Math.cos(angle) * 100
        const y = centerY + Math.sin(angle) * 100

        const event = new PointerEvent('pointermove', {
          clientX: x,
          clientY: y,
          bubbles: true,
        })
        canvas.dispatchEvent(event)
      }
    })

    // Wait for waves to develop
    await page.waitForTimeout(1000)

    // Take screenshot after simulated movement
    console.log('6. Taking screenshot after movement...')
    await page.screenshot({ path: '/tmp/water-after-movement.png' })
    console.log('   ✅ Saved to /tmp/water-after-movement.png')

    // Wait more and take another screenshot to see wave propagation
    await page.waitForTimeout(1500)
    console.log('7. Taking screenshot to see wave propagation...')
    await page.screenshot({ path: '/tmp/water-propagation.png' })
    console.log('   ✅ Saved to /tmp/water-propagation.png')

    // Report logs
    console.log('\n--- Console Logs ---')
    if (logs.length > 0) {
      logs.forEach((l) => console.log(`  ${l}`))
    } else {
      console.log('  (no logs)')
    }

    // Report errors
    console.log('\n--- Errors ---')
    if (errors.length > 0) {
      errors.forEach((e) => console.log(`  ❌ ${e}`))
    } else {
      console.log('  ✅ No errors')
    }

    console.log('\n=== SCREENSHOTS SAVED ===')
    console.log('/tmp/water-initial.png')
    console.log('/tmp/water-after-movement.png')
    console.log('/tmp/water-propagation.png')
    console.log('\nCheck these to visually verify the water simulation is working.')

  } catch (error) {
    console.error('❌ Test failed:', error)
    await page.screenshot({ path: '/tmp/water-error.png' })
    console.log('Error screenshot saved to /tmp/water-error.png')
    process.exit(1)
  } finally {
    await browser.close()
  }
}

testWaterSimulation()
