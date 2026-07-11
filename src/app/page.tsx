import React from "react";
import Image from "next/image";

import { Button, Column, Flex, Heading, Text } from "@/once-ui/components";
import FloatingParticles from "@/components/FloatingParticles";
import { ProjectShowcase } from "@/components/ProjectShowcase";
import { baseURL } from "@/app/resources";
import { home, person } from "@/app/resources/content";
import styles from "./home.module.scss";

export async function generateMetadata() {
  const title = home.title;
  const description = home.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}`,
      images: [{ url: ogImage, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Home() {
  return (
    <>
      <FloatingParticles />
      <Column maxWidth="m" gap="xl" horizontal="center" className={styles.homeShell}>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: person.name,
              jobTitle: person.role,
              url: `https://${baseURL}`,
              image: `https://${baseURL}/images/profilepic.jpg`,
              sameAs: [
                "https://github.com/djsmanchanda",
                "https://www.linkedin.com/in/divjot-singh-manchanda-910643251/",
              ],
            }),
          }}
        />

        <section className={styles.heroLayout} aria-labelledby="home-heading">
          <Column fillWidth paddingY="xl" gap="l" className={styles.heroCopy}>
            <Text variant="label-strong-s" onBackground="neutral-weak" className={styles.greeting}>
              Hi, I&apos;m Divjot Singh Manchanda —
            </Text>
            <Text variant="label-strong-s" onBackground="brand-weak">
              AI ENGINEER · PRODUCT BUILDER · OPEN TO NEW OPPORTUNITIES
            </Text>
            <Heading id="home-heading" as="h1" wrap="balance" variant="display-strong-l" className={styles.heroHeading}>
              {home.headline}
            </Heading>
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-l" className={styles.heroSubline}>
              {home.subline}
            </Text>
            <Flex gap="12" wrap marginTop="m">
              <Button href="mailto:djsmanchanda@gmail.com" variant="primary" size="m" arrowIcon>
                Let&apos;s talk
              </Button>
              <Button href="#selected-work" variant="secondary" size="m" arrowIcon>
                Explore recent work
              </Button>
              <Button href="/resume" variant="secondary" size="m" arrowIcon>
                Resume
              </Button>
            </Flex>
          </Column>

          <aside className={styles.profileCard} aria-label="Divjot Singh Manchanda">
            <div className={styles.profileFrame}>
              <Image
                src="/images/profilepic.jpg"
                alt="Portrait of Divjot Singh Manchanda"
                fill
                priority
                sizes="(max-width: 700px) 82vw, 19rem"
              />
            </div>
          </aside>
        </section>

        <section aria-label="How I work" className={styles.capabilityStrip}>
          <Flex fillWidth gap="m" wrap align="center">
            <Text variant="body-strong-m">AI applications</Text>
            <Text onBackground="neutral-weak" aria-hidden="true">/</Text>
            <Text variant="body-strong-m">Local-first tools</Text>
            <Text onBackground="neutral-weak" aria-hidden="true">/</Text>
            <Text variant="body-strong-m">Data products</Text>
            <Text onBackground="neutral-weak" aria-hidden="true">/</Text>
            <Text variant="body-strong-m">Systems that respect users</Text>
          </Flex>
        </section>

        <ProjectShowcase />

        <section aria-labelledby="working-style" className={styles.workingStyle}>
          <Column gap="m" style={{ maxWidth: "48rem" }}>
            <Text variant="label-strong-s" onBackground="brand-weak">HOW I LIKE TO WORK</Text>
            <Heading as="h2" id="working-style" variant="display-strong-s" wrap="balance">
              Curious enough to explore. Practical enough to finish.
            </Heading>
            <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance" style={{ lineHeight: 1.6 }}>
              I enjoy ambiguity at the beginning and discipline at the end: finding the real problem, building the smallest credible version, then making it reliable. I&apos;m especially excited by AI, developer tools, thoughtful consumer software, and teams that care about craft.
            </Text>
            <Flex gap="12" wrap marginTop="s">
              <Button href="mailto:djsmanchanda@gmail.com" variant="primary" size="m" arrowIcon>
                Get in touch
              </Button>
              <Button href="https://github.com/djsmanchanda" target="_blank" rel="noreferrer" variant="secondary" size="m" arrowIcon>
                GitHub
              </Button>
            </Flex>
          </Column>
        </section>
      </Column>
    </>
  );
}
