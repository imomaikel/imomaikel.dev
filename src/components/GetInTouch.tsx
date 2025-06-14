'use client';
import { FaDiscord, FaGithub } from 'react-icons/fa6';
import { bounceAnimation } from '@/lib/motion';
import SectionWrapper from './SectionWrapper';
import { useTranslations } from 'next-intl';
import { BiMailSend } from 'react-icons/bi';
import OnlineStatus from './OnlineStatus';
import MessageForm from './MessageForm';
import { motion } from 'framer-motion';
import Link from 'next/link';

const GetInTouch = () => {
  const t = useTranslations('GetInTouch');

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
          {t('header')}
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
          {t('description')}
        </motion.p>
      </motion.div>
      <div className="flex flex-col justify-center space-y-12 md:flex-row md:space-x-12 md:space-y-0">
        <div className="w-full max-w-sm">
          <span className="text-2xl font-medium">{t('sendMessage')}</span>
          <div>
            <MessageForm />
          </div>
        </div>
        <div>
          <div className="relative flex h-full flex-col">
            <span className="text-2xl font-medium">Contact</span>
            <div className="mt-4 space-y-6">
              <div className="flex items-center space-x-2">
                <FaGithub className="h-12 w-12" />
                <div className="flex flex-col">
                  <span>imomaikel</span>
                  <Link href="https://github.com/imomaikel" className="text-sm text-muted-foreground hover:underline">
                    {t('clickToOpen')}
                  </Link>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <FaDiscord className="h-12 w-12" />
                <span>imomaikel</span>
              </div>
              <div className="flex items-center space-x-2">
                <BiMailSend className="h-12 w-12" />
                <Link href="mailto:michal03.kolodziejczyk@gmail.com" className="hover:underline">
                  michal03.kolodziejczyk@gmail.com
                </Link>
              </div>
            </div>
            <div className="mt-4">
              <OnlineStatus />
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default GetInTouch;
