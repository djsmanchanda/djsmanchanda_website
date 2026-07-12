import { Column, Heading, Text } from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { work, person, internships } from "@/app/resources/content";
import styles from "./work.module.scss";

export async function generateMetadata() {
  const title = work.title;
  const description = internships.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/work`,
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

export default function Work() {
  const experiences = internships.experiences;

  return (
    <Column maxWidth="m" horizontal="center" className={styles.page}>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: work.title,
            description: internships.description,
            url: `https://${baseURL}/work`,
            author: {
              "@type": "Person",
              name: person.name,
            },
          }),
        }}
      />

      <Column gap="12" className={styles.header}>
        <Text variant="label-strong-s" onBackground="brand-weak" className={styles.eyebrow}>
          Work
        </Text>
        <Heading as="h1" variant="display-strong-l" className={styles.title}>
          {work.title}
        </Heading>
        <Text onBackground="neutral-weak" className={styles.subtitle}>
          Internships and research roles where I turned open-ended problems into working systems.
        </Text>
      </Column>

      <div className={styles.list}>
        {experiences.map((experience) => (
          <article key={experience.company} className={styles.card}>
            <div className={styles.cardTop}>
              <h2 className={styles.company}>{experience.company}</h2>
              <span className={styles.meta}>{experience.timeframe}</span>
            </div>
            <p className={styles.role}>
              {experience.role} · {experience.location}
            </p>
            <p className={styles.description}>{experience.description}</p>
            <ul className={styles.achievements}>
              {experience.achievements.map((achievement) => (
                <li key={achievement}>{achievement}</li>
              ))}
            </ul>
            <div className={styles.tags}>
              {experience.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Column>
  );
}
