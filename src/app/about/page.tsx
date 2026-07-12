import type { ReactNode } from "react";
//src/app/about/page.tsx
import {
  Avatar,
  Button,
  Column,
  Flex,
  Heading,
  SmartImage,
  Tag,
  Text,
} from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import TableOfContents from "@/components/about/TableOfContents";
import styles from "@/components/about/about.module.scss";
import { person, about, social } from "@/app/resources/content";

export async function generateMetadata() {
  const title = about.title;
  const description = about.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/about`,
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

const ExperienceImages = ({ images }: { images: any[] }) =>
  images.length > 0 ? (
    <Flex fillWidth paddingTop="m" gap="12" wrap>
      {images.map((image, index) => (
        <Flex
          key={`${image.src}-${index}`}
          border="neutral-medium"
          radius="m"
          minWidth={image.width}
          height={image.height}
        >
          <SmartImage
            enlarge
            radius="m"
            sizes={image.width.toString()}
            alt={image.alt}
            src={image.src}
          />
        </Flex>
      ))}
    </Flex>
  ) : null;

const ExperienceEntry = ({ experience }: { experience: any }) => (
  <Column fillWidth>
    <div className={styles.itemRow}>
      <h3 id={experience.company} className={styles.itemTitle}>
        {experience.company}
      </h3>
      <span className={styles.itemMeta}>{experience.timeframe}</span>
    </div>
    <p className={styles.itemRole}>{experience.role}</p>
    <Column as="ul" gap="8" paddingTop="8">
      {experience.achievements.map((achievement: ReactNode, index: number) => (
        <Text
          as="li"
          variant="body-default-m"
          onBackground="neutral-weak"
          key={`${experience.company}-achievement-${index}`}
        >
          {achievement}
        </Text>
      ))}
    </Column>
    <ExperienceImages images={experience.images} />
  </Column>
);

export default function About() {
  const structure = [
    {
      title: about.intro.title,
      display: about.intro.display,
      items: [],
    },
    {
      title: about.work.title,
      display: about.work.display,
      items: about.work.experiences.map((experience) => experience.company),
    },
    {
      title: about.technical.title,
      display: about.technical.display,
      items: about.technical.skills.map((skill) => skill.title),
    },
    {
      title: about.studies.title,
      display: about.studies.display,
      items: about.studies.institutions.map((institution) => institution.name),
    },
    {
      title: about.hackathon.title,
      display: about.hackathon.display,
      items: about.hackathon.experiences.map((experience) => experience.company),
    },
  ];

  return (
    <Column maxWidth="m" horizontal="center" className={styles.page}>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: person.name,
            jobTitle: person.role,
            description: about.intro.description,
            url: `https://${baseURL}/about`,
            image: `${baseURL}/images/${person.avatar}`,
            sameAs: social
              .filter((item) => item.link && !item.link.startsWith("mailto:"))
              .map((item) => item.link),
            worksFor: {
              "@type": "Organization",
              name: about.work.experiences[0].company || "",
            },
          }),
        }}
      />

      {about.tableOfContent.display && (
        <Column
          left="32"
          style={{ top: "50%", transform: "translateY(-50%)" }}
          position="fixed"
          paddingLeft="8"
          gap="16"
          hide="s"
        >
          <TableOfContents structure={structure} about={{ tableOfContent: about.tableOfContent }} />
        </Column>
      )}

      <header className={styles.header} id={about.intro.title}>
        {about.avatar.display && (
          <div className={styles.avatarWrap}>
            <Avatar
              src={person.avatar}
              size="xl"
              style={{ width: "200px", height: "200px" }}
            />
          </div>
        )}
        <Column gap="12" className={styles.headerText}>
          <Text variant="label-strong-s" onBackground="brand-weak" className={styles.eyebrow}>
            About me
          </Text>
          <Heading as="h1" variant="display-strong-l" className={styles.name}>
            {person.name}
          </Heading>
          <Text onBackground="neutral-weak" className={styles.role}>
            {person.role}
          </Text>
          {person.languages.length > 0 && (
            <Flex wrap gap="8">
              {person.languages.map((language) => (
                <Tag key={language} size="l">
                  {language}
                </Tag>
              ))}
            </Flex>
          )}
          {about.calendar.display && (
            <Flex wrap gap="8" paddingTop="8">
              <Button
                href={about.calendar.link}
                prefixIcon="calendar"
                label="Schedule a call"
                size="s"
                variant="primary"
              />
            </Flex>
          )}
        </Column>
      </header>

      {about.intro.display && (
        <section className={styles.section} aria-label={about.intro.title}>
          <Text variant="body-default-l" onBackground="neutral-weak" className={styles.intro}>
            {about.intro.description}
          </Text>
        </section>
      )}

      {about.work.display && (
        <section className={styles.section} aria-labelledby={about.work.title}>
          <Column gap="l">
            <Heading
              as="h2"
              id={about.work.title}
              variant="display-strong-s"
              className={styles.sectionHeading}
            >
              {about.work.title}
            </Heading>
            {about.work.experiences.map((experience, index) => (
              <ExperienceEntry
                key={`${experience.company}-${experience.role}-${index}`}
                experience={experience}
              />
            ))}
          </Column>
        </section>
      )}

      {about.technical.display && (
        <section className={styles.section} aria-labelledby={about.technical.title}>
          <Column gap="l">
            <Heading
              as="h2"
              id={about.technical.title}
              variant="display-strong-s"
              className={styles.sectionHeading}
            >
              {about.technical.title}
            </Heading>
            {about.technical.skills.map((skill) => (
              <Column key={skill.title} fillWidth gap="4">
                <h3 className={styles.itemTitle}>{skill.title}</h3>
                <Text variant="body-default-m" onBackground="neutral-weak">
                  {skill.description}
                </Text>
                {skill.images && skill.images.length > 0 && (
                  <ExperienceImages images={skill.images} />
                )}
              </Column>
            ))}
          </Column>
        </section>
      )}

      {about.studies.display && (
        <section className={styles.section} aria-labelledby={about.studies.title}>
          <Column gap="l">
            <Heading
              as="h2"
              id={about.studies.title}
              variant="display-strong-s"
              className={styles.sectionHeading}
            >
              {about.studies.title}
            </Heading>
            {about.studies.institutions.map((institution) => (
              <Column key={institution.name} fillWidth gap="4">
                <h3 id={institution.name} className={styles.itemTitle}>
                  {institution.name}
                </h3>
                <Text variant="body-default-m" onBackground="neutral-weak">
                  {institution.description}
                </Text>
              </Column>
            ))}
          </Column>
        </section>
      )}

      {about.hackathon.display && (
        <section className={styles.section} aria-labelledby={about.hackathon.title}>
          <Column gap="l">
            <Heading
              as="h2"
              id={about.hackathon.title}
              variant="display-strong-s"
              className={styles.sectionHeading}
            >
              {about.hackathon.title}
            </Heading>
            <div className={styles.grid}>
              {about.hackathon.experiences.map((experience, index) => (
                <article
                  className={styles.card}
                  key={`${experience.company}-${index}`}
                >
                  <div className={styles.cardTopline}>
                    <p>{experience.timeframe}</p>
                    <span>{experience.role}</span>
                  </div>
                  <h3 id={experience.company}>{experience.company}</h3>
                  {experience.achievements.map(
                    (achievement: ReactNode, achievementIndex: number) => (
                      <p
                        className={styles.summary}
                        key={`${experience.company}-summary-${achievementIndex}`}
                      >
                        {achievement}
                      </p>
                    )
                  )}
                  <ExperienceImages images={experience.images} />
                </article>
              ))}
            </div>
          </Column>
        </section>
      )}
    </Column>
  );
}
