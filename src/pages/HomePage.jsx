import NavBar from "../components/NavBar";
import Home from "../components/Home";
import Footer from "../components/Footer";
import SocialLinks from "../components/SocialLinks";
import FeaturedProjects from "../components/home/FeaturedProjects";
import LatestPosts from "../components/home/LatestPosts";

const HomePage = () => {
  return (
    <div className="bg-[#060a12] text-slate-100 min-h-screen selection:bg-blue-500 selection:text-white">
      <header>
        <NavBar />
      </header>
      <main>
        <Home />
        <FeaturedProjects />
        <LatestPosts />
      </main>
      <footer>
        <Footer />
      </footer>
      <SocialLinks />
    </div>
  );
};

export default HomePage;
