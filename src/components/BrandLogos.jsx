import Image from "next/image"
import brandlogos from "../assets/images/groups-logo.png"

export default function BrandLogos() {
  return (
    <div className="max-w-6xl mx-auto h-screen w-full bg-black py-36">
        <div className="w-full h-full">
            <Image src={brandlogos} alt="brand logos" />
        </div>
    </div>
  )
}