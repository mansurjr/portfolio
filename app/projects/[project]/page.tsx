import { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "../../data/data";
import Project from "./project";

type Props = {
  params: Promise<{ project: string }>;
};

const fallbackImage =
  "https://raw.githubusercontent.com/diyorbekrustamjonov/xattab.uz/main/public/images/illustrations/projects.png";

// =====================
//     METADATA
// =====================
export async function generateMetadata({ params }: Props) : Promise<Metadata>{
  const { project: projectSlug } = await params;
  const project = projects.find((p) => p.slug === projectSlug);
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
export default async function ProjectPage({ params }: Props) {
  const { project: projectSlug } = await params;
  const project = projects.find((p) => p.slug === projectSlug);
  if (!project) notFound();

  return (
    <div>
      <Project params={{ project: (await params).project }} />
    </div>
  );
}
