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
                Our focus is delivering excellent work with high-quality
                materials and craftsmanship that stands up to time and weather.
                Every roof and siding project is installed with precision so
                homeowners get long-term value and a result they can depend on.
              </p>
              <p className="text-[16px] font-sans font-normal text-heading">
                We’re consistent, reliable, and easy to work with from start to
                finish. And when a storm does cause damage, we can handle the
                insurance claim process and guide homeowners through getting a
                new roof approved. Our reputation comes from solid workmanship
                and clear communication — that’s why people trust Storm Troopers
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
