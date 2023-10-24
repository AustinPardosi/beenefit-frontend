import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-[100] w-full">
      <nav className="sticky top-0 h-[6rem] justify-between items-center px-[50px] md:px-[75px] emd:px-[75px] bg-[#FFD67A] z-10 md:flex hidden shadow-lg text-black font-bold cursor-pointer">
        <div className="brand flex relative">
          <Image
            src="/assets/images/beenefit_logo.svg"
            width={150}
            height={150}
            alt="logo beenefit"
            draggable="false"
          />
        </div>
        <div className="flex gap-16">
          <p>The Bees</p>
          <p>Community</p>
          <p>FAQ</p>
          <p>Starting Up</p>
          <p>Sign Up</p>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
