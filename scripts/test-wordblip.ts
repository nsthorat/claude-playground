import { chromium } from 'playwright'

const SAMPLE_TEXT = `Videos autoplay silently on X which makes them perfect for streaming text. No more read more buttons or walls of text. Just paste your post, generate a video, and watch engagement soar. This is a test of the WordBlip speed reading video generator. It converts text into videos that display one word at a time using RSVP methodology.`

async function test() {
  console.log('Starting WordBlip comparison test...\n')

  const browser = await chromium.launch({
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-gpu',
      '--single-process',
    ]
  })

  try {
    const page = await browser.newPage({ viewport: { width: 1200, height: 900 } })

    // Route external requests (fonts) through Node fetch
    await page.route('https://fonts.googleapis.com/**', async route => {
      try {
        const res = await fetch(route.request().url())
        const body = await res.text()
        await route.fulfill({ status: res.status, body, headers: { 'content-type': res.headers.get('content-type') || 'text/css' } })
      } catch {
        await route.abort()
      }
    })

    await page.route('https://fonts.gstatic.com/**', async route => {
      try {
        const res = await fetch(route.request().url())
        const body = Buffer.from(await res.arrayBuffer())
        await route.fulfill({ status: res.status, body, headers: { 'content-type': res.headers.get('content-type') || 'font/woff2' } })
      } catch {
        await route.abort()
      }
    })

    const errors: string[] = []
    page.on('console', msg => {
      if (msg.type() === 'error') errors.push(msg.text())
    })
    page.on('pageerror', err => errors.push(err.message))

    console.log('Navigating to WordBlip clone...')
    await page.goto('http://localhost:5173/claude-playground/wordblip/', {
      waitUntil: 'load',
      timeout: 30000
    })

    // Wait for React to render
    await page.waitForSelector('h1', { timeout: 15000 })
    console.log('✅ Page loaded successfully')

    // Screenshot 1: Initial state
    await page.screenshot({ path: '/tmp/wordblip-clone-1-initial.png' })
    console.log('✅ Screenshot 1: Initial state saved')

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

    // Try to find play button and click it
    const playButton = await page.$('button:has-text("Play")')
    if (playButton) {
      console.log('✅ Play button found')
      await playButton.click()
      await page.waitForTimeout(2000)
      await page.screenshot({ path: '/tmp/wordblip-clone-3-playing.png' })
      console.log('✅ Screenshot 3: Animation playing')

      const pauseButton = await page.$('button:has-text("Pause")')
      if (pauseButton) await pauseButton.click()
    }

    // Check generate button
    const generateButton = await page.$('button:has-text("Generate")')
    if (generateButton) {
      const buttonText = await generateButton.textContent()
      console.log('Generate button:', buttonText)
    }

    // Change speed using slider
    const slider = await page.$('input[type="range"]')
    if (slider) {
      await slider.evaluate((el) => {
        const input = el as HTMLInputElement
        input.value = '400'
        input.dispatchEvent(new Event('input', { bubbles: true }))
        input.dispatchEvent(new Event('change', { bubbles: true }))
      })
      await page.waitForTimeout(500)

      const newBodyText = await page.textContent('body')
      const newWpm = newBodyText?.match(/(\d+)\s*WPM/)?.[1]
      const newSpeedLabel = newBodyText?.match(/(Relaxed|Normal|Fast|Speed Reader)/)?.[1]
      console.log('WPM after change:', newWpm)
      console.log('Speed label after change:', newSpeedLabel)
    }

    await page.screenshot({ path: '/tmp/wordblip-clone-4-final.png' })
    console.log('✅ Screenshot 4: Final state saved')

    // Report errors
    if (errors.length > 0) {
      console.log('\n❌ Console errors:')
      errors.forEach(e => console.log('  ', e))
    } else {
      console.log('\n✅ No console errors!')
    }

    // Feature summary
    console.log('\n=== Feature Summary ===')
    console.log('Title contains WordBlip:', title?.includes('WordBlip') ? '✅' : '❌')
    console.log('Textarea:', await page.$('textarea') ? '✅' : '❌')
    console.log('Canvas preview:', hasCanvas ? '✅' : '❌')
    console.log('Speed slider:', hasSlider ? '✅' : '❌')
    console.log('Play button:', playButton ? '✅' : '❌')
    console.log('Generate button:', generateButton ? '✅' : '❌')
    console.log('Word count display:', wordCountMatch ? '✅' : '❌')
    console.log('WPM display:', wpmMatch ? '✅' : '❌')
    console.log('Speed preset labels:', speedLabel ? '✅' : '❌')

    // Compare with original
    console.log('\n\n=== Comparing with Original WordBlip.com ===')

    const originalPage = await browser.newPage({ viewport: { width: 1200, height: 900 } })

    // Route all external requests through Node fetch
    await originalPage.route('https://**/*', async route => {
      try {
        const req = route.request()
        const res = await fetch(req.url(), {
          method: req.method(),
          headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' },
          body: req.method() === 'POST' ? req.postData() : undefined,
        })
        const contentType = res.headers.get('content-type') || ''
        if (contentType.includes('text') || contentType.includes('json') || contentType.includes('javascript')) {
          await route.fulfill({ status: res.status, body: await res.text(), headers: { 'content-type': contentType } })
        } else {
          await route.fulfill({ status: res.status, body: Buffer.from(await res.arrayBuffer()), headers: { 'content-type': contentType } })
        }
      } catch (e) {
        await route.abort()
      }
    })

    await originalPage.goto('https://wordblip.com/', { waitUntil: 'domcontentloaded', timeout: 30000 })
    await originalPage.waitForTimeout(3000)
    await originalPage.screenshot({ path: '/tmp/wordblip-original-1-initial.png' })
    console.log('✅ Original screenshot 1: Initial state')

    const originalTextarea = await originalPage.$('textarea')
    if (originalTextarea) {
      await originalTextarea.fill(SAMPLE_TEXT)
      await originalPage.waitForTimeout(1000)
      await originalPage.screenshot({ path: '/tmp/wordblip-original-2-text.png' })
      console.log('✅ Original screenshot 2: Text entered')
    }

    const originalBody = await originalPage.textContent('body')
    const originalWordCount = originalBody?.match(/(\d+)\s*words/)?.[1]
    const originalWpm = originalBody?.match(/(\d+)\s*WPM/)?.[1]
    const originalSpeedLabel = originalBody?.match(/(Relaxed|Normal|Fast|Speed Reader)/)?.[1]

    console.log('\n=== Side-by-Side Comparison ===')
    console.log('Feature              | Clone      | Original')
    console.log('---------------------|------------|----------')
    console.log(`Word Count           | ${wordCountMatch?.[1]?.padEnd(10) || 'N/A       '} | ${originalWordCount || 'N/A'}`)
    console.log(`Default WPM          | ${wpmMatch?.[1]?.padEnd(10) || 'N/A       '} | ${originalWpm || 'N/A'}`)
    console.log(`Speed Label          | ${speedLabel?.padEnd(10) || 'N/A       '} | ${originalSpeedLabel || 'N/A'}`)
    console.log(`Has Textarea         | ✅         | ${originalTextarea ? '✅' : '❌'}`)
    console.log(`Has Canvas/Preview   | ${hasCanvas ? '✅' : '❌'}         | ✅`)

    await originalPage.close()

  } finally {
    await browser.close()
  }

  console.log('\n\n=== All Screenshots Saved ===')
  console.log('Clone:    /tmp/wordblip-clone-*.png')
  console.log('Original: /tmp/wordblip-original-*.png')
}

test().catch(console.error)
