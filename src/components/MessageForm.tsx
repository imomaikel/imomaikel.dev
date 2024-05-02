import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { TMessageFormSchema, messageFormSchema } from '@/lib/validators';
import { AnimatedTextarea } from './ui/animated-textarea';
import { sendContactMessage } from '@/actions/message';
import { zodResolver } from '@hookform/resolvers/zod';
import { AnimatedInput } from './ui/animated-input';
import { useState, useTransition } from 'react';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { Button } from './ui/button';

const MessageForm = () => {
  const [pending, startTransition] = useTransition();
  const t = useTranslations('GetInTouch');
  const [dialogData, setDialogData] = useState({
    open: false,
    text: '',
  });
  const form = useForm<TMessageFormSchema>({
    resolver: zodResolver(messageFormSchema),
    defaultValues: {
      subject: '',
      message: '',
      surname: '',
      email: '',
      name: '',
    },
  });

  const onSubmit = (values: TMessageFormSchema) => {
    startTransition(() => {
      sendContactMessage(values)
        .then((res) => {
          if (res.success) {
            form.reset();
          }
          setDialogData({
            open: true,
            text: res.success ? t('messageSent') : t('messageError'),
          });
        })
        .catch(() => {
          setDialogData({
            open: true,
            text: t('messageError'),
          });
        });
    });
  };

  return (
    <div>
      <Form {...form}>
        <form className="relative z-50 space-y-2" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('firstName')}</FormLabel>
                <FormControl>
                  <AnimatedInput {...field} disabled={pending} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="surname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('lastName')}</FormLabel>
                <FormControl>
                  <AnimatedInput {...field} disabled={pending} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('email')}</FormLabel>
                <FormControl>
                  <AnimatedInput {...field} disabled={pending} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('subject')}</FormLabel>
                <FormControl>
                  <AnimatedInput {...field} disabled={pending} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('message')}</FormLabel>
                <FormControl>
                  <AnimatedTextarea {...field} rows={7} className="h-auto resize-none" disabled={pending} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="!mt-3 w-full" type="submit" disabled={pending}>
            {t('submit')}
          </Button>
        </form>
      </Form>
      <Dialog open={dialogData.open} onOpenChange={() => setDialogData({ ...dialogData, open: false })}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{t('dialogTitle')}</DialogTitle>
          </DialogHeader>
          {dialogData.text}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MessageForm;
