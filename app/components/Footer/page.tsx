import Image from "next/image";

function Footer() {
  return (
    <>
      <footer className="bg-[#FFD67A] w-full text-black p-8 space-y-8 flex flex-col sm:flex-row">
        <div className="flex sm:flex-col gap-8 sm:w-1/3">
          <div className="w-full flex justify-start items-center">
            <Image
              src="/assets/images/beenefit_logo.svg"
              width={150}
              height={150}
              alt="beenefit logo"
              draggable="false"
            />
          </div>
          <h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h1>
        </div>
        <div className="flex flex-col justify-between space-y-8 sm:w-2/3 sm:pr-16">
          <div className="flex flex-col sm:flex-row gap-8 justify-center sm:justify-around items-center font-bold">
            <p>Kontak Kami</p>
            <p>Layanan</p>
            <p>Forum</p>
          </div>
          <div className="flex justify-between sm:justify-end sm:gap-16">
            <p>Terms Of Service</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
