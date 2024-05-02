'use server';
import prisma from '@/lib/prisma';
import net from 'net';

const STATUS_HOST = process.env.STATUS_HOST as string;
const STATUS_PORT = process.env.STATUS_PORT as string;

export const checkOnlineStatus = async () => {
  let connected = false;

  try {
    const sock = new net.Socket();
    sock.setTimeout(2_500);

    sock.on('connect', () => {
      connected = true;
    });
    sock.on('end', () => {});
    sock.on('error', () => {});
    sock.on('timeout', () => {});

    sock.connect(parseInt(STATUS_PORT), STATUS_HOST);

    setTimeout(async () => {
      if (!connected) {
        await prisma.config.updateMany({
          data: {
            status: 'OFFLINE',
          },
        });
      } else {
        await prisma.config.updateMany({
          data: {
            status: 'ONLINE',
          },
        });
        sock.destroy();
      }
    }, 3000);
  } catch {
    await prisma.config.updateMany({
      data: {
        status: 'OFFLINE',
      },
    });
  }
};
