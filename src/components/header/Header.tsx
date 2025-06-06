"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-[#3498db] to-[#f39c12] shadow-md p-4 fixed w-full z-50 top-0 left-0">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image src="/assets/Logo.png" alt="My Logo" width={60} height={60} priority />
          </Link>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-6 text-white text-sm md:text-base font-medium">
          <Link href="/" className="hover:text-yellow-300 transition duration-300">
            Home
          </Link>

          <div className="relative group">
            <button className="hover:text-yellow-300 transition duration-300 flex items-center gap-1">
              Services ▾
            </button>
            <div className="absolute hidden group-hover:block bg-white text-black mt-2 rounded-md shadow-lg z-20 min-w-[200px]">
              <Link href="/web-development" className="block px-4 py-2 hover:bg-gray-100">
                AI Policy Analyzer
              </Link>
              <Link href="/app-development" className="block px-4 py-2 hover:bg-gray-100">
                AI ISMS Audit
              </Link>
              <Link href="/app-development" className="block px-4 py-2 hover:bg-gray-100">
                AI Audit Notes
              </Link>
              <Link href="/app-development" className="block px-4 py-2 hover:bg-gray-100">
                Ask ISMS
              </Link>
              <Link href="/app-development" className="block px-4 py-2 hover:bg-gray-100">
                Ask AIMS
              </Link>
            </div>
          </div>

          <Link href="/contact" className="hover:text-yellow-300 transition duration-300">
            Contact Us
          </Link>
           <Link href="/about-us" className="hover:text-yellow-300 transition duration-300">
            About Us
          </Link>

          <div className="relative group">
            <button className="hover:text-yellow-300 transition duration-300 flex items-center gap-1">
              More ▾
            </button>
            <div className="absolute hidden group-hover:block bg-white text-black mt-2 rounded-md shadow-lg z-20 min-w-[200px]">
              <Link href="/about" className="block px-4 py-2 hover:bg-gray-100">
                Blog
              </Link>
              <Link href="/blog" className="block px-4 py-2 hover:bg-gray-100">
                Team
              </Link>
              <Link href="/blog" className="block px-4 py-2 hover:bg-gray-100">
                Privacy Policy
              </Link>
            </div>
          </div>

          {/* Search bar */}
          <div className="relative flex items-center border rounded-lg border-white">
            <FaSearch className="absolute left-3 text-white text-sm" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-9 pr-3 py-2 bg-transparent text-white rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-white placeholder:text-white"
            />
          </div>

          {/* Login button */}
          <Link
            href="/login"
            className="bg-white text-blue-600 px-4 py-2 rounded-lg font-bold shadow-md hover:bg-blue-100 transition duration-300 cursor-pointer"
          >
            LOGIN
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-2xl focus:outline-none"
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-gradient-to-r from-[#3498db] to-[#f39c12] p-4 space-y-4 absolute top-full left-0 w-full z-40 shadow-lg">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="block text-white font-medium text-lg hover:text-yellow-300"
          >
            Home
          </Link>

          <details className="group">
            <summary className="cursor-pointer text-white font-medium text-lg flex justify-between items-center hover:text-yellow-300">
              Services ▾
            </summary>
            <div className="pl-4 mt-2 flex flex-col space-y-1 group-hover:block">
             <Link href="/web-development" className="block px-4 py-2 hover:bg-gray-100">
                AI Policy Analyzer
              </Link>
              <Link href="/app-development" className="block px-4 py-2 hover:bg-gray-100">
                AI ISMS Audit
              </Link>
              <Link href="/app-development" className="block px-4 py-2 hover:bg-gray-100">
                AI Audit Notes
              </Link>
              <Link href="/app-development" className="block px-4 py-2 hover:bg-gray-100">
                Ask ISMS
              </Link>
              <Link href="/app-development" className="block px-4 py-2 hover:bg-gray-100">
                Ask AIMS
              </Link>
            </div>
          </details>

          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="block text-white font-medium text-lg hover:text-yellow-300"
          >
            Contact Us
          </Link>
           <Link
            href="/about-us"
            onClick={() => setMenuOpen(false)}
            className="block text-white font-medium text-lg hover:text-yellow-300"
          >
           About Us
          </Link>

          <details className="group">
            <summary className="cursor-pointer text-white font-medium text-lg flex justify-between items-center hover:text-yellow-300">
              More ▾
            </summary>
            <div className="pl-4 mt-2 flex flex-col space-y-1 group-hover:block">
                <Link href="/about" className="block px-4 py-2 hover:bg-gray-100">
                Blog
              </Link>
              <Link href="/blog" className="block px-4 py-2 hover:bg-gray-100">
                Team
              </Link>
              <Link href="/blog" className="block px-4 py-2 hover:bg-gray-100">
                Privacy Policy
              </Link>
            </div>
          </details>

          {/* Mobile search bar */}
          <div className="relative border border-white rounded-lg mt-2">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-9 pr-3 py-2 bg-transparent text-white rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-white placeholder:text-white w-full"
            />
          </div>

          {/* Mobile login button */}
          <Link
            href="/login"
            onClick={() => setMenuOpen(false)}
            className="block bg-white text-blue-600 px-4 py-2 rounded-lg font-bold shadow-md hover:bg-blue-100 transition duration-300 cursor-pointer text-center"
          >
            LOGIN
          </Link>
        </div>
      )}
    </header>
  );
}
