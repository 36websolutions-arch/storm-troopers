import React from "react";
import Image from "next/image";
import Button from "./Button";

interface ServicePros {
  kicker: string;
  title: string;
  description: string;
  phone: string;
  imageSrc: string;
}

export default function ServicesCard({
  kicker,
  title,
  description,
  imageSrc,
}: ServicePros) {
  return (
    <section className="lg:w-[638px] md:w-full flex flex-col h-full">
      {" "}
      {/* ← Added flex + full height */}
      {/* Top Image */}
      <div>
        <Image
          src={imageSrc}
          alt={title}
          width={600}
          height={400}
          className="w-full lg:h-[400px] object-cover"
        />
      </div>
      {/* Bottom Text */}
      <div className="space-y-5 shadow-xl lg:p-8 md:p-5 p-4 md:min-h-[430px] sm:min-h-auto min-h-auto  flex flex-col justify-between">
        {/* ↑ min-height makes all cards equal
        height */}
        <div>
          <p className="text-[16px] text-heading tracking-[3px] font-normal font-sans uppercase">
            {kicker}
          </p>

          <h2 className="lg:text-[48px] md:text-3xl sm:text-2xl text-[22px] font-semibold font-mono">
            {title}
          </h2>

          <p className="text-[16px] font-normal leading-[31px] font-sans text-heading">
            {description}
          </p>
        </div>
        <Button />
      </div>
    </section>
  );
}
