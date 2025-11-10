"use client";

import React, { useState } from "react";
import { Text } from "@/once-ui/components";

interface TechBadgeProps {
  tech: string;
  index: number;
}

export default function TechBadge({ tech, index }: TechBadgeProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        padding: '0.5rem 1rem',
        background: isHovered ? 'rgba(102, 126, 234, 0.15)' : 'rgba(255, 255, 255, 0.05)',
        border: `1px solid ${isHovered ? 'rgba(102, 126, 234, 0.3)' : 'rgba(255, 255, 255, 0.1)'}`,
        borderRadius: '20px',
        transition: 'all 0.3s ease',
        cursor: 'default',
        animation: `fadeInUp 0.5s ease ${index * 0.1}s both`,
        transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Text variant="body-default-s" onBackground="neutral-medium">{tech}</Text>
    </div>
  );
}
