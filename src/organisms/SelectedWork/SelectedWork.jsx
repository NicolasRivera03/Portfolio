import React from "react";
import { BiLogoReact } from "react-icons/bi";

const SelectedWork = () => {
  return (
    <div className="flex flex-col justify-center w-full h-screen px-10">
      <p className="text-center">What i have done so far</p>
      <h2 className="text-center font-bold text-[#1f1c19] dark:text-[#cdbead] relative item-s text-transparent text-6xl bg-clip-text inline-block text-gradient tracking-tighter">
        Employment History
      </h2>
      <div className="grid grid-cols-[100px,1fr] bg-slate-100 mt-5 rounded p-4">
        <div></div>
        <div className="bg-white rounded p-4">
          <h3 className="text-[#cdbead] dark:text-[#1f1c19] text-2xl font-bold tracking-tighter">
            Fullstack Developer at Farmalógica, Bogotá
          </h3>
          <p className="text-[#cdbead] dark:text-[#1f1c19] text-1xl font-thin tracking-tighter">
            March 2023 - Present
            <span></span>
          </p>
          <ul className="pt-2 list-disc pl-4">
            <li className="text-[#cdbead] dark:text-[#1f1c19]">
              Analyze and optimize sells and invoices processes
            </li>
            <li className="text-[#cdbead] dark:text-[#1f1c19]">
              Create API's with Node JS
            </li>
            <li className="text-[#cdbead] dark:text-[#1f1c19]">
              Design Optimized process with Figma
            </li>
            <li className="text-[#cdbead] dark:text-[#1f1c19]">
              Design low fidelity designs{" "}
            </li>
            <li className="text-[#cdbead] dark:text-[#1f1c19]">
              Design High fidelity designs
            </li>
            <li className="text-[#cdbead] dark:text-[#1f1c19]">
              Design SQL model from Database.
            </li>
            <li className="text-[#cdbead] dark:text-[#1f1c19]">
              Documentation code.
            </li>
          </ul>

          <p className="text-[#cdbead] dark:text-[#1f1c19] ">Tech Stack</p>
          <div>
            <div className="flex bg-emerald-400 rounded-full w-fit justify-center py-1 px-2 items-center">
              React
              <BiLogoReact />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedWork;
