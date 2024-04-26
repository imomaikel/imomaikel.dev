'use client';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { bounceAnimation } from '@/lib/motion';
import SectionWrapper from './SectionWrapper';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const CodingStats = () => {
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
          <BarChart
            width={150}
            height={40}
            data={TEMP.data.map((e) => ({
              name: e.range.date,
              uv: e.grand_total.total_seconds,
              uvText: e.grand_total.text,
            }))}
          >
            <Legend formatter={() => 'Coding Time'} />
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
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

// TODO
const TEMP = {
  data: [
    {
      range: {
        start: '2024-04-19T22:00:00Z',
        end: '2024-04-20T21:59:59Z',
        date: '2024-04-20',
        text: 'Sat Apr 20th 2024',
        timezone: 'Europe/Warsaw',
      },
      grand_total: {
        hours: 0,
        minutes: 56,
        total_seconds: 3415.562385,
        digital: '0:56',
        decimal: '0.93',
        text: '56 mins',
      },
    },
    {
      range: {
        start: '2024-04-20T22:00:00Z',
        end: '2024-04-21T21:59:59Z',
        date: '2024-04-21',
        text: 'Sun Apr 21st 2024',
        timezone: 'Europe/Warsaw',
      },
      grand_total: {
        hours: 3,
        minutes: 1,
        total_seconds: 10898.117464,
        digital: '3:01',
        decimal: '3.02',
        text: '3 hrs 1 min',
      },
    },
    {
      range: {
        start: '2024-04-21T22:00:00Z',
        end: '2024-04-22T21:59:59Z',
        date: '2024-04-22',
        text: 'Mon Apr 22nd 2024',
        timezone: 'Europe/Warsaw',
      },
      grand_total: {
        hours: 8,
        minutes: 13,
        total_seconds: 29609.242302,
        digital: '8:13',
        decimal: '8.22',
        text: '8 hrs 13 mins',
      },
    },
    {
      range: {
        start: '2024-04-22T22:00:00Z',
        end: '2024-04-23T21:59:59Z',
        date: '2024-04-23',
        text: 'Tue Apr 23rd 2024',
        timezone: 'Europe/Warsaw',
      },
      grand_total: {
        hours: 4,
        minutes: 10,
        total_seconds: 15041.698396,
        digital: '4:10',
        decimal: '4.17',
        text: '4 hrs 10 mins',
      },
    },
    {
      range: {
        start: '2024-04-23T22:00:00Z',
        end: '2024-04-24T21:59:59Z',
        date: '2024-04-24',
        text: 'Wed Apr 24th 2024',
        timezone: 'Europe/Warsaw',
      },
      grand_total: {
        hours: 4,
        minutes: 22,
        total_seconds: 15746.730039,
        digital: '4:22',
        decimal: '4.37',
        text: '4 hrs 22 mins',
      },
    },
    {
      range: {
        start: '2024-04-24T22:00:00Z',
        end: '2024-04-25T21:59:59Z',
        date: '2024-04-25',
        text: 'Thu Apr 25th 2024',
        timezone: 'Europe/Warsaw',
      },
      grand_total: {
        hours: 11,
        minutes: 51,
        total_seconds: 42668.816469,
        digital: '11:51',
        decimal: '11.85',
        text: '11 hrs 51 mins',
      },
    },
    {
      range: {
        start: '2024-04-25T22:00:00Z',
        end: '2024-04-26T21:59:59Z',
        date: '2024-04-26',
        text: 'Fri Apr 26th 2024',
        timezone: 'Europe/Warsaw',
      },
      grand_total: {
        hours: 0,
        minutes: 42,
        total_seconds: 2555.079095,
        digital: '0:42',
        decimal: '0.70',
        text: '42 mins',
      },
    },
  ],
};
