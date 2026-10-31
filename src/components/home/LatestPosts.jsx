import { Link } from "react-router-dom";
import { posts } from "../../data/blog";
import PostCard from "../cards/PostCard";

const LatestPosts = () => {
  return (
    <section
      name="writing"
      className="w-full py-20 bg-gradient-to-b from-[#080d1a] via-[#0b1326] to-[#060a14] text-white relative overflow-hidden"
    >
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-screen-xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 pb-10">
          <div>
            <p className="text-3xl sm:text-4xl font-bold inline border-b-4 border-blue-500">
              Writing
            </p>
            <p className="py-4 text-slate-300 max-w-2xl">
              Practical notes on frontend frameworks, backend architecture,
              databases, and deployment.
            </p>
          </div>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
          >
            Read the blog <span aria-hidden="true">-&gt;</span>
          </Link>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.slice(0, 3).map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestPosts;
