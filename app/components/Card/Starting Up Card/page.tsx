import React from "react";
import Image from "next/image";

interface StartingUpItemProps {
  imageSrc: string;
  title: string;
  description: string;
  price: string;
}

const StartingUpCard: React.FC<StartingUpItemProps> = ({
  imageSrc,
  title,
  description,
  price,
}) => {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-8 w-full px-4 sm:px-8 md:pt-16">
      <div className="flex flex-col gap-4">
        <div className="flex justify-center items-center border-2 border-[#228B22] rounded-xl">
          <Image
            src={imageSrc}
            width={150}
            height={150}
            alt="stingless bee"
            draggable="false"
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-2 bg-[#FFD67A] rounded-xl py-4 px-8 text-center">
          <p className="font-bold text-xl">{title}</p>
          <p className="text-md">{description}</p>
          <p className="font-bold text-xl">{price}</p>
        </div>
      </div>
    </div>
  );
};

export default StartingUpCard;
