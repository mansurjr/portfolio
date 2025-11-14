import Link from "next/link";
import Image from "next/image";
import { posts } from "@/app/data/data";

type FeaturedPostsProps = {
  params?: { post?: string }; // matches how we pass it from PostPage
};

export default function FeaturedPosts({ params }: FeaturedPostsProps) {
  return (
    <>
      {posts.map((p) =>
        p.featured !== true || p.isPublished !== true ? null : (
          <article
            key={p.id}
            className={`mb-4 ${
              p.slug === params?.post ? "hidden" : "flex lg:flex-row flex-col"
            }`}
          >
            <Link
              href={`/blog/${p.slug}`}
              className="flex flex-col gap-4 dark:bg-primary-bg bg-secondary-bg p-5 rounded-lg border dark:border-zinc-800 border-zinc-200"
            >
              <Image
                src={p.coverImage?.image || ""}
                className="dark:bg-zinc-800 bg-zinc-100 rounded-md object-cover"
                alt={p.coverImage?.alt || p.title}
                width={400}
                height={230}
                quality={100}
                loading="lazy"
              />
              <div className="max-w-lg">
                <h2 className="max-w-sm text-lg tracking-tight mb-4">
                  {p.title}
                </h2>
                <p className="dark:text-zinc-400 text-zinc-600 text-sm">
                  {p.description.slice(0, 80).padEnd(83, "...")}
                </p>
              </div>
            </Link>
          </article>
        )
      )}
    </>
  );
}
