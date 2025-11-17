const About = () => {
  return (
    <div
      name="about"
      className="w-full py-20 bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-6 mx-auto flex flex-col justify-center">
        
        {/* Heading */}
        <div className="pb-6 text-center md:text-left">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        {/* Paragraphs */}
        <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
          <p>
            I am a full-stack web developer working across both backend and frontend 
            technologies. I’m passionate about improving my skills, learning new 
            technologies, and taking on freelance projects that challenge me to grow.
          </p>

          <p>
            I enjoy building projects from scratch and bringing ideas to life. 
            I value minimalistic design, meaningful branding, and a customer-focused 
            experience. Let’s work together and explore how we can make your project 
            more effective and visually impactful.
          </p>

          <p>
            I love crafting or redesigning a unique identity for a product or service, 
            optimizing for search engines and social platforms, and building user-centered 
            experiences that truly connect.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
