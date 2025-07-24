import Navbar from "@/components/Navbar";
import aimarketing from "../assets/images/aimarketing.png";
import BrandLogos from "@/components/BrandLogos";
import planet from "../assets/images/planet.png";
import optimizedreach from "../assets/images/optimizedreach.png";
import AiMarketingSection from "@/components/AiMarketingSection";
import cube from "../assets/images/cube.png";
import polymorph from "../assets/images/polymorph.png";
import AboutSection from "@/components/AboutSection";
import lightCube from "../assets/images/lightcube.png"
import halfCircle from "../assets/images/halfcircle.png"
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-black w-full min-w-full">
      <Navbar />
      <AiMarketingSection
        imageClassName="w-56 sm:w-[400px] mx-auto sm:ml-0 sm:mr-0 my-4"
        imageAlt="aimarketing"
        imageSrc={aimarketing}
        description="Our vision is to revolutionize the way brands and advertisers
            target, reach"
        buttonText="Get started"
        secondaryImageSrc={optimizedreach}
        secondaryImageAlt="Optimized Reach"
        secondaryImageClassName="w-72 sm:w-[500px] mx-auto sm:ml-0 sm:mr-0"
        sideImageSrc={planet}
        sideImageAlt="planet"
        reverse={false}
      />
      <BrandLogos />
      <AiMarketingSection
        imageClassName="w-64 sm:w-[250px] mx-auto sm:ml-0 sm:mr-0 my-4"
        imageAlt="aimarketing"
        imageSrc={aimarketing}
        description={
          <>
            DOML is a digital media agency powered by AI technology providing
            real time,{" "}
            <span className="text-blue-500">data-driven insights</span> on your
            business and audience. The mission of DOML is to create the best
            experiences for companies through intelligent insights, powerful
            analytics and{" "}
            <span className="text-blue-500">strategic execution</span>.
          </>
        }
        buttonText="Learn more"
        secondaryImageSrc={optimizedreach}
        secondaryImageAlt="Optimized Reach"
        secondaryImageClassName="w-64 sm:w-[250px] mx-auto sm:ml-0 sm:mr-0"
        sideImageSrc={cube}
        sideImageAlt="planet"
        sideImageClassName="w-64 sm:w-[400px]  h-auto"
        reverse={false}
      />
      <AiMarketingSection
        imageClassName="w-64 sm:w-[250px] mx-auto sm:ml-0 sm:mr-0 my-4"
        imageAlt="aimarketing"
        imageSrc={aimarketing}
        description={
          <>
            It's all about getting your message in front of the right audience
            and creating those valuable{" "}
            <span className="text-blue-500">relationships</span>. Learn More
            about how DOML can help you do just that - all with a simple,
            easy-to-use platform.
          </>
        }
        buttonText="Learn more"
        secondaryImageSrc={optimizedreach}
        secondaryImageAlt="Optimized Reach"
        secondaryImageClassName="w-64 sm:w-[250px] mx-auto sm:ml-0 sm:mr-0"
        sideImageSrc={polymorph}
        sideImageAlt="polymorph"
        sideImageClassName="w-64 sm:w-[400px] h-auto"
        reverse={true}
      />
      <AboutSection />
      <AiMarketingSection
        imageClassName="w-64 sm:w-[250px] mx-auto sm:ml-0 sm:mr-0 my-4"
        imageAlt="aimarketing"
        imageSrc={aimarketing}
        description={
          <>
            DOML is a digital media agency powered by AI technology providing
            real time,{" "}
            <span className="text-blue-500">data-driven insights</span> on your
            business and audience. The mission of DOML is to create the best
            experiences for companies through intelligent insights, powerful
            analytics and{" "}
            <span className="text-blue-500">strategic execution</span>.
          </>
        }
        buttonText="Learn more"
        secondaryImageSrc={optimizedreach}
        secondaryImageAlt="Optimized Reach"
        secondaryImageClassName="w-64 sm:w-[250px] mx-auto sm:ml-0 sm:mr-0"
        sideImageSrc={lightCube}
        sideImageAlt="light cube"
        sideImageClassName="w-64 sm:w-[400px] h-auto"
        reverse={false}
      />
      <AiMarketingSection
        imageClassName="w-64 sm:w-[250px] mx-auto sm:ml-0 sm:mr-0 my-4"
        imageAlt="aimarketing"
        imageSrc={aimarketing}
        description={
          <>
            It's all about getting your message in front of the right audience
            and creating those valuable{" "}
            <span className="text-blue-500">relationships</span>. Learn More
            about how DOML can help you do just that - all with a simple,
            easy-to-use platform.
          </>
        }
        buttonText="Learn more"
        secondaryImageSrc={optimizedreach}
        secondaryImageAlt="Optimized Reach"
        secondaryImageClassName="w-64 sm:w-[250px] mx-auto sm:ml-0 sm:mr-0"
        sideImageSrc={halfCircle}
        sideImageAlt="half circle"
        sideImageClassName="w-64 sm:w-[400px] h-auto"
        reverse={true}
      />
    <ContactSection />
    </div>
  );
}
