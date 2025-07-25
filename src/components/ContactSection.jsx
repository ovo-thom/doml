import Image from "next/image";
import strangeMorph from "../assets/images/strangemorph.png";
import arrowRight from "../assets/icons/arrowright.png";

export default function ContactSection() {
  return (
    <div className="text-white max-w-6xl h-[807px] w-[95%] mx-auto py-10">
      <div className="bg-gradient-to-r from-[#FF2DF7] via-[#5200FF] to-[#00F0FF] rounded-xl px-4 py-8 flex flex-col">
        <div className="flex flex-col sm:grid sm:grid-cols-[40%_60%] sm:grid-rows-1 sm:gap-0 w-full sm:h-[300px]">
          {/* Colonne image */}
          <div className="relative flex sm:pt-10 justify-center items-center w-full sm:col-start-1 sm:row-start-1">
            <div className="w-64 h-44"></div>
            <Image
              width={450}
              height={450}
              src={strangeMorph}
              alt="morphism"
              className="absolute -top-24 sm:left-auto sm:top-auto -right-6 object-cover w-96 sm:w-[450px] sm:h-[450px]"
            />
          </div>
          {/* Colonne contenu */}
          <div className="flex flex-col justify-center items-center sm:items-center w-full sm:col-start-2 sm:row-start-1">
            <div className="w-full flex flex-col">
            <p className="text-3xl sm:text-2x md:text-3xl lg:text-5xl w-3/4 sm:w-3/4 sm:text-start mx-auto text-center mb-10 sm:leading-loose">
              Get exponential reach via <span className="font-bold">AI Marketing</span>
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row items-baseline">
              <input type="search" placeholder="Enter your work email" className="rounded-full py-2 px-5 w-full sm:w-[60%] outline-none bg-white/20 placeholder:text-white flex-shrink-0" />
              <div className="flex justify-center items-center bg-black rounded-full py-1 w-full sm:w-1/3 ml-2 flex-shrink-0">
                <button className="flex flex-row py-1 items-center justify-center w-full">
                  Get in touch
                  <Image
                    width={14}
                    height={5}
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
