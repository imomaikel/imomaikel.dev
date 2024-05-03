'use client';
import { usePathname, useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { ImSpinner9 } from 'react-icons/im';
import { useState } from 'react';
import Image from 'next/image';

const LocaleSwitcher = () => {
  const t = useTranslations('Hero');
  const pathname = usePathname();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<'pl' | 'en' | null>();

  const handleLocaleChange = (locale: 'en' | 'pl') => {
    if (locale === 'pl' && pathname === '/') {
      setIsLoading('pl');
      router.replace(pathname.replace('/', '/pl'));
    } else if (locale === 'en' && pathname === '/pl') {
      setIsLoading('en');
      router.replace(pathname.replace('/pl', '/en'));
    }
  };

  return (
    <div className="flex flex-col items-center">
      <p className="mb-2 text-sm font-semibold tracking-wide">{t('switchLanguage')}</p>

      <div className="flex space-x-4">
        <div role="button" aria-label="switch to english" onClick={() => handleLocaleChange('en')}>
          {isLoading === 'en' ? (
            <ImSpinner9 className="h-[42px] w-16 animate-spin" />
          ) : (
            // https://www.flaticon.com/free-icon/united-states-of-america_555526%20
            <Image
              src="/en.webp"
              width={64}
              height={42}
              alt=""
              className="h-[42px] w-[64px] rounded-xl transition-transform hover:scale-110"
            />
          )}
        </div>

        <div role="button" aria-label="switch to polish" onClick={() => handleLocaleChange('pl')}>
          {isLoading === 'pl' ? (
            <ImSpinner9 className="h-[42px] w-16 animate-spin" />
          ) : (
            // https://www.flaticon.com/free-icon/poland_330474
            <Image
              src="/pl.webp"
              width={64}
              height={42}
              alt=""
              className="h-[42px] w-[64px] rounded-xl transition-transform hover:scale-110"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default LocaleSwitcher;
