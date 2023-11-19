import React from "react";
import Image from "next/image";

interface CommunityCardProps {
  imageSrc: string;
  title: string;
  subtitle?: string;
}

const CommunityCard: React.FC<CommunityCardProps> = ({
  imageSrc,
  title,
  subtitle,
}) => {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-8 w-full px-4 sm:px-8 md:pt-16">
      <div className="flex w-full justify-start items-center rounded-xl md:rounded-3xl p-4 lg:p-8 border-2 md:border-4 border-[#FFD67A] gap-8 bg-[#F1F1F1]">
        <div className="w-fit flex justify-center items-center">
          <Image
            src={imageSrc}
            width={150}
            height={150}
            alt="stingless bee"
            draggable="false"
          />
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-[#228B22] font-bold text-xl lg:text-2xl">
            {title}
          </h1>
          {subtitle && (
            <h1 className="text-[#228B22] tracking-tight font-normal text-base md:text-lg">
              {subtitle}
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommunityCard;
