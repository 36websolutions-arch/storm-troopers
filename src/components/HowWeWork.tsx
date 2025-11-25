import React from "react";
import Image from "next/image";

export default function HowWeWork() {
  const process = [
    {
      number: 1,
      title: "Step 1: Inspect and File Claim",
      para: "We inspect your roof, document storm damage, take photos, and help you file your claim with the insurance company. This sets the foundation for a smooth approval.",
    },
    {
      number: 2,
      title: "Step 2: Claim Approval",
      para: "We meet with the adjuster, provide evidence, and ensure all damage is accounted for so the insurance company approves the full scope of work.",
    },
    {
      number: 3,
      title: "Step 3: Full Roof Replacement",
      para: "Once approved, we replace your roof with high-quality materials and expert installation, restoring your home to code and ensuring long-term protection.",
    },
  ];

  return (
    <div className="py-8 sm:py-12 lg:py-16 bg-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center mb-12 sm:mb-16 lg:mb-20">
          <h4 className="text-[16px] text-white mb-2 font-sans tracking-[6px] font-light uppercase">
            How We Work
          </h4>
          <h1 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white mb-4 font-mono leading-tight">
            The Storm Trooper Roofing's 3-Step Process
          </h1>
          <p className="text-[16px] text-white/80 leading-relaxed font-sans">
            From the first call to the final nail, our team is with you at every
            step. Our process <br /> emphasizes clarity, speed, and
            satisfaction.
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 xl:gap-8">
            {process.map((step, index) => (
              <div key={step.number} className="relative">
                <div className="relative p-6 sm:p-8 flex flex-col items-center justify-center ">
                  <div className="text-white font-bold text-5xl sm:text-7xl font-sans mb-8">
                    {step.number}
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4 font-sans leading-tight text-center">
                      {step.title}
                    </h3>
                    <p className="text-sm sm:text-base text-white leading-relaxed font-sans text-center">
                      {step.para}
                    </p>
                  </div>
                </div>

                {index < process.length - 1 && (
                  <>
                    <div className="lg:hidden flex justify-center my-6 sm:my-8">
                      <div className="relative w-32 h-32 sm:w-36 sm:h-36 rotate-90">
                        <Image
                          src={
                            index === 0
                              ? "/images/Arrow 2.png"
                              : "/images/Arrow 3.png"
                          }
                          alt={`Step ${step.number} to ${step.number + 1}`}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <div className="hidden lg:block absolute -top-6 left-7/8 transform z-10">
                      <div className="relative w-24 h-24 xl:w-44 xl:h-44">
                        <Image
                          src={
                            index === 0
                              ? "/images/Arrow 2.png"
                              : "/images/Arrow 3.png"
                          }
                          alt={`Step ${step.number} to ${step.number + 1}`}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
