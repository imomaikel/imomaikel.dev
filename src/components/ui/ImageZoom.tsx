'use client';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

type TImageZoom = {
  src: string;
  mobileView: boolean;
};
const ImageZoom = ({ src, mobileView }: TImageZoom) => {
  const a = useTranslations('Accessibility');

  if (mobileView) {
    return (
      <Image
        src={src}
        className="!m-0 h-full w-full object-cover object-left-top !p-0"
        height="800"
        quality={100}
        width="800"
        alt={a('SnippetImage')}
      />
    );
  }

  return (
    <TransformWrapper
      alignmentAnimation={{ sizeX: 0, sizeY: 0 }}
      wheel={{ step: 0.2, smoothStep: 0.003 }}
      maxScale={4}
      disablePadding
      onWheelStart={(ref, event) => {
        const dY = event.deltaY;
        if (ref.state.scale === 1 && dY >= 1) {
          document.getElementById('parallax-photos')?.scrollBy({ behavior: 'smooth', top: dY });
        }
      }}
    >
      <TransformComponent wrapperClass="rounded-lg cursor-grab">
        <Image
          src={src}
          className="!m-0 h-full w-full object-cover object-left-top !p-0"
          height={400}
          quality={100}
          width={400}
          priority={false}
          alt={a('SnippetImage')}
        />
      </TransformComponent>
    </TransformWrapper>
  );
};

export default ImageZoom;
