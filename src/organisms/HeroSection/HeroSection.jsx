import React from "react";

const HeroSection = () => {
  return (
    <div className="h-full w-full md:h-auto w-full px-40 py-10 grid place-content-center gap-3">
      <h1 className="text-7xl tracking-tighter font-black">
        Hi, Im <span className="text-slate-500">Nicolás Rivera </span>Frontend
        Web Developer
      </h1>
      <p className="text-2xl text-slate-100">
        A frontend software engineer and interface designer who builds UX rich
        accessible and performant websites.
      </p>
      <div className="flex gap-4">
        <button className="p-4 bg-emerald-50 rounded text-slate-950 font-black">
          Hire Me
        </button>
        <button className="p-4 outline outline-2 rounded font-black">
          My CV
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
