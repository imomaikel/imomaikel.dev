// https://ui.aceternity.com/components/floating-navbar
'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { IconType } from 'react-icons';
import { Button } from './button';
import { useTranslations } from 'next-intl';

export type TNavItem = {
  name: string;
  link: string;
  icon?: IconType;
};

export const FloatingNav = ({ navItems, className }: { navItems: TNavItem[]; className?: string }) => {
  const { scrollYProgress } = useScroll();
  const t = useTranslations('Nav');

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, 'change', (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === 'number') {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          'fixed inset-x-0 top-10 z-[5000] mx-auto flex items-center justify-center rounded-full border-2 border-transparent bg-white px-4 py-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] dark:border-primary/75 dark:bg-black',
          'max-w-[90vw] flex-wrap gap-x-4 gap-y-2 md:max-w-fit',
          className,
        )}
      >
        {navItems.map((navItem: any, idx: number) => (
          <Button key={`link=${idx}`} asChild variant="ghost">
            <Link href={navItem.link} className="">
              <span className="block sm:hidden">
                <navItem.icon className="h-6 w-6" />
              </span>
              <span className="hidden text-sm sm:block">{t(navItem.name)}</span>
            </Link>
          </Button>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
