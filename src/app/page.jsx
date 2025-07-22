import Navbar from "@/components/Navbar";
import AiMarketingSection from "@/components/AiMarketingSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-black w-full min-w-full">
      <div className="h-auto max-w-5xl border-x border-x-gray-400 mx-auto">
        <Navbar />
      </div>
        <div className="max-w-6xl h-screen  mx-auto">
          <AiMarketingSection />
        </div>
    </div>
  );
}
