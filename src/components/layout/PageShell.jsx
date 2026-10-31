import NavBar from "../NavBar";
import Footer from "../Footer";
import SocialLinks from "../SocialLinks";

const PageShell = ({ children }) => {
  return (
    <div className="bg-[#060a12] text-slate-100 min-h-screen selection:bg-blue-500 selection:text-white">
      <header>
        <NavBar />
      </header>
      <main className="pt-20">{children}</main>
      <footer>
        <Footer />
      </footer>
      <SocialLinks />
    </div>
  );
};

export default PageShell;
