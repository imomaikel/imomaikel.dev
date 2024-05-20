'use client';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { createContext, useState } from 'react';
import { useTranslations } from 'next-intl';
import { IoMdClose } from 'react-icons/io';
import Image from 'next/image';

export const FullscreenImageContext = createContext<{
  isOpen: boolean;
  setIsOpen: (newState: boolean) => void;

  imgUrl: string | null;
  setImgUrl: (imgUrl: string) => void;
}>({
  isOpen: false,
  setIsOpen: () => {},

  imgUrl: null,
  setImgUrl: () => {},
});

type TFullscreenImageProvider = {
  children: React.ReactNode;
};
const FullscreenImageProvider = ({ children }: TFullscreenImageProvider) => {
  const [imgUrl, setImgUrl] = useState<null | string>(null);
  const [isOpen, setIsOpen] = useState(false);
  const a = useTranslations('Accessibility');

  return (
    <FullscreenImageContext.Provider value={{ isOpen, setIsOpen, imgUrl, setImgUrl }}>
      {children}

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="z-[10000] flex h-auto max-h-[95vh] w-max max-w-[95vw] p-0 outline-none" noCloseButton>
          <div className="relative max-h-[95vh] max-w-[95vw] rounded-lg">
            <div className="relative">
              <Image
                alt={a('ProjectImage')}
                src={imgUrl || ''}
                width={0}
                height={0}
                quality={100}
                sizes="100vw"
                className="h-full max-h-[95vh] w-full max-w-[95vw] rounded-lg object-contain"
              />
            </div>
          </div>
          <div
            className="absolute right-2 top-2 z-50 rounded-lg bg-destructive p-1.5"
            role="button"
            aria-label={a('CloseImage')}
            onClick={() => setIsOpen(false)}
          >
            <IoMdClose className="h-6 w-6 cursor-pointer text-white" />
          </div>
        </DialogContent>
      </Dialog>
    </FullscreenImageContext.Provider>
  );
};

export default FullscreenImageProvider;
