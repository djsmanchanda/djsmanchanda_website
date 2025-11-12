"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Fade, Flex, Line, ToggleButton, IconButton } from "@/once-ui/components";
import styles from "@/components/Header.module.scss";

import { routes, display } from "@/app/resources";
import { person, social, home, about, blog, projects, work, gallery } from "@/app/resources/content";

type TimeDisplayProps = {
  timeZone: string;
  locale?: string;
  locationLabel?: string; // Optional label to show the location name
  showSeconds?: boolean; // Option to hide seconds for cleaner look
};

const TimeDisplay: React.FC<TimeDisplayProps> = ({ 
  timeZone, 
  locale = "en-GB", 
  locationLabel,
  showSeconds = true 
}) => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        ...(showSeconds && { second: "2-digit" }),
        hour12: false,
      };
      const timeString = new Intl.DateTimeFormat(locale, options).format(now);
      setCurrentTime(timeString);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, [timeZone, locale, showSeconds]);

  return (
    <Flex gap="4" vertical="center">
      {locationLabel && (
        <span style={{ fontSize: '0.75rem', opacity: 0.7 }}>
          {locationLabel}
        </span>
      )}
      <span>{currentTime}</span>
    </Flex>
  );
};

export default TimeDisplay;

export const Header = () => {
  const pathname = usePathname() ?? "";

  return (
    <>
      <Fade hide="s" fillWidth position="fixed" height="80" zIndex={9} />
      <Fade show="s" fillWidth position="fixed" bottom="0" to="top" height="80" zIndex={9} />
      <Flex
        fitHeight
        className={styles.position}
        as="header"
        zIndex={9}
        fillWidth
        padding="12"
        horizontal="center"
      >
        <Flex paddingLeft="12" fillWidth vertical="center" textVariant="body-default-s">
          {display.location && (
            <Flex hide="s" direction="column" gap="4">
              <span>San Francisco</span>
                            {display.time && (
                <>
                  <TimeDisplay 
                    timeZone={person.location} 
                    showSeconds={true}
                  />
                </>
              )}
            </Flex>
          )}
        </Flex>
        <Flex fillWidth horizontal="center">
          <Flex
            background="surface"
            border="neutral-medium"
            radius="l-8"
            shadow="l"
            padding="12"
            horizontal="center"
          >
            <Flex gap="4" vertical="center" textVariant="body-default-s" paddingRight="8">
              {routes["/"] && (
                <ToggleButton prefixIcon="home" href="/" selected={pathname === "/"} />
              )}
              <Line vert maxHeight="24" />

              {routes["/about"] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="person"
                    href="/about"
                    label={about.label}
                    selected={pathname === "/about"}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="person"
                    href="/about"
                    selected={pathname === "/about"}
                  />
                </>
              )}

              {routes["/projects"] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="grid"
                    href="/projects"
                    label={projects.label}
                    selected={pathname.startsWith("/projects")}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="grid"
                    href="/projects"
                    selected={pathname.startsWith("/projects")}
                  />
                </>
              )}

              {routes["/work"] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="briefcase"
                    href="/work"
                    label={work.label}
                    selected={pathname.startsWith("/work")}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="briefcase"
                    href="/work"
                    selected={pathname.startsWith("/work")}
                  />
                </>
              )}

              {routes["/blog"] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="book"
                    href="/blog"
                    label={blog.label}
                    selected={pathname.startsWith("/blog")}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="book"
                    href="/blog"
                    selected={pathname.startsWith("/blog")}
                  />
                </>
              )}
              
              {routes["/gallery"] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="gallery"
                    href="/gallery"
                    label={gallery.label}
                    selected={pathname.startsWith("/gallery")}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="gallery"
                    href="/gallery"
                    selected={pathname.startsWith("/gallery")}
                  />
                </>
              )}
              {routes["/resume"] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="resume"
                    href="/resume"
                    label="Resume"
                    selected={pathname.startsWith("/resume")}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="resume"
                    href="/resume"
                    selected={pathname.startsWith("/resume")}
                  />
                </>
              )}
              <Line vert maxHeight="24" />
              {/* Social buttons group */}
              <Flex gap="16" vertical="center" paddingLeft="8">
                {social.map(
                  (item) =>
                    item.link && (
                      <IconButton
                        key={item.name}
                        href={item.link}
                        icon={item.icon}
                        tooltip={item.name}
                        size="s"
                        variant="ghost"
                      />
                    ),
                )}
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex fillWidth horizontal="end" vertical="center">
          <Flex
            paddingRight="16"
            horizontal="end"
            vertical="center"
            textVariant="body-default-s"
            gap="8"
          >
            <Flex hide="s" direction="column" gap="4">
              {display.time && (
                <>
                  <span>Mumbai</span>
                  <TimeDisplay 
                    timeZone={person.location2}
                    showSeconds={true}
                  />
                </>
              )}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};