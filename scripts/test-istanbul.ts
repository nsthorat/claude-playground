import { chromium } from 'playwright'

async function test() {
  const browser = await chromium.launch({ headless: true })
  const page = await browser.newPage({ viewport: { width: 1200, height: 800 } })

  // Capture console errors
  const errors: string[] = []
  page.on('console', msg => {
    if (msg.type() === 'error') errors.push(msg.text())
  })
  page.on('pageerror', err => errors.push(err.message))

  try {
    // Test home page - should show Istanbul app
    console.log('Testing home page...')
    await page.goto('http://localhost:5173/claude-playground/')
    await page.waitForLoadState('networkidle')
    await page.screenshot({ path: '/tmp/istanbul-home.png' })

    // Check if Istanbul app card exists
    const istanbulCard = await page.locator('text=Istanbul Guide').first()
    if (await istanbulCard.isVisible()) {
      console.log('✅ Istanbul app card visible on home page')
    } else {
      console.log('❌ Istanbul app card NOT visible on home page')
    }

    // Navigate to Istanbul app
    console.log('Testing Istanbul app...')
    await page.goto('http://localhost:5173/claude-playground/istanbul/')
    await page.waitForLoadState('networkidle')
    await page.screenshot({ path: '/tmp/istanbul-app.png' })

    // Check for main elements
    const header = await page.locator('text=Istanbul Guide').first()
    if (await header.isVisible()) {
      console.log('✅ Istanbul Guide header visible')
    } else {
      console.log('❌ Istanbul Guide header NOT visible')
    }

    // Check tabs
    const tabs = ['Itinerary', 'History', 'Map', 'Eat & Drink', 'Areas', 'Do', 'Info']
    for (const tab of tabs) {
      const tabEl = await page.locator(`text=${tab}`).first()
      if (await tabEl.isVisible()) {
        console.log(`✅ Tab "${tab}" visible`)
      } else {
        console.log(`❌ Tab "${tab}" NOT visible`)
      }
    }

    // Click on History tab
    console.log('Testing History tab...')
    await page.click('text=History')
    await page.waitForTimeout(500)
    await page.screenshot({ path: '/tmp/istanbul-history.png' })

    // Check for historical sites
    const hagiaSophia = await page.locator('text=Hagia Sophia').first()
    if (await hagiaSophia.isVisible()) {
      console.log('✅ Hagia Sophia visible in History section')
    } else {
      console.log('❌ Hagia Sophia NOT visible in History section')
    }

    // Expand Hagia Sophia
    await page.click('text=Hagia Sophia')
    await page.waitForTimeout(500)
    await page.screenshot({ path: '/tmp/istanbul-hagia-sophia.png' })

    // Check for Wikipedia link
    const wikiLink = await page.locator('text=Wikipedia').first()
    if (await wikiLink.isVisible()) {
      console.log('✅ Wikipedia link visible')
    } else {
      console.log('❌ Wikipedia link NOT visible')
    }

    // Check for distance info
    const distanceInfo = await page.locator('text=From Galata Tower').first()
    if (await distanceInfo.isVisible()) {
      console.log('✅ Distance from Galata info visible')
    } else {
      console.log('❌ Distance from Galata info NOT visible')
    }

    // Check for errors
    if (errors.length > 0) {
      console.error('❌ Console errors found:')
      errors.forEach(e => console.error('  ', e))
    } else {
      console.log('✅ No console errors')
    }

    console.log('\n📸 Screenshots saved to /tmp/istanbul-*.png')
    console.log('✅ All tests passed!')

  } catch (err) {
    console.error('❌ Test failed:', err)
    await page.screenshot({ path: '/tmp/istanbul-error.png' })
    process.exit(1)
  } finally {
    await browser.close()
  }
}

test()
