import { NextRequest, NextResponse } from 'next/server';
import { getWakatimeStats } from '@/actions/waka';

export async function GET(req: NextRequest) {
  const authHeader = req.headers.get('Authorization');
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return new Response('Unauthorized', {
      status: 401,
    });
  }

  getWakatimeStats();

  return NextResponse.json({ ok: true });
}
