# src/

This directory is reserved for source files if you expand the project
to use a build tool (e.g., Vite, Parcel, or Webpack) in the future.

## Current structure

This site is currently a **plain HTML/CSS/JS** static site.
All production-ready files live in `/public` and are served directly
by Cloudflare Pages — no build step required.

## If you add a build pipeline

1. Place your source `.js` / `.ts` / `.scss` files here.
2. Update `package.json` with a `build` script that outputs to `/public/assets/`.
3. Update `wrangler.toml` if your output directory changes.

## Example Vite setup (optional future upgrade)

```bash
npm create vite@latest . -- --template vanilla
# Move index.html to src/index.html
# Update vite.config.js to set build.outDir = 'public'
```
