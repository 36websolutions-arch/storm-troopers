"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "../common/Navbar";
import Link from "next/link";
import { FaFileInvoiceDollar } from "react-icons/fa";
import Button from "../common/Button";
import InputField from "../common/InputField";

const HERO_IMG = "/images/hero.png";

export default function Hero() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    zip: "",
    service: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setMessage("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", zip: "", service: "" });
      } else {
        setMessage("Something went wrong.");
      }
    } catch (error) {
      setMessage("Error sending email.");
    }

    setLoading(false);
  };

  return (
    <section className="relative w-full overflow-hidden">
      <div className="hidden md:block relative w-full min-h-[520px] md:h-[900px] lg:h-[837px] bg-[#FFEDED]">
        <Navbar />
        <div className="absolute inset-0 z-10">
          <Image
            src={HERO_IMG}
            alt="hero"
            width={1920}
            height={1200}
            className="w-full h-full object-cover"
            priority
          />
        </div>

        <div id="home" className="relative z-20 pt-20 px-4 sm:px-6 lg:px-6">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-8 items-center">
              <div className="space-y-5">
                <h1 className="text-white text-[18px] md:text-[40px] lg:text-[56px] font-mono font-bold leading-tight text-center md:text-start">
                  StormTroopers Roofing — Trusted Local Roofing Professionals
                  header
                </h1>

                <p className="lg:text-[40px] md:text-3xl sm:text-2xl text-[22px] font-normal font-alexbrush text-white leading-relaxed">
                  Where expertise and precision are the foundation of every roof
                </p>

                <div className="grid grid-cols-2 gap-4 pt-3 max-w-md">
                  <div className="hidden md:block">
                    <Button />
                  </div>
                  <Link className="mt-4" href="tel:(614) 397-4368">
                    <button className="flex items-center gap-2 text-heading bg-white py-4 px-7 border-2 border-heading font-bold">
                      <FaFileInvoiceDollar /> Get A Quote
                    </button>
                  </Link>
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
              </div>

              <div className="flex justify-center pt-10 sm:pt-0">
                <div className="bg-primary p-8 sm:p-10 rounded-md w-full max-w-[500px]">
                  <h4 className="text-white text-[20px] sm:text-[22px] font-extrabold">
                    GET A FREE ESTIMATE & CONSULTATION.
                  </h4>

                  <form className="mt-4" onSubmit={handleSubmit}>
                    <div className="space-y-4">
                      <InputField
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                      <InputField
                        name="email"
                        placeholder="Email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      <InputField
                        name="phone"
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                      <InputField
                        name="zip"
                        placeholder="Zip"
                        value={formData.zip}
                        onChange={handleChange}
                      />
                      <InputField
                        name="service"
                        placeholder="Choose Your Service"
                        value={formData.service}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="flex justify-end">
                      <button
                        type="submit"
                        className="flex items-center gap-2 text-primary bg-white py-4 px-7 font-bold mt-5"
                        disabled={loading}>
                        {loading ? "Sending..." : "GET STARTED"}
                      </button>
                    </div>
                  </form>

                  {message && (
                    <p className="text-white font-semibold mt-4 text-center">
                      {message}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden relative w-full min-h-screen">
        <div className="relative w-full h-[45vh]">
          <Navbar />
          <Image
            src={HERO_IMG}
            alt="hero"
            fill
            className="w-full h-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />

          <div className="absolute inset-0 z-10 flex flex-col pt-24 px-4 ">
            <h1 className="text-white text-[18px] font-mono font-bold leading-tight mb-4 text-center">
              StormTroopers Roofing — Trusted Local Roofing Professionals
            </h1>

            <p className="text-[20px] font-normal font-alexbrush text-white leading-relaxed text-center">
              Where expertise and precision are the foundation of every roof
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link href="tel:(614) 397-4368">
                <button className="flex items-center gap-2 text-heading bg-white py-3 px-6 border-2 border-heading font-bold text-sm">
                  <FaFileInvoiceDollar /> Get A Quote
                </button>
              </Link>
              <div className="h-12">
                <Image
                  src={"/images/rading.svg"}
                  alt="hero logo"
                  width={80}
                  height={48}
                  className="w-auto h-full"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-[#FFEDED] max-h-[500px] px-4 py-8">
          <div className="bg-primary p-6 rounded-md w-full max-w-full relative -top-20">
            <h4 className="text-white text-[18px] font-extrabold text-center mb-6">
              GET A FREE ESTIMATE & CONSULTATION
            </h4>

            <form className="mt-4" onSubmit={handleSubmit}>
              <div className="space-y-4">
                <InputField
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <InputField
                  name="email"
                  placeholder="Email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <InputField
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <InputField
                  name="zip"
                  placeholder="Zip"
                  value={formData.zip}
                  onChange={handleChange}
                />
                <InputField
                  name="service"
                  placeholder="Choose Your Service"
                  value={formData.service}
                  onChange={handleChange}
                />
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="flex items-center gap-2 text-primary bg-white py-4 px-8 font-bold mt-6 w-full justify-center"
                  disabled={loading}>
                  {loading ? "Sending..." : "GET STARTED"}
                </button>
              </div>
            </form>

            {message && (
              <p className="text-white font-semibold mt-4 text-center">
                {message}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
