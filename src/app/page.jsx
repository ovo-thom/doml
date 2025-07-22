import Navbar from "@/components/Navbar";
import AiMarketingSection from "@/components/AiMarketingSection";
import BrandLogos from "@/components/BrandLogos";

export default function Home() {
  return (
    <div className="min-h-screen bg-black w-full min-w-full">
      <Navbar />
      <AiMarketingSection />
      <BrandLogos />
    </div>
  );
}
