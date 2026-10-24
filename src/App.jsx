import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import CoreExpertise from "./components/CoreExpertise";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div className="bg-[#060a12] text-slate-100 min-h-screen selection:bg-blue-500 selection:text-white">
      <header>
        <NavBar />
      </header>
      <main>
        <Home />
        <About />
        <CoreExpertise />
        <Experience />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
      <SocialLinks />
    </div>
  );
}

export default App;