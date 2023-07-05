import React from "react";
import { BiLogoReact } from "react-icons/bi";

const SelectedWork = () => {
  return (
    <div className="flex flex-col justify-center w-full h-auto px-10 max-w-screen-xl m-auto">
      <p className="text-center">What i have done so far</p>
      <h2 className="text-center font-bold text-[#1f1c19] dark:text-[#cdbead] relative item-s text-transparent text-6xl bg-clip-text inline-block text-gradient tracking-tighter">
        Employment History
      </h2>
      <div className="grid  bg-slate-100 dark:bg-gray-900 mt-5 rounded p-4">
        <div className="flex flex-col gap-4">
          <div className="bg-white dark:bg-slate-800 rounded p-4">
            <h3 className="dark:text-[#cdbead] text-[#1f1c19] text-2xl font-bold tracking-tighter">
              Frontend Developer at Farmalógica, Bogotá
            </h3>
            <p>
              Experience developing an application what integrates SAP BO, with
              React API Fetch Tailwind and SQL Server.
            </p>
            <p className="dark:text-[#cdbead] text-[#1f1c19] text-1xl font-thin tracking-tighter">
              March 2023 - Present
              <span></span>
            </p>
            <ul className="pt-2 list-disc pl-4">
              <li className="dark:text-[#cdbead] text-[#1f1c19]">
                Analyze and optimize sells and invoices processes
              </li>
              <li className="dark:text-[#cdbead] text-[#1f1c19]">
                Create APIs with Node JS
              </li>
              <li className="dark:text-[#cdbead] text-[#1f1c19]">
                Design Optimized process with Figma
              </li>
              <li className="dark:text-[#cdbead] text-[#1f1c19]">
                Design Low fidelity designs{" "}
              </li>
              <li className="dark:text-[#cdbead] text-[#1f1c19]">
                Design High fidelity designs
              </li>
              <li className="dark:text-[#cdbead] text-[#1f1c19]">
                Design SQL model from Database.
              </li>
              <li className="dark:text-[#cdbead] text-[#1f1c19]">
                Documentation code.
              </li>
            </ul>

            <p className="dark:text-[#cdbead] text-[#1f1c19] mt-2">
              Tech Stack
            </p>
            <div>
              <div className="flex bg-emerald-400 rounded-full w-fit justify-center py-1 px-2 items-center">
                React
                <BiLogoReact />
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded p-4">
            <h3 className="dark:text-[#cdbead] text-[#1f1c19] text-2xl font-bold tracking-tighter">
              Ui Developer at Nivelics, Bogotá
            </h3>
            <p>
              Acquired experience, developing stylized components with Styled
              Components, and good quality standards such as Pixel Perfect have
              allowed me to successfully finish two large projects with
              television chains in Mexico and Colombia.
            </p>
            <p className="dark:text-[#cdbead] text-[#1f1c19] text-1xl font-thin tracking-tighter">
              March 2023 - Present
              <span></span>
            </p>
            <ul className="pt-2 list-disc pl-4">
              <li className="dark:text-[#cdbead] text-[#1f1c19]">
                Analyze and estimate development times based on the proposed
                designs
              </li>
              <li className="dark:text-[#cdbead] text-[#1f1c19]">
                Web prototype design according to the wireframes proposed by the
                client
              </li>
              <li className="dark:text-[#cdbead] text-[#1f1c19]">
                Develop approved designs -based model.
              </li>
              <li className="dark:text-[#cdbead] text-[#1f1c19]">
                Constant communication with the client giving daily task status.
              </li>
            </ul>

            <p className="dark:text-[#cdbead] text-[#1f1c19] mt-2">
              Tech Stack
            </p>
            <div>
              <div className="flex bg-emerald-400 rounded-full w-fit justify-center py-1 px-2 items-center">
                React
                <BiLogoReact />
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded p-4">
            <h3 className="dark:text-[#cdbead] text-[#1f1c19] text-2xl font-bold tracking-tighter">
              Web Developer at Business Process Management Latinoamerica, Bogotá
            </h3>
            <p>
              Experience developing the bpm-lat.com website from the creative
              stage to the internal development of the site.
            </p>
            <p className="dark:text-[#cdbead] text-[#1f1c19] text-1xl font-thin tracking-tighter">
              March 2023 - Present
              <span></span>
            </p>
            <ul className="pt-2 list-disc pl-4">
              <li className="dark:text-[#cdbead] text-[#1f1c19]">
                Design and develop the internal website.
              </li>
              <li className="dark:text-[#cdbead] text-[#1f1c19]">
                Design BPM forms for public entities.
              </li>
              <li className="dark:text-[#cdbead] text-[#1f1c19]">
                Develop BPMN processes for public entities.
              </li>
              <li className="dark:text-[#cdbead] text-[#1f1c19]">
                Code and infrastructure maintenance.
              </li>
              <li className="dark:text-[#cdbead] text-[#1f1c19]">
                ETLs development and API rest services.
              </li>
            </ul>

            <p className="dark:text-[#cdbead] text-[#1f1c19] mt-2">
              Tech Stack
            </p>
            <div>
              <div className="flex bg-emerald-400 rounded-full w-fit justify-center py-1 px-2 items-center">
                React
                <BiLogoReact />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedWork;
