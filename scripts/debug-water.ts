import { chromium } from 'playwright'

async function debug() {
  const browser = await chromium.launch({ headless: true })
  const page = await browser.newPage({ viewport: { width: 1200, height: 800 } })

  // Capture ALL console output
  page.on('console', (msg) => {
    console.log(`[${msg.type()}] ${msg.text()}`)
  })

  page.on('pageerror', (err) => {
    console.error('[PAGE ERROR]', err.message)
  })

  console.log('Navigating to water page...')
  await page.goto('http://localhost:5173/claude-playground/water/', {
    waitUntil: 'domcontentloaded',
  })

  // Wait a bit for JS to execute
  await page.waitForTimeout(5000)

  // Get page HTML
  const html = await page.content()
  console.log('\n--- Page HTML (first 2000 chars) ---')
  console.log(html.slice(0, 2000))

  // Take screenshot
  await page.screenshot({ path: '/tmp/debug-water.png' })
  console.log('\nScreenshot saved to /tmp/debug-water.png')

  await browser.close()
}

debug()
