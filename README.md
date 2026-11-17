# ALOKA

## Deploy to GitHub Pages

The `Deploy to GitHub Pages` workflow builds the site and deploys it whenever a commit is pushed to `main`. You can also start a deployment manually from the repository's **Actions** tab.

One-time setup:

1. Open the repository's **Settings → Pages**.
2. Set **Build and deployment → Source** to **GitHub Actions**.
3. Push to `main`, or run the workflow manually from **Actions**.

The project site will be available at `https://sharath07s.github.io/ALOKA/` after the workflow completes. Local development continues to use the root path with `npm run dev`.
