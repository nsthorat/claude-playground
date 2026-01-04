# Nikhil's Apps

A collection of mini apps and experiments, built with React, Vite, and Tailwind CSS.

**Live site:** [nikubaba.com/claude-playground](https://nikubaba.com/claude-playground/)

## Apps

- **Sensors** - Test iOS web sensor APIs (motion, orientation, geolocation, camera)
- **Audio** - Audio visualizer with microphone input
- **Water** - Interactive 3D water simulation
- **Fluid** - Fluid dynamics simulation
- **Istanbul** - Interactive guide to Istanbul with maps and historical data
- **Recipes** - Collection of recipes (Ribeye, etc.)

## Quick Start

```bash
bun install
bun run dev
```

## Development

See [CLAUDE.md](./CLAUDE.md) for detailed development instructions including:
- How to create a new mini-app
- Project structure and architecture
- Theme colors and fonts
- Testing requirements
- OG image generation

## Deployment

- **Production:** GitHub Actions deploys to GitHub Pages on push to `main`
- **PR Previews:** Cloudflare Pages provides automatic preview URLs for PRs

See [cloudflare-previews.md](./cloudflare-previews.md) for Cloudflare setup details.

## License

MIT
