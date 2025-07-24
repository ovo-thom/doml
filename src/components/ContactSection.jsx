import Image from "next/image";
import strangeMorph from "../assets/images/strangemorph.png";
import arrowRight from "../assets/icons/arrowright.png";

export default function ContactSection() {
  return (
    <div className="text-white max-w-6xl w-[95%] mx-auto py-10">
      <div className="bg-gradient-to-r from-[#FF2DF7] via-[#5200FF] to-[#00F0FF] rounded-xl px-4 py-8 flex flex-col">
        <div className="flex flex-col sm:grid sm:grid-cols-[40%_60%] sm:grid-rows-1 sm:gap-0 w-full sm:h-[300px]">
          {/* Colonne image */}
          <div className="flex pt-10 justify-center items-center w-full sm:col-start-1 sm:row-start-1">
            <Image
              width={450}
              height={450}
              src={strangeMorph}
              alt="morphism"
              className="object-cover sm:w-[450px] sm:h-[450px]"
            />
          </div>
          {/* Colonne contenu */}
          <div className="flex flex-col justify-center items-center sm:items-center w-full sm:col-start-2 sm:row-start-1">
            <div className="w-3/4 flex flex-col">
            <p className="text-xl sm:text-2x md:text-3xl lg:text-5xl">
              Get exponential reach via <span className="font-bold">AI Marketing</span>
            </p>
            <div className="flex items-center">
              <input type="search" placeholder="Enter your work email" />
              <div className="flex justify-center items-center bg-black rounded-2xl py-1 w-full">
                <button className="flex flex-row items-center justify-center w-full">
                  Get in touch
                  <Image
                    width={14}
                    height={4}
                    src={arrowRight}
                    alt="arrow right"
                    className="ml-2"
                  />
                </button>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
