# Nikhil's Apps

A collection of mini apps and experiments, built with React, Vite, and Tailwind CSS.

## Project Structure

This is a Multi-Page App (MPA), where each mini-app has its own HTML entry point for proper social sharing previews. Apps are **auto-discovered** from `app.config.tsx` files.

```
/
├── index.html                  # Home page entry
├── apps/                       # All mini-app HTML entry points
│   ├── sensors/index.html
│   ├── audio/index.html
│   ├── fluid/index.html
│   ├── istanbul/index.html
│   ├── water/index.html
│   └── recipes/
│       ├── index.html          # Recipes listing
│       └── ribeye/index.html   # Ribeye recipe (nested)
├── src/
│   ├── apps/                   # React entry points (main.tsx files)
│   │   ├── sensors/main.tsx
│   │   ├── audio/main.tsx
│   │   └── recipes/
│   │       ├── main.tsx
│   │       └── ribeye/main.tsx
│   ├── components/ui/          # Reusable components
│   ├── lib/utils.ts            # Utility functions
│   ├── pages/                  # Page components
│   │   ├── Home.tsx
│   │   ├── sensors/
│   │   │   ├── index.tsx
│   │   │   └── app.config.tsx
│   │   ├── audio/
│   │   ├── fluid/
│   │   ├── istanbul/
│   │   ├── water/
│   │   └── recipes/
│   │       ├── index.tsx
│   │       ├── app.config.tsx
│   │       └── ribeye/
│   │           ├── index.tsx
│   │           └── recipe.config.tsx
│   ├── index.css
│   └── main.tsx
├── public/
│   ├── og-home.png
│   └── apps/                   # OG images for each app
│       ├── sensors/og-image.png
│       ├── audio/og-image.png
│       └── recipes/
│           ├── og-image.png
│           └── ribeye/og-image.png
├── plans/                      # Implementation plans (historical)
└── vite.config.js
```

## How to Create a New Mini-App

### 1. Create the HTML entry point

Create a new folder in `apps/` with an `index.html`:

```html
<!-- apps/my-app/index.html -->
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/claude-playground/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

    <!-- Unique meta tags for this app -->
    <title>My App | Nikhil's Apps</title>
    <meta name="description" content="Description of my app." />
    <meta property="og:title" content="My App" />
    <meta property="og:description" content="Description of my app." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://nikubaba.com/claude-playground/apps/my-app/" />
    <meta property="og:image" content="https://nikubaba.com/claude-playground/apps/my-app/og-image.png" />
    <meta name="twitter:card" content="summary_large_image" />

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=Space+Grotesk:wght@300;400;600;700&display=swap" rel="stylesheet">
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/apps/my-app/main.tsx"></script>
  </body>
</html>
```

### 2. Create the React entry point

Create `src/apps/my-app/main.tsx`:

```tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../../index.css'
import MyApp from '../../pages/my-app'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MyApp />
  </StrictMode>,
)
```

### 3. Create the page component

Create `src/pages/my-app/index.tsx`:

```tsx
import { ArrowLeft } from 'lucide-react'

const BASE_PATH = '/claude-playground'

export default function MyApp() {
  return (
    <div className="p-4 max-w-xl mx-auto">
      <a href={`${BASE_PATH}/`} className="inline-flex items-center gap-2 text-text-secondary hover:text-accent-cyan mb-4">
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </a>

      <h1 className="text-3xl font-bold bg-gradient-to-r from-accent-cyan to-accent-purple bg-clip-text text-transparent">
        My App Title
      </h1>

      {/* Your app content here */}
    </div>
  )
}
```

### 4. Create the app config (auto-discovery)

Create `src/pages/my-app/app.config.tsx` - this is how the home page discovers your app:

```tsx
import { SomeIcon } from 'lucide-react'

export const appConfig = {
  id: 'my-app',
  title: 'My App',
  description: 'Description of what this app does.',
  icon: <SomeIcon className="w-5 h-5" />,
  path: '/apps/my-app/',
  status: 'available' as const,  // or 'coming-soon'
  gradient: 'from-accent-cyan/20 to-accent-purple/20',
  order: 10,  // Lower numbers appear first
}
```

The home page uses `import.meta.glob` to automatically discover all `app.config.tsx` files and display them in a 2-column grid, sorted by `order`. Each card automatically displays the app's OG preview image from `{path}og-image.png`.

### 5. Add to Vite config

Update `vite.config.js` to include the new entry:

```js
rollupOptions: {
  input: {
    main: resolve(__dirname, 'index.html'),
    sensors: resolve(__dirname, 'apps/sensors/index.html'),
    'my-app': resolve(__dirname, 'apps/my-app/index.html'),  // Add this
  },
},
```

## How to Add a New Recipe

The Recipes mini-app (`/apps/recipes/`) uses auto-discovery to find individual recipes. Each recipe is a nested page with its own `recipe.config.tsx`.

### 1. Create HTML entry point

Create `apps/recipes/my-recipe/index.html`:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/claude-playground/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <title>My Recipe | Recipes | Nikhil's Apps</title>
    <meta name="description" content="Description of recipe." />
    <meta property="og:title" content="My Recipe" />
    <meta property="og:image" content="https://nikubaba.com/claude-playground/apps/recipes/my-recipe/og-image.png" />
    <!-- ... other meta tags -->
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/apps/recipes/my-recipe/main.tsx"></script>
  </body>
</html>
```

### 2. Create React entry point

Create `src/apps/recipes/my-recipe/main.tsx`:

```tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../../../index.css'
import MyRecipe from '../../../pages/recipes/my-recipe'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MyRecipe />
  </StrictMode>,
)
```

### 3. Create the recipe component

Create `src/pages/recipes/my-recipe/index.tsx` with your recipe content. Use `Back to Recipes` link pointing to `${BASE_PATH}/apps/recipes/`.

### 4. Create the recipe config (auto-discovery)

Create `src/pages/recipes/my-recipe/recipe.config.tsx`:

```tsx
import { SomeIcon } from 'lucide-react'

export const recipeConfig = {
  id: 'my-recipe',
  title: 'My Recipe',
  description: 'Short description of the recipe.',
  icon: <SomeIcon className="w-5 h-5" />,
  path: '/apps/recipes/my-recipe/',
  time: '~30 min',  // Cooking time shown on card
  gradient: 'from-orange-500/20 to-yellow-500/20',
  order: 2,
}
```

The Recipes listing page uses `import.meta.glob('./*/recipe.config.tsx')` to discover all recipes.

### 5. Add to Vite config

```js
rollupOptions: {
  input: {
    // ... existing entries
    'recipes-my-recipe': resolve(__dirname, 'apps/recipes/my-recipe/index.html'),
  },
},
```

### 6. Generate OG image

```bash
bun run build && bun run generate-og
git add public/apps/recipes/my-recipe/og-image.png
```

## Theme Colors

Custom colors defined in `src/index.css`:

| Variable | Color | Usage |
|----------|-------|-------|
| `--color-bg-primary` | `#0a0a0f` | Page background |
| `--color-bg-card` | `#1a1a24` | Card backgrounds |
| `--color-text-primary` | `#f0f0f5` | Main text |
| `--color-text-secondary` | `#8888a0` | Secondary text |
| `--color-text-muted` | `#555566` | Muted text |
| `--color-accent-cyan` | `#00d4ff` | Primary accent |
| `--color-accent-purple` | `#aa66ff` | Secondary accent |
| `--color-accent-green` | `#00ff88` | Success states |
| `--color-accent-red` | `#ff4466` | Error states |

Use with Tailwind: `bg-bg-card`, `text-accent-cyan`, etc.

## Fonts

- **Space Grotesk** - Display font for headings
- **JetBrains Mono** - Monospace for code/data
- **Playfair Display** - Serif for special styling (ribeye)
- **Libre Baskerville** - Serif for body text (ribeye)

## Components

### MagicCard

Card with gradient spotlight effect on hover:

```tsx
import { MagicCard } from '@/components/ui/magic-card'

<MagicCard gradientColor="#00d4ff">
  <div className="p-6">Card content</div>
</MagicCard>
```

### cn utility

Merge Tailwind classes:

```tsx
import { cn } from '@/lib/utils'

<div className={cn('base-class', isActive && 'active-class')} />
```

## Commands

```bash
bun run dev       # Start dev server
bun run build     # Build to docs/
bun run publish   # Alias for build
bun run preview   # Preview production build
```

## Deployment

Deployment is fully automated via GitHub Actions. When you push to `main`, the workflow builds and deploys to GitHub Pages.

**PR Previews:** Cloudflare Pages is connected for automatic PR preview deployments. See [cloudflare-previews.md](./cloudflare-previews.md) for setup instructions.

**No need to commit build artifacts** - the `docs/` folder is gitignored and built in CI.

URL: https://nikubaba.com/claude-playground/

## Testing Requirements (MANDATORY)

**NEVER skip manual testing with Playwright.** When building or modifying apps, you MUST:

1. **Create a one-off Playwright test script** to verify your work
2. **Check for console errors** - the app must load without errors
3. **Take screenshots** to visually verify the UI renders correctly

Example test script (`scripts/test-my-app.ts`):

```ts
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

  // Navigate and wait for load
  await page.goto('http://localhost:5173/claude-playground/my-app/')
  await page.waitForLoadState('networkidle')

  // Check for errors
  if (errors.length > 0) {
    console.error('❌ Console errors found:')
    errors.forEach(e => console.error('  ', e))
    process.exit(1)
  }

  // Screenshot for visual verification
  await page.screenshot({ path: '/tmp/my-app-test.png' })
  console.log('✅ No errors, screenshot saved to /tmp/my-app-test.png')

  await browser.close()
}

test()
```

Run with: `bun scripts/test-my-app.ts` (dev server must be running)

### Testing Apps with External Resources (Mapbox, APIs, etc.)

In some environments (like Claude Code's remote sandbox), Playwright's Chromium browser cannot directly access external URLs due to proxy/DNS configuration. The solution is to **intercept requests and proxy them through Node's fetch**, which correctly uses the system proxy.

**IMPORTANT:** Target specific URL patterns instead of `**/*` to avoid timeout issues:

```ts
import { chromium } from 'playwright'

async function test() {
  const browser = await chromium.launch({ headless: true })
  const page = await browser.newPage({ viewport: { width: 430, height: 932 } })

  // Route SPECIFIC external domains (not **/* which causes timeouts)
  await page.route('https://api.mapbox.com/**', async route => {
    const req = route.request()
    const res = await fetch(req.url(), {
      method: req.method(),
      body: req.method() === 'POST' ? req.postData() : undefined,
    })
    route.fulfill({ status: res.status, body: await res.text() })
  })

  await page.route('https://overpass-api.de/**', async route => {
    const req = route.request()
    const res = await fetch(req.url(), {
      method: req.method(),
      body: req.method() === 'POST' ? req.postData() : undefined,
    })
    route.fulfill({ status: res.status, body: await res.text() })
  })

  await page.route('https://en.wikipedia.org/**', async route => {
    const res = await fetch(route.request().url())
    route.fulfill({ status: res.status, body: await res.text() })
  })

  // Now external resources will load correctly
  await page.goto('http://localhost:5173/claude-playground/istanbul/#geography')
  await page.waitForTimeout(5000)
  await page.screenshot({ path: '/tmp/map-test.png' })

  await browser.close()
}

test()
```

**Why this works:** Node's `fetch()` respects the `HTTP_PROXY`/`HTTPS_PROXY` environment variables, while Playwright's Chromium browser does not automatically pick them up. By intercepting specific external requests and fulfilling them with server-side fetched data, we bypass this limitation.

**When to use this pattern:**
- Apps using Mapbox, Google Maps, or other map services
- Apps loading external fonts (Google Fonts)
- Apps making API calls to external services
- Any time you see `ERR_NAME_NOT_RESOLVED` or `ERR_TUNNEL_CONNECTION_FAILED` in Playwright

### Free CORS-Enabled APIs

These APIs have `Access-Control-Allow-Origin: *` and work from any origin without API keys:

| API | URL | Use Case |
|-----|-----|----------|
| **Overpass API** | `https://overpass-api.de/api/interpreter` | POIs from OpenStreetMap (restaurants, museums, etc.) |
| **Wikipedia API** | `https://en.wikipedia.org/api/rest_v1/page/summary/{title}` | Rich descriptions, images, extracts |
| **Nominatim** | `https://nominatim.openstreetmap.org/reverse?format=json&lat={lat}&lon={lon}` | Reverse geocoding (address from coords) |

Example: Testing API calls from browser context:

```ts
// After setting up routes above...
const result = await page.evaluate(async () => {
  const query = `[out:json];node["amenity"="cafe"](around:500,41.0256,28.9744);out 5;`
  const res = await fetch('https://overpass-api.de/api/interpreter', {
    method: 'POST',
    body: 'data=' + encodeURIComponent(query)
  })
  return res.json()
})
console.log('Found', result.elements?.length, 'cafes!')
```

## OG Image Generation

OG images are **checked into git** in the `public/` folder. They get copied to the build output automatically.

**To regenerate OG images** (run manually when apps change visually):

```bash
bun run build              # Build first
bun run generate-og        # Screenshots each app to public/*/og-image.png
git add public/            # Commit the updated images
```

Images are saved to:
- `public/og-home.png` - Homepage
- `public/apps/{app}/og-image.png` - Each app (e.g., `public/apps/sensors/og-image.png`)
- `public/apps/{app}/{sub}/og-image.png` - Nested pages (e.g., `public/apps/recipes/ribeye/og-image.png`)

## Architecture Notes

- **MPA (Multi-Page App)**: Each mini-app has its own `index.html` for unique social sharing meta tags (OG tags)
- **Auto-Discovery**: Home page uses `import.meta.glob('./*/app.config.tsx')` to find all apps
- **No React Router**: Navigation uses regular `<a>` tags with full page loads
- **Base Path**: All links use `/claude-playground/` prefix for GitHub Pages
- **Vite MPA Build**: Uses `rollupOptions.input` to build multiple entry points
