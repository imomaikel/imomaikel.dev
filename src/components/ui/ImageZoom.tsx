'use client';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import Image from 'next/image';

type TImageZoom = {
  src: string;
  mobileView: boolean;
};
const ImageZoom = ({ src, mobileView }: TImageZoom) => {
  if (mobileView) {
    return (
      <Image
        src={src}
        className="!m-0 h-full w-full object-cover object-left-top !p-0"
        height="800"
        quality={100}
        width="800"
        alt="thumbnail"
      />
    );
  }

  return (
    <TransformWrapper
      alignmentAnimation={{ sizeX: 0, sizeY: 0 }}
      wheel={{ step: 0.2, smoothStep: 0.003 }}
      maxScale={4}
      disablePadding
    >
      <TransformComponent wrapperClass="rounded-lg cursor-grab">
        <Image
          src={src}
          className="!m-0 h-full w-full object-cover object-left-top !p-0"
          height={400}
          quality={100}
          width={400}
          priority={false}
          alt="thumbnail"
        />
      </TransformComponent>
    </TransformWrapper>
  );
};

export default ImageZoom;
