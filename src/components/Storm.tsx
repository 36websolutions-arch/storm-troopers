import React from "react";
import Image from "next/image";

interface Service {
  id: number;
  title: string;
  desc: string;
}
const data: Service[] = [
  {
    id: 1,
    title: "Storm, Hail & Wind Damage",
    desc: "Severe weather can crack shingles, lift tiles, create leaks, and weaken the entire roof system. We document all storm-related damage, secure the property, and restore the roof to proper code standards using high-quality materials built for harsh conditions.",
  },
  {
    id: 2,
    title: "How Insurance Works",
    desc: "Most storm claims cover the full roof replacement , you only pay your deductible. We handle the inspection, photos, paperwork, and the adjuster meeting. Once approved, insurance pays for all necessary labor and materials. We manage the entire process from inspection to final installation.",
  },
];
export default function Storm() {
  return (
    <section id="damage" className="py-16 bg-heading">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 lg:gap-16 xl:gap-16 md:gap-10 gap-5 justify-between">
          <div>
            <Image
              src="/images/Storm.png"
              alt="hero"
              width={605}
              height={485}
              className="lg:w-[638px] lg:h-[533px] md:w-full md:h-auto object-cover"
            />
          </div>
          <div className="flex flex-col items-start justify-center">
            <h5 className="text-mono lg:text-[40px] md:text-4xl sm:text-2xl text-2xl text-white font-semibold ">
              Storm Damage
            </h5>
            <div>
              {data.map((item, index) => (
                <div key={index} className="space-y-5 mt-5">
                  <h2 className="text-sans text-[16px] text-white font-bold ">
                    {item.title}
                  </h2>
                  <p className="text-[16px] font-sans font-normal text-white">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
