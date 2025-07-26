import logoDoml from "../assets/icons/logoDoml.png";
import doml from "../assets/icons/doml.png";
import arrowBottom from "../assets/icons/arrowbottom.png";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import NavItem from "./NavItem";

const navLinks = [
  { label: "Product", hasArrow: true },
  { label: "Team" },
  { label: "Enterprise" },
  { label: "Explore", hasArrow: true },
  { label: "MarketPlace" },
  { label: "Pricing", hasArrow: true },
];

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
            {navLinks.map((link) => (
              <NavItem key={link.label} {...link} />
            ))}
          </ul>
        </div>
        <div className="flex space-x-3 mr-3">
          <input
            type="search"
            placeholder="Search Doml"
            className="border border-[#A3A3A3] py-1 px-2 placeholder:text-[#C0C3C9] rounded outline-none bg-[#272F43] text-gray-300 focus:border-blue-500 transition-colors duration-200"
          />
          <button className="px-2 hover:bg-blue-500 rounded-lg hover:text-white transition-colors duration-200 hover:shadow-lg">
            Sign in
          </button>
          <button className="border rounded-lg px-2 border-[#9E9C9C] hover:border-blue-500 hover:text-white transition-colors duration-200 hover:shadow-lg">
            Sign up
          </button>
        </div>
      </nav>
    </>
  );
}
