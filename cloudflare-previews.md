# Cloudflare Pages PR Previews

This project uses Cloudflare Pages for automatic PR preview deployments.

## How It Works

When a PR is opened or updated, Cloudflare automatically:
1. Builds the site with `bun run build`
2. Deploys to a unique preview URL like `<commit-hash>.claude-playground.pages.dev`
3. Comments on the PR with the preview link

## Setup Instructions

### 1. Create a Cloudflare Pages Project

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com) → **Workers & Pages**
2. Click **Create** → **Pages** → **Connect to Git**
3. Select the `claude-playground` repository
4. Configure build settings:
   - **Framework preset:** None
   - **Build command:** `bun run build`
   - **Build output directory:** `docs`
   - **Root directory:** `/` (leave default)

### 2. Branch Configuration

In project settings under **Branch control**:
- **Production branch:** `main`
- **Builds for non-production branches:** Enabled

This ensures PRs get preview deployments.

### 3. Environment Variables

No environment variables are required for the basic build.

## Important Notes

- **OG images** are checked into `public/` and copied during build - no Playwright needed
- **Production deploys** go through GitHub Actions to GitHub Pages (not Cloudflare)
- Cloudflare is **only for PR previews** - it won't affect the production site

## Preview URLs

- Production: `https://nikubaba.com/claude-playground/`
- PR Previews: `https://<hash>.claude-playground.pages.dev/claude-playground/`

## Troubleshooting

### "Missing entry-point" error
Make sure you created a **Pages** project, not a **Workers** project. If you see wrangler deploy commands, delete the project and recreate it as Pages.

### Build succeeds but site is blank
Check that the build output directory is set to `docs` (not `dist` or `build`).

### Preview URL shows 404
The site is served under `/claude-playground/` base path. Make sure to include it in the URL.
