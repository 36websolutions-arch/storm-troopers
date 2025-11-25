"use client";

import React, { useState } from "react";
import { FiMenu, FiX, FiPhone } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-100">
      {/* Navbar translucent background */}
      <div className="w-full h-20 bg-[#565656D9]/70" />

      {/* Actual Navbar Content */}
      <nav className="absolute inset-x-0 top-0 mx-auto container px-6  h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <Link
            className="w-20 h-20 rounded-full  flex items-center justify-center shadow"
            href="/">
            <Image
              src="/images/logo.svg"
              alt="logo"
              width={40}
              height={40}
              className="w-16 h-16 object-contain rounded-full"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8 text-[20px] font-sans text-white font-light">
          <Link href="#home" className="hover:underline">
            Home
          </Link>
          <Link href="#about" className="hover:underline">
            About Us
          </Link>
          <Link href="#services" className="hover:underline">
            Service
          </Link>
          <Link href="#sliding" className="hover:underline">
            Siding Installation
          </Link>
          <Link href="#damage" className="hover:underline">
            Storm Damage
          </Link>
          <Link href="#faq" className="hover:underline">
            FAQ
          </Link>
        </div>

        {/* Phone + Mobile Menu Button */}
        <div className="  flex items-center h-full gap-4">
          {/* Desktop Phone Button */}
          <Link
            href="tel:+16143974368"
            className="hidden h-full lg:inline-flex items-center gap-2 bg-primary text-white px-6 rounded shadow"
            aria-label="Call">
            <FiPhone />
            <span className="font-medium">(614) 397-4368</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded cursor-pointer bg-white/10 text-white"
            aria-label="Toggle menu">
            {open ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Animated */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-20 left-0 right-0 bg-white/80 backdrop-blur-sm shadow-lg z-40">
            <div className="px-6 py-4">
              <ul className="flex flex-col gap-3">
                <li>
                  <Link
                    href="#home"
                    className="block px-3 py-2 rounded hover:bg-primary cursor-pointer hover:text-white"
                    onClick={() => setOpen(false)}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#about"
                    className="block px-3 py-2 rounded hover:bg-gray-100 cursor-pointer"
                    onClick={() => setOpen(false)}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="block px-3 py-2 rounded hover:bg-gray-100 cursor-pointer"
                    onClick={() => setOpen(false)}>
                    Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="#sliding"
                    className="block px-3 py-2 rounded hover:bg-gray-100 cursor-pointer"
                    onClick={() => setOpen(false)}>
                    Siding Installation
                  </Link>
                </li>
                <li>
                  <Link
                    href="#damage"
                    className="block px-3 py-2 rounded hover:bg-gray-100 cursor-pointer"
                    onClick={() => setOpen(false)}>
                    Storm Damage
                  </Link>
                </li>
                <li>
                  <Link
                    href="tel:+16143974368"
                    className="block px-3 py-2 rounded hover:bg-gray-100 flex items-center gap-2"
                    onClick={() => setOpen(false)}>
                    <FiPhone /> (614) 397-4368
                  </Link>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
