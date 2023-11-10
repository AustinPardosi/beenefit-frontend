"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";
import { Accordion, AccordionItem } from "@nextui-org/react";

import Image from "next/image";
// import Navbar from "./components/Navbar/a";
import NavbarComponent from "./components/NavbarComponent/page";
import Footer from "./components/Footer/page";
import bee2 from "../public/assets/images/Bee/bee_2.svg";

export default function Home() {
  return (
    <NextUIProvider>
      <main className="flex overflow-hidden min-h-screen flex-col items-center w-full justify-center bg-[#FFFCF5]">
        <NavbarComponent />

        <div className="w-full space-y-4 md:space-y-16 pt-16 md:pt-12">
          <section className="taman-ramah-lebah">
            <div className="w-full flex justify-center items-center pt-8 px-4 sm:pt-16 sm:px-8">
              <div className="flex flex-col sm:flex-row justify-center items-center rounded-xl bg-[#F1F1F1] sm:rounded-3xl p-4 sm:p-8 border-2 sm:border-4 border-[#228B22]">
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
                    adalah taman yang dirancang khusus untuk memberikan habitat
                    yang sesuai bagi lebah. Taman ini berisi berbagai tanaman
                    yang menawarkan nektar dan serbuk sari yang merupakan sumber
                    makanan penting bagi lebah. Taman ramah lebah ini
                    berkontribusi pada keanekaragaman hayati dan kesehatan
                    ekosistem secara keseluruhan.
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
          </section>

          <section className="introduction">
            <div className="hidden sm:flex w-full">
              <Image
                src="/assets/images/introduction.svg"
                width={440}
                height={40}
                alt="introduction-section"
                draggable="false"
              />
            </div>

            <div className="sm:hidden flex w-56">
              <Image
                src="/assets/images/a.svg"
                width={440}
                height={40}
                alt="introduction-section"
                draggable="false"
              />
            </div>

            <div className="flex justify-center items-center pt-8 w-full px-4 sm:px-20 md:px-40 md:pt-16">
              <div className="flex flex-col sm:flex-row sm:gap-12 justify-center items-center rounded-xl md:rounded-3xl px-4 space-y-4 md:px-16 py-8 border-2 bg-[#F1F1F1] md:border-4 border-[#FFD67A]">
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
                    <span className="text-[#FFB000] font-bold">
                      Lebah tanpa sengat
                    </span>{" "}
                    adalah kelompok lebah yang, sesuai dengan namanya, tidak
                    memiliki sengat. Lebah-lebah ini ditemukan di daerah tropis
                    dan subtropis. Mereka dikenal karena dengan ukurannya yang
                    kecil, perilaku sosial yang khas, serta produksi madu dan
                    propolis.
                  </h1>
                </div>
              </div>
            </div>
          </section>

          <section className="get-beenefit">
            <div className="sm:hidden flex w-80">
              <Image
                src="/assets/images/get-beenefit_sm.svg"
                width={400}
                height={90}
                alt="get-beenefit"
              />
            </div>

            <div className="hidden sm:flex w-full">
              <Image
                src="/assets/images/get-beenefit.svg"
                width={640}
                height={40}
                alt="get-beenefit"
              />
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-8 w-full px-4 sm:px-20 md:px-40 md:pt-16">
              <div className="flex flex-col sm:flex-row sm:gap-12 justify-center items-center rounded-xl md:rounded-3xl px-4 space-y-4 md:px-16 py-4 border-2 bg-[#F1F1F1] md:border-4 border-[#FFD67A]">
                <div className="flex justify-center rounded-3xl px-16 py-1 bg-[#FFD67A] border-2 md:border-4 w-2/3 border-[#228B22]">
                  <p className="font-bold text-[#228B22]">Step 1</p>
                </div>
                <p className="font-bold text-[#228B22] text-xl">Konsultasi</p>
                <div className="w-full flex justify-center items-center">
                  <Image
                    src="/assets/images/stingless_bee.svg"
                    width={150}
                    height={150}
                    alt="stingless bee"
                    draggable="false"
                  />
                </div>
                <p className="font-normal text-black text-base text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row sm:gap-12 justify-center items-center rounded-xl md:rounded-3xl px-4 space-y-4 md:px-16 py-4 border-2 bg-[#F1F1F1] md:border-4 border-[#FFD67A]">
                <div className="flex justify-center rounded-3xl px-16 py-1 bg-[#FFD67A] border-2 md:border-4 w-2/3 border-[#228B22]">
                  <p className="font-bold text-[#228B22]">Step 2</p>
                </div>
                <p className="font-bold text-[#228B22] text-xl">Pengiriman</p>
                <div className="w-full flex justify-center items-center">
                  <Image
                    src="/assets/images/stingless_bee.svg"
                    width={150}
                    height={150}
                    alt="stingless bee"
                    draggable="false"
                  />
                </div>
                <p className="font-normal text-black text-base text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row sm:gap-12 justify-center items-center rounded-xl md:rounded-3xl px-4 space-y-4 md:px-16 py-4 border-2 bg-[#F1F1F1] md:border-4 border-[#FFD67A]">
                <div className="flex justify-center rounded-3xl px-16 py-1 bg-[#FFD67A] border-2 md:border-4 w-2/3 border-[#228B22]">
                  <p className="font-bold text-[#228B22]">Step 3</p>
                </div>
                <p className="font-bold text-[#228B22] text-xl">Pemasangan</p>
                <div className="w-full flex justify-center items-center">
                  <Image
                    src="/assets/images/stingless_bee.svg"
                    width={150}
                    height={150}
                    alt="stingless bee"
                    draggable="false"
                  />
                </div>
                <p className="font-normal text-black text-base text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </section>

          <section className="community">
            <div className="flex shadow-2xl border-2 border-[#228B22] justify-end rounded-full w-1/2 p-4 gap-4 ml-[-13%]">
              <div className="z-10 mt-[-5%]">
                <Image
                  src={bee2}
                  width={90}
                  height={90}
                  alt="bee"
                  draggable="false"
                />
              </div>
              <p className="flex text-5xl font-bold text-[#228B22] items-center">
                In This Community
              </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center items-center pt-16 gap-16 w-full">
              <div className="flex justify-center rounded-3xl p-8 border-4 border-[#FFD67A]">
                <div className="w-full items-center">
                  <Image
                    src="/assets/images/stingless_bee.svg"
                    width={150}
                    height={150}
                    alt="stingless bee"
                    draggable="false"
                  />
                </div>
                <div className="items-center">
                  <h1 className="text-[#228B22] font-bold text-2xl">
                    125 Beekeepers
                  </h1>
                </div>
              </div>
              <div className="flex justify-center rounded-3xl p-8 border-4  border-[#FFD67A]">
                <div className="w-full items-center">
                  <Image
                    src="/assets/images/stingless_bee.svg"
                    width={150}
                    height={150}
                    alt="stingless bee"
                    draggable="false"
                  />
                </div>
                <div className="flex flex-col justify-center items-center gap-8">
                  <h1 className="text-[#228B22] font-bold text-4xl">
                    2 Millions Bee
                  </h1>
                  <h1 className="text-[#228B22] font-light text-4xl">
                    and ZERO stings
                  </h1>
                </div>
              </div>
              <div className="flex justify-center rounded-3xl p-8 border-4 border-[#FFD67A]">
                <div className="w-full justify-center items-center">
                  <Image
                    src="/assets/images/stingless_bee.svg"
                    width={150}
                    height={150}
                    alt="stingless bee"
                    draggable="false"
                  />
                </div>
                <div className="flex flex-col justify-center items-center gap-8">
                  <h1 className="text-[#228B22] font-bold text-4xl">
                    Rp120,000,000
                  </h1>
                  <h1 className="text-[#228B22] font-light text-4xl">
                    bee products traded monthly
                  </h1>
                </div>
              </div>
            </div>
          </section>

          <section className="testimony">
            <div className="flex shadow-2xl border-2 border-[#228B22] justify-end rounded-full w-1/2 p-4 gap-4 ml-[-13%]">
              <div className="z-10 mt-[-5%]">
                <Image
                  src={bee2}
                  width={90}
                  height={90}
                  alt="bee"
                  draggable="false"
                />
              </div>
              <p className="flex text-5xl font-bold text-[#228B22] items-center">
                Testimonial
              </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center items-center pt-16 gap-16 px-16">
              <div className="flex justify-center rounded-3xl p-8 w-2/3 border-4 border-[#FFD67A]">
                <div className="w-full items-center">
                  <Image
                    src="/assets/images/stingless_bee.svg"
                    width={150}
                    height={150}
                    alt="stingless bee"
                    draggable="false"
                  />
                </div>
                <div className="items-center">
                  <h1 className="text-[#228B22] font-bold text-2xl">
                    125 Beekeepers
                  </h1>
                </div>
              </div>
              <div className="flex justify-center rounded-3xl p-8 border-4 w-2/3 border-[#FFD67A]">
                <div className="w-full items-center">
                  <Image
                    src="/assets/images/stingless_bee.svg"
                    width={150}
                    height={150}
                    alt="stingless bee"
                    draggable="false"
                  />
                </div>
                <div className="flex flex-col justify-center items-center gap-8">
                  <h1 className="text-[#228B22] font-bold text-4xl">
                    2 Millions Bee
                  </h1>
                  <h1 className="text-[#228B22] font-light text-4xl">
                    and ZERO stings
                  </h1>
                </div>
              </div>
              <div className="flex justify-center rounded-3xl p-8 border-4 w-2/3 border-[#FFD67A]">
                <div className="w-full justify-center items-center">
                  <Image
                    src="/assets/images/stingless_bee.svg"
                    width={150}
                    height={150}
                    alt="stingless bee"
                    draggable="false"
                  />
                </div>
                <div className="flex flex-col justify-center items-center gap-8">
                  <h1 className="text-[#228B22] font-bold text-4xl">
                    Rp120,000,000
                  </h1>
                  <h1 className="text-[#228B22] font-light text-4xl">
                    bee products traded monthly
                  </h1>
                </div>
              </div>
            </div>
          </section>

          <section className="faq">
            <div className="flex shadow-2xl border-2 border-[#228B22] justify-end rounded-full w-1/2 p-4 gap-4 ml-[-13%]">
              <div className="z-10 mt-[-5%]">
                <Image
                  src={bee2}
                  width={90}
                  height={90}
                  alt="bee"
                  draggable="false"
                />
              </div>
              <p className="flex text-5xl font-bold text-[#228B22] items-center">
                FAQ
              </p>
            </div>
            <div className="flex justify-center items-center pt-16 gap-16 px-16 text-black">
              <Accordion>
                <AccordionItem
                  key="1"
                  aria-label="Accordion 1"
                  title="Accordion 1"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat;
                </AccordionItem>
                <AccordionItem
                  key="2"
                  aria-label="Accordion 2"
                  title="Accordion 2"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat;
                </AccordionItem>
                <AccordionItem
                  key="3"
                  aria-label="Accordion 3"
                  title="Accordion 3"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat;
                </AccordionItem>
              </Accordion>
            </div>
          </section>
        </div>
        <Footer />
      </main>
    </NextUIProvider>
  );
}
