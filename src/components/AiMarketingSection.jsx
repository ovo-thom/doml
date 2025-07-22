import Image from "next/image";
import aimarketing from "../assets/images/aimarketing.png";
import optimizedreach from "../assets/images/optimizedreach.png";
import planet from "../assets/images/planet.png";
import arrowright from "../assets/icons/arrowright.png";

export default function AiMarketingSection() {
  return (
    <section className="text-white h-screen md:my-32">
      <div className="grid grid-cols-1 sm:grid sm:grid-cols-[60%_40%] justify-center items-center">
        <div className="w-full order-2 sm:order-1">
          <Image
            width={400}
            height="auto"
            src={aimarketing}
            alt="aimarketing"
            className="w-64 sm:w-[400px] mx-auto sm:ml-0 sm:mr-0 my-4"
          />

          <Image
            width={500}
            height="auto"
            src={optimizedreach}
            alt="optimized reach"
            className="w-80 sm:w-[500px] mx-auto sm:ml-0 sm:mr-0"
          />
          <p className=" text-lg w-[77%] mt-8 mx-auto sm:ml-0 sm:mr-0">
            Our vision is to revolutionize the way brands and advertisers
            target, reach
          </p>
          <span className="block bg-gradient-to-r from-[#FF2DF7] via-[#5200FF] to-[#00F0FF] h-[1px] my-10 w-3/4 mx-auto md:ml-0 md:mr-0"></span>
          <div className="bg-gradient-to-r from-[#FF2DF7] via-[#5200FF] to-[#00F0FF] p-[1px] rounded-2xl w-36">
            <div className="flex justify-center items-center bg-black rounded-2xl py-1 w-full">
              <button className="pr-2">Get started</button>
              <Image width={14} height={4} src={arrowright} alt="arrow right" />
            </div>
          </div>
        </div>

        <div className="flex justify-center order-1 sm:order-2">
          <Image height={450} width={450} src={planet} alt="planet" className="max-w-[200px] sm:max-w-none w-full h-auto" />
        </div>
      </div>
    </section>
  );
}
