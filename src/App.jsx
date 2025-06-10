import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import "./index.css";

// Lazy load other components
const About = lazy(() => import("./components/About"));
const Ministries = lazy(() => import("./components/Ministries"));
const Events = lazy(() => import("./components/Events"));
const Give = lazy(() => import("./components/Give"));
const Read = lazy(() => import("./components/Read"));
const Watch = lazy(() => import("./components/Watch"));
const Listen = lazy(() => import("./components/Listen"));
const YouthMinistry = lazy(() =>
  import("./components/ministries/YouthMinistry")
);
const MensFellowship = lazy(() =>
  import("./components/ministries/MensFellowship")
);
const WomensFellowship = lazy(() =>
  import("./components/ministries/WomensFellowship")
);
const CampusMinistry = lazy(() =>
  import("./components/ministries/CampusMinistry")
);

// Loading component for suspense fallback
const Loading = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

const Layout = ({ children }) => (
  <>
    <Navbar />
    <Suspense fallback={<Loading />}>
      <main>{children}</main>
    </Suspense>
  </>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/ministries"
          element={
            <Layout>
              <Ministries />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path="/events"
          element={
            <Layout>
              <Events />
            </Layout>
          }
        />
        <Route
          path="/give"
          element={
            <Layout>
              <Give />
            </Layout>
          }
        />
        <Route
          path="/read"
          element={
            <Layout>
              <Read />
            </Layout>
          }
        />
        <Route
          path="/watch"
          element={
            <Layout>
              <Watch />
            </Layout>
          }
        />
        <Route
          path="/listen"
          element={
            <Layout>
              <Listen />
            </Layout>
          }
        />
        <Route
          path="/ministries/youth"
          element={
            <Layout>
              <YouthMinistry />
            </Layout>
          }
        />
        <Route
          path="/ministries/men"
          element={
            <Layout>
              <MensFellowship />
            </Layout>
          }
        />
        <Route
          path="/ministries/women"
          element={
            <Layout>
              <WomensFellowship />
            </Layout>
          }
        />
        <Route
          path="/ministries/campus"
          element={
            <Layout>
              <CampusMinistry />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
