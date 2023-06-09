import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loading from "../component/loading";

function Router() {
  const HomePage = lazy(() => import("../pages/HomePage"))
  const Project = lazy(() => import("../pages/ProjectPages"))
  const AboutPage = lazy(() => import("../pages/AboutMePage"))
  const ContactsPage = lazy(() => import("../pages/ContactsPage"))

  return (
    <HashRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/AboutMe" element={<AboutPage />} />
          <Route path="/Contacts" element={<ContactsPage />} />
        </Routes>
      </Suspense>
    </HashRouter>
  );
}

function wait(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

export default Router;
