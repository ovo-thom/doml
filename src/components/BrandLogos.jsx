import Image from "next/image";
import brandlogos from "../assets/images/groups-logo.png";

export default function BrandLogos() {
  return (
    <div className="max-w-6xl mx-auto w-full bg-black py-10 sm:pt-20">
      <div className="mb-12">
        <Image
          width={1200}
          height={120}
          src={brandlogos}
          alt="brand logos"
          className="w-3/4 sm:w-full mx-auto"
        />
      </div>
      <p className="text-white text-center text-sm sm:text-base w-1/2 mx-auto">
        Trusted by the world’s most ambitious teams.
      </p>
    </div>
  );
}
