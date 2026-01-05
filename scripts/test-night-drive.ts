import { chromium } from 'playwright'

async function test() {
  const browser = await chromium.launch({ headless: true })
  const page = await browser.newPage({ viewport: { width: 430, height: 932 } })

  await page.route('https://fonts.googleapis.com/**', async route => {
    try { route.fulfill({ status: 200, body: await (await fetch(route.request().url())).text() }) }
    catch { route.fulfill({ status: 200, body: '' }) }
  })
  await page.route('https://fonts.gstatic.com/**', async route => {
    try { route.fulfill({ status: 200, body: Buffer.from(await (await fetch(route.request().url())).arrayBuffer()) }) }
    catch { route.fulfill({ status: 200, body: '' }) }
  })

  const errors: string[] = []
  page.on('console', msg => {
    const text = msg.text()
    if (msg.type() === 'error' &&
        !text.includes('net::ERR_') &&
        !text.includes('Failed to load resource') &&
        !text.includes('404') &&
        !text.includes('403') &&
        !text.includes('React does not recognize')) {
      errors.push(text)
    }
  })
  page.on('pageerror', err => errors.push(err.message))

  console.log('Testing Night Drive...')
  await page.goto('http://localhost:5173/claude-playground/music/night-drive/')
  await page.waitForLoadState('networkidle')
  await page.waitForTimeout(2000)

  if (errors.length > 0) {
    console.error('❌ Console errors:'); errors.forEach(e => console.error('  ', e))
    await browser.close(); process.exit(1)
  }

  const title = await page.textContent('h1')
  if (!title?.includes('Night Drive')) { console.error('❌ Title not found'); await browser.close(); process.exit(1) }
  console.log('  ✓ Title found:', title)

  await page.screenshot({ path: '/tmp/night-drive-test.png' })
  console.log('✅ Night Drive works!')

  await browser.close()
}

test().catch(e => { console.error('Test failed:', e); process.exit(1) })
