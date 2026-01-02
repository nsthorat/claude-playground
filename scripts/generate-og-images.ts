import { chromium } from 'playwright'
import { spawn } from 'child_process'
import { resolve } from 'path'
import { existsSync, mkdirSync } from 'fs'

const BASE_URL = 'http://localhost:4173/claude-playground'

// Apps to generate OG images for
const apps = [
  { path: '/', output: 'docs/og-home.png' },
  { path: '/sensors/', output: 'docs/sensors/og-image.png' },
  { path: '/audio/', output: 'docs/audio/og-image.png' },
  { path: '/ribeye/', output: 'docs/ribeye/og-image.png' },
]

async function waitForServer(url: string, maxAttempts = 30): Promise<boolean> {
  for (let i = 0; i < maxAttempts; i++) {
    try {
      const response = await fetch(url)
      if (response.ok) return true
    } catch {
      // Server not ready yet
    }
    await new Promise(r => setTimeout(r, 1000))
  }
  return false
}

async function generateImages() {
  console.log('Starting preview server (serving built files)...')

  // Start the preview server (serves from docs/)
  const server = spawn('bun', ['run', 'preview'], {
    cwd: resolve(import.meta.dir, '..'),
    stdio: ['ignore', 'pipe', 'pipe'],
  })

  // Wait for server to be ready
  console.log('Waiting for server to be ready...')
  const serverReady = await waitForServer(`${BASE_URL}/`)

  if (!serverReady) {
    console.error('Server failed to start')
    server.kill()
    process.exit(1)
  }

  console.log('Server ready! Launching browser...')

  const browser = await chromium.launch({ headless: true })

  try {
    for (const app of apps) {
      const page = await browser.newPage({
        viewport: { width: 1200, height: 630 }
      })

      // Capture console errors
      const errors: string[] = []
      page.on('console', msg => {
        if (msg.type() === 'error') errors.push(msg.text())
      })
      page.on('pageerror', err => errors.push(err.message))

      const url = `${BASE_URL}${app.path}`
      console.log(`Capturing ${url}...`)

      await page.goto(url, { waitUntil: 'networkidle' })

      // Wait a bit for any animations to settle
      await page.waitForTimeout(500)

      // Check for errors
      if (errors.length > 0) {
        console.warn(`  ⚠️  Console errors on ${app.path}:`)
        errors.forEach(e => console.warn(`      ${e}`))
      }

      // Ensure output directory exists
      const outputPath = resolve(import.meta.dir, '..', app.output)
      const outputDir = resolve(outputPath, '..')
      if (!existsSync(outputDir)) {
        mkdirSync(outputDir, { recursive: true })
      }

      await page.screenshot({ path: outputPath })
      console.log(`  ✅ Saved to ${app.output}`)

      await page.close()
    }
  } finally {
    await browser.close()
    server.kill()
  }

  console.log('\nDone! OG images generated.')
}

generateImages().catch(err => {
  console.error('Error:', err)
  process.exit(1)
})
