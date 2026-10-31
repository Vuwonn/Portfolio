import { Link } from "react-router-dom";

const formatDate = (value) =>
  new Date(`${value}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });

const PostCard = ({ post }) => {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-700/60 bg-[#0c1427]/90 shadow-xl transition duration-300 hover:border-blue-500/50 hover:shadow-2xl"
    >
      {post.cover ? (
        <img
          src={post.cover}
          alt={post.coverAlt}
          width="640"
          height="360"
          loading="lazy"
          className="h-44 w-full object-cover transition duration-300 group-hover:scale-105"
        />
      ) : (
        <div className="flex h-44 w-full flex-col justify-between bg-gradient-to-br from-indigo-950 via-[#0b1428] to-blue-950 p-5">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-300/80">
            {post.categories[0]}
          </span>
          <span className="text-lg font-semibold text-slate-200">
            {post.categories.join(" / ")}
          </span>
        </div>
      )}

      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          {post.draft && (
            <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-2 py-0.5 text-amber-300">
              Draft
            </span>
          )}
        </div>
        <h3 className="mt-2 text-xl font-semibold text-white transition-colors group-hover:text-blue-300">
          {post.title}
        </h3>
        <p className="mt-2 flex-1 text-sm text-slate-300">{post.excerpt}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="rounded-lg border border-slate-700/80 bg-slate-800/70 px-2.5 py-1 text-xs text-slate-300"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
