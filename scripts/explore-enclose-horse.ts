import { chromium } from 'playwright'

async function exploreGame() {
  const browser = await chromium.launch({
    headless: true,
    executablePath: '/root/.cache/ms-playwright/chromium-1194/chrome-linux/chrome'
  })
  const page = await browser.newPage({ viewport: { width: 500, height: 900 } })

  // Capture console logs
  page.on('console', msg => {
    if (msg.type() === 'error' || msg.type() === 'log') {
      console.log('CONSOLE:', msg.type(), msg.text())
    }
  })

  // Route ALL enclose.horse requests through Node fetch (for proxy support)
  await page.route('https://enclose.horse/**', async route => {
    try {
      const req = route.request()
      const url = req.url()
      console.log('Fetching:', url)

      const res = await fetch(url, {
        method: req.method(),
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
          'Accept': '*/*',
        },
        body: req.method() === 'POST' ? req.postData() : undefined,
      })

      const contentType = res.headers.get('content-type') || ''
      let body: Buffer | string

      if (contentType.includes('text') || contentType.includes('javascript') || contentType.includes('json') || contentType.includes('css') || contentType.includes('svg')) {
        body = await res.text()
      } else {
        body = Buffer.from(await res.arrayBuffer())
      }

      await route.fulfill({
        status: res.status,
        headers: Object.fromEntries(res.headers.entries()),
        body
      })
    } catch (e) {
      console.error('Route error for', route.request().url(), ':', e)
      await route.abort()
    }
  })

  // Route fonts.googleapis.com and fonts.gstatic.com
  await page.route('https://fonts.googleapis.com/**', async route => {
    try {
      const res = await fetch(route.request().url())
      await route.fulfill({ status: res.status, body: await res.text() })
    } catch (e) {
      await route.abort()
    }
  })

  await page.route('https://fonts.gstatic.com/**', async route => {
    try {
      const res = await fetch(route.request().url())
      await route.fulfill({ status: res.status, body: Buffer.from(await res.arrayBuffer()) })
    } catch (e) {
      await route.abort()
    }
  })

  console.log('Navigating to enclose.horse...')
  await page.goto('https://enclose.horse/', { waitUntil: 'networkidle', timeout: 60000 })

  // Take initial screenshot
  await page.screenshot({ path: '/tmp/enclose-horse-initial.png', fullPage: true })
  console.log('Initial screenshot saved to /tmp/enclose-horse-initial.png')

  // Get page content to understand structure
  const pageInfo = await page.evaluate(() => {
    return {
      title: document.title,
      bodyText: document.body.innerText,
    }
  })

  console.log('\n=== PAGE INFO ===')
  console.log('Title:', pageInfo.title)
  console.log('\nPage Text:\n', pageInfo.bodyText)

  // Try clicking help button to understand rules
  console.log('\n=== CLICKING HELP BUTTON ===')
  const helpButton = page.locator('.navbar-btn').first()
  await helpButton.click()
  await page.waitForTimeout(1000)

  await page.screenshot({ path: '/tmp/enclose-horse-help.png', fullPage: true })
  console.log('Help modal screenshot saved to /tmp/enclose-horse-help.png')

  const helpText = await page.evaluate(() => {
    const modal = document.querySelector('.modal') || document.querySelector('[class*="modal"]')
    return modal ? modal.innerText : 'No modal found'
  })
  console.log('\n=== HELP TEXT ===\n', helpText)

  // Close the modal
  await page.keyboard.press('Escape')
  await page.waitForTimeout(500)

  await browser.close()
  console.log('\n✅ Done exploring!')
}

exploreGame().catch(console.error)
