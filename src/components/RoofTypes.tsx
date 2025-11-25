import React from "react";
import Image from "next/image";
import { FiPhoneCall } from "react-icons/fi";
import Button from "../common/Button";
const data = [
  {
    id: 1,
    images: "/images/service1.png",
    title: "Asphalt Shingles",
    desc: "Asphalt shingles offer proven performance and long-term durability. We use only premium materials and install with precision, giving your home strong protection and a clean, attractive finish. When you want a dependable roof built this is the smart choice.",
  },
  {
    id: 2,
    images: "/images/service2.png",
    title: "Tile Roofs",
    desc: "A tile roof transforms your home with beauty, protection, and peace of mind. Built to last for decades, tile keeps your home cool and secure while elevating its style. Choose a roof that feels solid, elegant, and built for generations.",
  },
  {
    id: 3,
    images: "/images/service3.png",
    title: "Standing Seam Metal",
    desc: "Want a roof that outlasts everything? Standing seam metal delivers extreme durability, energy savings, and a clean, premium finish. With hidden fasteners and weather-tight panels, we install it fast and built to last. Upgrade to metal and get long-term peace of mind.",
  },
  {
    id: 4,
    images: "/images/service4.png",
    title: "Flat Roofs",
    desc: "Flat roofs require precision installation and premium materials to ensure long-term performance. We specialize in TPO, EPDM, and modified systems engineered for durability, UV resistance, and energy savings. A trusted solution for residential and commercial projects.",
  },
];
export default function RoofTypes() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col justify-center items-center space-y-2 lg:max-w-3xl md:max-w-4xl sm:max-w-5xl  mx-auto text-center">
          <span className="text-[16px] text-heading tracking-[3px] font-normal font-sans uppercase">
            HOW WE CAN HELP
          </span>
          <h6 className="font-mono font-semibold lg:text-[40px] md:text-4xl sm:text-3xl text-2xl text-heading">
            Roof Types We Service
          </h6>
          <p className="text-[16px] font-sans font-normal text-heading">
            Storm Trooper Roofing works with a variety of roof materials and
            systems suited to different climates, architectural styles, and
            budget requirements.
          </p>
        </div>
        {/* card */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 lg:mt-10 md:mt-8 mt-5 ">
          {data.map((item, index) => (
            <div
              key={index}
              className="space-y-5  text-center border-2 border-[#B7B7B7] p-8">
              <Image
                src={item.images}
                alt="hero"
                width={605}
                height={485}
                className="w-28 h-28 object-cover mx-auto"
              />
              <h2 className="text-sans text-[16px] text-heading font-bold ">
                {item.title}
              </h2>
              <p className="text-[16px] font-sans font-normal text-heading">
                {item.desc}
              </p>
            </div>
          ))}

          {/* Full width bottom card */}
          <div className="2xl:w-[860px] xl:w-[815px] lg:w-[645px] md:col-span-2 sm:col-span-1 col-auto flex justify-center items-center space-y-5  text-center border-2 border-[#B7B7B7] p-5">
            <div className="mx-auto space-y-5">
              <div className="bg-primary w-20 h-20 mx-auto flex items-center justify-center rounded-full p-4">
                <FiPhoneCall className="text-white text-3xl" />
              </div>
              <h5 className="text-2xl font-mono text-heading font-semibold">
                Call Us Now!
              </h5>
              <Button />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
