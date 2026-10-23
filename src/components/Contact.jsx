import React from "react";

function handleSubmit(e) {
  setTimeout(() => {
    e.target.reset();
  }, 2000);
}

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full min-h-screen bg-gradient-to-b from-[#050811] via-[#070c18] to-black py-20 text-white relative overflow-hidden"
    >
      <div className="flex flex-col p-6 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8 text-center md:text-left">
          <p className="text-4xl font-bold inline border-b-4 border-blue-500">
            Contact
          </p>
          <p className="py-4 text-slate-300">
            Have a project in mind or want to collaborate? Submit the form below to get in touch.
          </p>
        </div>

        <div className="flex justify-center items-center">
          <form
            onSubmit={handleSubmit}
            name="contact"
            method="POST"
            action="https://getform.io/f/a5bbeab4-3505-457e-bcda-603c8bc15711"
            className="flex flex-col w-full md:w-3/4 lg:w-2/3 bg-[#0c1427]/80 border border-slate-700/60 p-8 rounded-3xl shadow-2xl backdrop-blur-md"
          >
            <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="e.g. John Doe"
              required
              className="p-3 bg-slate-900/80 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition duration-200 mb-5"
            />

            <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="e.g. john@example.com"
              required
              className="p-3 bg-slate-900/80 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition duration-200 mb-5"
            />

            <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Message
            </label>
            <textarea
              name="message"
              placeholder="Write your message here..."
              rows="6"
              required
              className="p-3 bg-slate-900/80 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition duration-200 mb-6"
            ></textarea>

            <button
              type="submit"
              className="text-white font-medium bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 px-8 py-3.5 rounded-xl hover:shadow-lg hover:shadow-blue-500/25 hover:scale-102 transition duration-300 self-center md:self-start"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
