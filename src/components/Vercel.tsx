'use client';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';

const Vercel = () => {
  return (
    <>
      <Analytics />
      <SpeedInsights />
    </>
  );
};

export default Vercel;
