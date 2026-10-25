# Kawsar Farooq — Academic Portfolio

Static academic portfolio for https://kawsarfarooq.github.io/. HTML, CSS, JavaScript and JSON; no backend or build step. The visual design uses warm ivory surfaces, navy accents, serif headings and a personal portrait, with responsive publication and project layouts.

## Files

- `index.html`: biography, verified education, contact links and section structure.
- `assets/content.json`: 3 publications, 7 projects, 9 awards/leadership entries and 3 news entries. Existing content preserved.
- `assets/main.js`: content rendering, project search/filtering, accessible navigation and persistent color scheme.
- `assets/styles.css`: responsive styles and accessibility states.
- `assets/favicon.svg`: vector monogram.
- `assets/portrait.png`: uploaded portrait used in the hero; original retained as `07.png`.
- `cv/Kawsar_Farooq_CV_source.tex`: corrected LaTeX source; compile with XeLaTeX and the required packages/fonts.
- `.nojekyll`: serve as a static site.
- `AUDIT.md`: review results and outstanding checks.

## CV requires an updated export

The supplied PDF contained excluded education and outdated contact information. It was moved outside this repository to `../private-review/Kawsar_Farooq_CV.outdated.pdf`, rather than edited or regenerated. The original starter ZIP was also moved there because it contains excluded information. That directory is ignored by the parent repository. Do not upload it or serve the parent workspace.

The site currently offers **Request CV** email links. Export a reviewed PDF from the corrected LaTeX source to `cv/Kawsar_Farooq_CV.pdf`. Confirm its education, contact details, metadata and visual layout before publishing it. Replace both Request CV anchors in `index.html` with `href="cv/Kawsar_Farooq_CV.pdf" download` and label them Download CV. The source and original condensed PDF are different documents; the source has not been compiled or visually validated here.

## Preview

From this directory run `python3 -m http.server 8000`, then visit http://localhost:8000/. JSON loading requires an HTTP server; opening a file URL is insufficient. Test desktop/mobile layouts, keyboard navigation, system theme, saved theme, filters and search. Google Fonts requires internet access; system font fallbacks are provided.

## Publish when ready

Use this inner repository, not the enclosing WEBSITE repository. Both local repositories initially had no commits; the inner repository's branch is already `main`, with no remote configured.

Create an empty public GitHub repository named `kawsarfarooq.github.io` under your account, without initializing a README. If a repository already exists with history, inspect and reconcile that history before using these first-publication commands; do not force-push.

```bash
cd /Users/kasa/Documents/WEBSITE/kawsarfarooq.github.io
git status --short --untracked-files=all
git add .gitignore .nojekyll index.html assets cv README.md AUDIT.md
git diff --cached --check
git diff --cached --stat
git diff --cached
git commit -m "Prepare academic portfolio for GitHub Pages"
git remote add origin https://github.com/kawsarfarooq/kawsarfarooq.github.io.git
git push -u origin main
```

In GitHub Settings → Pages choose **Deploy from a branch**, **main**, **/(root)**. GitHub's [official setup guide](https://docs.github.com/en/pages/quickstart) describes this configuration. The root index and relative asset paths support HTTPS Pages hosting. No commit, push, publication or deployment was performed during this review.

## Editing and factual scope

Keep education in `index.html` and the LaTeX source consistent. Update research entries in `assets/content.json`. Project metrics remain attributed to repository documentation; experiments were not reproduced. Publication details and academic achievements were preserved, not independently certified. Referee contact addresses and the unrelated language proficiency entry remain in the LaTeX source intentionally; source files in a public repository are public.
