import React from "react";
import Image from "next/image";
export default function about() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 justify-between items-center">
          <div>
            <Image
              src="/images/about.png"
              alt="hero"
              width={605}
              height={485}
              className="lg:w-[605px] lg:h-[485px] md:w-full md:h-auto object-cover"
            />
          </div>
          <div>
            <p className="text-[16px] font-sans font-normal text-heading">
              Who we are
            </p>
            <h2 className="lg:text-[48px] md:text-3xl sm:text-2xl text-[22px] font-mono font-semibold ">
              About <span className="text-primary">Storm Troopers</span>
            </h2>
            <div className="space-y-10 mt-5">
              <p className="text-[16px] font-sans font-normal text-heading">
                Storm Troopers delivers professional roofing and siding
                solutions backed by deep experience in storm damage and
                insurance claims. We document damage with precision, meet with
                your adjuster, and secure full, accurate approval for your
                replacement.
              </p>
              <p className="text-[16px] font-sans font-normal text-heading">
                You pay your deductible insurance covers the rest. Our
                installations follow strict safety, manufacturer, and code
                standards, ensuring durability and long-term protection. When
                you need a contractor who understands both roofing and
                insurance, we’re the partner you can trust.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
