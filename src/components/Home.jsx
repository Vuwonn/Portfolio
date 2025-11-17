import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col-reverse md:flex-row items-center justify-center h-full px-6">
        
        {/* ------------ LEFT TEXT SECTION ------------ */}
        <div className="flex flex-col justify-center h-full mt-8 md:mt-0 text-center md:text-left">
          <h2 className="text-4xl sm:text-6xl font-bold text-white leading-tight">
            I'm a Full Stack Web Developer
          </h2>

          <p className="text-gray-400 py-4 max-w-md mx-auto md:mx-0 text-sm sm:text-base">
            I have 2 years of experience building websites and designing software.
            I love working on web applications using technologies like
            React, Tailwind, Next.js, and GraphQL.
          </p>

          <div className="flex justify-center md:justify-start">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 flex items-center 
              rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        {/* ------------ RIGHT IMAGE SECTION ------------ */}
        <div className="flex justify-center w-full mb-6 md:mb-0">
          <img
            src={HeroImage}
            alt="profile"
            className="rounded-2xl w-2/3 sm:w-1/2 md:w-80 lg:w-96 drop-shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
