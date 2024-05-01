'use client';
import { IoIosCheckmarkCircle, IoIosCloseCircle } from 'react-icons/io';
import { HiStatusOnline } from 'react-icons/hi';
import { FaQuestion } from 'react-icons/fa';
import { useTranslations } from 'next-intl';
import { PinContainer } from './ui/3d-pin';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const TEMP_STATUS: 'Online' | 'Offline' = 'Offline';

const OnlineStatus = () => {
  const [hovered, setIsHovered] = useState(false);
  const t = useTranslations('GetInTouch');

  return (
    <div className="relative flex h-full w-full">
      <PinContainer onHoverEnd={() => setIsHovered(false)} onHoverStart={() => setIsHovered(true)} status={TEMP_STATUS}>
        <div className="flex h-[20rem] w-[22rem] basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 ">
          <h3 className="!m-0 max-w-xs !pb-2 text-base  font-bold text-slate-100">{t('onlineStatus')}</h3>
          <div className="!m-0 !p-0 text-base font-normal">
            <span className="text-sm text-muted-foreground">{t('onlineStatusHint')}</span>
          </div>

          <div
            className={cn(
              'mt-4 flex w-full flex-1 items-center justify-center rounded-lg bg-primary/25 transition-colors duration-700',
              // @ts-expect-error temp error
              hovered && (TEMP_STATUS === 'Online' ? 'bg-green-500' : 'bg-destructive'),
            )}
          >
            <div className={cn('flex space-x-2 transition-opacity delay-100 duration-500', hovered && 'opacity-0')}>
              <HiStatusOnline className="h-12 w-12" />
              <FaQuestion className="h-12 w-12" />
            </div>

            <div
              className={cn(
                'absolute bottom-8 opacity-0 transition-opacity delay-300 duration-300 ease-out',
                hovered && 'opacity-1',
              )}
            >
              {/* @ts-expect-error temp error */}
              {TEMP_STATUS === 'Online' ? (
                <IoIosCheckmarkCircle className="h-14 w-14 text-white" />
              ) : (
                <IoIosCloseCircle className="h-14 w-14 text-white" />
              )}
            </div>
          </div>
        </div>
      </PinContainer>
    </div>
  );
};

export default OnlineStatus;
