// Importing Components
import Sidebar from "./components/Sidebar/Sidebar";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop"
import BodyHeader from "./components/BodyHeader/BodyHeader";

// Import Pages
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Homepage/Home";
import About from "./pages/About/About";
import Skills from "./pages/Skills/Skills";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";

// Styling
import "./index.css" // Global Styling
import styles from "./App.module.css" // App Styling
import ToTheTop from "./components/ToTheTop/ToTheTop";


function App() {

  return (
    <div className={styles.appContainer}>
      <Router>
        <ScrollToTop />

        <div className={styles.sidebarContainer}>
          
          <Sidebar />

        </div>

        <div>

          <BodyHeader 
            title="Landon Linn"
            occupation="Student at The University of Tennessee" 
          />
          
        </div>

        <div className={styles.bodyContainer} id="bodyContainer">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/Skills" element={<Skills />} />
              <Route path="/Portfolio" element={<Portfolio />} />
                <Route path="Portfolio/:projectId" element={<Portfolio />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="*" element={<h1>404: Page Not Found</h1>} />
            </Routes>

            <ToTheTop targetDivId="bodyContainer"/>
        </div>   
      </Router> 
    </div>
  );
}

export default App;
