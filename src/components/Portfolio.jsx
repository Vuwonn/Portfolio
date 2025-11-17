import api from "../assets/portfolio/api.jpg";
import apod from "../assets/portfolio/apod.jpg";
import blog from "../assets/portfolio/blog.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      title: "Udbajar E-commerce",
      desc: "A full MERN e-commerce platform with cart, checkout & payments.",
      src: api,
      link: "https://udbajar.com/",
      repo: "https://github.com/vuwonn",
    },
    {
      id: 2,
      title: "Restro ERP",
      desc: "Hotel & restaurant management ERP with POS, rooms & billing.",
      src: apod,
      link: "https://restro-erp.onrender.com",
      repo: "https://github.com/Vuwonn/restro-erp",
    },
    {
      id: 3,
      title: "Blog Application",
      desc: "A simple blog app with CRUD posts, authentication & UI design.",
      src: blog,
      link: "https://blog-ciz6.onrender.com/",
      repo: "https://github.com/Vuwonn",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white py-16"
    >
      <div className="max-w-screen-xl mx-auto px-6">
        
        {/* Heading */}
        <div className="pb-10 text-center md:text-left">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-4 text-gray-300">
            Check out some of my work right here
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {portfolios.map(({ id, src, link, repo, title, desc }) => (
            <div
              key={id}
              className="rounded-xl overflow-hidden bg-gray-900 shadow-md shadow-gray-700 hover:shadow-lg hover:shadow-gray-600 transition duration-300"
            >
              <img
                src={src}
                alt={title}
                className="w-full h-48 object-cover hover:scale-105 duration-300"
              />

              <div className="p-5">
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="text-gray-300 text-sm mt-1">{desc}</p>

                <div className="flex gap-4 mt-5">
                  <button
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md hover:scale-105 transition duration-200"
                    onClick={() => window.open(link, "_blank")}
                  >
                    Demo
                  </button>
                  <button
                    className="flex-1 px-4 py-2 bg-gray-700 rounded-md hover:scale-105 transition duration-200"
                    onClick={() => window.open(repo, "_blank")}
                  >
                    GitHub
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Portfolio;
