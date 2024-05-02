'use server';
import { TMessageFormSchema, messageFormSchema } from '@/lib/validators';

const WEBHOOK_URL = process.env.WEBHOOK_URL as string;

export const sendContactMessage = async (values: TMessageFormSchema) => {
  const parsedData = messageFormSchema.safeParse(values);

  if (!parsedData.success) {
    return { error: true };
  }

  const { email, message, name, subject, surname } = parsedData.data;

  try {
    await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        embeds: [
          {
            title: subject,
            description: `${name} ${surname}\n\n${message}`,
            color: 3714473,
            footer: {
              text: email,
            },
          },
        ],
      }),
    });

    return { success: true };
  } catch {
    return { error: true };
  }
};
