export default function Footer() {
  return (
    <div className="text-white max-w-6xl mx-auto flex flex-col">
      <div className="h-[2px] w-full bg-gradient-to-r from-[#FF2DF7] via-[#5200FF] to-[#00F0FF] mb-2" />
      <div className="flex flex-col mx-auto sm:mx-0 mt-4 sm:flex-row sm:items-center sm:justify-between mb-16">
        <div className="sm:mb-0 mb-6">Copyright © 2022 DOML. All rights reserved.</div>
        <div className="text-center sm:text-right">
          Terms of Use & Privacy Policy
        </div>
      </div>
    </div>
  );
}
