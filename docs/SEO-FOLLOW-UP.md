# Future SEO follow-up

The current site is a React + Vite SPA. Its pathname switch renders the correct archive, legal, and case-study view in the browser, but the initial response is still the shared `index.html`. Runtime title and description updates therefore do not provide route-specific initial HTML to crawlers or social crawlers.

The safest next step is a Vite-compatible prerender step that reuses the existing React components, pathname switch, and project data to emit static HTML for `/`, `/projects`, each published case study, `/privacy`, and `/terms`. A shared metadata helper should provide each route's title, description, self-referencing canonical URL, and route-specific Open Graph image.

Vercel should serve those generated HTML files and the public crawler assets before the existing SPA fallback handles unknown application paths. This can be added without changing React 19, the visual design, project modals, or the current client-side interactions. Do not add a prerendering dependency or change the build architecture until this follow-up phase.
