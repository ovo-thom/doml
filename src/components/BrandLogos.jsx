import Image from "next/image"
import brandlogos from "../assets/images/groups-logo.png"

export default function BrandLogos() {
  return (
    <div className="max-w-6xl mx-auto h-screen w-full bg-black sm:py-32">
        <div className="w-3/4 mx-auto sm:w-full mb-12">
            <Image src={brandlogos} alt="brand logos" />
        </div>
        <p className="text-white text-center">Trusted by the world’s most ambitious teams.</p>
    </div>
  )
}