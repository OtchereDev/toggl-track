import { Link } from "@remix-run/react";
import { useEffect, useState } from "react";

import { Logo } from "~/components/shared/icons";

export default function NavBar() {
  const [scrollPosition, setPosition] = useState(0);

  useEffect(() => {
    function updatePosition() {
      setPosition(window.pageYOffset);
    }
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);
  return (
    <nav className="fixed w-full top-0 left-0 z-10">
      {scrollPosition < 10 && (
        <div className="bg-[#e67cd8] flex justify-end px-10 py-2">
          <div className="flex gap-3 text-xs font-inter">
            <button className="hover:underline">All Toggl Products</button>
            <Link className="hover:underline" to={"/blogs"}>
              Blog
            </Link>
            <Link className="hover:underline" to={"/blogs"}>
              Our mission
            </Link>
            <Link className="hover:underline" to={"/blogs"}>
              Careers
            </Link>
          </div>
        </div>
      )}
      <div
        className={`flex justify-between items-center py-4 px-10 text-white ${
          scrollPosition > 10
            ? "bg-[#2c1338] border-b-[0.1px] border-gray-300"
            : ""
        }`}
      >
        <div className="flex items-center gap-8">
          <Logo className="w-[168px]" />
          <button className="hover:text-[#e67cd8]">Use cases</button>
          <button className="hover:text-[#e67cd8]">Solutions</button>
          <Link className="hover:text-[#e67cd8]" to={"/pricing"}>
            Pricing
          </Link>
          <button className="hover:text-[#e67cd8]">Apps</button>
        </div>

        <div className="flex gap-7 items-center">
          <div className="border-r-2 pr-4">
            <Link className="hover:text-[#e67cd8]" to={"/"}>
              Book a demo
            </Link>
          </div>
          <Link className="hover:text-[#e67cd8]" to={"/"}>
            Log in
          </Link>

          <button className="bg-[#fce5d8] text-[#e67cd8] rounded-full px-6 py-3.5 hover:bg-white hover:bg-opacity-20">
            Try for free
          </button>
        </div>
      </div>
    </nav>
  );
}
