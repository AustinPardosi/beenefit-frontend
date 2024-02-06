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
import Link from "next/link";
import BuzzEduCard from "./components/Card/Buzz Edu Card/page";
import BuzzEduCarousel from "./components/Caraosel/page";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtUqxVfLZd3VK2iOBCaB0HsErKjtGiQ6c",
  authDomain: "beenefit-lp.firebaseapp.com",
  projectId: "beenefit-lp",
  storageBucket: "beenefit-lp.appspot.com",
  messagingSenderId: "374394202278",
  appId: "1:374394202278:web:8ffac89e001a7a2869ec67",
  measurementId: "G-M2VQCTZ0Q1"
};

// Initialize Firebase
// https://wideawakeben.medium.com/adding-firebase-analytics-and-firestore-to-a-react-next-js-app-bffffc2f638e
console.log("Checking window instance");
if (typeof window !== "undefined") {
  console.log("initializing firebase");
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
}

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
      imageSrc: "/assets/images/start_1.svg",
      title: "Rumah lebah ‘Peek-A-Bee’",
      price: "Rp500,000",
    },
    {
      imageSrc: "/assets/images/start_2.svg",
      title: "Rumah lebah ‘Tria’",
      price: "Rp550,000",
    },
    {
      imageSrc: "/assets/images/start_3.svg",
      title: "Rumah lebah ‘Hexa’",
      price: "Rp500,000",
    },
  ];

  return (
    <NextUIProvider>
      <main className="flex overflow-hidden flex-col items-center w-full justify-center bg-[#FFF7E5]">
        <NavbarComponent />
        <div className="flex w-screen pt-16 sm:pt-20">
          <Image
            src="/assets/images/landing.svg"
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
            width={500}
            height={300}
            alt="landing"
          />
        </div>
        <div className="w-full space-y-4 md:space-y-8 py-8 sm:py-16">
          <section id="introduction">
            <ImageSection
              mobileSrc="/assets/images/introduction_sm.svg"
              desktopSrc="/assets/images/introduction.svg"
              mobileWidth={200}
              desktopWidth={440}
              mobileHeight={40}
              desktopHeight={40}
              alt="starting-up"
            />
            <IntroductionCard />
          </section>

          <section id="testimony">
            <ImageSection
              mobileSrc="/assets/images/testimonial_sm.svg"
              desktopSrc="/assets/images/testimonial.svg"
              mobileWidth={190}
              desktopWidth={500}
              mobileHeight={90}
              desktopHeight={40}
              alt="starting-up"
            />

            <div className="flex flex-col sm:flex-row justify-center">
              <TestimonyCard
                imageSrc="/assets/images/testi_1.svg"
                description="Ini awalnya gegara liat di rumah tetangga punya lebah klanceng dari @beenefit.stinglessbees ..."
                author="Rumah Terang"
                linkSrc="https://www.instagram.com/p/Cz-VswZS04R/?igshid=MzRlODBiNWFlZA%3D%3D&img_index=6"
              />
              <TestimonyCard
                imageSrc="/assets/images/testi_2.svg"
                description="*Emang boleh kita pelihara lebah? Emang boleh?*Keren yah, ternyata ga hanya kucing, anjing, ikan, dan ..."
                author="Umang Abang"
                linkSrc="https://www.instagram.com/p/C0DYY__Snpa/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA%3D%3D&img_index=1"
              />
            </div>
          </section>

          <section id="get-beenefit">
            <ImageSection
              mobileSrc="/assets/images/get-beenefit_sm.svg"
              desktopSrc="/assets/images/get-beenefit.svg"
              mobileWidth={300}
              desktopWidth={640}
              mobileHeight={90}
              desktopHeight={40}
              alt="starting-up"
            />

            <div className="flex flex-col sm:flex-row">
              <GetBeenefitCard
                stepNumber={1}
                title="Konsultasi"
                description="Diskusikan kebutuhan untuk pemasangan rumah lebah kamu dengan kami melalui konsultasi dengan ahli."
                imageSrc="/assets/images/steps_1.svg"
              />

              <GetBeenefitCard
                stepNumber={2}
                title="Pengiriman"
                description="Rumah lebah estetik dan berkualitas tinggi dikirimkan langsung ke rumah kamu."
                imageSrc="/assets/images/steps_2.svg"
              />

              <GetBeenefitCard
                stepNumber={3}
                title="Pemasangan"
                description="Nikmati memasang rumah lebah dengan mudah dan menyenangkan bersama panduan kami."
                imageSrc="/assets/images/steps_3.svg"
              />
            </div>
          </section>

          <section id="taman-ramah-lebah">
            <Link href="https://www.instagram.com/beenefit.garden/">
              <TamanRumahLebahCard />
            </Link>
          </section>

          <section id="starting-up">
            <ImageSection
              mobileSrc="/assets/images/starting-up_sm.svg"
              desktopSrc="/assets/images/starting-up.svg"
              mobileWidth={220}
              desktopWidth={500}
              mobileHeight={65}
              desktopHeight={80}
              alt="starting-up"
            />

            <div className="flex flex-col text-black justify-center items-center gap-8 pt-4 w-full px-4 sm:px-8 md:pt-8">
              <p className="text-base sm:text-xl ">
                View some of our beginner friendly starter packs, or{" "}
                <span className="font-bold">see more at our marketplace</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-0">
                {startingUpItems.map((item, index) => (
                  <StartingUpCard
                    key={index}
                    imageSrc={item.imageSrc}
                    title={item.title}
                    price={item.price}
                  />
                ))}
              </div>

              <div className="flex flex-col gap-2">
                <Button
                  size="lg"
                  radius="full"
                  onPress={() => setIsModalOpen(true)}
                  className="bg-[#228B22] text-white text-lg sm:text-2xl font-bold py-4"
                >
                  Pesan Sekarang
                </Button>
                <ContactModal
                  isOpen={isModalOpen}
                  onOpenChange={setIsModalOpen}
                />
                <p>*) Tim kami akan segera menghubungi anda</p>
              </div>
            </div>
          </section>

          <section id="community">
            <ImageSection
              mobileSrc="/assets/images/community_sm.svg"
              desktopSrc="/assets/images/community.svg"
              mobileWidth={300}
              desktopWidth={640}
              mobileHeight={80}
              desktopHeight={40}
              alt="starting-up"
            />

            <div className="flex flex-col sm:flex-row">
              <CommunityCard
                imageSrc="/assets/images/com_1.svg"
                title="250 rumah lebah"
                description="Beenefit telah membuat 250+ rumah lebah"
              />

              <CommunityCard
                imageSrc="/assets/images/com_2.svg"
                title="5 bee friendly garden proyek"
                description="Beenefit telah memiliki 5 proyek taman"
              />

              <CommunityCard
                imageSrc="/assets/images/com_3.svg"
                title="3 collaboration home influencer"
                description="Beenefit telah menjalin ke 3 home influencer"
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

            <div className="flex justify-center items-center pt-8 gap-16 px-4 sm:px-16 text-black">
              <Accordion
                variant="splitted"
                itemClasses={{
                  indicator: "text-3xl text-black",
                }}
              >
                <AccordionItem
                  key="1"
                  aria-label="Accordion 1"
                  title="Berapa jumlah madu yang dihasilkan?"
                  className="border-1 border-[#228B22]"
                >
                  Dalam 2-3 minggu, 1 koloni bisa menghasilkan sekitar 2-3
                  sendok makan madu. Idealnya, untuk mendapatkan produksi penuh,
                  dibutuhkan waktu sekitar 3-4 bulan.
                </AccordionItem>
                <AccordionItem
                  key="2"
                  aria-label="Accordion 2"
                  title="Mengapa saya harus memiliki rumah lebah ini?"
                  className="border-1 border-[#228B22]"
                >
                  Dengan memiliki rumah lebah, Anda dapat membantu penyerbukan
                  tanaman di taman Anda, memenuhi kebutuhan madu personal dan
                  dapat digunakan sebagai sarana edukasi untuk anak-anak.
                </AccordionItem>
                <AccordionItem
                  key="3"
                  aria-label="Accordion 3"
                  title="Dari mana asal lebah ini?"
                  className="border-1 border-[#228B22]"
                >
                  Lebah tanpa sengat secara umum ditemukan di negara tropis.
                  Koloni lebah tanpa sengat kami berasal dari Jawa Barat,
                  Indonesia.
                </AccordionItem>
                <AccordionItem
                  key="4"
                  aria-label="Accordion 4"
                  title="Bagaimana cara melakukan panen madu?"
                  className="border-1 border-[#228B22]"
                >
                  Madu dapat dipanen dengan mengambil kantong madunya, kemudian
                  ditekan. Madu akan keluar secara alami.
                </AccordionItem>
                <AccordionItem
                  key="5"
                  aria-label="Accordion 5"
                  title="Berapa lama waktu PO berlangsung?"
                  className="border-1 border-[#228B22]"
                >
                  Kami membuka proses pemesanan setiap 2 minggu sekali.
                  Informasi lebih lanjut mengenai batch pemesanan dapat
                  ditemukan di akun Instagram kami.
                </AccordionItem>
              </Accordion>
            </div>
          </section>

          <section id="contact">
            <div className="w-full flex flex-col justify-center items-center gap-4 px-4 sm:px-16 pt-4 sm:pt-16 text-black">
              <p className="text-[#228B22] font-bold text-xl">
                Belum yakin apakah tempat Anda cocok untuk memelihara stingless
                bees?
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center sm:items-end gap-4 sm:gap-8">
                <Link href="https://instagram.com/beenefit.catalogue" passHref>
                  <Button
                    size="lg"
                    radius="lg"
                    className="bg-[#FFD67A] border-1 border-[#228B22] font-bold p-4 sm:p-8"
                  >
                    Lihat koleksi taman stingless bees
                  </Button>
                </Link>
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
                <Link href="https://wa.me/6285860177309">
                  <Button
                    size="lg"
                    radius="lg"
                    className="bg-white border-1 border-[#228B22] font-bold p-4 sm:p-8"
                  >
                    Kontak admin untuk konsultasi
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          <section id="buzz-edu">
            <ImageSection
              mobileSrc="/assets/images/article_sm.svg"
              desktopSrc="/assets/images/article.svg"
              mobileWidth={200}
              desktopWidth={400}
              mobileHeight={65}
              desktopHeight={100}
              alt="Buzz Edu"
            />

            <div className="flex flex-col text-black justify-center items-center gap-8 pt-4 w-full px-4 sm:px-8 md:pt-8">
              <p className="text-xl ">
                Learn more about the bees and beekeeping
              </p>
            </div>
            <div className="hidden sm:flex px-20 sm:pt-8">
              <BuzzEduCarousel />
            </div>
            <div className="flex flex-col sm:hidden sm:flex-row gap-8 pt-4 w-full justify-center items-center px-4 sm:px-8 md:pt-8">
              <Link href="https://www.instagram.com/p/CzOirpZvEro/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==">
                <BuzzEduCard
                  imageSrc="/assets/images/buzz_1.svg"
                  date="November, 2023"
                  description="Hai beestie! Weekend gini enaknya belajar bareng 🐝 Pasti udah ga asing dengan penyerbukan yang aktor utamanya lebah kan? ..."
                  title="Proses penyerbukan oleh lebah"
                />
              </Link>
              <Link href="https://www.instagram.com/p/CzaAOvfvQwl/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==">
                <BuzzEduCard
                  imageSrc="/assets/images/buzz_2.svg"
                  date="November, 2023"
                  description="Punya hewan peliharaan tapi bermanfaat untuk kita emang mungkin yaa? Mungkin banget dong kalau hewan peliharaannya ..."
                  title="Hasil produk dari lebah tanpa sengat"
                />
              </Link>
              <Link href="https://www.instagram.com/p/CzyeUeUrzTU/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==">
                <BuzzEduCard
                  imageSrc="/assets/images/buzz_3.svg"
                  date="November, 2023"
                  description="Hai, beestie!! 🐝✨ Selamat datang di rumah penuh keceriaan para lebah tanpa sengat! 🏡 Rumah ini merupakan pusat aksi ..."
                  title="Lebah kamu tinggal dimana?"
                />
              </Link>
              <Link href="https://www.instagram.com/p/Cz6Dg1ErgtH/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==">
                <BuzzEduCard
                  imageSrc="/assets/images/buzz_4.svg"
                  date="November, 2023"
                  description="Holla bee buddies! 🐝✌️ Ada yang masih bingung ga nih gimana caranya nyimpen rumah lebah kita biar keliatan keren dan aman? ..."
                  title="Gimana sih cara simpan rumah lebah?"
                />
              </Link>
            </div>
          </section>
        </div>
        <Footer />
      </main>
    </NextUIProvider>
  );
}
