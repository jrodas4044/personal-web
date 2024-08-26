"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: 0 },
};

const Toggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="top-0 left-0 absolute bg-gradient-to-r from-emerald-500 to-blue-800 opacity-100 mt-6 ml-6 p-1 rounded-full text-white"
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
        <nav className="top-0 left-0 z-50 absolute bg-gradient-to-r from-gray-900 to-emerald-800 opacity-100 shadow-2xl pt-4 h-screen">
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

          <ul className="flex flex-col justify-start">
            <li className="hover:bg-gradient-to-r hover:from-gray-900 hover:to-gray-600 hover:shadow-lg px-6 py-4 transition duration-300 cursor-pointer ease-in-out">
              <Link
                href="/"
                className="flex justify-start items-center space-x-4"
              >
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6"
                  >
                    <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                    <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                  </svg>
                </i>
                <span>Home</span>
              </Link>
            </li>
            <li className="hover:bg-gradient-to-r hover:from-gray-900 hover:to-gray-600 hover:shadow-lg px-6 py-4 transition duration-300 cursor-pointer ease-in-out">
              <Link
                href="/aboutMe"
                className="flex justify-start items-center space-x-4"
              >
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </i>
                <span>About</span>
              </Link>
            </li>
            <li className="hover:bg-gradient-to-r hover:from-gray-900 hover:to-gray-600 hover:shadow-lg px-6 py-4 transition duration-300 cursor-pointer ease-in-out">
              <Link
                href="/technologies"
                className="flex justify-start items-center space-x-4"
              >
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14.447 3.026a.75.75 0 0 1 .527.921l-4.5 16.5a.75.75 0 0 1-1.448-.394l4.5-16.5a.75.75 0 0 1 .921-.527ZM16.72 6.22a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 0 1 0-1.06Zm-9.44 0a.75.75 0 0 1 0 1.06L2.56 12l4.72 4.72a.75.75 0 0 1-1.06 1.06L.97 12.53a.75.75 0 0 1 0-1.06l5.25-5.25a.75.75 0 0 1 1.06 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </i>
                <span>Technologies</span>
              </Link>
            </li>
            <li className="hover:bg-gradient-to-r hover:from-gray-900 hover:to-gray-600 hover:shadow-lg px-6 py-4 transition duration-300 cursor-pointer ease-in-out">
              <Link
                href="https://blog.jonhathanrodas.com"
                className="flex justify-start items-center space-x-4"
              >
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 0 0 3 3h15a3 3 0 0 1-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125ZM12 9.75a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H12Zm-.75-2.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75ZM6 12.75a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5H6Zm-.75 3.75a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75ZM6 6.75a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-3A.75.75 0 0 0 9 6.75H6Z"
                      clipRule="evenodd"
                    />
                    <path d="M18.75 6.75h1.875c.621 0 1.125.504 1.125 1.125V18a1.5 1.5 0 0 1-3 0V6.75Z" />
                  </svg>
                </i>
                <span>Blog</span>
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Toggle;
