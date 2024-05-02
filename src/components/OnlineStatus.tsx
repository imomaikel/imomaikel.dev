'use client';
import { IoIosCheckmarkCircle, IoIosCloseCircle } from 'react-icons/io';
import { useRef, useState, useTransition } from 'react';
import { getOnlineStatus } from '@/actions/status';
import { HiStatusOnline } from 'react-icons/hi';
import { SiSpinrilla } from 'react-icons/si';
import { FaQuestion } from 'react-icons/fa';
import { useTranslations } from 'next-intl';
import { PinContainer } from './ui/3d-pin';
import { cn } from '@/lib/utils';

export type TStatus = 'waiting' | 'loading' | 'online' | 'offline';

const OnlineStatus = () => {
  const t = useTranslations('GetInTouch');
  const [status, setStatus] = useState<TStatus>('waiting');
  const [hovered, setHovered] = useState(false);
  const [pending, startTransition] = useTransition();
  const isMouseOver = useRef(false);

  const onEnter = () => {
    isMouseOver.current = true;
    if (status === 'waiting') {
      setStatus('loading');
      startTransition(() => {
        getOnlineStatus().then((response) => {
          if (response.status === 'online') {
            setStatus('online');
          } else {
            setStatus('offline');
          }
          if (isMouseOver.current) {
            setHovered(true);
          }
        });
      });
    } else if (status === 'offline' || status == 'online') {
      setHovered(true);
    }
  };
  const onLeave = () => {
    isMouseOver.current = false;
    setHovered(false);
    setStatus('waiting');
  };

  return (
    <div className="relative flex h-full w-full">
      <div
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        onTouchStart={onEnter}
        onTouchEnd={onLeave}
        className="rounded-2xl"
      >
        <PinContainer status={status} hovered={hovered}>
          <div className="flex h-[20rem] w-[22rem] basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 ">
            <h3 className="!m-0 max-w-xs !pb-2 text-base  font-bold text-slate-100">{t('onlineStatus')}</h3>
            <div className="!m-0 !p-0 text-base font-normal">
              <span className="text-sm text-muted-foreground">{t('onlineStatusHint')}</span>
            </div>

            <div
              className={cn(
                'mt-4 flex w-full flex-1 items-center justify-center rounded-lg bg-primary/25 transition-colors duration-700',
                hovered && (status === 'online' ? 'bg-green-500' : 'bg-destructive'),
              )}
            >
              <div
                className={cn(
                  'flex space-x-2 transition-opacity delay-100 duration-500',
                  hovered && 'opacity-0',
                  status === 'loading' && 'opacity-0',
                )}
              >
                <HiStatusOnline className="h-12 w-12" />
                <FaQuestion className="h-12 w-12" />
              </div>

              <div
                className={cn(
                  'absolute bottom-8 opacity-0 transition-opacity delay-300 duration-300 ease-out',
                  hovered && 'opacity-1',
                )}
              >
                {status === 'online' ? (
                  <IoIosCheckmarkCircle className="h-14 w-14 text-white" />
                ) : status === 'offline' ? (
                  <IoIosCloseCircle className="h-14 w-14 text-white" />
                ) : null}
              </div>
              <div
                className={cn(
                  'absolute bottom-8 flex flex-col items-center justify-center opacity-0 transition-opacity delay-300 duration-300 ease-out',
                  status === 'loading' && 'opacity-1',
                )}
              >
                <div className="mb-6">{t('loading')}</div>
                <SiSpinrilla className="h-14 w-14 animate-spin text-white" />
              </div>
            </div>
          </div>
        </PinContainer>
      </div>
    </div>
  );
};

export default OnlineStatus;
