"use client";

import React from "react";
import Image from "next/image";
import Navbar from "../common/Navbar";
import Link from "next/link";
import { FaFileInvoiceDollar } from "react-icons/fa";
import Button from "../common/Button";
import InputField from "../common/InputField";

const HERO_IMG = "/images/hero.png";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[520px] md:h-[600px] lg:h-[837px] overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Background Image */}
      <div className="absolute inset-0 z-10">
        <Image
          src={HERO_IMG}
          alt="hero"
          width={1920}
          height={1200}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Overlay */}
      <div id="home" className="relative z-20 py-10 px-4 sm:px-6 lg:px-6">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-8 items-center">
            {/* Left text */}
            <div className="space-y-5">
              <h1 className="text-white text-[28px] md:text-[40px] lg:text-[56px] font-mono font-bold leading-tight">
                StormTroopers Roofing — Trusted Local Roofing Professionals
              </h1>

              <p className="text-[16px] font-medium font-sans text-white leading-relaxed">
                At Storm Troopers, we provide reliable roofing and siding
                services—from repairs to full installations. We also help
                homeowners get insurance-covered roof and siding replacements,
                where you are only responsible for your deductible and insurance
                covers the rest.
              </p>

              <div className="flex flex-wrap gap-4 pt-3">
                <Button />
                <Link className="mt-4" href="tel:(614) 397-4368">
                  <button className="flex items-center gap-2 text-heading bg-white py-4 px-7 border-2 border-heading font-bold">
                    <FaFileInvoiceDollar /> Get A Quote
                  </button>
                </Link>
              </div>
              <div className="h-14">
                <Image
                  src={"/images/rading.svg"}
                  alt="hero logo"
                  width={100}
                  height={56}
                  className="w-auto h-[87px]"
                />
              </div>
            </div>

            {/* Right Form Box */}
            <div className="flex justify-center pt-10 sm:pt-0">
              <div className="bg-primary p-8 sm:p-10 rounded-md w-full max-w-[500px]">
                <h4 className="text-white text-[20px] sm:text-[22px] font-sans font-extrabold">
                  GET A FREE ESTIMATE & CONSULTATION.
                </h4>

                <form className="mt-4">
                  <div className="space-y-4">
                    <InputField placeholder="Name" />
                    <InputField placeholder="Email" type="email" />
                    <InputField placeholder="Phone" type="phone" />
                    <InputField placeholder="Zip Code" type="zip" />
                    <InputField placeholder="Choose Your Service" />
                  </div>

                  <div className="flex justify-end">
                    <button className="flex items-center gap-2 text-primary bg-white py-4 px-7 font-bold mt-5">
                      GET STARTED
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
