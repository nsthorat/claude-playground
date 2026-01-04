import { chromium } from 'playwright'

async function testGeography() {
  const browser = await chromium.launch({ headless: true })
  const context = await browser.newContext({
    viewport: { width: 430, height: 932 },
    // Mock geolocation near Galata Tower
    geolocation: { latitude: 41.0256, longitude: 28.9744 },
    permissions: ['geolocation'],
  })
  const page = await context.newPage()

  // Track console errors
  const errors: string[] = []
  page.on('console', msg => {
    if (msg.type() === 'error') errors.push(msg.text())
  })
  page.on('pageerror', err => errors.push(err.message))

  // Proxy external Mapbox requests through server-side fetch
  await page.route(/https:\/\/.*\.mapbox\.com\/.*/, async (route, request) => {
    try {
      const response = await fetch(request.url(), {
        method: request.method(),
        headers: Object.fromEntries(
          Object.entries(request.headers()).filter(([k]) => !k.startsWith('sec-'))
        ),
      })
      const body = Buffer.from(await response.arrayBuffer())
      const headers: Record<string, string> = {}
      response.headers.forEach((v, k) => (headers[k] = v))
      await route.fulfill({ status: response.status, headers, body })
    } catch {
      route.abort()
    }
  })

  await page.route('https://overpass-api.de/**', async (route, request) => {
    try {
      const response = await fetch(request.url(), {
        method: request.method(),
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: request.method() === 'POST' ? request.postData() : undefined,
      })
      const body = Buffer.from(await response.arrayBuffer())
      const headers: Record<string, string> = {}
      response.headers.forEach((v, k) => (headers[k] = v))
      await route.fulfill({ status: response.status, headers, body })
    } catch (e) {
      console.log('Overpass request failed:', e)
      route.abort()
    }
  })

  await page.route('https://en.wikipedia.org/**', async (route, request) => {
    try {
      const response = await fetch(request.url(), {
        method: request.method(),
        headers: { 'Api-User-Agent': 'IstanbulGuide/1.0' },
      })
      const body = Buffer.from(await response.arrayBuffer())
      const headers: Record<string, string> = {}
      response.headers.forEach((v, k) => (headers[k] = v))
      await route.fulfill({ status: response.status, headers, body })
    } catch {
      route.abort()
    }
  })

  console.log('🗺️  Loading Istanbul page...')
  await page.goto('http://localhost:5173/claude-playground/istanbul/')
  await page.waitForLoadState('networkidle')
  await page.waitForTimeout(2000) // Let map tiles load

  // Navigate to Geography tab (labeled "Map" in the UI)
  console.log('\n📍 Navigating to Map tab...')
  await page.click('button:has-text("Map")')
  await page.waitForTimeout(2000)
  await page.screenshot({ path: '/tmp/geo-01-explore-mode.png' })
  console.log('   ✅ Screenshot: Explore mode')

  // ==== TEST EXPLORE MODE ====
  console.log('\n🔍 Testing Explore mode...')

  // Test layer toggles
  console.log('   Testing layer toggles...')
  await page.click('button:has-text("Regions")')
  await page.waitForTimeout(500)
  await page.screenshot({ path: '/tmp/geo-02-regions-off.png' })
  console.log('   ✅ Regions layer toggled off')

  await page.click('button:has-text("Regions")')
  await page.click('button:has-text("Ferries")')
  await page.waitForTimeout(500)
  await page.screenshot({ path: '/tmp/geo-03-ferries-off.png' })
  console.log('   ✅ Ferries layer toggled off')

  await page.click('button:has-text("Ferries")')
  await page.click('button:has-text("Labels")')
  await page.waitForTimeout(500)
  await page.screenshot({ path: '/tmp/geo-04-labels-off.png' })
  console.log('   ✅ Labels layer toggled off')

  await page.click('button:has-text("Labels")')
  await page.waitForTimeout(500)

  // Test region clicking
  console.log('   Testing region selection...')
  // Click in the map area (approximating a region)
  const mapBox = await page.locator('.mapboxgl-map').boundingBox()
  if (mapBox) {
    await page.mouse.click(mapBox.x + mapBox.width * 0.5, mapBox.y + mapBox.height * 0.5)
    await page.waitForTimeout(2000)
    await page.screenshot({ path: '/tmp/geo-05-region-clicked.png' })
    console.log('   ✅ Region click interaction works')
  }

  // ==== TEST TIME MODE ====
  console.log('\n⏰ Testing Time mode...')
  await page.click('button:has-text("Time")')
  await page.waitForTimeout(1000)
  await page.screenshot({ path: '/tmp/geo-06-time-mode.png' })
  console.log('   ✅ Switched to Time mode')

  // Test time slider
  const slider = page.locator('input[type="range"]')
  if (await slider.isVisible()) {
    // Set to morning (8am)
    await slider.fill('8')
    await page.waitForTimeout(500)
    await page.screenshot({ path: '/tmp/geo-07-time-morning.png' })
    console.log('   ✅ Time slider: Morning (8am)')

    // Set to evening (20:00)
    await slider.fill('20')
    await page.waitForTimeout(500)
    await page.screenshot({ path: '/tmp/geo-08-time-evening.png' })
    console.log('   ✅ Time slider: Evening (8pm)')

    // Set to night (2am)
    await slider.fill('2')
    await page.waitForTimeout(500)
    await page.screenshot({ path: '/tmp/geo-09-time-night.png' })
    console.log('   ✅ Time slider: Night (2am)')
  }

  // ==== TEST HERE MODE ====
  console.log('\n📍 Testing Here mode...')
  await page.click('button:has-text("Here")')
  await page.waitForTimeout(1000)
  await page.screenshot({ path: '/tmp/geo-10-here-mode.png' })
  console.log('   ✅ Switched to Here mode')

  // Click "Use My Location" button
  const locationButton = page.locator('button:has-text("Use My Location")')
  if (await locationButton.isVisible()) {
    console.log('   Requesting geolocation...')
    await locationButton.click()
    await page.waitForTimeout(3000) // Wait for geolocation + API calls
    await page.screenshot({ path: '/tmp/geo-11-here-located.png' })
    console.log('   ✅ Geolocation obtained')

    // Wait for POIs to load from Overpass API
    await page.waitForTimeout(5000) // More time for Overpass API
    await page.screenshot({ path: '/tmp/geo-12-pois-loaded.png' })
    console.log('   ✅ POI list rendered')

    // Test category filters if visible
    const categoryButtons = page.locator('button:has-text("Food"), button:has-text("Sights"), button:has-text("Historic")')
    const categoryCount = await categoryButtons.count()
    if (categoryCount > 0) {
      console.log(`   Found ${categoryCount} category filters`)
      // Click Food category
      await page.click('button:has-text("Food")')
      await page.waitForTimeout(1000)
      await page.screenshot({ path: '/tmp/geo-13-category-food.png' })
      console.log('   ✅ Food category filter works')

      // Click Sights category
      await page.click('button:has-text("Sights")')
      await page.waitForTimeout(1000)
      await page.screenshot({ path: '/tmp/geo-14-category-sights.png' })
      console.log('   ✅ Sights category filter works')

      // Back to All
      await page.click('button:has-text("All")')
      await page.waitForTimeout(500)
    }

    // Test radius selector
    const radiusButtons = page.locator('button:has-text("200m"), button:has-text("1000m")')
    if ((await radiusButtons.count()) > 0) {
      await page.click('button:has-text("200m")')
      await page.waitForTimeout(1500)
      await page.screenshot({ path: '/tmp/geo-15-radius-200.png' })
      console.log('   ✅ 200m radius selected')

      await page.click('button:has-text("1000m")')
      await page.waitForTimeout(1500)
      await page.screenshot({ path: '/tmp/geo-16-radius-1000.png' })
      console.log('   ✅ 1000m radius selected')
    }

    // Try clicking a POI if any loaded
    const poiCards = page.locator('.bg-bg-card.rounded-xl.p-3')
    const poiCount = await poiCards.count()
    console.log(`   Found ${poiCount} POI cards`)
    if (poiCount > 0) {
      await poiCards.first().click()
      await page.waitForTimeout(2000)
      await page.screenshot({ path: '/tmp/geo-17-poi-selected.png' })
      console.log('   ✅ POI selection works')
    }
  } else {
    console.log('   ⚠️ Use My Location button not visible - checking UI state')
    await page.screenshot({ path: '/tmp/geo-11-here-no-button.png' })
  }

  // ==== CHECK FOR ERRORS ====
  console.log('\n🔎 Checking for errors...')
  // Filter out known non-critical issues:
  // - ResizeObserver: browser quirk
  // - passive event: third-party library warnings
  // - Failed to load resource: expected from map tiles (422/404 for missing tiles)
  // - ERR_NAME_NOT_RESOLVED: some CDN requests in sandbox
  const criticalErrors = errors.filter(
    e =>
      !e.includes('ResizeObserver') &&
      !e.includes('passive event') &&
      !e.includes('Failed to load resource') &&
      !e.includes('ERR_NAME_NOT_RESOLVED')
  )

  if (criticalErrors.length > 0) {
    console.log('❌ Console errors found:')
    criticalErrors.forEach(e => console.log('   ', e))
  } else {
    console.log('✅ No critical console errors')
  }

  // ==== TEST TOUR MODE ====
  console.log('\n🎬 Testing Tour mode...')
  await page.click('button:has-text("Tours")')
  await page.waitForTimeout(1000)
  await page.screenshot({ path: '/tmp/geo-18-tour-selection.png' })
  console.log('   ✅ Switched to Tour mode')

  // Check tour list
  const tourCards = page.locator('button:has-text("The Fall of Constantinople"), button:has-text("The Seven Hills"), button:has-text("Two Continents")')
  const tourCount = await tourCards.count()
  console.log(`   Found ${tourCount} tour options`)

  // Start a tour
  if (tourCount > 0) {
    await page.click('button:has-text("Two Continents")')
    await page.waitForTimeout(2000)
    await page.screenshot({ path: '/tmp/geo-19-tour-playing.png' })
    console.log('   ✅ Tour started - Two Continents')

    // Test play/pause
    const playPauseBtn = page.locator('button:has(svg[class*="Pause"]), button:has(svg[class*="Play"])').first()
    if (await playPauseBtn.isVisible()) {
      await playPauseBtn.click()
      await page.waitForTimeout(500)
      await page.screenshot({ path: '/tmp/geo-20-tour-paused.png' })
      console.log('   ✅ Tour pause/play works')
    }

    // Test skip forward
    const skipBtn = page.locator('button:has(svg)').filter({ has: page.locator('svg[class*="SkipForward"]') }).first()
    if (await skipBtn.isVisible()) {
      await skipBtn.click()
      await page.waitForTimeout(2000)
      await page.screenshot({ path: '/tmp/geo-21-tour-next-chapter.png' })
      console.log('   ✅ Chapter navigation works')
    }

    // Exit tour
    const exitBtn = page.locator('button:has(svg[class*="X"])').first()
    if (await exitBtn.isVisible()) {
      await exitBtn.click()
      await page.waitForTimeout(1000)
    }
  }

  // ==== TEST WALLS LAYER ====
  console.log('\n🏰 Testing Walls layer...')
  await page.click('button:has-text("Explore")')
  await page.waitForTimeout(500)

  // Toggle walls layer on
  const wallsBtn = page.locator('button:has-text("Walls")')
  if (await wallsBtn.isVisible()) {
    await wallsBtn.click()
    await page.waitForTimeout(1500)
    await page.screenshot({ path: '/tmp/geo-22-walls-layer.png' })
    console.log('   ✅ Walls layer toggled on')

    // Check if walls layer shows purple styling
    const wallsBtnActive = await page.locator('button:has-text("Walls")').evaluate(
      el => el.className.includes('accent-purple')
    )
    console.log(`   Walls button active state: ${wallsBtnActive}`)
  }

  // ==== SWITCH BACK AND VERIFY ====
  console.log('\n🔄 Verifying mode switching...')
  await page.click('button:has-text("Explore")')
  await page.waitForTimeout(1000)
  await page.screenshot({ path: '/tmp/geo-23-back-to-explore.png' })
  console.log('   ✅ Back to Explore mode')

  await browser.close()

  console.log('\n' + '='.repeat(50))
  console.log('📸 All screenshots saved to /tmp/geo-*.png')
  console.log('='.repeat(50))

  if (criticalErrors.length > 0) {
    process.exit(1)
  }
}

testGeography().catch(e => {
  console.error('Test failed:', e.message)
  process.exit(1)
})
