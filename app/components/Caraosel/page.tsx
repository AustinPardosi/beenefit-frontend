'use client'

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import BuzzEduCard from "../Card/Buzz Edu Card/page";
import Link from "next/link";
import { Button } from "@nextui-org/react";

interface BuzzEduItem {
  link: string;
  imageSrc: string;
  date: string;
  description: string;
  title: string;
}

const BuzzEduCarousel = () => {
  const buzzEduItems = [
    {
      link: "https://www.instagram.com/p/CzOirpZvEro/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==",
      imageSrc: "/assets/images/buzz_1.svg",
      date: "November, 2023",
      description:
        "Hai beestie! Weekend gini enaknya belajar bareng 🐝 Pasti udah ga asing dengan penyerbukan yang aktor utamanya lebah kan? ...",
      title: "Proses penyerbukan oleh lebah",
    },
    {
      link: "https://www.instagram.com/p/CzaAOvfvQwl/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==",
      imageSrc: "/assets/images/buzz_2.svg",
      date: "November, 2023",
      description:
        "Punya hewan peliharaan tapi bermanfaat untuk kita emang mungkin yaa? Mungkin banget dong kalau hewan peliharaannya ...",
      title: "Hasil produk dari lebah tanpa sengat",
    },
    {
      link: "https://www.instagram.com/p/CzyeUeUrzTU/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==",
      imageSrc: "/assets/images/buzz_3.svg",
      date: "November, 2023",
      description:
        "Hai, beestie!! 🐝✨ Selamat datang di rumah penuh keceriaan para lebah tanpa sengat! 🏡 Rumah ini merupakan pusat aksi ...",
      title: "Lebah kamu tinggal dimana?",
    },
    {
      link: "https://www.instagram.com/p/Cz6Dg1ErgtH/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==",
      imageSrc: "/assets/images/buzz_4.svg",
      date: "November, 2023",
      description:
        "Holla bee buddies! 🐝✌️ Ada yang masih bingung ga nih gimana caranya nyimpen rumah lebah kita biar keliatan keren dan aman? ...",
      title: "Gimana sih cara simpan rumah lebah?",
    },
  ];

  const renderItem = (item: BuzzEduItem, index: number) => (
    <Link href={item.link} key={index}>
      <BuzzEduCard
        imageSrc={item.imageSrc}
        date={item.date}
        description={item.description}
        title={item.title}
      />
    </Link>
  );

  const swiperRef = useRef(null);

  const handlePrev = () => {
    if (swiperRef.current) {
      (swiperRef.current as any).slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      (swiperRef.current as any).slideNext();
    }
  };
  

  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={3}
      navigation
      modules={[Pagination, Navigation]}
      pagination={{ clickable: true }}
      centeredSlides={true}
      className="mySwiper"
    >
      {buzzEduItems.map((item, index) => (
        <SwiperSlide key={index}>{renderItem(item, index)}</SwiperSlide>
      ))}
      <div className="swiper-button-next" style={{ color: "green" }} onClick={handleNext} />
      <div className="swiper-button-prev" style={{ color: "green" }} onClick={handlePrev} />
    </Swiper>
  );
};

export default BuzzEduCarousel;
