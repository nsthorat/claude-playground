import { chromium } from 'playwright'

const SAMPLE_TEXT = `Videos autoplay silently on X which makes them perfect for streaming text. No more read more buttons or walls of text. Just paste your post, generate a video, and watch engagement soar. This is a test of the WordBlip speed reading video generator. It converts text into videos that display one word at a time using RSVP methodology.`

async function test() {
  console.log('Starting WordBlip test...\n')

  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
  })

  try {
    const page = await browser.newPage({ viewport: { width: 1200, height: 900 } })

    const errors: string[] = []
    page.on('console', msg => {
      if (msg.type() === 'error') errors.push(msg.text())
    })
    page.on('pageerror', err => errors.push(err.message))

    console.log('Navigating to WordBlip...')
    // Use built version served on port 8080
    await page.goto('http://localhost:8080/wordblip/', {
      waitUntil: 'domcontentloaded',
      timeout: 30000
    })

    // Wait for React to render
    await page.waitForSelector('h1', { timeout: 10000 })
    await page.waitForTimeout(1000)

    // Screenshot 1: Initial state
    await page.screenshot({ path: '/tmp/wordblip-clone-1-initial.png' })
    console.log('✅ Screenshot 1: Initial state')

    // Check title
    const title = await page.$eval('h1', el => el.textContent)
    console.log('Title:', title)

    // Enter text
    await page.fill('textarea', SAMPLE_TEXT)
    await page.waitForTimeout(500)
    await page.screenshot({ path: '/tmp/wordblip-clone-2-text.png' })
    console.log('✅ Screenshot 2: Text entered')

    // Get word count
    const bodyText = await page.textContent('body')
    const wordCountMatch = bodyText?.match(/(\d+)\s*words/)
    console.log('Word count:', wordCountMatch?.[1])

    // Check for canvas
    const hasCanvas = await page.$('canvas') !== null
    console.log('Has canvas:', hasCanvas)

    // Check for speed controls
    const hasSlider = await page.$('input[type="range"]') !== null
    console.log('Has slider:', hasSlider)

    // Check speed display
    const wpmMatch = bodyText?.match(/(\d+)\s*WPM/)
    console.log('Current WPM:', wpmMatch?.[1])

    // Check speed label
    const speedLabel = bodyText?.match(/(Relaxed|Normal|Fast|Speed Reader)/)?.[1]
    console.log('Speed label:', speedLabel)

    // Try to find play button
    const playButton = await page.$('button:has-text("Play")')
    if (playButton) {
      console.log('✅ Play button found')
      await playButton.click()
      await page.waitForTimeout(1500)
      await page.screenshot({ path: '/tmp/wordblip-clone-3-playing.png' })
      console.log('✅ Screenshot 3: Animation playing')
    }

    // Check generate button
    const generateButton = await page.$('button:has-text("Generate")')
    if (generateButton) {
      const buttonText = await generateButton.textContent()
      console.log('Generate button:', buttonText)
    }

    // Change speed
    const slider = await page.$('input[type="range"]')
    if (slider) {
      await slider.evaluate(el => (el as HTMLInputElement).value = '400')
      await slider.dispatchEvent('input')
      await page.waitForTimeout(300)

      const newWpm = (await page.textContent('body'))?.match(/(\d+)\s*WPM/)?.[1]
      console.log('WPM after change:', newWpm)
    }

    await page.screenshot({ path: '/tmp/wordblip-clone-4-final.png' })
    console.log('✅ Screenshot 4: Final state')

    // Report errors
    if (errors.length > 0) {
      console.log('\n❌ Console errors:')
      errors.forEach(e => console.log('  ', e))
    } else {
      console.log('\n✅ No console errors!')
    }

    // Summary
    console.log('\n=== Feature Summary ===')
    console.log('Title:', title?.includes('WordBlip') ? '✅' : '❌')
    console.log('Textarea:', await page.$('textarea') ? '✅' : '❌')
    console.log('Canvas preview:', hasCanvas ? '✅' : '❌')
    console.log('Speed slider:', hasSlider ? '✅' : '❌')
    console.log('Play button:', playButton ? '✅' : '❌')
    console.log('Generate button:', generateButton ? '✅' : '❌')
    console.log('Word count display:', wordCountMatch ? '✅' : '❌')
    console.log('WPM display:', wpmMatch ? '✅' : '❌')
    console.log('Speed preset labels:', speedLabel ? '✅' : '❌')

  } finally {
    await browser.close()
  }

  console.log('\n=== Screenshots saved to /tmp/wordblip-clone-*.png ===')
}

test().catch(console.error)
