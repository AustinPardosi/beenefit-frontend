import React from "react";
import Image from "next/image";

const TamanRumahLebahCard: React.FC = () => {
  return (
    <div className="w-full flex justify-center items-center pt-8 px-4 sm:pt-16 sm:px-8">
      <div className="flex flex-col sm:flex-row justify-center items-center rounded-xl bg-white  sm:rounded-3xl p-4 sm:p-8 border-1 shadow-xl border-[#228B22]">
        <div className="sm:hidden flex flex-col justify-center items-center text-center gap-2">
          <h1 className="text-[#228B22] tracking-wider font-extrabold text-2xl">
            Taman Ramah Lebah
          </h1>
          <h1 className="text-[#FFB000] tracking-tight font-bold text-sm">
            Fun, Beautiful, and Fresh Honey!
          </h1>
        </div>

        <div className="flex w-60 sm:w-1/4 py-4 sm:px-4 justify-center items-center">
          <Image
            src="/assets/images/taman_ramah_lebah.svg"
            width={360}
            height={360}
            alt="taman rumah lebah"
            draggable="false"
          />
        </div>

        <div className="flex flex-col sm:w-1/2 justify-center items-center gap-2">
          <h1 className="hidden sm:flex sm:text-[#228B22] tracking-wider font-extrabold md:text-3xl sm:text-2xl">
            Taman Ramah Lebah
          </h1>
          <h1 className="hidden sm:flex sm:text-[#FFB000] tracking-tight font-bold xl:text-base md:text-md sm:text-sm">
            Fun, Beautiful, and Fresh Honey!
          </h1>
          <h1 className="text-black text-center text-sm md:text-base lg:text-lg">
            <span className="text-[#228B22] font-extrabold">
              Taman ramah lebah
            </span>{" "}
            adalah taman yang dirancang khusus untuk memberikan habitat yang
            sesuai bagi lebah. Taman ini berisi berbagai tanaman yang menawarkan
            nektar dan serbuk sari yang merupakan sumber makanan penting bagi
            lebah. Taman ramah lebah ini berkontribusi pada keanekaragaman
            hayati dan kesehatan ekosistem secara keseluruhan.
          </h1>
        </div>

        <div className="flex w-28 sm:w-1/8 md:w-1/4 py-4 sm:px-4 justify-center items-center">
          <Image
            src="/assets/images/Bee/bee_1.svg"
            width={160}
            height={160}
            alt="bee"
            draggable="false"
          />
        </div>
      </div>
    </div>
  );
};

export default TamanRumahLebahCard;
