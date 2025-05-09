import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Ministries from "./components/Ministries";
import About from "./components/About";
import Events from "./components/Events";
import Give from "./components/Give";
import Read from "./components/Read";
import Watch from "./components/Watch";
import YouthMinistry from "./components/ministries/YouthMinistry";
import MensFellowship from "./components/ministries/MensFellowship";
import WomensFellowship from "./components/ministries/WomensFellowship";
import CampusMinistry from "./components/ministries/CampusMinistry";
import "./index.css";

const Layout = ({ children }) => (
  <>
    <Navbar />
    <main>{children}</main>
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
