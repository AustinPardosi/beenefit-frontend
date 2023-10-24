import Image from "next/image";
import Navbar from "./components/Navbar/page";
import Footer from "./components/Footer/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-[#FFFCF5]">
      <Navbar />
      <div className="space-y-16">
        <section className="taman-ramah-lebah">
          <div className="w-full flex justify-center items-center mt-16">
            <div className="flex justify-center rounded-xl px-16 py-8 border-4 w-5/6 border-[#228B22]">
              <div className="w-full justify-center items-center">
                <Image
                  src="/assets/images/taman_ramah_lebah.svg"
                  width={950}
                  height={950}
                  alt="taman rumah lebah"
                  draggable="false"
                />
              </div>
              <div className="flex flex-col justify-center items-center gap-4">
                <h1 className="text-[#228B22] font-bold text-4xl">
                  Taman Ramah Lebah
                </h1>
                <h1 className="text-[#FFB000] font-bold text-lg">
                  Fun, Beautiful, and Fresh Honey!
                </h1>
                <h1 className="text-black w-2/3 text-center text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </h1>
              </div>
              <div className="w-full justify-center items-center">
                <Image
                  src="/assets/images/bee/bee_1.svg"
                  width={150}
                  height={150}
                  alt="logo beenefit"
                  draggable="false"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="introduction">
          <div className="flex shadow-2xl border-2 border-[#228B22] justify-end rounded-full w-1/3 p-4 gap-4 ml-[-5%]">
            <div className="z-10 mt-[-7%]">
              <Image
                src="/assets/images/bee/bee_2.svg"
                width={90}
                height={90}
                alt="bee"
                draggable="false"
              />
            </div>
            <p className="flex text-5xl font-bold text-[#228B22] items-center">
              Introduction
            </p>
          </div>
          <div className="flex justify-center items-center pt-16">
            <div className="flex justify-center rounded-xl px-16 py-8 border-4 w-2/3 border-[#FFD67A]">
              <div className="w-full justify-center items-center">
                <Image
                  src="/assets/images/stingless_bee.svg"
                  width={450}
                  height={450}
                  alt="stingless bee"
                  draggable="false"
                />
              </div>
              <div className="flex flex-col justify-center items-center gap-8">
                <h1 className="text-[#228B22] font-bold text-4xl">
                  Meet the Stingless Bees
                </h1>
                <h1 className="text-black w-2/3 text-center text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </h1>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
