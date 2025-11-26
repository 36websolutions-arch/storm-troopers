import React from "react";
import ServicesCard from "../common/ServicesCard";

interface Service {
  title: string;
  description: string;
  kicker: string;
  phone: string;
  imageSrc: string;
}

const servicesData: Service[] = [
  {
    title: "Roof Inspections",
    description:
      "Get a complete, professional assessment of your roof’s condition. Our experts inspect every detail—from shingles and flashing to ventilation and structural integrity—to identify hidden issues before they become costly repairs. Perfect for property owners who want peace of mind and long-term protection.",
    kicker: "WHAT WE DO",
    phone: "(614) 397-4368",
    imageSrc: "/images/roof1.svg",
  },
  {
    title: "Roof Repairs",
    description:
      "Need professional roof repair? We fix leaks, broken shingles, flashing problems, and storm damage with dependable workmanship. Our team inspects, repairs, and reinforces your roof to keep your home safe and secure.",
    kicker: "WHAT WE DO",
    phone: "(614) 397-4368",
    imageSrc: "/images/roof2.png",
  },
  {
    title: "Roof Replacement",
    description:
      "When repairs aren’t enough, a full roof replacement ensures long-term protection for your home. We remove old materials, inspect the structure, and install a new, high-quality roof built to last. Our team works efficiently, uses premium products, and delivers a clean, durable finish that boosts your home’s safety and value.",
    kicker: "WHAT WE DO",
    phone: "(614) 397-4368",
    imageSrc: "/images/roof3.png",
  },
  {
    title: "Siding Installation",
    description:
      "We provide full-scale siding solutions designed for long-term performance. Our team evaluates moisture barriers, flashing, and structural framing before installing high-grade siding engineered for severe weather. Every install includes precision fastening, proper ventilation, and detailed trim work so your exterior stays strong, sealed, and visually consistent.",
    kicker: "WHAT WE DO",
    phone: "(614) 397-4368",
    imageSrc: "/images/roof4.png",
  },
];

export default function Comprehensive() {
  return (
    <section id="services" className="py-16 relative bg-white">
      {/* Dark Background (450px height only) */}
      <div className="absolute top-0 left-0 w-full h-[450px] bg-heading z-10"></div>

      <div className="relative z-20">
        <div className="container mx-auto px-6">
          {/* Header Section */}
          <div className="max-w-4xl">
            <p className="text-[16px] uppercase font-sans font-normal text-white">
              What We Do Best
            </p>

            <h1 className="text-white text-[28px] md:text-[40px] lg:text-[48px] font-mono font-bold leading-tight">
              Comprehensive Roofing Services
            </h1>

            <p className="text-[16px] font-sans font-normal text-white mt-5">
              Storm Troopers delivers a wide range of services designed to meet
              the specific needs of homeowners, property managers, and
              commercial developers. Each roof is unique, and so is every
              roofing project.
            </p>
          </div>

          {/* Services Cards Grid */}
          <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 lg:gap-16 xl:gap-16 md:gap-10 gap-5 mt-14 z-10 justify-between">
            {servicesData.map((item, index) => (
              <ServicesCard
                key={index}
                kicker={item.kicker}
                title={item.title}
                description={item.description}
                phone={item.phone}
                imageSrc={item.imageSrc}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
