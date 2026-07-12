import { getPosts } from "@/app/utils/utils";
import { Column, Heading, Text } from "@/once-ui/components";
import { Projects } from "@/components/work/Projects";
import { baseURL } from "@/app/resources";
import { person, projects } from "@/app/resources/content";
import styles from "../work/work.module.scss";

export async function generateMetadata() {
  const title = projects.title;
  const description = projects.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/projects/`,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function ProjectsPage() {
  let allProjects = getPosts(["projects", "projects"]);

  return (
    <Column maxWidth="m" horizontal="center" className={styles.page}>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            headline: projects.title,
            description: projects.description,
            url: `https://${baseURL}/projects`,
            image: `${baseURL}/og?title=Design%20Projects`,
            author: {
              "@type": "Person",
              name: person.name,
            },
            hasPart: allProjects.map((project) => ({
              "@type": "CreativeWork",
              headline: project.metadata.title,
              description: project.metadata.summary,
              url: `https://${baseURL}/projects/${project.slug}`,
              image: `${baseURL}/${project.metadata.image}`,
            })),
          }),
        }}
      />
      <Column gap="12" className={styles.header}>
        <Text variant="label-strong-s" onBackground="brand-weak" className={styles.eyebrow}>
          Projects
        </Text>
        <Heading as="h1" variant="display-strong-l" className={styles.title}>
          {projects.title}
        </Heading>
        <Text onBackground="neutral-weak" className={styles.subtitle}>
          {projects.description}
        </Text>
      </Column>
      <Projects />
    </Column>
  );
}
