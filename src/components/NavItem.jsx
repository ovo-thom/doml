import Image from "next/image";
import arrowBottom from "../assets/icons/arrowbottom.png";

export default function NavItem({ label, href = "#", hasArrow = false }) {
  return (
    <li className="flex items-center">
      <a
        href={href}
        className="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
      >
        {label}
      </a>
      {hasArrow && <Image src={arrowBottom} alt="arrow bottom" />}
    </li>
  );
}