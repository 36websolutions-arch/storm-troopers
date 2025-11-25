import React from "react";
import Image from "next/image";
import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  const backgroundImages = [
    "/images/fot4.png",
    "/images/fot2.png",
    "/images/fot6.png",
    "/images/fot5.png",
    "/images/fot1.png",
    "/images/fot3.png",
  ];

  const mainLinks = [
    {
      href: "#home",
      label: "Home",
    },
    {
      href: "#about",
      label: "About Us",
    },
    {
      href: "#services",
      label: "Services",
    },
    {
      href: "#sliding",
      label: "Siding Installation",
    },
    {
      href: "#damage",
      label: "Storm Damage",
    },
    {
      href: "#faq",
      label: "FAQ",
    },
  ];

  const socialLinks = [
    {
      icon: <FaFacebook className="w-8 h-8" />,
    },
    {
      icon: <FaYoutube className="w-8 h-8" />,
    },
    {
      icon: <FaInstagram className="w-8 h-8" />,
    },
  ];

  return (
    <div className="relative  flex items-center justify-center py-12 lg:py-16">
      <div className="absolute inset-0 -z-10">
        <div className="grid grid-cols-2 lg:grid-cols-3 h-full w-full">
          {backgroundImages.map((image, index) => (
            <div key={index} className="relative overflow-hidden">
              <Image
                src={image}
                alt={`Footer background ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 33vw"
                priority={index < 2}
              />
              <div className="absolute inset-0 bg-heading/60"></div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            <div className="lg:col-span-1">
              <div className="flex flex-col h-full">
                <div className="mb-6 lg:mb-8">
                  <Image
                    src="/images/logo.svg"
                    alt="Storm Trooper Roofing Logo"
                    width={80}
                    height={80}
                    className="w-16 h-16 lg:w-20 lg:h-20"
                  />
                </div>
                <p className="text-white leading-relaxed font-sans text-base lg:text-lg font-light tracking-wide mb-6 lg:mb-8 grow">
                  Get reliable roofing and siding services—from repairs to full
                  installations. We also help homeowners get insurance-covered
                  roof and siding replacements.
                </p>
              </div>
            </div>

            <div className="lg:col-span-1">
              <h3 className="text-white font-light text-xl lg:text-[27px] mb-6 lg:mb-8 font-sans tracking-wider uppercase border-l-4 border-white pl-4">
                Main Site
              </h3>
              <ul className="space-y-3 lg:space-y-4">
                {mainLinks.map((link, index) => (
                  <li key={index} className="flex items-center group">
                    <span className="w-2 h-2 bg-white rounded-full mr-3 lg:mr-4 group-hover:scale-150 transition-transform duration-200 shrink-0"></span>
                    <Link
                      href={link.href}
                      className="text-white font-light hover:text-gray-200 font-sans text-base lg:text-lg transition-all duration-200 hover:translate-x-2 transform">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-1">
              <h3 className="text-white font-light text-xl lg:text-[27px] mb-6 lg:mb-8 font-sans tracking-wider uppercase border-l-4 border-white pl-4">
                Contact Info
              </h3>
              <ul className="space-y-4 lg:space-y-6">
                <li className="flex items-start group">
                  <div className="flex items-start w-full">
                    <span className="w-2 h-2 bg-white rounded-full mr-3 lg:mr-4 mt-2 group-hover:scale-150 transition-transform duration-200 shrink-0"></span>
                    <div>
                      <span className="text-white font-light hover:text-gray-200 font-sans text-base lg:text-lg transition-all duration-200 hover:translate-x-2 transform">
                        Columbus, Ohio & Surrounding Areas
                      </span>
                    </div>
                  </div>
                </li>

                <li className="flex items-start group">
                  <div className="flex items-start w-full">
                    <span className="w-2 h-2 bg-white rounded-full mr-3 lg:mr-4 mt-2 group-hover:scale-150 transition-transform duration-200 shrink-0"></span>
                    <div className="flex-1">
                      <Link
                        href="mailto:stormtroopersroofing@stormtroopersroofing.com"
                        className="text-white font-light hover:text-gray-200 font-sans text-base lg:text-lg transition-all duration-200 hover:translate-x-2 transform">
                        stormtroopersroofing@
                        <span className="block">stormtroopersroofing.com</span>
                      </Link>
                    </div>
                  </div>
                </li>

                <li className="flex items-start group">
                  <div className="flex items-start w-full">
                    <span className="w-2 h-2 bg-white rounded-full mr-3 lg:mr-4 mt-2 group-hover:scale-150 transition-transform duration-200 shrink-0"></span>
                    <div>
                      <Link
                        href="tel:6143974368"
                        className="text-white font-light hover:text-gray-200 font-sans text-base lg:text-lg transition-all duration-200 hover:translate-x-2 transform">
                        (614) 397-4368
                      </Link>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-1">
              <div className="">
                <h3 className="text-white font-light text-xl lg:text-[27px] mb-6 lg:mb-8 font-sans tracking-wider uppercase border-l-4 border-white pl-4">
                  Social Info
                </h3>

                <div className="flex items-center gap-2">
                  {socialLinks.map((social, index) => (
                    <Link
                      key={index}
                      href="#"
                      className="group flex flex-col items-center justify-center">
                      <div
                        className={`text-white transition-colors duration-300 mb-1 lg:mb-2`}>
                        {social.icon}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
