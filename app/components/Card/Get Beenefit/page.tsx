import React from "react";
import Image from "next/image";

interface StepSectionProps {
  stepNumber: number;
  title: string;
  description: string;
  imageSrc: string;
}

const GetBeenefitCard: React.FC<StepSectionProps> = ({
  stepNumber,
  title,
  description,
  imageSrc,
}) => {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-8 w-full px-4 sm:px-8 md:pt-16">
      {/* Mobile View */}
      <div className="sm:hidden flex flex-col gap-4 justify-center items-center rounded-xl md:rounded-3xl px-4 space-y-4 md:px-16 py-4 border-2 bg-[#F1F1F1] md:border-4 border-[#FFD67A]">
        <div className="flex justify-center rounded-3xl px-8 py-1 bg-[#FFD67A] border-2 md:border-4 w-2/3 border-[#228B22]">
          <p className="font-bold text-[#228B22]">Step {stepNumber}</p>
        </div>
        <p className="font-bold text-[#228B22] text-xl">{title}</p>
        <div className="w-full flex justify-center items-center">
          <Image
            src={imageSrc}
            width={150}
            height={150}
            alt={title}
            draggable="false"
          />
        </div>
        <p className="font-normal text-black text-base text-center">
          {description}
        </p>
      </div>

      {/* Desktop View */}
      <div className="hidden sm:flex flex-col gap-4 justify-center items-center rounded-3xl px-4 py-4 bg-[#F1F1F1] border-4 border-[#FFD67A]">
        <div className="flex justify-center rounded-3xl sm:px-8 md:px-4 bg-[#FFD67A] border-1 w-1/2 border-[#228B22]">
          <p className="font-bold text-[#228B22]">Step {stepNumber}</p>
        </div>
        <div className="flex gap-4">
          <div className="w-full flex justify-center items-center">
            <Image
              src={imageSrc}
              width={150}
              height={150}
              alt={title}
              draggable="false"
            />
          </div>
          <div className="w-full flex flex-col gap-4 ">
            <p className="font-bold text-[#228B22] text-base lg:text-xl">
              {title}
            </p>
            <p className="font-normal text-black text-xs lg:text-sm">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetBeenefitCard;
