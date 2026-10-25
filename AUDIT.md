# Pre-publication audit — 26 October 2026

## Result

Local fixes implemented; nothing committed, pushed or deployed. The public source is cleaned, but a verified downloadable CV and real-browser visual checks remain outstanding. Request CV email links temporarily replace downloads.

## Issues and corrections

- The supplied PDF exposed excluded education, an outdated email and an outdated location. Inspected its metadata and both ASCII85/Flate-decoded page content streams. Moved the original PDF to the ignored parent `private-review/` directory without modifying it. It is no longer inside the public site root. No replacement was fabricated. PDF layout was not rendered because PDF rendering tools were unavailable.
- The starter ZIP also contained excluded education/contact information. Preserved it in the same private directory. Moved both workspace and site `.DS_Store` files there. Serve and publish only the inner site directory.
- Corrected the university spelling and ongoing doctoral-study wording in the LaTeX source. Updated all three education entries to the supplied institutions, degree/study wording, month-level dates and locations. The LaTeX source still requires compilation and visual review; longer date labels may need layout adjustment.
- Kept the supplied email and GitHub, LinkedIn and Scholar links; added canonical and Open Graph URL metadata.
- Removed visible editing instructions from News. Added a JavaScript-disabled explanation and research links.
- Theme now initializes from saved preference or system preference, saves selection, tolerates unavailable storage, follows system changes until overridden, and updates accessible button state.
- Mobile menu supports Escape and returns focus to its button. Filtering retains button focus, exposes selection state and announces the project count.
- Fixed incomplete error handling: failures now display readable status messages in all four dynamic sections. Invalid top-level content arrays are rejected. Dynamic link URLs accept HTTPS only and content remains HTML-escaped.
- Added visible keyboard focus states, larger theme/menu/filter targets, wrapping protection, narrower tablet spacing and improved primary-button contrast. Preserved blue identity, typography, monogram, responsive cards and reduced-motion support. Visual contrast/layout auditing remains unverified in a browser.
- Added site and parent `.gitignore` files for private artifacts, archives, system files and common temporary/secret files. `.nojekyll` already existed and was retained.
- Rewrote README with accurate CV status, source layout, preview instructions and publishing commands.

## Files changed

Modified: `index.html`, `assets/main.js`, `assets/styles.css`, `cv/Kawsar_Farooq_CV_source.tex`, `README.md`.

Added: `.gitignore`, `AUDIT.md`, and parent `../.gitignore`.

Moved out of the public site: `cv/Kawsar_Farooq_CV.pdf`, `.DS_Store`. Parent archive and `.DS_Store` were also moved into `../private-review/`.

Unchanged: `assets/content.json`, `assets/favicon.svg`, `.nojekyll`, Git configuration and history. All 3 publications, 7 projects, 9 awards/leadership entries and 3 news entries were preserved.

## Verification performed

- `node --check assets/main.js`: passed.
- JSON parsing and SVG XML parsing: passed.
- HTMLParser checks: passed balanced element nesting, unique IDs, all section/navigation fragments, existing relative assets and permitted URL schemes. This is a structural check, not a full W3C conformance validation.
- Node VM behavior tests with a mocked DOM: passed rendering all content counts; search including zero results; category filtering; saved/system themes and toggling; unavailable storage; menu open/Escape/focus; rejected fetch and malformed content. These do not verify real browser behavior, focus rendering, CSS or responsive layout.
- Temporary local HTTP server: all seven requested resources returned 200 (HTML, CSS, JS, JSON, SVG, `.nojekyll`, LaTeX). Old PDF URL returned 404. Server was shut down.
- Source privacy scan: no excluded institution, education/location information, old personal email or local filesystem path in HTML, JS, JSON, CSS, SVG or LaTeX. Permitted pharmacy research mentions and unrelated language proficiency were retained. Old information remains only in the preserved private PDF/archive outside the public repository.
- Source credential pattern scan: no common GitHub/OpenAI/AWS key or private-key patterns found. No environment files or credentials found in the site file inventory. This is a heuristic review, not a guarantee against every possible secret format.
- Both repositories: zero commits, no tracked files; inner repository has no remote or reflog entries. Therefore there is no local committed history to rewrite. Remote history was not audited. Ignore rules verified for private artifacts, archives, environment files and system files.
- External URL attempts: the pharmacy scheduling and wind-turbine repositories were readable through the web tool. GitHub profile, three other project repositories, LinkedIn, Scholar and all three DOI URLs could not be retrieved by that tool. Retrieval failures do not establish broken links; supplied URLs and publication metadata were preserved. Email syntax checked; deliverability not tested. Google Fonts availability was not tested.
- GitHub Pages configuration checked against GitHub's official quickstart: use the username repository, main branch and root folder. Source is static and JSON uses a same-origin relative fetch, compatible with HTTPS hosting. Actual deployment/HTTPS behavior was not tested.

## Remaining work

1. Export a corrected, reviewed PDF from `cv/Kawsar_Farooq_CV_source.tex` to `cv/Kawsar_Farooq_CV.pdf`. Check text, metadata, links and layout. Restore both Download CV anchors as described in README. The download requirement remains deliberately incomplete to avoid exposing the old PDF.
2. Preview in a browser on desktop/mobile, test real keyboard navigation, themes and filters, and verify external profile/repository/DOI links manually. No browser backend was available in this session. No visual screenshots or LaTeX compilation were performed.
3. Follow README's exact publication commands from the inner repository only. Create an empty remote first; reconcile any existing remote history before pushing. Do not upload `private-review/` or the original starter archive.

Sources used for remote checks: [GitHub Pages quickstart](https://docs.github.com/en/pages/quickstart), [pharmacy project](https://github.com/kawsarfarooq/Fair-pharmacy-night-shift-scheduling-as-a-DCOP), [wind-turbine project](https://github.com/kawsarfarooq/Wind-Turbine-Predictive-Maintenance).


## Design revision — 26 October 2026

At the owner's request, replaced the previous visual design with a restrained academic layout: warm ivory background, navy accents, serif name and headings, structured publication rows, simpler project cards, revised education layout and smaller decorative elements. Hero now leads with Kawsar Farooq and verified doctoral studies. Added the uploaded `07.png` portrait as `assets/portrait.png`, unchanged, with descriptive alt text, intrinsic dimensions and high loading priority. Original image retained.

Modified `index.html`, `assets/styles.css`, `README.md` and this audit; added `assets/portrait.png`. Research JSON and JavaScript behavior were preserved. JavaScript syntax and existing mocked behavior tests passed again. HTML nesting, IDs, internal anchors, relative resources, PNG dimensions and unchanged portrait bytes were checked. CSS brace balance passed; no CSS parser or browser rendering was used. Browser discovery still reports no available browser, so visual rendering and responsive screenshot verification remain unverified. Nothing committed, pushed or deployed.
