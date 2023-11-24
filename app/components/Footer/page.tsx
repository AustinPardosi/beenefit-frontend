import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <>
      <footer className="bg-[#FFD67A] w-full justify-between text-black p-8 flex flex-col sm:flex-row">
        {/* Logo Section */}
        {/* Mobile */}
        <div className="flex sm:hidden justify-between items-start">
          <Image
            src="/assets/icons/footer-sm.svg"
            width={100}
            height={100}
            alt="beenefit logo"
            draggable="false"
          />
          <div className="flex flex-col font-bold text-lg items-end ">
            <p className="text-[#228B22]">Kontak Kami</p>
            <p>Layanan</p>
            <p>Forum</p>
          </div>
        </div>

        {/* Others */}
        <div className="hidden sm:flex items-center justify-center">
          <Image
            src="/assets/images/beenefit_logo.svg"
            width={300}
            height={300}
            alt="beenefit logo"
            draggable="false"
          />
        </div>

        {/* Information Section */}
        <div className="flex flex-col sm:pr-16 pt-2 sm:pt-0 gap-2 justify-start items-start">
          <div className="flex flex-col gap-2 justify-start items-start">
            <p className="font-bold text-lg sm:text-xl text-[#228B22]">
              Alamat
            </p>
            <p>
              Jl. Ganesa No.15, Lb. Siliwangi, Kecamatan Coblong, Kota Bandung,
              Jawa Barat 40132
            </p>
          </div>
          <div className="flex flex-col gap-2 justify-start items-start">
            <p className="font-bold text-lg sm:text-xl text-[#228B22]">
              Kontak
            </p>
            <p>+62 858-6017-7309 (whatsapp admin Beenefit)</p>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center pt-2 w-full gap-4 sm:gap-0">
            <div className="flex flex-col justify-center items-center gap-2">
              <Link
                href="https://www.instagram.com/beenefit.stinglessbees/"
                passHref
              >
                <Image
                  src="/assets/icons/instagram.svg"
                  width={30}
                  height={30}
                  alt="beenefit logo"
                  draggable="false"
                />
              </Link>
              <p>@beenefit.stinglessbees</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <Link href="mailto:beenefit.info@gmail.com" passHref>
                <Image
                  src="/assets/icons/gmail.svg"
                  width={30}
                  height={30}
                  alt="beenefit logo"
                  draggable="false"
                />
              </Link>
              <p>beenefit.info@gmail.com</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <Link href="https://www.linkedin.com/company/beenefit" passHref>
                <Image
                  src="/assets/icons/linkedin.svg"
                  width={30}
                  height={30}
                  alt="beenefit logo"
                  draggable="false"
                />
              </Link>
              <p>Beenefit</p>
            </div>
          </div>
        </div>

        {/* Navigation Section */}
        <div className="hidden sm:flex flex-col font-bold text-xl items-end gap-8">
          <p className="text-[#228B22]">Kontak Kami</p>
          <p>Layanan</p>
          <p>Forum</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
