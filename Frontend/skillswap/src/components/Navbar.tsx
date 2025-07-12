// components/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "/about" },
  { name: "Find Swap", href: "/events" },
  { name: "Announcements", href: "/announcements" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <nav className="w-full border-b bg-white/80 backdrop-blur-sm fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center gap-4">
        {/* Left: Logo or App Name */}
        <Link href="/" className="text-xl font-semibold text-black shrink-0">
          SkillSwap
        </Link>

        {/* Center: Navigation Links */}
        <div className="flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                "relative pb-2 px-2 text-sm font-medium transition-all duration-200 rounded-md",
                pathname === link.href
                  ? "text-black bg-gray-100/80 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-black"
                  : "text-gray-500 hover:text-black hover:after:content-[''] hover:after:absolute hover:after:left-0 hover:after:bottom-0 hover:after:h-[2px] hover:after:w-full hover:after:bg-black"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-md">
          <div className="relative">
            <input
              type="text"
              placeholder="Search skills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-black hover:border-black hover:shadow-sm transition-all duration-200 text-sm"
            />
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black"
              onClick={() => console.log(searchQuery)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Right: Auth Buttons */}
        <div className="flex items-center gap-4 shrink-0">
          <Link
            href="/sign-up"
            className="px-4 py-2 bg-black text-white rounded-md text-sm font-medium hover:scale-105 transition-transform"
          >
            Sign Up
          </Link>
          <Link
            href="/sign-in"
            className="text-sm text-black font-medium hover:underline"
          >
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
}
