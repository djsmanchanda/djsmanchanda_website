"use client";

import React, { useState } from "react";
import { Flex, Heading, Text } from "@/once-ui/components";

interface FeaturedProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  gradientColors: {
    start: string;
    end: string;
  };
  link?: string;
}

export default function FeaturedProjectCard({ title, description, tags, gradientColors, link }: FeaturedProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div
      style={{
        flex: '1 1 calc(50% - 0.5rem)',
        minWidth: '280px',
        padding: '1.5rem',
        background: `linear-gradient(135deg, ${gradientColors.start} 0%, ${gradientColors.end} 100%)`,
        border: `1px solid ${isHovered ? gradientColors.start.replace('0.05', '0.3') : 'rgba(255, 255, 255, 0.1)'}`,
        borderRadius: '16px',
        transition: 'all 0.3s ease',
        cursor: link ? 'pointer' : 'default',
        backdropFilter: 'blur(10px)',
        transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: isHovered ? `0 8px 32px ${gradientColors.start.replace('0.05', '0.15')}` : 'none',
      }}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Flex fillWidth gap="m" direction="column">
        <Heading as="h3" variant="heading-strong-l">{title}</Heading>
        <Text variant="body-default-m" onBackground="neutral-weak">
          {description}
        </Text>
        <Flex gap="8" wrap>
          {tags.map((tag, index) => (
            <span
              key={index}
              style={{
                padding: '0.25rem 0.75rem',
                background: index === 0 ? gradientColors.start.replace('0.05', '0.2') : gradientColors.end.replace('0.05', '0.2'),
                borderRadius: '12px',
                fontSize: '0.875rem',
              }}
            >
              {tag}
            </span>
          ))}
        </Flex>
      </Flex>
    </div>
  );
}
