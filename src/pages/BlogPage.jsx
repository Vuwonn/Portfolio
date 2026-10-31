import { useMemo } from "react";
import Breadcrumbs from "../components/ui/Breadcrumbs";
import PostCard from "../components/cards/PostCard";
import { posts } from "../data/blog";
import { usePageMeta } from "../hooks/usePageMeta";
import { buildBlogIndexMeta } from "../seo/meta";

const BlogPage = () => {
  const meta = useMemo(() => buildBlogIndexMeta(), []);
  usePageMeta(meta);

  return (
    <div className="bg-gradient-to-b from-[#060a12] via-[#080d1a] to-[#060a12] text-white">
      <div className="mx-auto max-w-screen-xl px-6 py-16 sm:py-20">
        <Breadcrumbs items={meta.breadcrumbs} />

        <header className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-400">
            Blog
          </p>
          <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight">
            Technical writing
          </h1>
          <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed">
            Practical articles about React, Next.js, NestJS, PostgreSQL, Docker,
            and the engineering problems that come up when building business
            applications.
          </p>
        </header>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
