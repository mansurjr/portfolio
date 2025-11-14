import { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "../../data/data";
import Project from "./project";

type Props = {
  params: { project: string };
};

const fallbackImage =
  "https://raw.githubusercontent.com/diyorbekrustamjonov/xattab.uz/main/public/images/illustrations/projects.png";

// =====================
//     METADATA
// =====================
export function generateMetadata({ params }: Props): Metadata {
  const slug = params.project;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  return {
    title: `${project.name} | Project`,
    description: project.tagline,
    metadataBase: new URL("https://atayev.uz"),
    openGraph: {
      title: project.name,
      description: project.tagline,
      url: `https://atayev.uz/projects/${project.slug}`,
      images: fallbackImage,
      type: "website",
    },
  };
}

// =====================
//        PAGE
// =====================
export default function Page({ params }: Props) {
  const slug = params.project;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <div>
      <Project params={{ project: slug }} />
    </div>
  );
}
