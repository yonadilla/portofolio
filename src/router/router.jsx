import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loading from "../component/loading";

function Router() {
  const HomePage = lazy(() =>
    wait(1500).then(() => import("../pages/HomePage"))
  );
  const Project = lazy(() =>
    wait(1500).then(() => import("../pages/ProjectPages"))
  );
  const AboutPage = lazy(() =>
    wait(1500).then(() => import("../pages/AboutMePage"))
  );
  const ContactsPage = lazy(() =>
    wait(1500).then(() => import("../pages/ContactsPage"))
  );

  return (
    <BrowserRouter>
      <Suspense fallback={<Loading/>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/AboutMe" element={<AboutPage />} />
          <Route path="/Contacts" element={<ContactsPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

function wait(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

export default Router;
