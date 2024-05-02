'use client';
import React, { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { TStatus } from '../OnlineStatus';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export const PinContainer = ({
  children,
  className,
  containerClassName,
  hovered,
  status,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  status: TStatus;
  hovered: boolean;
}) => {
  const [transform, setTransform] = useState('translate(-50%,-50%) rotateX(0deg)');

  useEffect(() => {
    if (hovered) {
      setTransform('translate(-50%,-50%) rotateX(40deg) scale(0.8)');
    } else {
      setTransform('translate(-50%,-50%) rotateX(0deg) scale(1)');
    }
  }, [hovered]);

  return (
    <div className={cn('group/pin relative z-50 cursor-default', containerClassName)}>
      <div
        style={{
          perspective: '1000px',
          transform: 'rotateX(70deg) translateZ(0deg)',
        }}
        className="absolute left-1/2 top-1/2 mt-4 -translate-x-1/2 -translate-y-1/2"
      >
        <div
          style={{
            transform: transform,
          }}
          className="absolute left-1/2 top-1/2 flex  items-start justify-start overflow-hidden  rounded-2xl  border border-white/[0.1] bg-background p-4 shadow-[0_8px_16px_rgb(0_0_0/0.4)] transition duration-700 group-hover/pin:border-white/[0.2]"
        >
          <div className={cn(' relative z-50 ', className)}>{children}</div>
        </div>
      </div>
      <PinPerspective status={status} />
    </div>
  );
};

export const PinPerspective = ({ status }: { status: TStatus }) => {
  const t = useTranslations('GetInTouch');

  return (
    <motion.div className="pointer-events-none z-[60] flex h-80 w-96 items-center justify-center opacity-0 transition duration-500 group-hover/pin:opacity-100">
      <div
        className={cn(
          'inset-0 -mt-7 hidden h-full w-full flex-none',
          (status === 'online' || status === 'offline') && 'block',
        )}
      >
        <div className="absolute inset-x-0 top-0  flex justify-center">
          <div className="relative z-10 flex flex-col items-center rounded-full bg-zinc-950 px-4 py-0.5 ring-1 ring-white/10">
            <span className="relative z-20 inline-block py-0.5 text-xs font-bold text-white">
              {status === 'offline' ? t('offline') : status === 'online' ? t('online') : null}!
            </span>
            <span className="relative z-20 inline-block py-0.5 text-xs font-bold text-muted-foreground">
              {status === 'online' ? t('available') : status === 'offline' ? t('notAvailable') : null}
            </span>

            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover/btn:opacity-40"></span>
          </div>
        </div>

        <div
          style={{
            perspective: '1000px',
            transform: 'rotateX(70deg) translateZ(0)',
          }}
          className="absolute left-1/2 top-1/2 mt-4 -translate-x-1/2 -translate-y-1/2"
        >
          <>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: '-50%',
                y: '-50%',
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,

                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 0,
              }}
              className="absolute left-1/2 top-1/2  h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            ></motion.div>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: '-50%',
                y: '-50%',
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,

                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 2,
              }}
              className="absolute left-1/2 top-1/2  h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            ></motion.div>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: '-50%',
                y: '-50%',
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,

                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 4,
              }}
              className="absolute left-1/2 top-1/2  h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            ></motion.div>
          </>
        </div>

        <>
          <motion.div className="absolute bottom-1/2 right-1/2 h-20 w-px translate-y-[14px] bg-gradient-to-b from-transparent to-cyan-500 blur-[2px] group-hover/pin:h-40" />
          <motion.div className="absolute bottom-1/2 right-1/2 h-20 w-px translate-y-[14px] bg-gradient-to-b from-transparent to-cyan-500 group-hover/pin:h-40  " />
          <motion.div className="absolute bottom-1/2 right-1/2 z-40 h-[4px] w-[4px] translate-x-[1.5px] translate-y-[14px] rounded-full bg-cyan-600 blur-[3px]" />
          <motion.div className="absolute bottom-1/2 right-1/2 z-40 h-[2px] w-[2px] translate-x-[0.5px] translate-y-[14px] rounded-full bg-cyan-300 " />
        </>
      </div>
    </motion.div>
  );
};
