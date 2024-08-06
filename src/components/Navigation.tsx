"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { TbArrowUpRight } from "react-icons/tb";

interface NavItem {
  href: string;
  label: string;
}

const nav: NavItem[] = [
  { href: "/", label: "HOME" },
  { href: "/products", label: "PRODUCTS" },
  { href: "/about", label: "ABOUT US" },
  { href: "/teams", label: "TEAMS" },
];

const Navigation: React.FC = () => {
  const pathname = usePathname();
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <>
      <button className="block lg:hidden mr-4" onClick={() => setOpen(!isOpen)}>
        <svg
          className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>

      <nav
        className={`lg:flex gap-x-6 transform transition ${
          isOpen
            ? "flex flex-col px-8 py-12 z-50 gap-y-6 absolute inset-y-0 bg-white right-0 translate-x-0"
            : "hidden max-md:translate-x-full"
        }`}
      >
        {nav.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={pathname === href ? "text-black font-semibold" : ""}
          >
            {label}
          </Link>
        ))}
      </nav>
      <div
        className={`${
          isOpen ? "fixed inset-0 z-30 bg-black bg-opacity-50" : "hidden"
        }`}
        onClick={() => setOpen(false)}
      ></div>
      <Link
        href="/contact"
        className=" hidden px-5 py-3 font-medium bg-white border rounded-full shadow lg:inline-flex hover:bg-gray-100 mr-4"
      >
        Contact Us <TbArrowUpRight className="w-5 h-5 ml-2" />
      </Link>
    </>
  );
};

export default Navigation;
