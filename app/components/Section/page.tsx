// ImageSection.tsx

import React from 'react';
import Image from 'next/image';

interface ImageSectionProps {
  mobileSrc: string;
  desktopSrc: string;
  mobileWidth: number;
  desktopWidth: number;
  mobileHeight: number;
  desktopHeight: number;
  alt: string;
}

const ImageSection: React.FC<ImageSectionProps> = ({
  mobileSrc,
  desktopSrc,
  mobileWidth,
  desktopWidth,
  mobileHeight,
  desktopHeight,
  alt,
}) => {
  return (
    <div className="w-full">
      {/* Mobile Image */}
      <div className="sm:hidden">
        <Image src={mobileSrc} width={mobileWidth} height={mobileHeight} alt={alt} draggable="false" />
      </div>

      {/* Desktop Image */}
      <div className="hidden sm:block">
        <Image src={desktopSrc} width={desktopWidth} height={desktopHeight} alt={alt} draggable="false" />
      </div>
    </div>
  );
};

export default ImageSection;
