type TBounceAnimation = {
  side: 'vertical' | 'horizontal';
  steps?: number[];
  duration?: number;
  delay?: number;
  ease?: string | number[];
  initialOpacity?: number;
};
export const bounceAnimation = ({
  steps = [20, -5, 0],
  duration,
  delay,
  ease = [0.4, 0.0, 0.2, 1],
  side,
  initialOpacity = 0,
}: TBounceAnimation) => ({
  hidden: {
    opacity: initialOpacity,
    ...(side === 'horizontal'
      ? {
          x: steps[0],
        }
      : {
          y: steps[0],
        }),
  },
  show: {
    opacity: 1,
    ...(side === 'horizontal'
      ? {
          x: steps,
        }
      : {
          y: steps,
        }),
    transition: {
      ...(duration && { duration }),
      ...(delay && { delay }),
      ease,
    },
  },
});

export const staggerContainer = (delay: number = 0.15, animationDelay: number = 0) => ({
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: animationDelay,
      staggerChildren: delay,
    },
  },
});
