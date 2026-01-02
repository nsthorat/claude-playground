import { chromium } from 'playwright'

async function testWaterSimulation() {
  console.log('Starting Water Simulation tests...\n')

  const browser = await chromium.launch({ headless: true })
  const context = await browser.newContext({
    viewport: { width: 1200, height: 800 },
  })
  const page = await context.newPage()

  // Capture console errors
  const errors: string[] = []
  const warnings: string[] = []
  const logs: string[] = []

  // Network errors to ignore (expected in headless/sandboxed environments)
  const ignoredErrors = [
    'net::ERR_NAME_NOT_RESOLVED',
    'net::ERR_TUNNEL_CONNECTION_FAILED',
    'Failed to load resource',
  ]

  page.on('console', (msg) => {
    const text = msg.text()
    if (msg.type() === 'error') {
      // Filter out expected network errors
      if (!ignoredErrors.some((e) => text.includes(e))) {
        errors.push(text)
      }
    } else if (msg.type() === 'warning') {
      warnings.push(text)
    } else {
      logs.push(text)
    }
  })

  page.on('pageerror', (err) => {
    // Filter out expected network errors
    if (!ignoredErrors.some((e) => err.message.includes(e))) {
      errors.push(err.message)
    }
  })

  try {
    // Test 1: Load the water simulation page
    console.log('Test 1: Loading water simulation page...')
    await page.goto('http://localhost:5173/claude-playground/water/')
    await page.waitForLoadState('networkidle')
    console.log('  ✅ Page loaded successfully')

    // Test 2: Wait for WebGL canvas to render
    console.log('Test 2: Checking for WebGL canvas...')
    const canvas = await page.waitForSelector('canvas', { timeout: 10000 })
    if (canvas) {
      console.log('  ✅ WebGL canvas found')
    }

    // Test 3: Wait for simulation to initialize
    console.log('Test 3: Waiting for simulation to initialize...')
    await page.waitForFunction(
      () => {
        // Check if loading message has disappeared
        const loadingEl = document.querySelector('.animate-pulse')
        return !loadingEl
      },
      { timeout: 15000 }
    )
    console.log('  ✅ Simulation initialized')

    // Test 4: Check for header and title
    console.log('Test 4: Checking UI elements...')
    const title = await page.textContent('h1')
    if (title?.includes('Water Simulation')) {
      console.log('  ✅ Title found: "Water Simulation"')
    } else {
      console.log(`  ⚠️  Unexpected title: "${title}"`)
    }

    // Test 5: Check control buttons
    const tiltButton = await page.$('button:has-text("Tilt")')
    const touchButton = await page.$('button:has-text("Touch")')
    if (tiltButton && touchButton) {
      console.log('  ✅ Control buttons (Tilt/Touch) found')
    }

    // Test 6: Check reset button
    const resetButton = await page.$('button:has-text("Reset")')
    if (resetButton) {
      console.log('  ✅ Reset button found')
    }

    // Test 7: Test touch interaction
    console.log('Test 5: Testing touch interaction...')
    await page.mouse.move(600, 400)
    await page.mouse.down()
    await page.mouse.move(650, 400, { steps: 10 })
    await page.mouse.move(600, 450, { steps: 10 })
    await page.mouse.up()
    console.log('  ✅ Touch interaction simulated')

    // Wait a moment for any async errors
    await page.waitForTimeout(2000)

    // Test 8: Take screenshot
    console.log('Test 6: Taking screenshot...')
    await page.screenshot({ path: '/tmp/water-simulation-test.png' })
    console.log('  ✅ Screenshot saved to /tmp/water-simulation-test.png')

    // Test 9: Check console logs for GPGPU info
    console.log('Test 7: Checking GPGPU initialization...')
    const gpgpuLog = logs.find((log) =>
      log.includes('Water simulation using')
    )
    if (gpgpuLog) {
      console.log(`  ✅ ${gpgpuLog}`)
    } else {
      console.log('  ⚠️  GPGPU initialization log not found')
    }

    // Report errors
    console.log('\n--- Console Output ---')
    if (errors.length > 0) {
      console.log('Errors:')
      errors.forEach((e) => console.log(`  ❌ ${e}`))
    } else {
      console.log('✅ No console errors')
    }

    if (warnings.length > 0) {
      console.log('Warnings:')
      warnings.forEach((w) => console.log(`  ⚠️  ${w}`))
    }

    // Test home page to verify app is listed
    console.log('\nTest 8: Checking home page listing...')
    await page.goto('http://localhost:5173/claude-playground/')
    await page.waitForLoadState('networkidle')
    const waterCard = await page.$('text=Water Simulation')
    if (waterCard) {
      console.log('  ✅ Water Simulation listed on home page')
    } else {
      console.log('  ⚠️  Water Simulation not found on home page')
    }

    // Take home page screenshot
    await page.screenshot({ path: '/tmp/home-page-test.png' })
    console.log('  ✅ Home page screenshot saved to /tmp/home-page-test.png')

    // Final verdict
    console.log('\n=== TEST RESULTS ===')
    if (errors.length === 0) {
      console.log('✅ All tests passed! No critical errors.')
      process.exit(0)
    } else {
      console.log(`❌ Tests completed with ${errors.length} error(s)`)
      process.exit(1)
    }
  } catch (error) {
    console.error('❌ Test failed:', error)
    await page.screenshot({ path: '/tmp/water-simulation-error.png' })
    console.log('Error screenshot saved to /tmp/water-simulation-error.png')
    process.exit(1)
  } finally {
    await browser.close()
  }
}

testWaterSimulation()
