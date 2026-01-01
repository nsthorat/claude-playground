# Web API Playground

A collection of mini-apps demonstrating browser Web APIs, built with React, Vite, and Tailwind CSS.

## Project Structure

```
src/
├── components/
│   └── ui/
│       └── magic-card.tsx      # Reusable card with spotlight hover effect
├── lib/
│   └── utils.ts                # Utility functions (cn for classnames)
├── pages/
│   ├── Home.tsx                # Bento grid home page
│   └── sensors/
│       └── index.tsx           # Sensor diagnostics mini-app
├── index.css                   # Global styles + Tailwind theme
└── main.tsx                    # Router setup
```

## How to Create a New Mini-App

### 1. Create the page component

Create a new folder under `src/pages/` with an `index.tsx`:

```tsx
// src/pages/my-app/index.tsx
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function MyApp() {
  return (
    <div className="p-4 max-w-xl mx-auto">
      <Link to="/" className="inline-flex items-center gap-2 text-text-secondary hover:text-accent-cyan mb-4">
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </Link>

      <h1 className="text-3xl font-bold bg-gradient-to-r from-accent-cyan to-accent-purple bg-clip-text text-transparent">
        My App Title
      </h1>

      {/* Your app content here */}
    </div>
  )
}
```

### 2. Add the route

Update `src/main.tsx`:

```tsx
import MyApp from './pages/my-app'

// In the Routes:
<Route path="/my-app" element={<MyApp />} />
```

### 3. Add to home page grid

Update `src/pages/Home.tsx` - add to the `miniApps` array:

```tsx
{
  id: 'my-app',
  title: 'My App',
  description: 'Description of what this app does.',
  icon: <SomeIcon className="w-6 h-6" />,
  path: '/my-app',
  status: 'available',  // or 'coming-soon'
  gradient: 'from-accent-cyan/20 to-accent-purple/20',
  size: 'small',  // or 'large' for featured apps
}
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

GitHub Pages serves from the `docs/` folder on the `main` branch.

1. Run `bun run publish` to build
2. Commit the updated `docs/` folder
3. Push to main branch

URL: https://nsthorat.github.io/claude-playground/

## Routing

Uses HashRouter for GitHub Pages compatibility:
- Home: `/#/`
- Sensors: `/#/sensors`
- New app: `/#/my-app`
