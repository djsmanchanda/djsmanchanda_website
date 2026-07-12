import "@/once-ui/styles/index.scss";
import "@/once-ui/tokens/index.scss";

import { Analytics } from "@vercel/analytics/next";
import { Space_Grotesk } from "next/font/google";
import { Footer, Header, RouteGuard } from "@/components";
import { baseURL, effects, style } from "@/app/resources";

import { person, home } from "@/app/resources/content";
import { Background, Column, Flex, ToastProvider } from "@/once-ui/components";

export async function generateMetadata() {
  return {
    metadataBase: new URL(`https://${baseURL}`),
    title: home.title,
    description: home.description,
    openGraph: {
      title: `${person.firstName}'s Portfolio`,
      description: "AI engineer and product builder creating practical software across AI, local tools, and the web.",
      url: baseURL,
      siteName: `${person.firstName}'s Portfolio`,
      locale: "en_US",
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <Flex
      as="html"
      lang="en"
      background="page"
      data-neutral={style.neutral}
      data-brand={style.brand}
      data-accent={style.accent}
      data-solid={style.solid}
      data-solid-style={style.solidStyle}
      data-theme={style.theme}
      data-border={style.border}
      data-surface={style.surface}
      data-transition={style.transition}
      className={`font-vars ${spaceGrotesk.variable}`}

    >
      <ToastProvider>
        <Column style={{ minHeight: "100vh" }} as="body" fillWidth margin="0" padding="0">
          <Background

            gradient={{
              display: effects.gradient.display,
              x: effects.gradient.x,
              y: effects.gradient.y,
              width: effects.gradient.width,
              height: effects.gradient.height,
              tilt: effects.gradient.tilt,
              colorStart: effects.gradient.colorStart,
              colorEnd: effects.gradient.colorEnd,
              opacity: effects.gradient.opacity as
                | 0
                | 10
                | 20
                | 30
                | 40
                | 50
                | 60
                | 70
                | 80
                | 90
                | 100,
            }}
            dots={{
              display: effects.dots.display,
              color: effects.dots.color,
              size: effects.dots.size as any,
              opacity: effects.dots.opacity as any,
            }}
            grid={{
              display: effects.grid.display,
              color: effects.grid.color,
              width: effects.grid.width as any,
              height: effects.grid.height as any,
              opacity: effects.grid.opacity as any,
            }}
            lines={{
              display: effects.lines.display,
              opacity: effects.lines.opacity as any,
            }}
          />
          <Flex fillWidth minHeight="16"></Flex>
          <Header />
          <Flex
            position="relative"
            zIndex={0}
            fillWidth
            paddingY="l"
            paddingX="l"
            horizontal="center"
            flex={1}
          >
            <Flex horizontal="center" fillWidth minHeight="0">
              <RouteGuard>{children}</RouteGuard>
            </Flex>
          </Flex>
          <Footer />
          <Analytics />
        </Column>
      </ToastProvider>
    </Flex>
  );
}
