import React from "react";
import Image from "next/image";

interface CommunityCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const CommunityCard: React.FC<CommunityCardProps> = ({ imageSrc, title, description }) => {
  return (
    <div className="relative flex flex-col sm:flex-row justify-center items-center gap-4 pt-8 w-full px-4 sm:px-8 md:pt-16">
      <div className="flex w-full justify-start items-center rounded-xl md:rounded-3xl p-4 lg:p-8 border-1 border-[#FFD67A] gap-8 bg-white shadow-xl h-40">
        <div className="w-fit flex justify-center items-center">
          <Image
            src={imageSrc}
            width={110}
            height={110}
            alt="stingless bee"
            draggable="false"
          />
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-[#228B22] font-bold text-xl lg:text-2xl">
            {title}
          </h1>
          <h1 className="text-black text-xl lg:text-base">
            {description}
          </h1>
        </div>
      </div>

      {/* Mobile */}
      <div className="flex sm:hidden absolute bottom-0 right-4">
        <Image
          src="/assets/images/Bee/bee_3.svg"
          width={35}
          height={35}
          alt="bee"
        />
      </div>

      {/* Others */}
      <div className="hidden sm:flex absolute bottom-0 right-4">
        <Image
          src="/assets/images/Bee/bee_3.svg"
          width={50}
          height={50}
          alt="bee"
        />
      </div>
    </div>
  );
};

export default CommunityCard;
