import React from "react";
import Image from "next/image";

const IntroductionCard: React.FC = () => {
  return (
    <div className="flex justify-center items-center pt-8 w-full px-4 sm:px-20 md:px-60 md:pt-16">
      <div className="flex flex-col sm:flex-row sm:gap-20 justify-center items-center rounded-xl md:rounded-3xl px-4 space-y-4 md:px-16 py-8 border-1 bg-white shadow-xl border-[#FFD67A]">
        {/* Mobile */}
        <h1 className="sm:hidden text-[#228B22] text-center font-bold text-2xl">
          Meet the Stingless Bees
        </h1>

        <div className="w-60 md:w-full justify-center items-center">
          <Image
            src="/assets/images/stingless_bee.svg"
            width={450}
            height={450}
            alt="stingless bee"
            draggable="false"
          />
        </div>
        <div className="flex flex-col justify-center text-center items-center gap-8">
          <h1 className="hidden sm:flex text-[#228B22] font-bold text-2xl md:text-4xl">
            Meet the Stingless Bees
          </h1>
          <h1 className="text-black text-sm md:text-lg">
            <span className="text-[#FFB000] font-bold">Lebah tanpa sengat</span>{" "}
            adalah kelompok lebah yang, sesuai dengan namanya, tidak memiliki
            sengat. Lebah-lebah ini ditemukan di daerah tropis dan subtropis.
            Mereka dikenal karena dengan ukurannya yang kecil, perilaku sosial
            yang khas, serta produksi madu dan propolis.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default IntroductionCard;
