import womanOffice from "../assets/images/womanoffice.png";
import discord from "../assets/images/discord.png";
import pointsCarousel from "../assets/images/pointscarousel.png";
import Image from "next/image";

export default function AboutSection() {
  return (
    <div className="text-white max-w-6xl w-[95%] mx-auto py-20 sm:py-8">
      <div className="bg-gradient-to-r from-[#FF2DF7] via-[#5200FF] to-[#00F0FF] rounded-xl px-4 py-8 flex flex-col">
        <div className="flex flex-col sm:grid sm:grid-cols-[35%_65%] sm:grid-rows-1 sm:gap-0 items-center w-full">
          <div className="flex sm:pt-14 pl-6 justify-center items-center w-full sm:h-[300px] sm:col-start-1 sm:row-start-1">
            <Image
              width={257}
              height={257}
              src={womanOffice}
              alt="Woman office"
              className="object-cover sm:w-64 sm:h-64"
            />
          </div>
          <div className="flex flex-col justify-center items-center sm:items-start w-full sm:w-[90%]">
            <p className="text-center sm:text-left">
              It's all about getting your message in front of the right audience
              and creating those valuable relationships. Learn More about how
              DOML can help you do just that - all with a simple, easy-to-use
              platform.
            </p>
            <div className="my-5 text-center sm:text-left">
              <span className="font-bold">Amaka Micheal</span>
              <span className="block text-sm text-gray-50">
                Media Executive, Buying & Control
              </span>
            </div>
            <Image
              width={105}
              height={36}
              src={discord}
              alt="discord"
              className="mx-auto sm:mx-0"
            />
          </div>
        </div>
        <div className="flex justify-center h-6 sm:h-0 items-center pt-8 w-full">
          <Image src={pointsCarousel} alt="carousel" />
        </div>
      </div>
    </div>
  );
}
