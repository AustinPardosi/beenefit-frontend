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

        <div className="w-full space-y-4 md:space-y-16 py-16 md:pt-12">
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
                draggable="false"
              />
            </div>

            <div className="hidden sm:flex w-full">
              <Image
                src="/assets/images/get-beenefit.svg"
                width={640}
                height={40}
                alt="get-beenefit"
                draggable="false"
              />
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-8 w-full px-4 sm:px-8 md:pt-16">
              <div className="sm:hidden flex flex-col sm:flex-row sm:gap-12 justify-center items-center rounded-xl md:rounded-3xl px-4 space-y-4 md:px-16 py-4 border-2 bg-[#F1F1F1] md:border-4 border-[#FFD67A]">
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
              <div className="sm:hidden flex flex-col sm:flex-row sm:gap-12 justify-center items-center rounded-xl md:rounded-3xl px-4 space-y-4 md:px-16 py-4 border-2 bg-[#F1F1F1] md:border-4 border-[#FFD67A]">
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
              <div className="sm:hidden flex flex-col sm:flex-row sm:gap-12 justify-center items-center rounded-xl md:rounded-3xl px-4 space-y-4 md:px-16 py-4 border-2 bg-[#F1F1F1] md:border-4 border-[#FFD67A]">
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

              <div className="hidden sm:flex flex-col gap-4 justify-center items-center rounded-3xl px-4 py-4 bg-[#F1F1F1] border-4 border-[#FFD67A]">
                <div className="flex justify-center rounded-3xl sm:px-8 md:px-4 bg-[#FFD67A] border-1 w-1/2 border-[#228B22]">
                  <p className="font-bold text-[#228B22]">Step 1</p>
                </div>
                <div className="flex gap-4">
                  <div className="w-full flex justify-center items-center">
                    <Image
                      src="/assets/images/stingless_bee.svg"
                      width={150}
                      height={150}
                      alt="stingless bee"
                      draggable="false"
                    />
                  </div>
                  <div className="w-full flex flex-col gap-4 ">
                    <p className="font-bold text-[#228B22] text-base lg:text-xl">
                      Konsultasi
                    </p>
                    <p className="font-normal text-black text-xs lg:text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
              </div>
              <div className="hidden sm:flex flex-col gap-4 justify-center items-center rounded-3xl px-4 py-4 bg-[#F1F1F1] border-4 border-[#FFD67A]">
                <div className="flex justify-center rounded-3xl sm:px-8 md:px-4 bg-[#FFD67A] border-1 w-1/2 border-[#228B22]">
                  <p className="font-bold text-[#228B22]">Step 2</p>
                </div>
                <div className="flex gap-4">
                  <div className="w-full flex justify-center items-center">
                    <Image
                      src="/assets/images/stingless_bee.svg"
                      width={150}
                      height={150}
                      alt="stingless bee"
                      draggable="false"
                    />
                  </div>
                  <div className="w-full flex flex-col gap-4 ">
                    <p className="font-bold text-[#228B22] text-base lg:text-xl">
                      Pengiriman
                    </p>
                    <p className="font-normal text-black text-xs lg:text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
              </div>
              <div className="hidden sm:flex flex-col gap-4 justify-center items-center rounded-3xl px-4 py-4 bg-[#F1F1F1] border-4 border-[#FFD67A]">
                <div className="flex justify-center rounded-3xl sm:px-8 md:px-4 bg-[#FFD67A] border-1 w-1/2 border-[#228B22]">
                  <p className="font-bold text-[#228B22]">Step 3</p>
                </div>
                <div className="flex gap-4">
                  <div className="w-full flex justify-center items-center">
                    <Image
                      src="/assets/images/stingless_bee.svg"
                      width={150}
                      height={150}
                      alt="stingless bee"
                      draggable="false"
                    />
                  </div>
                  <div className="w-full flex flex-col gap-4 ">
                    <p className="font-bold text-[#228B22] text-base lg:text-xl">
                      Pemasangan
                    </p>
                    <p className="font-normal text-black text-xs lg:text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="community">
            <div className="sm:hidden flex w-72">
              <Image
                src="/assets/images/community_sm.svg"
                width={400}
                height={90}
                alt="community"
                draggable="false"
              />
            </div>

            <div className="hidden sm:flex w-full">
              <Image
                src="/assets/images/community.svg"
                width={640}
                height={40}
                alt="community"
                draggable="false"
              />
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-8 w-full px-4 sm:px-8 md:pt-16">
              <div className="flex w-full justify-start items-center rounded-xl md:rounded-3xl p-4 lg:p-8 border-2 md:border-4 border-[#FFD67A] gap-8 bg-[#F1F1F1]">
                <div className="w-fit flex justify-center items-center">
                  <Image
                    src="/assets/images/stingless_bee.svg"
                    width={150}
                    height={150}
                    alt="stingless bee"
                    draggable="false"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <h1 className="text-[#228B22] font-bold text-xl lg:text-2xl">
                    125 Beekeepers
                  </h1>
                </div>
              </div>

              <div className="flex w-full justify-start items-center rounded-xl md:rounded-3xl p-4 lg:p-8 border-2 md:border-4 border-[#FFD67A] gap-8 bg-[#F1F1F1]">
                <div className="w-fit flex justify-center items-center">
                  <Image
                    src="/assets/images/stingless_bee.svg"
                    width={150}
                    height={150}
                    alt="stingless bee"
                    draggable="false"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <h1 className="text-[#228B22] font-bold text-xl lg:text-2xl">
                    2 Millions Bee
                  </h1>
                  <h1 className="text-[#228B22] tracking-tight font-normal text-base md:text-lg">
                    and ZERO stings
                  </h1>
                </div>
              </div>

              <div className="flex w-full justify-start items-center rounded-xl md:rounded-3xl p-4 lg:p-8 border-2 md:border-4 border-[#FFD67A] gap-8 bg-[#F1F1F1]">
                <div className="w-fit flex justify-center items-center">
                  <Image
                    src="/assets/images/stingless_bee.svg"
                    width={150}
                    height={150}
                    alt="stingless bee"
                    draggable="false"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <h1 className="text-[#228B22] font-bold text-xl lg:text-2xl">
                    Rp120,000,000
                  </h1>
                  <h1 className="text-[#228B22] tracking-tight font-normal text-base md:text-lg">
                    bee products traded monthly
                  </h1>
                </div>
              </div>
            </div>
          </section>

          <section className="testimony">
            <div className="sm:hidden flex w-80">
              <Image
                src="/assets/images/testimonial_sm.svg"
                width={240}
                height={90}
                alt="testimonial"
                draggable="false"
              />
            </div>

            <div className="hidden sm:flex w-full">
              <Image
                src="/assets/images/testimonial.svg"
                width={500}
                height={40}
                alt="testimonial"
                draggable="false"
              />
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-8 w-full px-4 sm:px-8 md:pt-16">
              <div className="flex flex-col justify-center items-center text-center rounded-xl md:rounded-3xl p-4 lg:p-8 border-2 md:border-4 border-[#FFD67A] gap-8 bg-[#F1F1F1]">
                <div className="w-fit flex justify-center items-center">
                  <Image
                    src="/assets/images/stingless_bee.svg"
                    width={150}
                    height={150}
                    alt="stingless bee"
                    draggable="false"
                  />
                </div>
                <h1 className="text-black font-bold text-xl lg:text-2xl">
                  The bees are very cute and easy to take care of
                </h1>
                <h1 className="text-[#228B22] tracking-tight font-normal text-md md:text-base">
                  Aso, enterpreneur
                </h1>
              </div>
              <div className="flex flex-col justify-center items-center text-center rounded-xl md:rounded-3xl p-4 lg:p-8 border-2 md:border-4 border-[#FFD67A] gap-8 bg-[#F1F1F1]">
                <div className="w-fit flex justify-center items-center">
                  <Image
                    src="/assets/images/stingless_bee.svg"
                    width={150}
                    height={150}
                    alt="stingless bee"
                    draggable="false"
                  />
                </div>
                <h1 className="text-black font-bold text-xl lg:text-2xl">
                  The bees are very cute and easy to take care of
                </h1>
                <h1 className="text-[#228B22] tracking-tight font-normal text-md md:text-base">
                  Aso, enterpreneur
                </h1>
              </div>
              <div className="flex flex-col justify-center items-center text-center rounded-xl md:rounded-3xl p-4 lg:p-8 border-2 md:border-4 border-[#FFD67A] gap-8 bg-[#F1F1F1]">
                <div className="w-fit flex justify-center items-center">
                  <Image
                    src="/assets/images/stingless_bee.svg"
                    width={150}
                    height={150}
                    alt="stingless bee"
                    draggable="false"
                  />
                </div>
                <h1 className="text-black font-bold text-xl lg:text-2xl">
                  The bees are very cute and easy to take care of
                </h1>
                <h1 className="text-[#228B22] tracking-tight font-normal text-md md:text-base">
                  Aso, enterpreneur
                </h1>
              </div>
            </div>
          </section>

          <section className="faq">
            <div className="sm:hidden flex w-80">
              <Image
                src="/assets/images/faq_sm.svg"
                width={160}
                height={60}
                alt="faq"
                draggable="false"
              />
            </div>

            <div className="hidden sm:flex w-full">
              <Image
                src="/assets/images/faq.svg"
                width={300}
                height={40}
                alt="faq"
                draggable="false"
              />
            </div>
            <div className="flex justify-center items-center pt-16 gap-16 px-16 text-black">
              <Accordion variant="splitted">
                <AccordionItem
                  key="1"
                  aria-label="Accordion 1"
                  title="Berapa jumlah madu yang dihasilkan?"
                  className="border-2 border-[#228B22]"
                >
                  Dalam 2-3 minggu, 1 koloni bisa menghasilkan sekitar 2-3
                  sendok makan madu. Idealnya, untuk mendapatkan produksi penuh,
                  dibutuhkan waktu sekitar 3-4 bulan.
                </AccordionItem>
                <AccordionItem
                  key="2"
                  aria-label="Accordion 2"
                  title="Mengapa saya harus memiliki rumah lebah ini?"
                  className="border-2 border-[#228B22]"
                >
                  Dengan memiliki rumah lebah, Anda dapat membantu penyerbukan
                  tanaman di taman Anda, memenuhi kebutuhan madu personal dan
                  dapat digunakan sebagai sarana edukasi untuk anak-anak.
                </AccordionItem>
                <AccordionItem
                  key="3"
                  aria-label="Accordion 3"
                  title="Dari mana asal lebah ini?"
                  className="border-2 border-[#228B22]"
                >
                  Lebah tanpa sengat secara umum ditemukan di negara tropis.
                  Koloni lebah tanpa sengat kami berasal dari Jawa Barat,
                  Indonesia.
                </AccordionItem>
                <AccordionItem
                  key="4"
                  aria-label="Accordion 4"
                  title="Bagaimana cara melakukan panen madu?"
                  className="border-2 border-[#228B22]"
                >
                  Madu dapat dipanen dengan mengambil kantong madunya, kemudian
                  ditekan. Madu akan keluar secara alami.
                </AccordionItem>
                <AccordionItem
                  key="5"
                  aria-label="Accordion 5"
                  title="Berapa lama waktu PO berlangsung?"
                  className="border-2 border-[#228B22]"
                >
                  Kami membuka proses pemesanan setiap 2 minggu sekali.
                  Informasi lebih lanjut mengenai batch pemesanan dapat
                  ditemukan di akun Instagram kami.
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
