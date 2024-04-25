'use client';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { createContext, useState } from 'react';
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

  return (
    <FullscreenImageContext.Provider value={{ isOpen, setIsOpen, imgUrl, setImgUrl }}>
      {children}

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="z-[10000] h-auto max-h-[90vh] w-max max-w-[90vw] bg-transparent p-0" noCloseButton>
          <div className="relative h-full max-h-[90vh] rounded-lg">
            <Image
              alt="project image"
              src={imgUrl || ''}
              width={0}
              height={0}
              sizes="100vw"
              className="h-full w-full rounded-lg object-contain"
            />
          </div>
          <div
            className="absolute right-2 top-2 z-50 rounded-lg bg-destructive p-1.5"
            role="button"
            aria-label="close image"
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
