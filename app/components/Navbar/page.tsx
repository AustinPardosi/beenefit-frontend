import React from "react";
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

const NavbarComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["The Bees", "Community", "FAQ", "Starting Up"];

  return (
    <Navbar
      shouldHideOnScroll
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="bg-[#FFD67A] py-2 sm:py-4 w-full z-10 fixed "
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

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link className="text-[#228B22] font-bold" href="#">
            The Bees
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link
            className="text-[#228B22] font-bold"
            href="#"
            aria-current="page"
          >
            Community
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-[#228B22] font-bold" href="#">
            FAQ
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-[#228B22] font-bold" href="#">
            Starting Up
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
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
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default NavbarComponent;
