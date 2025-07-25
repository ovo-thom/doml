import logoDoml from "../assets/icons/logoDoml.png";
import doml from "../assets/icons/doml.png";
import arrowBottom from "../assets/icons/arrowbottom.png";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar() {
  return (
    <>
      <nav className="flex justify-between bg-gray-950 p-5 md:hidden">
        <div className="flex items-center">
          <Image src={logoDoml} alt="logo dml" />
          <Image src={doml} alt="title doml" />
        </div>
        <div>
          <RxHamburgerMenu className="text-white text-2xl" />
        </div>
      </nav>

      <nav className="max-w-5xl mx-auto text-white border-b h-20 items-center justify-between bg-gray-950 hidden md:flex px-5">
        <div className="flex items-center">
          <Image src={logoDoml} alt="logo dml" />
          <Image src={doml} alt="title doml" />
          <ul className="flex text-sm gap-x-3 ml-4 items-center">
            <li className="flex items-center">
              <a href="#">Product</a>
              <Image src={arrowBottom} alt="arrow bottom" />
            </li>
            <li>
              <a href="#">Team</a>
            </li>
            <li>
              <a href="#">Enterprise</a>
            </li>
            <li className="flex items-center">
              <a href="#">Explore</a>
              <Image src={arrowBottom} alt="arrow bottom" />
            </li>
            <li>
              <a href="#">MarketPlace</a>
            </li>
            <li className="flex items-center">
              <a href="#">Pricing</a>
              <Image src={arrowBottom} alt="arrow bottom" />
            </li>
          </ul>
        </div>
        <div className="flex space-x-3 mr-3">
          <input
            type="search"
            placeholder="Search Doml"
            className="border border-[#A3A3A3] py-1 px-2 placeholder:text-[#C0C3C9] rounded outline-none bg-[#272F43] text-gray-300"
          />
          <button className="px-2">Sign in</button>
          <button className="border rounded-lg px-2 border-[#9E9C9C]">
            Sign up
          </button>
        </div>
      </nav>
    </>
  );
}
