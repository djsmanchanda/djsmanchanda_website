//src/app/page.tsx
import React from "react";

import { Heading, Flex, Text, Button, Avatar, RevealFx, Arrow, Column } from "@/once-ui/components";
import { Projects } from "@/components/work/Projects";

import { baseURL, routes } from "@/app/resources";
import { home, about, person, newsletter } from "@/app/resources/content";
import { Mailchimp } from "@/components";
import { Posts } from "@/components/blog/Posts";
import TechBadge from "@/components/TechBadge";
import FeaturedProjectCard from "@/components/FeaturedProjectCard";
import FloatingParticles from "@/components/FloatingParticles";

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
      {/* Floating particles background */}
      <FloatingParticles />

      {/* Animation keyframes */}
      <style dangerouslySetInnerHTML={{
        __html: `
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
                href="/projects"
                variant="tertiary"
                size="s"
                arrowIcon
              >
                View all projects
              </Button>
            </Flex>

            <Flex fillWidth gap="m" wrap mobileDirection="column">
              <FeaturedProjectCard
                title="Youtrition"
                description="AI-powered personalized nutrition platform with real-time health data integration. Features 3-layered recommendation engine and predictive analytics dashboard."
                tags={['Next.js', 'AI/ML', 'TensorFlow']}
                gradientColors={{
                  start: 'rgba(16, 185, 129, 0.05)',
                  end: 'rgba(5, 150, 105, 0.05)'
                }}
                link="https://youtrition.djsmanchanda.com"
              />
              <FeaturedProjectCard
                title="F1 Championship Simulator"
                description="Full-stack F1 prediction platform with real-time data caching and Monte Carlo simulations. Features Cloudflare Workers backend and interactive scenario modeling."
                tags={['React', 'TypeScript', 'Cloudflare']}
                gradientColors={{
                  start: 'rgba(239, 68, 68, 0.05)',
                  end: 'rgba(185, 28, 28, 0.05)'
                }}
                link="https://f1.djsmanchanda.com"
              />
              <FeaturedProjectCard
                title="VogueFusion"
                description="2nd place winner at IIT Bombay Pulse Hackathon among 500+ teams. AI-powered fashion recommendation system."
                tags={['AI/ML', 'Computer Vision']}
                gradientColors={{
                  start: 'rgba(168, 85, 247, 0.05)',
                  end: 'rgba(236, 72, 153, 0.05)'
                }}
                link="https://github.com/djsmanchanda/VogueFusion_Pulse"
              />
              <FeaturedProjectCard
                title="RadixAI"
                description="1st place winner at HackStreet 2.0. AI-powered radiology assistant for medical diagnostics."
                tags={['Healthcare', 'Deep Learning']}
                gradientColors={{
                  start: 'rgba(59, 130, 246, 0.05)',
                  end: 'rgba(37, 99, 235, 0.05)'
                }}
                link="https://github.com/djsmanchanda/Synapse2.0_RadixAI"
              />
            </Flex>
          </Column>
        </RevealFx>

        {/* What I'm currently working on section */}
        <RevealFx translateY="8" delay={0.2}>
          <Column gap="24" paddingY="xl">
            <Heading as="h2" variant="display-strong-l" paddingBottom="m">
              What I'm currently working on
            </Heading>
            <div
              style={{
                background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.08) 0%, rgba(59, 130, 246, 0.08) 100%)',
                border: '1px solid rgba(139, 92, 246, 0.2)',
                borderRadius: '16px',
                padding: '32px',
                backdropFilter: 'blur(10px)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Animated glow effect */}
              <style dangerouslySetInnerHTML={{
                __html: `
                  @keyframes pulseGlow {
                    0%, 100% {
                      opacity: 0.3;
                      transform: scale(1);
                    }
                    50% {
                      opacity: 0.6;
                      transform: scale(1.05);
                    }
                  }
                  .current-work-glow {
                    position: absolute;
                    top: -50%;
                    right: -50%;
                    width: 200%;
                    height: 200%;
                    background: radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%);
                    animation: pulseGlow 4s ease-in-out infinite;
                    pointer-events: none;
                  }
                `
              }} />
              <div className="current-work-glow" />

              <Flex gap="16" direction="column" style={{ position: 'relative', zIndex: 1 }}>
                <Flex gap="12" vertical="center">
                  <div
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: 'rgba(139, 92, 246, 1)',
                      boxShadow: '0 0 12px rgba(139, 92, 246, 0.8)',
                      animation: 'pulse 2s ease-in-out infinite',
                    }}
                  />
                  <Text variant="label-default-s" onBackground="brand-medium">
                    IN PROGRESS
                  </Text>
                </Flex>

                <Heading as="h3" variant="heading-strong-l">
                  Music Taste Visualization with Machine Learning
                </Heading>

                <Text variant="body-default-l" onBackground="neutral-medium">
                  I'm working on a machine learning model that visualizes personal and global music tastes in 2D/3D
                  by creating vector embeddings of songs from their audio, lyrics, and other characteristics. The goal
                  is to create an interactive map where similar songs cluster together, revealing patterns in musical
                  preferences and discovering new music through spatial relationships.
                </Text>

                <Flex gap="8" wrap paddingTop="s">
                  <div style={{
                    padding: '6px 12px',
                    background: 'rgba(139, 92, 246, 0.15)',
                    border: '1px solid rgba(139, 92, 246, 0.3)',
                    borderRadius: '8px',
                  }}>
                    <Text variant="body-default-s" onBackground="brand-medium">Machine Learning</Text>
                  </div>
                  <div style={{
                    padding: '6px 12px',
                    background: 'rgba(139, 92, 246, 0.15)',
                    border: '1px solid rgba(139, 92, 246, 0.3)',
                    borderRadius: '8px',
                  }}>
                    <Text variant="body-default-s" onBackground="brand-medium">Vector Embeddings</Text>
                  </div>
                  <div style={{
                    padding: '6px 12px',
                    background: 'rgba(139, 92, 246, 0.15)',
                    border: '1px solid rgba(139, 92, 246, 0.3)',
                    borderRadius: '8px',
                  }}>
                    <Text variant="body-default-s" onBackground="brand-medium">Data Visualization</Text>
                  </div>
                  <div style={{
                    padding: '6px 12px',
                    background: 'rgba(139, 92, 246, 0.15)',
                    border: '1px solid rgba(139, 92, 246, 0.3)',
                    borderRadius: '8px',
                  }}>
                    <Text variant="body-default-s" onBackground="brand-medium">Audio Analysis</Text>
                  </div>
                </Flex>
              </Flex>
            </div>
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
