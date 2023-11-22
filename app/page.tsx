"use client";

import * as React from "react";
import {
  Accordion,
  AccordionItem,
  Button,
  NextUIProvider,
} from "@nextui-org/react";
import Image from "next/image";

import ContactModal from "./components/Contact Modal/page";
import NavbarComponent from "./components/Navbar Component/page";
import Footer from "./components/Footer/page";
import ImageSection from "./components/Section/page";
import TamanRumahLebahCard from "./components/Card/Taman Rumah Lebah/page";
import IntroductionCard from "./components/Card/Introduction/page";
import GetBeenefitCard from "./components/Card/Get Beenefit/page";
import CommunityCard from "./components/Card/Community Card/page";
import TestimonyCard from "./components/Card/Testimony Card/page";
import StartingUpCard from "./components/Card/Starting Up Card/page";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const faqList = [
    {
      question: "Berapa jumlah madu yang dihasilkan?",
      answer:
        "Dalam 2-3 minggu, 1 koloni bisa menghasilkan sekitar 2-3 sendok makan madu. Idealnya, untuk mendapatkan produksi penuh, dibutuhkan waktu sekitar 3-4 bulan.",
    },
    {
      question: "Mengapa saya harus memiliki rumah lebah ini?",
      answer:
        "Dengan memiliki rumah lebah, Anda dapat membantu penyerbukan tanaman di taman Anda, memenuhi kebutuhan madu personal dan dapat digunakan sebagai sarana edukasi untuk anak-anak.",
    },
    {
      question: "Dari mana asal lebah ini?",
      answer:
        "Lebah tanpa sengat secara umum ditemukan di negara tropis. Koloni lebah tanpa sengat kami berasal dari Jawa Barat, Indonesia.",
    },
    {
      question: "Bagaimana cara melakukan panen madu?",
      answer:
        "Madu dapat dipanen dengan mengambil kantong madunya, kemudian ditekan. Madu akan keluar secara alami.",
    },
    {
      question: "Berapa lama waktu PO berlangsung?",
      answer:
        "Kami membuka proses pemesanan setiap 2 minggu sekali. Informasi lebih lanjut mengenai batch pemesanan dapat ditemukan di akun Instagram kami.",
    },
  ];

  const startingUpItems = [
    {
      imageSrc: "/assets/images/stingless_bee.svg",
      title: "Rumah lebah ‘Peek-A-Bee’",
      description: "Lorem ipsum dolor sit amet",
      price: "Rp500,000",
    },
    {
      imageSrc: "/assets/images/stingless_bee.svg",
      title: "Rumah lebah ‘Segitiga’",
      description: "Lorem ipsum dolor sit amet",
      price: "Rp500,000",
    },
    {
      imageSrc: "/assets/images/stingless_bee.svg",
      title: "Rumah lebah ‘Lebah Ganteng’",
      description: "Lorem ipsum dolor sit amet",
      price: "Rp500,000",
    },
  ];

  return (
    <NextUIProvider>
      <main className="flex overflow-hidden min-h-screen flex-col items-center w-full justify-center bg-[#FFFCF5]">
        <NavbarComponent />

        <div className="w-full space-y-4 md:space-y-16 py-16 md:pt-12">
          <section id="taman-ramah-lebah">
            <TamanRumahLebahCard />
          </section>

          <section id="introduction">
            <ImageSection
              mobileSrc="/assets/images/introduction_sm.svg"
              desktopSrc="/assets/images/introduction.svg"
              mobileWidth={300}
              desktopWidth={440}
              mobileHeight={40}
              desktopHeight={40}
              alt="starting-up"
            />
            <IntroductionCard />
          </section>

          <section id="get-beenefit">
            <ImageSection
              mobileSrc="/assets/images/get-beenefit_sm.svg"
              desktopSrc="/assets/images/get-beenefit.svg"
              mobileWidth={400}
              desktopWidth={640}
              mobileHeight={90}
              desktopHeight={40}
              alt="starting-up"
            />

            <div className="flex flex-col sm:flex-row">
              <GetBeenefitCard
                stepNumber={1}
                title="Konsultasi"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                imageSrc="/assets/images/stingless_bee.svg"
              />

              <GetBeenefitCard
                stepNumber={2}
                title="Pengiriman"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                imageSrc="/assets/images/stingless_bee.svg"
              />

              <GetBeenefitCard
                stepNumber={3}
                title="Pemasangan"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                imageSrc="/assets/images/stingless_bee.svg"
              />
            </div>
          </section>

          <section id="community">
            <ImageSection
              mobileSrc="/assets/images/community_sm.svg"
              desktopSrc="/assets/images/community.svg"
              mobileWidth={400}
              desktopWidth={640}
              mobileHeight={90}
              desktopHeight={40}
              alt="starting-up"
            />

            <div className="flex flex-col sm:flex-row">
              <CommunityCard
                imageSrc="/assets/images/stingless_bee.svg"
                title="125 Beekeepers"
              />

              <CommunityCard
                imageSrc="/assets/images/stingless_bee.svg"
                title="2 Millions Bee"
                subtitle="and ZERO stings"
              />

              <CommunityCard
                imageSrc="/assets/images/stingless_bee.svg"
                title="Rp120,000,000"
                subtitle="bee products traded monthly"
              />
            </div>
          </section>

          <section id="testimony">
            <ImageSection
              mobileSrc="/assets/images/testimonial_sm.svg"
              desktopSrc="/assets/images/testimonial.svg"
              mobileWidth={240}
              desktopWidth={500}
              mobileHeight={90}
              desktopHeight={40}
              alt="starting-up"
            />

            <div className="flex flex-col sm:flex-row">
              <TestimonyCard
                imageSrc="/assets/images/stingless_bee.svg"
                title="The bees are very cute and easy to take care of"
                author="Aso, entrepreneur"
              />

              <TestimonyCard
                imageSrc="/assets/images/stingless_bee.svg"
                title="The bees are very cute and easy to take care of"
                author="Aso, entrepreneur"
              />

              <TestimonyCard
                imageSrc="/assets/images/stingless_bee.svg"
                title="The bees are very cute and easy to take care of"
                author="Aso, entrepreneur"
              />
            </div>
          </section>

          <section id="faq">
            <ImageSection
              mobileSrc="/assets/images/faq_sm.svg"
              desktopSrc="/assets/images/faq.svg"
              mobileWidth={160}
              desktopWidth={300}
              mobileHeight={60}
              desktopHeight={40}
              alt="starting-up"
            />

            <div className="flex justify-center items-center pt-16 gap-16 px-4 sm:px-16 text-black">
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

          <section id="contact">
            <div className="w-full flex flex-col justify-center items-center pt-16 gap-4 px-4 sm:px-16 text-black">
              <p className="text-[#228B22] font-bold text-xl">
                Belum yakin apakah tempat Anda cocok untuk memelihara stingless
                bees?
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center sm:items-end gap-4 sm:gap-8">
                <Button
                  size="lg"
                  radius="lg"
                  className="bg-[#FFD67A] font-bold p-8"
                >
                  Lihat koleksi taman stingless bees
                </Button>
                <div className="flex flex-col justify-center items-center gap-4">
                  <Image
                    src="/assets/images/Bee/bee_5.svg"
                    width={100}
                    height={20}
                    alt="faq"
                    draggable="false"
                  />
                  <p className="text-[#228B22] font-bold text-2xl">Atau</p>
                </div>
                <Button
                  size="lg"
                  radius="lg"
                  className="bg-[#F1F1F1] border-1 border-[#228B22] font-bold p-8"
                >
                  Kontak admin untuk konsultasi
                </Button>
              </div>
            </div>
          </section>

          <section id="starting-up">
            <ImageSection
              mobileSrc="/assets/images/starting-up_sm.svg"
              desktopSrc="/assets/images/starting-up.svg"
              mobileWidth={200}
              desktopWidth={500}
              mobileHeight={65}
              desktopHeight={80}
              alt="starting-up"
            />

            <div className="flex flex-col text-black justify-center items-center gap-8 pt-4 w-full px-4 sm:px-8 md:pt-8">
              <p className="text-xl ">
                View some of our beginner friendly starter packs, or{" "}
                <span className="font-bold">see more at our marketplace</span>
              </p>

              <div className="flex flex-col sm:flex-row">
                {startingUpItems.map((item, index) => (
                  <StartingUpCard
                    key={index}
                    imageSrc={item.imageSrc}
                    title={item.title}
                    description={item.description}
                    price={item.price}
                  />
                ))}
              </div>

              <div className="flex flex-col gap-2">
                <Button
                  size="lg"
                  radius="full"
                  onPress={() => setIsModalOpen(true)}
                  className="bg-[#228B22] text-white text-2xl font-bold px-12 py-8"
                >
                  Hubungi Saya
                </Button>
                <ContactModal
                  isOpen={isModalOpen}
                  onOpenChange={setIsModalOpen}
                />
                <p>*) Tim kami akan segera menghubungi anda</p>
              </div>
            </div>
          </section>

          <section id="article">
            <ImageSection
              mobileSrc="/assets/images/article_sm.svg"
              desktopSrc="/assets/images/article.svg"
              mobileWidth={200}
              desktopWidth={400}
              mobileHeight={65}
              desktopHeight={100}
              alt="starting-up"
            />

            <div className="flex flex-col text-black justify-center items-center gap-8 pt-4 w-full px-4 sm:px-8 md:pt-8">
              <p className="text-xl ">
                Learn more about the bees and beekeeping
              </p>
            </div>
          </section>
        </div>
        <Footer />
      </main>
    </NextUIProvider>
  );
}
