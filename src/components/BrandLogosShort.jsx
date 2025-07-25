import Image from "next/image";
import shortBrandLogos from "../assets/images/shortBrandLogos.png";
import responsiveLogos from "../assets/images/responsiveLogos.png";

export default function BrandLogos() {
  return (
    <div className="max-w-6xl mx-auto w-full bg-black py-16 sm:py-24">
      <div className="hidden sm:block mb-12">
        <Image
          width={1200}
          height={120}
          src={shortBrandLogos}
          alt="brand logos"
          className="w-3/4 sm:w-full mx-auto"
        />
      </div>
      <div className="sm:hidden mb-12">
        <Image
          width={1200}
          height={50}
          src={responsiveLogos}
          alt="brand logos"
          className="w-3/4 mx-auto"
        />
      </div>
    </div>
  );
}
