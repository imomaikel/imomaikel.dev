import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { TMessageFormSchema, messageFormSchema } from '@/lib/validators';
import { AnimatedTextarea } from './ui/animated-textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { AnimatedInput } from './ui/animated-input';
import { useForm } from 'react-hook-form';
import { Button } from './ui/button';
import { useTranslations } from 'next-intl';

const MessageForm = () => {
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
  const t = useTranslations('GetInTouch');

  const onSubmit = (values: TMessageFormSchema) => {
    console.log(values);
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
                  <AnimatedInput {...field} />
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
                  <AnimatedInput {...field} />
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
                  <AnimatedInput {...field} />
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
                  <AnimatedInput {...field} />
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
                  <AnimatedTextarea {...field} rows={7} className="h-auto resize-none" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="!mt-3 w-full" type="submit" disabled>
            {t('submit')}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default MessageForm;
