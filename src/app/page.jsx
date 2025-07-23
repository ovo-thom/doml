import Navbar from "@/components/Navbar";
import aimarketing from "../assets/images/aimarketing.png";
import BrandLogos from "@/components/BrandLogos";
import planet from "../assets/images/planet.png"
import optimizedreach from "../assets/images/optimizedreach.png";
import AiMarketingSection from "@/components/AiMarketingSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-black w-full min-w-full">
      <Navbar />
      <AiMarketingSection
        imageClassName="w-64 sm:w-[400px] mx-auto sm:ml-0 sm:mr-0 my-4"
        imageAlt="aimarketing"
        imageSrc={aimarketing}
        description=" Our vision is to revolutionize the way brands and advertisers
            target, reach"
        buttonText="Get started"
        secondaryImageSrc={optimizedreach}
        secondaryImageAlt="Optimized Reach"
        secondaryImageClassName="w-80 sm:w-[500px] mx-auto sm:ml-0 sm:mr-0"
        sideImageSrc={planet}
        sideImageAlt="planet"
        reverse={false}
      />
      <BrandLogos />
    </div>
  );
}
