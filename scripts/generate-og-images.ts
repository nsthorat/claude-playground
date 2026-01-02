import { chromium } from 'playwright'
import { spawn } from 'child_process'
import { resolve } from 'path'
import { existsSync, mkdirSync, readFileSync } from 'fs'

const BASE_URL = 'http://localhost:4173/claude-playground'

// Auto-discover apps from vite.config.js
function discoverApps(): { path: string; output: string }[] {
  const viteConfigPath = resolve(import.meta.dir, '..', 'vite.config.js')
  const viteConfig = readFileSync(viteConfigPath, 'utf-8')

  // Extract input entries from rollupOptions
  const inputMatch = viteConfig.match(/input:\s*\{([^}]+)\}/s)
  if (!inputMatch) {
    console.error('Could not find rollupOptions.input in vite.config.js')
    process.exit(1)
  }

  const inputBlock = inputMatch[1]
  const apps: { path: string; output: string }[] = []

  // Always add the home page first
  // Images go to public/ which Vite copies to build output
  apps.push({ path: '/', output: 'public/og-home.png' })

  // Parse each entry (e.g., sensors: resolve(__dirname, 'sensors/index.html'))
  // Use the actual path from resolve() to support nested directories like recipes/ribeye
  const entryRegex = /['"]?(\w[\w-]*)['"]?:\s*resolve\(__dirname,\s*['"]([^'"]+)['"]\)/g
  let match

  while ((match = entryRegex.exec(inputBlock)) !== null) {
    const [, name, filePath] = match
    if (name !== 'main') {
      // Extract directory path from file path (e.g., 'recipes/ribeye/index.html' -> 'recipes/ribeye')
      const dirPath = filePath.replace(/\/index\.html$/, '')
      apps.push({
        path: `/${dirPath}/`,
        output: `public/${dirPath}/og-image.png`,
      })
    }
  }

  console.log(`Discovered ${apps.length} pages to capture:`)
  apps.forEach((app) => console.log(`  - ${app.path}`))

  return apps
}

async function waitForServer(url: string, maxAttempts = 30): Promise<boolean> {
  for (let i = 0; i < maxAttempts; i++) {
    try {
      const response = await fetch(url)
      if (response.ok) return true
    } catch {
      // Server not ready yet
    }
    await new Promise((r) => setTimeout(r, 1000))
  }
  return false
}

async function generateImages() {
  const apps = discoverApps()

  console.log('\nStarting preview server (serving built files)...')

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

  console.log('Server ready! Launching browser...\n')

  const browser = await chromium.launch({ headless: true })

  // Network errors to ignore (expected in headless/sandboxed environments)
  const ignoredErrors = [
    'net::ERR_NAME_NOT_RESOLVED',
    'net::ERR_TUNNEL_CONNECTION_FAILED',
    'Failed to load resource',
  ]

  try {
    for (const app of apps) {
      const page = await browser.newPage({
        viewport: { width: 1200, height: 630 },
      })

      // Capture console errors
      const errors: string[] = []
      page.on('console', (msg) => {
        const text = msg.text()
        if (msg.type() === 'error' && !ignoredErrors.some((e) => text.includes(e))) {
          errors.push(text)
        }
      })
      page.on('pageerror', (err) => {
        if (!ignoredErrors.some((e) => err.message.includes(e))) {
          errors.push(err.message)
        }
      })

      const url = `${BASE_URL}${app.path}`
      console.log(`Capturing ${url}...`)

      await page.goto(url, { waitUntil: 'networkidle' })

      // Wait a bit for any animations to settle
      await page.waitForTimeout(1000)

      // Check for errors
      if (errors.length > 0) {
        console.warn(`  ⚠️  Console errors on ${app.path}:`)
        errors.forEach((e) => console.warn(`      ${e}`))
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

generateImages().catch((err) => {
  console.error('Error:', err)
  process.exit(1)
})
