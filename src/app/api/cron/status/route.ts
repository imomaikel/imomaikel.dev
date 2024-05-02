import { NextRequest, NextResponse } from 'next/server';
import { checkOnlineStatus } from '@/actions/status';

export async function GET(req: NextRequest) {
  const authHeader = req.headers.get('Authorization');
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return new Response('Unauthorized', {
      status: 401,
    });
  }

  checkOnlineStatus();

  return NextResponse.json({ ok: true });
}
