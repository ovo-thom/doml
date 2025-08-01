import Image from "next/image";
import arrowright from "../assets/icons/arrowright.png";

export default function AiMarketingSection({
  description,
  imageSrc,
  imageAlt,
  imageClassName = "",
  secondaryImageSrc,
  secondaryImageAlt = "",
  secondaryImageClassName = "",
  sideImageSrc,
  sideImageAlt = "",
  sideImageClassName = "",
  reverse = false,
  buttonText = "",
}) {
  return (
    <section data-aos="fade-up" className="max-w-6xl mx-auto text-white py-8 md:py-24">
      <div className="grid grid-cols-1 sm:grid-cols-[60%_40%] items-center">
        {reverse ? (
          <>
            <div className="flex justify-center sm:justify-start order-1 sm:order-1">
              {sideImageSrc && (
                <Image
                  height={450}
                  width={450}
                  src={sideImageSrc}
                  alt={sideImageAlt}
                  className={
                    sideImageClassName ||
                    "max-w-[200px] sm:max-w-none w-full h-auto"
                  }
                />
              )}
            </div>
            <div className="w-full order-2 sm:order-2">
              {imageSrc && (
                <Image
                  width={400}
                  height="auto"
                  src={imageSrc}
                  alt={imageAlt}
                  className={imageClassName}
                />
              )}

              {secondaryImageSrc && (
                <Image
                  width={500}
                  height="auto"
                  src={secondaryImageSrc}
                  alt={secondaryImageAlt}
                  className={secondaryImageClassName}
                />
              )}
              <p className="sm:text-lg text-sm text-center sm:text-left w-[65%] sm:w-full mt-4 sm:mt-8 mx-auto sm:mx-0">
                {description}
              </p>
              <span className="block bg-gradient-to-r from-[#FF2DF7] via-[#5200FF] to-[#00F0FF] h-[1px] my-6 sm:my-8 md:my-10 w-3/4 mx-auto md:ml-0 md:mr-0"></span>
              <div className="bg-gradient-to-r from-[#FF2DF7] via-[#5200FF] to-[#00F0FF] p-[1px] rounded-2xl mx-auto md:ml-0 md:mr-0 w-[90%] sm:w-36">
                <div className="flex justify-center items-center bg-black rounded-2xl py-1 w-full">
                  <button className="flex flex-row items-center justify-center w-full">
                    {buttonText}
                    <Image
                      width={14}
                      height={4}
                      src={arrowright}
                      alt="arrow right"
                      className="ml-2"
                    />
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="w-full order-2 sm:order-1">
              {imageSrc && (
                <Image
                  width={400}
                  height="auto"
                  src={imageSrc}
                  alt={imageAlt}
                  className={imageClassName}
                />
              )}

              {secondaryImageSrc && (
                <Image
                  width={500}
                  height="auto"
                  src={secondaryImageSrc}
                  alt={secondaryImageAlt}
                  className={secondaryImageClassName}
                />
              )}
              <p className="sm:text-lg text-sm text-center sm:text-left sm:mx-0 w-[65%] sm:w-[77%] mt-4 sm:mt-8 mx-auto sm:ml-0 sm:mr-0">
                {description}
              </p>
              <span className="block bg-gradient-to-r from-[#FF2DF7] via-[#5200FF] to-[#00F0FF] h-[1px] my-6 sm:my-8 md:my-10 w-3/4 mx-auto md:ml-0 md:mr-0"></span>
              <div className="bg-gradient-to-r from-[#FF2DF7] via-[#5200FF] to-[#00F0FF] p-[1px] rounded-2xl mx-auto md:ml-0 md:mr-0 w-[90%] sm:w-36">
                <div className="flex justify-center items-center bg-black rounded-2xl py-1 w-full">
                  <button className="flex flex-row items-center justify-center w-full">
                    {buttonText}
                    <Image
                      width={14}
                      height={4}
                      src={arrowright}
                      alt="arrow right"
                      className="ml-2"
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-center order-1 sm:order-2">
              {sideImageSrc && (
                <Image
                  height={450}
                  width={450}
                  src={sideImageSrc}
                  alt={sideImageAlt}
                  className={
                    sideImageClassName ||
                    "max-w-[200px] sm:max-w-none w-full h-auto"
                  }
                />
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
