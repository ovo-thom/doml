import Image from "next/image";
import responsiveGroupLogos from "../assets/images/responsiveGroupLogos.png";
import responsiveLogos from "../assets/images/responsiveLogos.png";

export default function BrandLogos() {
  return (
    <div className="max-w-6xl mx-auto w-full bg-black pt-14 sm:pt-20">
      <div className="hidden sm:block  mb-12">
        <Image
          width={1200}
          height={120}
          src={responsiveGroupLogos}
          alt="brand logos"
          className="w-3/4 sm:w-full mx-auto"
        />
      </div>
      <div className="sm:hidden mb-12">
        <Image
          width={1200}
          height={120}
          src={responsiveLogos}
          alt="brand logos"
          className="w-3/4 mx-auto"
        />
      </div>
    </div>
  );
}
