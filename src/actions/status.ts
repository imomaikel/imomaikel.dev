'use server';
import net from 'net';

const STATUS_HOST = process.env.STATUS_HOST as string;
const STATUS_PORT = process.env.STATUS_PORT as string;

export const getOnlineStatus = async () => {
  try {
    const sock = new net.Socket();
    sock.setTimeout(2_500);

    const success = await new Promise((resolve) => {
      sock.on('connect', async () => {
        sock.destroy();
        return resolve(true);
      });
      sock.on('end', () => {
        return resolve(false);
      });
      sock.on('error', () => {
        return resolve(false);
      });
      sock.on('timeout', () => {
        return resolve(false);
      });

      sock.connect(parseInt(STATUS_PORT), STATUS_HOST);
    });

    const status = success ? 'online' : 'offline';

    return { status };
  } catch {
    return { status: 'offline' };
  }
};
