'use client';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';
import { EffectCreative, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from 'react';
import { FaImage } from 'react-icons/fa6';
import type TSwiper from 'swiper';
import { cn } from '@/lib/utils';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

type TImageSwiper = {
  urls: `/${string}`[];
};
const ImageSwiper = ({ urls }: TImageSwiper) => {
  const [swiper, setSwiper] = useState<null | TSwiper>();
  const [pagination, setPagination] = useState({
    isFirst: true,
    isLast: urls.length >= 2 ? false : true,
    currentIndex: 1,
  });

  useEffect(() => {
    swiper?.on('slideChange', ({ activeIndex }) => {
      const currentIndex = activeIndex + 1;
      setPagination({
        isFirst: currentIndex === 1,
        isLast: currentIndex === urls.length,
        currentIndex,
      });
    });
  }, [swiper, urls.length]);

  return (
    <div className="flex h-full w-full rounded-md bg-muted/50">
      <div className="absolute -top-[50px] left-0 w-full md:-top-8">
        <div className="relative flex w-full flex-col-reverse justify-between md:flex-row">
          <div className="flex items-center space-x-1">
            <div className="flex space-x-1">
              <div
                role="button"
                aria-label="previous image"
                className={cn(
                  'transition-colors',
                  pagination.isFirst ? 'cursor-default text-muted-foreground' : 'hover:text-primary',
                )}
                onClick={() => swiper?.slidePrev()}
              >
                <IoIosArrowDropleftCircle className="h-6 w-6" />
              </div>
              <div
                role="button"
                aria-label="next image"
                className={cn(
                  'transition-colors',
                  pagination.isLast ? 'cursor-default text-muted-foreground' : 'hover:text-primary',
                )}
                onClick={() => swiper?.slideNext()}
              >
                <IoIosArrowDroprightCircle className="h-6 w-6" />
              </div>
            </div>
            <span className="text-xs text-muted-foreground">Grab or use controls to sweep images</span>
          </div>
          <div className="flex items-center justify-end space-x-1 text-sm text-muted-foreground md:justify-normal md:pr-6">
            <span>Photo</span>
            <span>{pagination.currentIndex}</span>
            <span>of</span>
            <span>{urls.length}</span>
            <FaImage className="!ml-2 h-6 w-6 animate-bounce" />
          </div>
        </div>
      </div>
      <Swiper
        onSwiper={setSwiper}
        modules={[EffectCreative, Pagination]}
        className={cn('rounded-md', urls.length > 1 && 'cursor-grab')}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            origin: 'left center',
            translate: ['-5%', 0, -200],
            rotate: [0, 100, 0],
          },
          next: {
            origin: 'right center',
            translate: ['5%', 0, -200],
            rotate: [0, -100, 0],
          },
        }}
      >
        {urls.map((url) => (
          <SwiperSlide key={url}>
            <Image
              src={url}
              width={0}
              height={0}
              className="h-full w-full rounded-md object-fill"
              sizes="100vw"
              alt=""
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSwiper;
