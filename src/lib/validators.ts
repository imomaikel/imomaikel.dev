import { z } from 'zod';

export const messageFormSchema = z.object({
  name: z.string().min(2).max(32),
  surname: z.string().min(2).max(32),
  subject: z.string().min(2).max(32),
  message: z.string().min(2).max(2048),
  email: z.string().email(),
});
export type TMessageFormSchema = z.infer<typeof messageFormSchema>;

// TODO messages
