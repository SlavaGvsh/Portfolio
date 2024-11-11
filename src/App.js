import "./styles/reset.css";
import "./styles/main.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectPage from "./pages/ProjectPage";
import Contacts from "./pages/Contacts";
import ScrollToTop from "./utils/scrollToTop";

function App() {
  return (
    <div className="app">
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/portfolio/" element={<Home />} />
          <Route path="/portfolio/projects" element={<Projects />} />
          <Route path="/portfolio/project/:id" element={<ProjectPage />} />
          <Route path="/portfolio/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
