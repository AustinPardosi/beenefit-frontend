import React from "react";
import Image from "next/image";
import Link from "next/link";

interface TestimonyCardProps {
  imageSrc: string;
  description: string;
  author: string;
  linkSrc?: string;
}

const TestimonyCard: React.FC<TestimonyCardProps> = ({
  imageSrc,
  description,
  author,
  linkSrc = "#",
}) => {
  return (
    <Link href={linkSrc}>
      <div className="relative flex flex-col sm:flex-row justify-center items-center gap-4 pt-8 w-full max-w-xl px-4 sm:px-8 md:pt-16">
        <div className="flex flex-col gap-2 rounded-xl p-4 lg:p-8 md:rounded-3xl border-1 shadow-xl border-[#FFD67A] bg-white w-full">
          <h1 className="sm:hidden flex text-[#228B22] tracking-tight font-normal text-md md:text-base">
            {author}
          </h1>
          <div className="flex flex-row sm:flex-col justify-center items-center text-center gap-4 w-full relative">
            <div className="w-full flex justify-center items-center">
              <Image
                src={imageSrc}
                width={450}
                height={450}
                alt="stingless bee"
                draggable="false"
              />
            </div>
            <h1 className="text-black text-sm text-left">{description}</h1>
            <h1 className="hidden sm:flex text-[#228B22] tracking-tight font-normal text-md md:text-base">
              {author}
            </h1>
          </div>
        </div>

        {/* Mobile */}
        <div className="flex sm:hidden absolute top-1 right-2">
          <Image
            src="/assets/images/Bee/bee_4.svg"
            width={50}
            height={50}
            alt="additional image"
          />
        </div>

        {/* Others */}
        <div className="hidden sm:flex absolute top-10 right-1">
          <Image
            src="/assets/images/Bee/bee_4.svg"
            width={60}
            height={60}
            alt="additional image"
          />
        </div>
      </div>
    </Link>
  );
};

export default TestimonyCard;
