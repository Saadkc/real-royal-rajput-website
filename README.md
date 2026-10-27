# Real Royal Rajput

A responsive construction company website in the requested gold, black, ivory, and silver palette. Open `index.html` directly, or run `npm run dev` and visit http://127.0.0.1:3000. No dependency installation required.

## Editing

Page source lives in `scripts/build.mjs`. Change its content, then run `npm run build` to regenerate all 19 HTML pages. Shared styling is in `assets/css/style.css`; browser interactions are in `assets/js/main.js`. Run `npm run check` to verify internal links, assets, anchors, heading structure, and image alternative text.

## Pages

Home, About, Expertise, Projects, six project detail pages, Responsibility, Insights, three articles, Careers, Contact, Privacy, and 404.

## Before launch

- Replace `assets/images/brand-mark.svg` with the supplied company logo; adjust shared brand markup if its proportions differ.
- Replace illustrative project names, figures, role descriptions, and draft company copy with verified information.
- Replace Unsplash reference photos with original project photography. Fonts and photos currently require internet access.
- The contact form is intentionally a demo: validation, success confirmation, reset, and optional local download work without sending or storing any data. No form service or backend is connected.
- Add verified company contact details.

## Design research

Reference study: ALEC (https://www.alec.ae/), ASGC (https://www.asgcgroup.com/), Khansaheb (https://www.khansahebcivilengineering.com/en/), Dutco (https://www.dutcoconstruction.com/), ACC (https://accgroup.com/), BESIX (https://www.besix.com/en), Wade Adams (https://wadeadams.com/), CSCEC Middle East (https://www.cscec.ae/), Al Naboodah (https://www.alnaboodah.com/sman/Sectors/construction), and Sobha Constructions (https://www.sobhaconstructions.com/). Also reviewed Dubai Contracting Company (https://www.dcc-group.com/) for its architectural presentation. These are industry references, not a claimed ranking. Design and implementation are original.

Includes keyboard navigation, reduced-motion support, responsive layouts, manual hero controls, project filtering, native form validation, and scroll reveal animations with progressive enhancement.

## Publish publicly with GitHub Pages

1. Create a public GitHub repository, for example `real-royal-rajput`.
2. Upload this project with `index.html`, the other HTML pages, `.nojekyll`, and `assets/` at the repository root. You can include `scripts/`, `components/`, and `package.json` as source files; no Node server runs on GitHub Pages.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**, then **main** and **/ (root)**. Save.
5. Wait for the Pages deployment to complete. The public URL will be `https://YOUR-USERNAME.github.io/real-royal-rajput/` (replace username and repository name).

The generated HTML is committed directly, so no dependency installation or GitHub Actions configuration is required. `.nojekyll` disables Jekyll processing. Relative asset and navigation paths work under the repository subdirectory. After editing page templates, run `node scripts/build.mjs` and upload/commit the regenerated HTML too. `node scripts/check.mjs` checks the local links before publishing.

The demo contact form works on GitHub Pages without a backend. A real email-delivery form would require a separate form service or server; this project does not send email. Dummy contact details use a reserved `.example` address. Do not add email passwords or API secrets to a public repository.

Official instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
