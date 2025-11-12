import React from "react";
import { Heading, Flex, Text, Column, RevealFx, Tag } from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { work, person, internships } from "@/app/resources/content";

export async function generateMetadata() {
  const title = work.title;
  const description = work.description;
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
    <Column maxWidth="m" gap="xl">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: work.title,
            description: work.description,
            url: `https://${baseURL}/work`,
            author: {
              "@type": "Person",
              name: person.name,
            },
          }),
        }}
      />

      {/* Header Section */}
      <RevealFx translateY="4">
        <Heading as="h1" variant="display-strong-l" paddingBottom="l">
          {work.title}
        </Heading>
        <Text variant="body-default-l" onBackground="neutral-weak">
          {work.description}
        </Text>
      </RevealFx>

      {/* Work Experience List */}
      <Column gap="xl" paddingY="l">
        {experiences.map((experience, index) => (
          <RevealFx key={index} translateY="8" delay={index * 0.1}>
            <Column
              gap="m"
              paddingY="l"
              paddingX="l"
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '16px',
                transition: 'all 0.3s ease',
              }}
            >
              {/* Company and Role Header */}
              <Flex fillWidth horizontal="space-between" vertical="start" mobileDirection="column" gap="m">
                <Column gap="4">
                  <Heading as="h2" variant="heading-strong-l">
                    {experience.company}
                  </Heading>
                  <Flex gap="8" vertical="center" wrap>
                    <Text variant="body-default-m" onBackground="brand-medium">
                      {experience.role}
                    </Text>
                    <Text variant="body-default-s" onBackground="neutral-weak">
                      •
                    </Text>
                    <Text variant="body-default-s" onBackground="neutral-weak">
                      {experience.location}
                    </Text>
                  </Flex>
                </Column>
                <Text variant="body-default-s" onBackground="neutral-weak" style={{ whiteSpace: 'nowrap' }}>
                  {experience.timeframe}
                </Text>
              </Flex>

              {/* Description */}
              <Text variant="body-default-m" onBackground="neutral-weak">
                {experience.description}
              </Text>

              {/* Achievements */}
              <Column gap="8" paddingTop="s">
                {experience.achievements.map((achievement, achievementIndex) => (
                  <Flex key={achievementIndex} gap="12" vertical="start">
                    <Text variant="body-default-s" onBackground="brand-medium" style={{ marginTop: '0.25rem' }}>
                      •
                    </Text>
                    <Text variant="body-default-m" onBackground="neutral-medium">
                      {achievement}
                    </Text>
                  </Flex>
                ))}
              </Column>

              {/* Tags */}
              <Flex gap="8" wrap paddingTop="s">
                {experience.tags.map((tag, tagIndex) => (
                  <Tag key={tagIndex} size="s" variant="neutral">
                    {tag}
                  </Tag>
                ))}
              </Flex>
            </Column>
          </RevealFx>
        ))}
      </Column>
    </Column>
  );
}
