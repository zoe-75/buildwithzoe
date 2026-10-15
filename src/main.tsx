import { StrictMode, type ReactNode } from "react"
import { createRoot } from "react-dom/client"
import Page, { FloatingContactActions, LegalPage, ProjectCaseStudy, ProjectsArchive } from "./Page"

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

function ApplicationShell({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <FloatingContactActions />
    </>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApplicationShell>{view}</ApplicationShell>
  </StrictMode>
)