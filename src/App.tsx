import { lazy, Suspense, useLayoutEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = lazy(() => import("@/pages/Home").then((module) => ({ default: module.Home })));
const ProjectDetails = lazy(() => import("@/pages/ProjectDetails"));
const ProjectsPage = lazy(() => import("@/pages/Projects"));

function RouteFallback() {
  return <div className="min-h-screen bg-black" aria-busy="true" />;
}

export default function App() {
  useLayoutEffect(() => {
    document.title = "Aditya";
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<RouteFallback />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/projects"
          element={
            <Suspense fallback={<RouteFallback />}>
              <ProjectsPage />
            </Suspense>
          }
        />
        <Route
          path="/projects/:slug"
          element={
            <Suspense fallback={<RouteFallback />}>
              <ProjectDetails />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
