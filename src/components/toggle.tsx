"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import links from "@/components/menu/Items.json";

import Link from "next/link";

const Toggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeSidebar = () => {
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      isOpen &&
      !document.getElementById("sidebar")?.contains(event.target as Node)
    ) {
      closeSidebar();
    }
  };

  if (typeof window !== "undefined") {
    document.addEventListener("mousedown", handleClickOutside);
  }

  const sidebarVariants = {
    open: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.3, staggerChildren: 0.1, delayChildren: 0.5 },
    },
    closed: { x: "-100%", opacity: 0, transition: { duration: 0.5 } },
  };

  const itemVariants = {
    open: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    closed: { opacity: 0, x: -150, transition: { duration: 0.5 } },
    hover: {
      scale: 1.1,
      background: "linear-gradient(to right, #111827, #0c4a6e)", // Degradado de gray-900 a sky-950
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <div>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="top-0 left-0 absolute md:hidden bg-gradient-to-r from-gray-800 to-sky-950 opacity-100 shadow-xl mt-6 ml-6 p-1 rounded-full text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="size-6"
          >
            <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      )}

      {isOpen && (
        <motion.nav
          id="sidebar"
          className="top-0 left-0 z-50 absolute bg-gradient-to-r from-gray-950 via-teal-950 to-sky-950 opacity-100 shadow-2xl pt-4 h-screen text-gray-300"
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={sidebarVariants}
        >
          <div className="flex justify-between items-center space-x-4 px-6 pb-4 border-b-2 border-b-gray-400">
            <div className="space-y-2">
              <h3 className="font-bold">Jonhathan Rodas López</h3>
              <p className="text-gray-400 text-xs">👨‍💻 Sofwarare Developer</p>
              <p className="text-gray-400 text-xs">🕵️‍♂️ Police Scientist</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-gradient-to-r hover:from-gray-900 hover:to-gray-600 hover:shadow-lg p-2 rounded-full transition duration-300 cursor-pointer ease-in-out"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-4"
              >
                <path
                  fillRule="evenodd"
                  d="M10.72 11.47a.75.75 0 0 0 0 1.06l7.5 7.5a.75.75 0 1 0 1.06-1.06L12.31 12l6.97-6.97a.75.75 0 0 0-1.06-1.06l-7.5 7.5Z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M4.72 11.47a.75.75 0 0 0 0 1.06l7.5 7.5a.75.75 0 1 0 1.06-1.06L6.31 12l6.97-6.97a.75.75 0 0 0-1.06-1.06l-7.5 7.5Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <ul className="m-0 p-0 list-none">
            {links.map(({ href, label }, index) => (
              <motion.li
                initial="closed"
                animate={isOpen ? "open" : "closed"}
                whileHover="hover"
                variants={itemVariants}
                key={index}
                onClick={closeSidebar}
                className="px-6 py-4 cursor-pointer"
              >
                <Link
                  href={href}
                  className="flex justify-start items-center space-x-4"
                >
                  <span>{label}</span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.nav>
      )}
    </div>
  );
};

export default Toggle;
