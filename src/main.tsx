import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import Page, { LegalPage, ProjectCaseStudy, ProjectsArchive } from "./Page"

const pathname = window.location.pathname.replace(/\/+$/, "").toLowerCase() || "/"
const projectMatch = pathname.match(/^\/projects\/([^/]+)$/)
const view = pathname === "/privacy"
  ? <LegalPage type="privacy" />
  : pathname === "/terms"
    ? <LegalPage type="terms" />
    : pathname === "/projects"
      ? <ProjectsArchive />
      : projectMatch
        ? <ProjectCaseStudy slug={projectMatch[1]} />
        : <Page />

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {view}
  </StrictMode>
)
