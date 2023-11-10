import Image from "next/image";
import React, { useState } from "react";
import { Menu } from "lucide-react";

const a = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(true);
  };

  return (
    <nav className="sticky top-0 w-screen justify-between items-center px-[50px] md:px-[75px] emd:px-[75px] py-4 bg-[#FFD67A] z-10 flex shadow-lg text-black font-bold cursor-pointer">
      <div className="flex w-32 md:w-full ">
        <Image
          src="/assets/images/beenefit_logo.svg"
          width={150}
          height={150}
          alt="logo beenefit"
          draggable="false"
        />
      </div>
      <div className="md:hidden">
        <Menu className="w-8 h-8" />
      </div>
      <div className="hidden md:flex gap-16">
        <p>The Bees</p>
        <p>Community</p>
        <p>FAQ</p>
        <p>Starting Up</p>
        <p>Sign Up</p>
      </div>
    </nav>
  );
};

export default a;
