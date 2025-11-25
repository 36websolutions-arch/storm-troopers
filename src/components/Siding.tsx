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
    title: "New Siding Installation",
    desc: "We install durable, weather-rated siding built for long-term performance. Our team checks moisture barriers, flashing, and framing before installation, ensuring every panel is fastened correctly, ventilated properly, and trimmed clean for a strong, consistent finish.",
  },
  {
    id: 2,
    title: "Siding Repair & Sectional Replacement",
    desc: "For localized damage, we replace only what’s needed. We assess for water intrusion, cracked or loose panels, and structural issues, then remove damaged sections and install matching siding for a seamless, like-new appearance.",
  },
  {
    id: 3,
    title: "Storm & Water Damage Restoration",
    desc: "Storms can crack, separate, or warp siding. We identify the source of damage, repair the affected areas, reinforce moisture protection, and reinstall siding so your home stays fully sealed and weather-tight.",
  },
];

export default function Siding() {
  return (
    <section id="sliding" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 lg:gap-16 xl:gap-16 md:gap-10 gap-5 justify-between">
          <div>
            <Image
              src="/images/siding.png"
              alt="hero"
              width={605}
              height={485}
              className="lg:w-[638px] lg:h-[533px] md:w-full md:h-auto object-cover"
            />
          </div>
          <div className="flex flex-col">
            <h5 className="text-mono lg:text-[40px] md:text-4xl sm:text-2xl text-2xl text-heading font-semibold ">
              Siding Installation
            </h5>
            <div>
              {data.map((item, index) => (
                <div key={index} className="space-y-5 mt-5">
                  <h2 className="text-sans text-[16px] text-heading font-bold ">
                    {item.title}
                  </h2>
                  <p className="text-[16px] font-sans font-normal text-heading">
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
