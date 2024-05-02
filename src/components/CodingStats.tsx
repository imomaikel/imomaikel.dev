'use client';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { bounceAnimation } from '@/lib/motion';
import SectionWrapper from './SectionWrapper';
import { WakaEntry } from '@prisma/client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

type TCodingStats = {
  data: WakaEntry[];
};
const CodingStats = ({ data }: TCodingStats) => {
  return (
    <SectionWrapper>
      <motion.div className="mb-24 space-y-2 text-center">
        <motion.h3
          viewport={{ once: true }}
          whileInView="show"
          initial="hidden"
          variants={bounceAnimation({
            side: 'horizontal',
            steps: [-200, 100, 0],
            duration: 1.25,
            initialOpacity: 0.5,
          })}
          className="noTranslate relative z-50 text-3xl font-extrabold capitalize md:text-6xl"
        >
          Coding Time
        </motion.h3>
        <motion.p
          viewport={{ once: true }}
          whileInView="show"
          initial="hidden"
          variants={bounceAnimation({
            side: 'horizontal',
            steps: [100, -50, 0],
            duration: 1.25,
            initialOpacity: 0.5,
          })}
          className="noTranslate relative z-50 text-sm text-muted-foreground md:text-base"
        >
          Beloved Statistics
        </motion.p>
      </motion.div>
      <div className="relative mx-auto flex w-fit flex-col p-2 md:ml-auto md:mr-0 md:justify-end">
        <span>Total time coded since Oct 9 2023</span>
        <Link href="https://wakatime.com/@018b15c5-9df2-4239-862b-0a194ffd9cc3" className="relative z-10 flex flex-col">
          <Image
            src="https://wakatime.com/badge/user/018b15c5-9df2-4239-862b-0a194ffd9cc3.svg"
            alt="Total time coded since Oct 9 2023"
            width={259.7}
            height={170}
          />
        </Link>
        <div className="absolute inset-0 z-0 h-full w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 opacity-75 blur-[100px]" />
      </div>
      <div className="h-80 w-full">
        <p className="text-center text-2xl font-medium capitalize">The last seven days</p>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart width={150} height={40} data={data}>
            <Legend formatter={() => 'Coding Time'} />
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <Bar dataKey="uv" fill="#6d28d9" name="Coding Time" />
            <YAxis width={40} dataKey="uv" tickFormatter={(value) => Math.round(value / 60 / 60).toString() + 'h'} />
            <Tooltip
              formatter={(e, name, item) => <span className="text-black">{item.payload.uvText}</span>}
              labelFormatter={(label) => <span className="text-black">{label}</span>}
              cursor={{ fill: 'hsl(var(--muted))', fillOpacity: 0.5 }}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </SectionWrapper>
  );
};

export default CodingStats;
