"use client";

import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const NavbarComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isActive, setIsActive] = useState(0);

  const menuItems = [
    { label: "The Bees", href: "introduction" },
    { label: "Community", href: "community" },
    { label: "FAQ", href: "faq" },
    { label: "Starting Up", href: "starting-up" },
  ];

  const handleLinkClick = (index: number) => {
    setIsActive(index);
  };

  return (
    <Navbar
      shouldHideOnScroll
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="full"
      className="bg-[#FFD67A] w-screen sm:py-2 z-20 fixed sm:px-8"
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className=" text-black"
        />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex " justify="start">
        <NavbarBrand>
          <Image
            width={100}
            alt="Beenefit Logo"
            src="/assets/images/beenefit_logo.svg"
          />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <Image
            width={100}
            alt="Beenefit Logo"
            src="/assets/images/beenefit_logo.svg"
          />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-16" justify="end">
        {menuItems.map((item, index) => (
          <NavbarItem key={index} className="cursor-pointer">
            {/* <Link
              className={`text-[#228B22] font-bold ${
                isActive === index ? "underline underline-offset-8" : ""
              }`}
              href={item.href}
              onClick={() => handleLinkClick(index)}
            >
              {item.label}
            </Link> */}
            <ScrollLink
              className={`text-[#228B22] font-bold ${
                isActive === index ? "underline underline-offset-8" : ""
              }`}
              to={item.href}
              spy={true}
              smooth={true}
              offset={-70} // Adjust the offset according to your layout
              duration={500} // Duration of the scroll animation
              onClick={() => handleLinkClick(index)}
            >
              {item.label}
            </ScrollLink>
          </NavbarItem>
        ))}
        <NavbarItem>
          <Button
            as={Link}
            color="primary"
            href="#"
            variant="bordered"
            className="border-[#228B22] text-[#228B22] font-bold"
          >
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="flex sm:hidden gap-16" justify="end">
        <NavbarItem>
          <Button
            as={Link}
            color="primary"
            href="#"
            variant="bordered"
            className="border-[#228B22] text-[#228B22] font-bold"
          >
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full pt-4 text-[#228B22] font-bold"
              href={item.href}
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default NavbarComponent;
