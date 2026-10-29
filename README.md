# PromptSelz – AI Prompt listing website

A responsive, static app-detail website modeled on the PromptSelz Google Play listing. It is built with the Next.js App Router, React, TypeScript, and Tailwind CSS. There is no database, API key, or backend service.

## What is included

- Responsive app listing with the supplied official app icon and screenshots, Play Store download links, verified app features, app description, use-case ideas, and FAQ.
- Reusable React components in `components/`.
- Supplied PromptSelz app icon used in the page branding, app listing, and favicon.
- Four supplied Android app screenshots shown in their provided order.
- Metadata for search engines and social sharing, plus a custom not-found page.
- Each app download link opens the exact Google Play listing in a new tab.
- Visitors are automatically redirected to the Google Play listing after four seconds; a visible link allows them to continue immediately.

The Google Play listing verifies ready-made prompts, copy/share, a simple interface, and offline access to saved prompts. The use-case cards are general examples and are not represented as in-app categories. A privacy-policy URL was not available in the listing details used for this site, so the website does not invent or link to one. Add a verified URL to the footer if you provide it.

## Project structure

```text
myappplaystore/
├── app/
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   ├── not-found.tsx
│   └── page.tsx
├── components/
│   ├── brand.tsx
│   ├── icons.tsx
│   ├── listing-page.tsx
│   └── store-link.tsx
├── public/
│   ├── promptselz-icon.jpg
│   └── screenshots/
│       ├── promptselz-01-copy-share.jpg
│       ├── promptselz-02-gallery.jpg
│       ├── promptselz-03-interface.jpg
│       └── promptselz-04-favorites.jpg
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── package-lock.json
├── package.json
├── README.md
└── tsconfig.json
```

## Requirements

- Windows 10 or later
- Node.js 20.9 or later (an active LTS release is recommended)
- Git for Windows

Check whether Node.js and npm are installed in PowerShell:

```powershell
node --version
npm --version
```

If either command is unavailable, install the current Node.js LTS release from [nodejs.org](https://nodejs.org/en/download) or, in an elevated PowerShell window with WinGet installed, run:

```powershell
winget install --id OpenJS.NodeJS.LTS --exact
```

Close and reopen the terminal after installation, then check `node --version` and `npm --version` again.

## Install and run locally

Open PowerShell or Windows Command Prompt in this project directory:

```powershell
cd "D:\flutter android app\my website\myappplaystore"
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Stop the development server with `Ctrl+C`.

To check linting, TypeScript, and the production build:

```powershell
npm run lint
npx tsc --noEmit
npm run build
```

To run the production build locally after it succeeds:

```powershell
npm run start
```

Then open [http://localhost:3000](http://localhost:3000) and stop the server with `Ctrl+C`.

## Publish the source to GitHub

1. Sign in to [GitHub](https://github.com/new) and create a new empty repository for this site. Do not initialize it with a README, license, or `.gitignore`.
2. In PowerShell, move into this project folder and check the Git state:

   ```powershell
   cd "D:\flutter android app\my website\myappplaystore"
   git status
   ```

3. If this folder is not already its own Git repository, initialize it, create a first commit, and add your new GitHub repository as `origin`:

   ```powershell
   git init
   git add .
   git commit -m "Build PromptSelz marketing website"
   git branch -M main
   git remote add origin https://github.com/YOUR-GITHUB-USERNAME/YOUR-REPOSITORY.git
   git push -u origin main
   ```

   Replace the remote URL with the URL GitHub shows for the repository you created. If `git status` shows that this folder is already inside a different Git repository, create a separate repository from this project directory before pushing; do not accidentally push unrelated parent-folder files.

4. GitHub may ask you to authenticate. Use Git Credential Manager or GitHub's documented sign-in flow; do not put a password or access token in the remote URL.

## Deploy to Vercel's free plan

Vercel's free **Hobby** plan is intended for personal, non-commercial projects and is subject to Vercel's current usage limits and terms. Check the current plan limits before relying on it for a commercial site.

1. Sign in to [Vercel](https://vercel.com/) and choose **Add New → Project**.
2. Connect your GitHub account if prompted, find the repository you pushed, and select **Import**.
3. In project settings, choose a project name such as `promptselz-website`. Vercel will use this name when suggesting a `*.vercel.app` address, subject to availability.
4. Confirm the framework is detected as **Next.js**. Keep the root directory as the repository root. No environment variables or database are needed.
5. Select the **Hobby** plan and click **Deploy**.
6. Wait for Vercel to finish the build and deployment. Use the resulting `https://<project-name>.vercel.app` URL as the public site URL. A deployment is only live after Vercel reports success; this source project has not been deployed by these instructions.
7. To use a custom domain later, open the Vercel project's **Settings → Domains**, add a domain you own, and follow Vercel's DNS instructions.

### Deploy future changes automatically

After connecting the GitHub repository, Vercel builds and deploys commits pushed to the production branch (normally `main`). For example:

```powershell
git add .
git commit -m "Update PromptSelz website"
git push
```

Vercel also creates preview deployments for other branches and pull requests when that integration is enabled.

## Live-site verification checklist

- [ ] Open the deployed Vercel URL on a phone and a desktop browser.
- [ ] Check the Home, Features, Use cases, About, and Contact navigation links.
- [ ] Open every **Get the app** or Google Play button and verify it goes to the configured PromptSelz Google Play listing in a new tab.
- [ ] Confirm the countdown appears and the page redirects to Google Play after four seconds.
- [ ] Open and close each FAQ item using a mouse, touch, and keyboard.
- [ ] Check that the use-case note does not imply those are confirmed app categories.
- [ ] Confirm the official app icon and all four supplied screenshots load correctly.
- [ ] Visit a made-up route and confirm the custom 404 page appears.
- [ ] Use the browser's page source or developer tools to check the title, description, Open Graph, and Twitter metadata.
- [ ] Check the Vercel deployment log for a successful production build.

## Replacing app assets

The provided icon and screenshots are copied into `public/`. Replace those public files to update the images shown on the website. The screenshot order and descriptive alt text are set in `components/listing-page.tsx`.
