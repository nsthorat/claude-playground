import { chromium } from 'playwright'

const BASE_URL = 'http://localhost:5174/claude-playground'

async function test() {
  console.log('Starting Sensory Experiences rename verification test...\n')

  const browser = await chromium.launch({ headless: true })
  const page = await browser.newPage({ viewport: { width: 1200, height: 800 } })

  const errors: string[] = []
  page.on('console', msg => {
    if (msg.type() === 'error') {
      const text = msg.text()
      // Filter out font/network errors
      if (!text.includes('net::ERR_') && !text.includes('Failed to load resource')) {
        errors.push(text)
      }
    }
  })
  page.on('pageerror', err => errors.push(err.message))

  const pages = [
    { name: 'Sensory Experiences Listing', path: '/sensory-experiences/' },
    { name: 'Midnight Piano', path: '/sensory-experiences/midnight-piano/' },
    { name: 'Tape Loops', path: '/sensory-experiences/tape-loops/' },
    { name: 'Night Drive', path: '/sensory-experiences/night-drive/' },
    { name: 'Sunday Morning', path: '/sensory-experiences/sunday-morning/' },
    { name: 'Phase Music', path: '/sensory-experiences/phase-music/' },
  ]

  for (const { name, path } of pages) {
    console.log(`Testing: ${name}`)
    try {
      await page.goto(`${BASE_URL}${path}`, { timeout: 30000 })
      await page.waitForLoadState('networkidle', { timeout: 10000 })

      // Take screenshot
      const screenshotPath = `/tmp/sensory-${name.toLowerCase().replace(/\s+/g, '-')}.png`
      await page.screenshot({ path: screenshotPath })
      console.log(`  ✅ Loaded successfully - screenshot: ${screenshotPath}`)

      // Check for "Back to Experiences" link
      if (name !== 'Sensory Experiences Listing') {
        const backLink = await page.locator('text=Back to Experiences').count()
        if (backLink > 0) {
          console.log('  ✅ Back link correctly updated to "Back to Experiences"')
        } else {
          errors.push(`${name}: Missing "Back to Experiences" link`)
          console.log('  ❌ Back link not found!')
        }
      }
    } catch (err) {
      errors.push(`${name}: Failed to load - ${err}`)
      console.log(`  ❌ Error: ${err}`)
    }
  }

  console.log('\n--- Results ---')
  if (errors.length > 0) {
    console.error('❌ Errors found:')
    errors.forEach(e => console.error('  ', e))
    process.exit(1)
  } else {
    console.log('✅ All pages loaded successfully with correct naming!')
  }

  await browser.close()
}

test().catch(err => {
  console.error('Test failed:', err)
  process.exit(1)
})
