import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navlink = [
  { label: "About Us", href: "/about" },
  { label: "Rapido Ads", href: "/rapio_ads" },
  { label: "Saftey", href: "/saftey" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="bg-white max-w-[1200px] mx-auto h-[84px] p-4 relative z-50">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="bg-yellow-400 px-2.5 py-3 rounded-full w-full max-w-28 h-12 text-2xl flex justify-center items-center font-bold">
          Rapido
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-12">
          {Navlink.map((nav) => (
            <li key={nav.href}>
              <a
                className="text-[20px] font-sans hover:text-yellow-500"
                href={nav.href}
              >
                {nav.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden cursor-pointer">
          {toggle ? (
            <X size={28} onClick={() => setToggle(false)} />
          ) : (
            <Menu size={28} onClick={() => setToggle(true)} />
          )}
        </div>
      </div>

      {/* Mobile Slide Menu */}
      <ul
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-black flex flex-col items-center justify-center gap-8 text-white transition-transform duration-300 ease-in-out transform ${
          toggle ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {Navlink.map((nav) => (
          <li key={nav.href}>
            <a
              className="text-[20px] font-sans hover:text-yellow-500"
              href={nav.href}
              onClick={() => setToggle(false)}
            >
              {nav.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
