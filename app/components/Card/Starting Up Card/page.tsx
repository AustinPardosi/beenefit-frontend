import React from "react";
import Image from "next/image";

interface StartingUpItemProps {
  imageSrc: string;
  title: string;
  price: string;
}

const StartingUpCard: React.FC<StartingUpItemProps> = ({
  imageSrc,
  title,
  price,
}) => {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 py-4 w-full px-4 sm:px-8">
      <div className="flex flex-col gap-4 border-1 p-8 bg-white shadow-xl rounded-xl md:rounded-3xl border-[#FFD67A]">
        <div className="flex justify-center items-center">
          <Image
            src={imageSrc}
            width={350}
            height={350}
            alt="stingless bee"
            draggable="false"
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-2 bg-[#FFD67A] rounded-xl py-4 px-8 text-center">
          <p className="font-bold text-xl">{title}</p>
          <p className="font-medium text-lg">{price}</p>
        </div>
      </div>
    </div>
  );
};

export default StartingUpCard;
