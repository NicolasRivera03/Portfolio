import React from "react";

const SelectedWork = () => {
  return (
    <div className="grid place-content-center w-full h-screen">
      <h2 className="font-bold text-[#1f1c19] dark:text-[#cdbead] relative item-s text-transparent text-6xl bg-clip-text inline-block text-gradient tracking-tighter">
        Selected Work
      </h2>
      <div className="grid grid-cols-2 bg-slate-300"></div>
    </div>
  );
};

export default SelectedWork;
