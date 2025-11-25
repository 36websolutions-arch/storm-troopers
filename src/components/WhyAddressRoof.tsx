import Image from "next/image";
import React from "react";
import { FaCheckSquare } from "react-icons/fa";
import { MdLocalPhone } from "react-icons/md";

export default function WhyAddressRoof() {
  const benefits = [
    {
      title: "Damage compounds over time.",
      description:
        "A tiny leak can lead to rot, insulation loss, and foundation problems.",
    },
    {
      title: "Insurance complications.",
      description:
        "Failing to act may void your policy or limit coverage due to perceived neglect.",
    },
    {
      title: "Higher costs.",
      description: "Emergency services cost more than routine maintenance.",
    },
    {
      title: "Energy efficiency.",
      description:
        "A compromised roof system increases heating and cooling bills by letting air escape.",
    },
  ];

  return (
    <div className="py-8 sm:py-12 lg:py-16 bg-[#F0E3E3]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative w-full  mx-auto">
              <div className="aspect-[4/5] sm:aspect-[3/4] lg:aspect-[534/628] relative overflow-hidden shadow-xl">
                <Image
                  src="/images/whyimage.png"
                  alt="Roof Issues Early"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 40vw"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="max-w-2xl lg:max-w-none mx-auto lg:mx-0">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading font-mono mb-4 leading-8 lg:leading-14">
                Why Address Roof <br className="" /> Issues Early?
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-heading mb-6 leading-relaxed font-sans">
                Waiting to fix your roof can turn a small issue into a
                full-blown crisis. Here&apos;s why early intervention is essential:
              </p>

              <div className="space-y-2 mb-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center gap-3 sm:gap-4 lg:gap-5 group hover:bg-white/50 transition-colors duration-200 rounded-lg p-2 sm:p-3">
                    <div className="shrink-0 mt-0.5 sm:mt-1">
                      <FaCheckSquare className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-heading group-hover:scale-110 transition-transform duration-200" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-normal text-heading mb-1 sm:mb-2 font-sans leading-tight">
                        {benefit.title}
                      </h3>
                      <p className="text-sm sm:text-[15px] lg:text-[16px] text-heading/90 font-sans leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-center lg:justify-start">
                <button className="flex items-center gap-2.5 sm:gap-3.5 bg-primary hover:bg-primary/90 px-6 sm:px-8 py-3 sm:py-4 text-white font-sans cursor-pointer">
                  <MdLocalPhone className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="underline text-base sm:text-lg lg:text-xl font-medium">
                    (614) 397-4368
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
