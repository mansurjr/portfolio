import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { posts } from "@/app/data/data";
import { BiChevronRight, BiCalendar } from "react-icons/bi";
import { CustomPortableText } from "../../components/shared/CustomPortableText";
import { formatDate } from "../../utils/date";
import SharePost from "../../components/shared/SharePost";
import FeaturedPosts from "../../components/pages/FeaturedPosts";
import { Slide } from "../../animation/Slide";

type Props = {
  params: { post: string };
};

const fallbackImage =
  "https://raw.githubusercontent.com/diyorbekrustamjonov/xattab.uz/main/public/images/illustrations/blog.png";


// =====================
//     METADATA
// =====================
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { post } = params;
  const article = posts.find((p) => p.slug === post);

  if (!article) notFound();

  return {
    title: article.title,
    description: article.description,
    metadataBase: new URL("https://atayev.uz"),
    keywords: article.tags,
    alternates: {
      canonical:
        article.canonicalLink || `https://atayev.uz/blog/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.description,
      url: `https://atayev.uz/blog/${article.slug}`,
      type: "article",
      siteName: "atayev.uz",
      images: fallbackImage,
      authors: article.author.name,
      tags: article.tags,
      publishedTime: article.createdAt,
      modifiedTime: article.updatedAt || undefined,
    },
    twitter: {
      title: article.title,
      description: article.description,
      images: fallbackImage,
      creator: `@${article.author.twitterUrl.split("twitter.com/")[1]}`,
      card: "summary_large_image",
    },
  };
}


// =====================
//        PAGE
// =====================
export default async function PostPage({ params }: Props) {
  const { post } = params;
  const article = posts.find((p) => p.slug === post);

  if (!article) notFound();

  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6">
      <header>
        <Slide className="relative flex items-center gap-x-2 border-b dark:border-zinc-800 border-zinc-200 pb-8">
          <Link
            href="/blog"
            className="whitespace-nowrap dark:text-zinc-400 text-zinc-400 hover:dark:text-white hover:text-zinc-700 text-sm border-b dark:border-zinc-700 border-zinc-200"
          >
            cd ..
          </Link>
          <BiChevronRight />
          <p className="text-zinc-400 text-sm truncate">{article.title}</p>
        </Slide>
      </header>

      <article>
        <Slide className="flex lg:flex-row flex-col relative" delay={0.1}>
          {/* LEFT CONTENT */}
          <div className="min-h-full lg:border-r dark:border-zinc-800 border-zinc-200 basis-3/4 pt-10 pb-4 lg:pr-6 px-0">
            <div className="flex items-center gap-x-4 text-md mb-8 dark:text-zinc-400 text-zinc-600">
              <div className="flex items-center gap-x-2">
                <BiCalendar />
                <time dateTime={article.date || article.createdAt}>
                  {formatDate(article.date || article.createdAt)}
                </time>
              </div>
            </div>

            <h1 className="font-incognito font-semibold tracking-tight sm:text-[2.5rem] leading-tight text-3xl mb-4">
              {article.title}
            </h1>

            <p className="dark:text-zinc-400 text-zinc-600 max-w-2xl">
              {article.description}
            </p>

            <div className="relative w-full pt-[52.5%] mt-12">
              <Image
                fill
                className="rounded-xl border dark:border-zinc-800 border-zinc-100 object-cover"
                src={article.coverImage?.image || fallbackImage}
                alt={article.coverImage?.alt || article.title}
                quality={100}
              />
            </div>

            <div className="mt-8 dark:text-zinc-400 text-zinc-600 leading-relaxed tracking-tight text-lg">
              <PortableText
                value={article.body as any}
                components={CustomPortableText}
              />
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <aside className="flex flex-col gap-y-8 sticky top-2 basis-1/4 py-10 lg:px-6 px-0">
            <section className="border-b dark:border-zinc-800 border-zinc-200 pb-10">
              <p className="dark:text-zinc-400 text-zinc-500 text-sm">
                Written By
              </p>

              <address className="flex items-center gap-x-3 mt-4 not-italic">
                <div className="relative w-12 h-12">
                  <Image
                    fill
                    src={article.author.photo.image}
                    alt={article.author.photo.alt}
                    className="rounded-full object-cover dark:bg-zinc-800 bg-zinc-300"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-lg tracking-tight">
                    {article.author.name}
                  </h3>
                  <a
                    href={article.author.twitterUrl}
                    className="text-blue-500 text-sm"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    @{article.author.twitterUrl.split("twitter.com/")[1]}
                  </a>
                </div>
              </address>
            </section>

            <section className="border-b dark:border-zinc-800 border-zinc-200 pb-10">
              <h3 className="text-xl font-semibold tracking-tight mb-4">Tags</h3>
              <ul className="flex flex-wrap items-center gap-2">
                {article.tags.map((tag, i) => (
                  <li
                    key={i}
                    className="dark:bg-primary-bg bg-zinc-100 border dark:border-zinc-800 border-zinc-200 rounded-md px-2 py-1 text-sm"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </section>

            <SharePost
              title={article.title}
              slug={article.slug}
              description={article.description}
            />

            <section className="border-b dark:border-zinc-800 border-zinc-200 pb-10">
              <h3 className="text-xl font-semibold tracking-tight mb-4">
                Featured
              </h3>
              <FeaturedPosts params={post} />
            </section>
          </aside>
        </Slide>
      </article>
    </main>
  );
}
