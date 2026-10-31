import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import Breadcrumbs from "../components/ui/Breadcrumbs";
import ContentBlocks from "../components/ui/ContentBlocks";
import DraftNotice from "../components/ui/DraftNotice";
import PostCard from "../components/cards/PostCard";
import { getPostBySlug, posts } from "../data/blog";
import { getProjectBySlug } from "../data/projects";
import { usePageMeta } from "../hooks/usePageMeta";
import { buildPostMeta, HOME_META } from "../seo/meta";
import { formatDate } from "../utils/formatDate";
import NotFoundPage from "./NotFoundPage";

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = getPostBySlug(slug);
  const meta = useMemo(() => (post ? buildPostMeta(post) : HOME_META), [post]);
  usePageMeta(meta);

  if (!post) return <NotFoundPage />;

  const relatedPosts = (post.relatedArticles || [])
    .map((item) => getPostBySlug(item))
    .filter(Boolean);
  const relatedProjects = (post.relatedProjects || [])
    .map((item) => getProjectBySlug(item))
    .filter(Boolean);
  const morePosts = posts
    .filter((item) => item.slug !== post.slug)
    .slice(0, 2);

  return (
    <div className="bg-gradient-to-b from-[#060a12] via-[#080d1a] to-[#060a12] text-white">
      <article className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
        <Breadcrumbs items={meta.breadcrumbs} />

        <header>
          <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-400">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span aria-hidden="true">/</span>
            <span>{post.categories.join(" / ")}</span>
            {post.draft && (
              <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-0.5 text-amber-300">
                Draft
              </span>
            )}
          </div>
          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            {post.title}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            {post.excerpt}
          </p>
          <p className="mt-4 text-sm text-slate-400">
            By {post.author} - Updated {formatDate(post.updated)}
          </p>
        </header>

        {post.cover && (
          <img
            src={post.cover}
            alt={post.coverAlt}
            width="1200"
            height="630"
            loading="lazy"
            className="mt-8 w-full rounded-3xl border border-slate-700/60 object-cover"
          />
        )}

        {post.draft && (
          <div className="mt-8">
            <DraftNotice
              items={post.needsReview}
              title="Draft - personal review needed"
            />
          </div>
        )}

        <div className="mt-10">
          <ContentBlocks blocks={post.content} />
        </div>

        <footer className="mt-10 flex flex-wrap gap-2 border-t border-slate-800 pt-6">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-lg border border-slate-700/80 bg-slate-800/70 px-2.5 py-1 text-xs text-slate-300"
            >
              #{tag}
            </span>
          ))}
        </footer>

        {relatedProjects.length > 0 && (
          <section className="mt-12 rounded-2xl border border-slate-700/60 bg-[#0c1427]/90 p-6">
            <h2 className="text-lg font-semibold text-white">
              Related projects
            </h2>
            <ul className="mt-3 space-y-2">
              {relatedProjects.map((project) => (
                <li key={project.slug}>
                  <Link
                    to={`/projects/${project.slug}`}
                    className="text-sm text-slate-200 transition hover:text-blue-400"
                  >
                    {project.title} - {project.tagline}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        {relatedPosts.length > 0 && (
          <section className="mt-8">
            <h2 className="text-lg font-semibold text-white">
              Related articles
            </h2>
            <ul className="mt-3 space-y-2">
              {relatedPosts.map((item) => (
                <li key={item.slug}>
                  <Link
                    to={`/blog/${item.slug}`}
                    className="text-sm text-slate-200 transition hover:text-blue-400"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </article>

      <section className="border-t border-slate-800 bg-[#070c18]/60">
        <div className="mx-auto max-w-5xl px-6 py-14">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl font-bold tracking-tight">More articles</h2>
            <Link
              to="/blog"
              className="text-sm font-medium text-blue-400 transition hover:text-blue-300"
            >
              All articles
            </Link>
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {morePosts.map((item) => (
              <PostCard key={item.slug} post={item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPostPage;
