import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="sm:px-2 py-2 h-screen w-full md:h-screen md:px-40 md:py-10 grid place-content-center gap-2 relative">
      <div className="grid place-content-center -mb-16">
        <Image
          src="/Memongi.png"
          width={230}
          height={230}
          alt="Memongi Nicolás Rivera Mora"
        />
      </div>
      <h1 className=" text-center font-extrabold relative max-[700px]:text-7xl inline-block tracking-tighter text-transparent text-8xl bg-clip-text bg-gradient-to-b dark:from-[#7ef29d] dark:to-[#0f68a9] from-[#7ef29d] to-[#0f68a9]">
        <span>Hi!</span>
        <span>, Im Nico</span>
      </h1>
      <p className="text-center dark:text-[#cecece] text-neutral-700 tracking-tight font-semibold text-2xl">
        Frontend software engineer and interface designer
      </p>
      <div className="flex gap-4 items-center justify-center pt-2">
        <a
          href="mailto:riveramoranicolas@gmail.com"
          className="p-4 bg-emerald-50 rounded text-slate-950 font-black"
        >
          Contactame
        </a>

        <a
          href="https://resume.io/r/0my4lDyLi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="p-4 outline outline-2 rounded font-black">
            Mi CV
          </button>
        </a>
      </div>

      <div className="text-2xl absolute bottom-10 md:bottom-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"></div>
    </div>
  );
};

export default HeroSection;
