"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

const Toggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white p-1 rounded-full text-gray-500"
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}
      </button>
      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={variants}
      >
        <nav className="bg-gradient-to-r from-gray-900 to-emerald-500/20 py-8">
          <ul className="flex flex-col space-y-6 spacey-6">
            <li className="px-8">
              <Link href="/">Home</Link>
            </li>
            <li className="px-6">
              <Link href="/aboutMe">About</Link>
            </li>
            <li className="px-6">
              <Link href="/technologies">Technologies</Link>
            </li>
            <li className="px-6">
              <Link href="https://blog.jonhathanrodas.com">Blog</Link>
            </li>
          </ul>
        </nav>
      </motion.div>
    </div>
  );
};

export default Toggle;
