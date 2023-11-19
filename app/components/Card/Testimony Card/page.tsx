import React from "react";
import Image from "next/image";

interface TestimonyCardProps {
  imageSrc: string;
  title: string;
  author: string;
}

const TestimonyCard: React.FC<TestimonyCardProps> = ({
  imageSrc,
  title,
  author,
}) => {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-8 w-full px-4 sm:px-8 md:pt-16">
      <div className="flex flex-col justify-center items-center text-center rounded-xl md:rounded-3xl p-4 lg:p-8 border-2 md:border-4 border-[#FFD67A] gap-8 bg-[#F1F1F1] w-full">
        <div className="w-fit flex justify-center items-center">
          <Image
            src={imageSrc}
            width={150}
            height={150}
            alt="stingless bee"
            draggable="false"
          />
        </div>
        <h1 className="text-black font-bold text-xl lg:text-2xl">{title}</h1>
        <h1 className="text-[#228B22] tracking-tight font-normal text-md md:text-base">
          {author}
        </h1>
      </div>
    </div>
  );
};

export default TestimonyCard;
