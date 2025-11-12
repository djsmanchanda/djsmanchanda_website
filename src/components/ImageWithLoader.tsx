"use client";

import { useState } from 'react';
import Image from 'next/image';

interface ImageWithLoaderProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
  className?: string;
}

export default function ImageWithLoader({
  src,
  alt,
  width,
  height,
  fill,
  priority,
  className
}: ImageWithLoaderProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes shimmer {
            0% {
              background-position: -1000px 0;
            }
            100% {
              background-position: 1000px 0;
            }
          }

          .image-loading {
            background: linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.05) 0%,
              rgba(255, 255, 255, 0.1) 50%,
              rgba(255, 255, 255, 0.05) 100%
            );
            background-size: 1000px 100%;
            animation: shimmer 2s infinite;
          }

          .image-loaded {
            animation: fadeIn 0.5s ease-in;
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
        `
      }} />
      <div style={{ position: 'relative', width: fill ? '100%' : width, height: fill ? '100%' : height }}>
        {isLoading && (
          <div
            className="image-loading"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              borderRadius: '8px',
            }}
          />
        )}
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          fill={fill}
          priority={priority}
          className={`${className} ${isLoading ? '' : 'image-loaded'}`}
          onLoad={() => setIsLoading(false)}
          style={{
            opacity: isLoading ? 0 : 1,
            transition: 'opacity 0.5s ease-in',
          }}
        />
      </div>
    </>
  );
}
