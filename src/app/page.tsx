//src/app/page.tsx
import React from "react";

import { Heading, Flex, Text, Button, Avatar, RevealFx, Arrow, Column } from "@/once-ui/components";
import { Projects } from "@/components/work/Projects";

import { baseURL, routes } from "@/app/resources";
import { home, about, person, newsletter } from "@/app/resources/content";
import { Mailchimp } from "@/components";
import { Posts } from "@/components/blog/Posts";
import WarpName from "@/components/WarpName";
import TechBadge from "@/components/TechBadge";
import FeaturedProjectCard from "@/components/FeaturedProjectCard";

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

export default function Home() {
  return (
    <>
      {/* Animated gradient background */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes gradientShift {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.8; }
          }
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `
      }} />
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
          background: 'radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255, 119, 168, 0.1) 0%, transparent 50%), radial-gradient(circle at 40% 20%, rgba(138, 180, 248, 0.1) 0%, transparent 50%)',
          animation: 'gradientShift 15s ease infinite',
        }}
      />

      <Column maxWidth="m" gap="xl" horizontal="center">
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: home.title,
              description: home.description,
              url: `https://${baseURL}`,
              image: `${baseURL}/og?title=${encodeURIComponent(home.title)}`,
              publisher: {
                "@type": "Person",
                name: person.name,
                image: {
                  "@type": "ImageObject",
                  url: `${baseURL}${person.avatar}`,
                },
              },
            }),
          }}
        />

        {/* Enhanced Hero Section */}
        <Column fillWidth paddingY="xl" gap="m">
          <Column maxWidth="s">
            <RevealFx translateY="4" fillWidth horizontal="start" paddingBottom="m">
              <Heading wrap="balance" variant="display-strong-l" style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                {home.headline}
              </Heading>
            </RevealFx>
            <RevealFx translateY="8" delay={0.2} fillWidth horizontal="start" paddingBottom="m">
              <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
                {home.subline}
              </Text>
            </RevealFx>

            {/* Stats Section */}
            <RevealFx translateY={10} delay={0.3} fillWidth horizontal="start" paddingBottom="m">
              <Flex gap="16" wrap style={{ marginTop: '1.5rem', marginBottom: '1.5rem' }}>
                <div style={{
                  padding: '1rem 1.5rem',
                  background: 'rgba(102, 126, 234, 0.1)',
                  borderRadius: '12px',
                  border: '1px solid rgba(102, 126, 234, 0.2)',
                  backdropFilter: 'blur(10px)'
                }}>
                  <Text variant="heading-strong-l" style={{ color: '#667eea' }}>7+</Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">Hackathons Won</Text>
                </div>
                <div style={{
                  padding: '1rem 1.5rem',
                  background: 'rgba(118, 75, 162, 0.1)',
                  borderRadius: '12px',
                  border: '1px solid rgba(118, 75, 162, 0.2)',
                  backdropFilter: 'blur(10px)'
                }}>
                  <Text variant="heading-strong-l" style={{ color: '#764ba2' }}>8.8</Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">CGPA</Text>
                </div>
                <div style={{
                  padding: '1rem 1.5rem',
                  background: 'rgba(138, 180, 248, 0.1)',
                  borderRadius: '12px',
                  border: '1px solid rgba(138, 180, 248, 0.2)',
                  backdropFilter: 'blur(10px)'
                }}>
                  <Text variant="heading-strong-l" style={{ color: '#8ab4f8' }}>AI</Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">Engineer</Text>
                </div>
              </Flex>
            </RevealFx>

            <RevealFx translateY="12" delay={0.4} horizontal="start">
              <Flex gap="12">
                <Button
                  id="about"
                  data-border="rounded"
                  href="/about"
                  variant="secondary"
                  size="m"
                  arrowIcon
                >
                  <Flex gap="8" vertical="center">
                    {about.avatar.display && (
                      <Avatar
                        style={{ marginLeft: "-0.75rem", marginRight: "0.25rem" }}
                        src={person.avatar}
                        size="m"
                      />
                    )}
                    {about.title}
                  </Flex>
                </Button>
                <Button
                  id="resume"
                  data-border="rounded"
                  href="/resume"
                  variant="primary"
                  size="m"
                  target="_blank"
                  rel="noopener noreferrer"
                  arrowIcon
                >
                  Resume
                </Button>
              </Flex>
            </RevealFx>
          </Column>
        </Column>

        {/* Tech Stack Section */}
        <RevealFx translateY="16" delay={0.5}>
          <Column fillWidth gap="l" paddingY="m">
            <Heading as="h2" variant="display-strong-xs" align="center">
              Tech Stack
            </Heading>
            <Flex fillWidth horizontal="center" wrap gap="8" style={{ justifyContent: 'center' }}>
              {['Python', 'PyTorch', 'TensorFlow', 'Next.js', 'React', 'Docker', 'Arduino', 'ESP32', 'Supabase', 'OpenAI'].map((tech, i) => (
                <TechBadge key={tech} tech={tech} index={i} />
              ))}
            </Flex>
          </Column>
        </RevealFx>

        {/* Featured Projects Section */}
        <RevealFx translateY={20} delay={0.6}>
          <Column fillWidth gap="l" paddingY="l">
            <Flex fillWidth horizontal="space-between" vertical="center" mobileDirection="column" gap="m">
              <Heading as="h2" variant="display-strong-xs">
                Featured Projects
              </Heading>
              <Button
                href="/work"
                variant="tertiary"
                size="s"
                arrowIcon
              >
                View all projects
              </Button>
            </Flex>

            <Flex fillWidth gap="m" wrap mobileDirection="column">
              <FeaturedProjectCard
                title="F1 Championship Simulator"
                description="Full-stack F1 prediction platform with real-time data caching and Monte Carlo simulations. Features Cloudflare Workers backend and interactive scenario modeling."
                tags={['React', 'TypeScript', 'Cloudflare Workers']}
                gradientColors={{
                  start: 'rgba(220, 38, 38, 0.05)',
                  end: 'rgba(239, 68, 68, 0.05)'
                }}
                link="https://f1.djsmanchanda.com"
              />
              <FeaturedProjectCard
                title="VogueFusion"
                description="2nd place winner at IIT Bombay Pulse Hackathon among 500+ teams. AI-powered fashion recommendation system."
                tags={['AI/ML', 'Computer Vision']}
                gradientColors={{
                  start: 'rgba(102, 126, 234, 0.05)',
                  end: 'rgba(118, 75, 162, 0.05)'
                }}
              />
              <FeaturedProjectCard
                title="RadixAI"
                description="1st place winner at HackStreet 2.0. AI-powered radiology assistant for medical diagnostics."
                tags={['Healthcare', 'Deep Learning']}
                gradientColors={{
                  start: 'rgba(138, 180, 248, 0.05)',
                  end: 'rgba(102, 126, 234, 0.05)'
                }}
              />
            </Flex>
          </Column>
        </RevealFx>

        {routes["/blog"] && (
          <Flex fillWidth gap="24" mobileDirection="column">
            <Flex flex={1} paddingLeft="l">
              <Heading as="h2" variant="display-strong-xs" wrap="balance">
                Latest from the blog
              </Heading>
            </Flex>
            <Flex flex={3} paddingX="20">
              <Posts range={[1, 2]} columns="2" />
            </Flex>
          </Flex>
        )}
        {/* <Projects range={[2]} /> */}
      </Column>
    </>
  );
}
