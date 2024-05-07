'use server';
import { format, subDays } from 'date-fns';
import prisma from '@/lib/prisma';

export const getWakatimeStats = async () => {
  const now = new Date();
  const startDate = format(subDays(now, 7), 'yyyy-MM-dd');
  const endDate = format(subDays(now, 1), 'yyyy-MM-dd');

  try {
    const stats = (await fetch(
      `https://wakatime.com/api/v1/users/current/summaries?start=${startDate}&end=${endDate}`,
      {
        headers: {
          Authorization: process.env.WAKA_SECRET as string,
        },
      },
    ).then((res) => res.json())) as {
      data: { range: { date: string }; grand_total: { total_seconds: number; text: string } }[];
    };

    const codingStats = stats.data.map((day) => ({
      date: day.range.date,
      uv: day.grand_total.total_seconds,
      uvText: day.grand_total.text,
    }));

    await prisma.wakaEntry.deleteMany();
    await prisma.wakaEntry.createMany({ data: codingStats });
    return `success-${startDate}|${endDate}`;
  } catch (error) {
    console.error(error);
    return 'error';
  }
};
