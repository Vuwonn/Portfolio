import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ExpertisePage from "./pages/ExpertisePage";
import ExperiencePage from "./pages/ExperiencePage";
import ContactPage from "./pages/ContactPage";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import NotFoundPage from "./pages/NotFoundPage";
import PageShell from "./components/layout/PageShell";
import ScrollManager from "./components/layout/ScrollManager";

function App() {
  return (
    <>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/about"
          element={
            <PageShell>
              <AboutPage />
            </PageShell>
          }
        />
        <Route
          path="/expertise"
          element={
            <PageShell>
              <ExpertisePage />
            </PageShell>
          }
        />
        <Route
          path="/experience"
          element={
            <PageShell>
              <ExperiencePage />
            </PageShell>
          }
        />
        <Route
          path="/contact"
          element={
            <PageShell>
              <ContactPage />
            </PageShell>
          }
        />
        <Route
          path="/projects"
          element={
            <PageShell>
              <ProjectsPage />
            </PageShell>
          }
        />
        <Route
          path="/projects/:slug"
          element={
            <PageShell>
              <ProjectDetailPage />
            </PageShell>
          }
        />
        <Route
          path="/blog"
          element={
            <PageShell>
              <BlogPage />
            </PageShell>
          }
        />
        <Route
          path="/blog/:slug"
          element={
            <PageShell>
              <BlogPostPage />
            </PageShell>
          }
        />
        <Route
          path="*"
          element={
            <PageShell>
              <NotFoundPage />
            </PageShell>
          }
        />
      </Routes>
    </>
  );
}

export default App;
