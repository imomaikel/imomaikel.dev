// https://ui.aceternity.com/components/hero-highlight
'use client';
import { cn } from '@/lib/utils';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import React from 'react';

export const HeroHighlight = ({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  const handleMouseMove = ({ currentTarget, clientX, clientY }: React.MouseEvent<HTMLDivElement>) => {
    if (!currentTarget) return;
    const { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  const handleTouchMove = ({ currentTarget, touches }: React.TouchEvent<HTMLDivElement>) => {
    if (!currentTarget) return;
    const { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(touches[0].clientX - left);
    mouseY.set(touches[0].clientY - top);
  };

  return (
    <div
      className={cn('group relative flex h-full w-full items-center justify-center', containerClassName)}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      <div className="pointer-events-none absolute inset-0 bg-dot-thick-neutral-300  dark:bg-dot-thick-neutral-800" />
      <motion.div
        className="pointer-events-none absolute inset-0   opacity-0 transition duration-300 bg-dot-thick-indigo-500 group-hover:opacity-100 dark:bg-dot-thick-indigo-500"
        style={{
          WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
          maskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
        }}
      />

      <div className={cn('relative z-20', className)}>{children}</div>
    </div>
  );
};

export const Highlight = ({
  children,
  className,
  duration = 2,
}: {
  children: React.ReactNode;
  className?: string;
  duration?: number;
}) => {
  return (
    <motion.span
      initial={{
        backgroundSize: '0% 100%',
      }}
      animate={{
        backgroundSize: '100% 100%',
      }}
      transition={{
        duration,
        ease: 'linear',
        delay: 0.5,
      }}
      style={{
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'left center',
        display: 'inline',
      }}
      className={cn(
        `relative inline-block rounded-lg bg-gradient-to-r from-[#6D28D9] to-[#C528D9] px-1 pb-1`,
        className,
      )}
    >
      {children}
    </motion.span>
  );
};
