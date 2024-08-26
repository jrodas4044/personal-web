"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Toogle from "@/components/toggle";
import links from "@/components/menu/Items.json";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isClient, setIsClient] = useState(false);
  const pathname = usePathname();

  const socialUrls = [
    {
      href: "",
      label: "",
    },
  ];

  return (
    <>
      <div className="top-0 fixed flex justify-center  w-screen z-50">
        <div className="">
          <Toogle />
        </div>

        <nav className="hidden md:flex space-x-6 items-center justify-center bg-gradient-to-r from-gray-950 to-sky-950 w-full py-4">
          <div>
            <Link href="/" className="flex items-center space-x-2">
              <i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 6a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V6Zm3.97.97a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1 0 1.06l-2.25 2.25a.75.75 0 0 1-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 0 1 0-1.06Zm4.28 4.28a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z"
                    clipRule="evenodd"
                  />
                </svg>
              </i>
              <span>
                <h1 className="font-bold">Jonhathan Rodas</h1>
              </span>
            </Link>
          </div>
          <ul className="flex space-x-6">
            {links.map(({ href, label }, index) => (
              <motion.li
                key={index}
                whileHover={{
                  scale: 1.2,
                  background: "linear-gradient(to right, #111827, #0c4a6e)", // Degradado de gray-900 a sky-950
                  color: "#fff",
                  transition: { duration: 0.3 },
                  overflow: "hidden",
                }}
                className={`p-2 rounded ${
                  pathname === href
                    ? "border-b-2 border-white overflow-hidden"
                    : ""
                }`}
              >
                <Link href={href}>{label}</Link>
              </motion.li>
            ))}
          </ul>

          <div>
            <ul className="flex space-x-6">
              {socialUrls.map(({ href, label }, index) => (
                <li key={index}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}
