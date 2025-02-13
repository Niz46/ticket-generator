"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { FaArrowRightLong, FaBars } from "react-icons/fa6";
import { CldImage } from "next-cloudinary";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navWidthClass = isScrolled
    ? "w-full h-[80px] fixed sm:top-[0%] border-none sm:rounded-none bg-[#05252C]"
    : "w-[90vw]";

  const getLinkClasses = (href) => {
    const baseClasses =
      "capitalize text-[18px] text-[#B3B3B3] hover:text-white duration-500 transition-all";
    return pathname === href
      ? `${baseClasses} text-white font-bold`
      : baseClasses;
  };

  return (
    <nav
      className={`${navWidthClass} h-[76px] bg-[#05252C] fixed sm:top-5 top-0 flex justify-between items-center border border-[#197686] sm:rounded-3xl rounded-3xl px-5 z-10 transition-all duration-300`}
    >
      <div className="flex items-center gap-2">
        {/* Hamburger icon only on mobile */}
        <button
          className="sm:hidden block text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaBars size={24} />
        </button>

        {/* Logo */}
        <Link href="/">
          <CldImage
            src="https://res.cloudinary.com/dbitkdy7t/image/upload/v1739361034/logo_vdddam.svg"
            alt="Logo"
            width={100}
            height={100}
          />
        </Link>
      </div>

      <ul className="hidden sm:flex gap-6 text-xl">
        <li>
          <Link href="/ticketform" className={getLinkClasses("/ticketform")}>
            events
          </Link>
        </li>
        <li>
          <Link href="/ticketcard" className={getLinkClasses("/ticketcard")}>
            my tickets
          </Link>
        </li>
        <li>
          <Link href="/about" className={getLinkClasses("/about")}>
            about project
          </Link>
        </li>
      </ul>

      {/* Right Section: "My Ticket" button */}
      <div>
        <Button className="bg-white uppercase text-stone-500 font-thin gap-2">
          my ticket <FaArrowRightLong className="text-black" />
        </Button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div
          className="absolute top-[76px] left-0 w-full bg-[#05252C] border-t border-[#197686] 
                     sm:hidden flex flex-col items-start px-5 py-4 gap-4 z-20"
        >
          <ul className="flex flex-col gap-4 text-xl">
            <li>
              <Link
                href="/ticketform"
                className={getLinkClasses("/ticketform")}
                onClick={() => setIsOpen(false)}
              >
                events
              </Link>
            </li>
            <li>
              <Link
                href="/ticketcard"
                className={getLinkClasses("/ticketcard")}
                onClick={() => setIsOpen(false)}
              >
                my tickets
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={getLinkClasses("/about")}
                onClick={() => setIsOpen(false)}
              >
                about project
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;
