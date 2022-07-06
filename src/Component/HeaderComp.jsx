import React from "react";

const HeaderComp = () => {
  return (
    <div
      id="header"
      className="flex flex-row justify-between items-center sticky top-0 h-[8vh] py-2 border-b-2 border-slate-400"
    >
      <div className="title">
        <p className="font-Rubik text-5xl text-slate-500 cursor-pointer hover:text-slate-100 tracking-wide">
          Little-D
        </p>
      </div>
      <div className="nav relative">
        <button
          type="button"
          className="menu-toggle flex md:hidden flex-col gap-[4px] [&>span]:h-[5px]  [&>span]:rounded-md hover:cursor-pointer group peer"
        >
          <span className="bg-slate-300  origin-top-right transition-all duration-300 w-7 group-focus:bg-slate-100 group-focus:-translate-x-1 group-focus:-rotate-45"></span>
          <span className="bg-slate-300  duration-500 transition-all w-7 group-focus:w-0 group-focus:bg-slate-50"></span>
          <span className="bg-slate-300  origin-bottom-right transition-all duration-300 w-7 group-focus:bg-slate-100 group-focus:-translate-x-1 group-focus:rotate-45"></span>
        </button>
        <ul className="absolute text-slate-600 px-2 py-1 hidden peer-focus:block transition-all duration-300 bg-slate-200 shadow rounded-sm shadow-slate-500 right-0  group top-8 md:flex flex-row gap-2 md:gap-3 md:bg-transparent md:shadow-none md:static md:text-slate-200 uppercase">
          <li className="md:hover:scale-125 transition-all duration-200 ">
            <a
              href="#"
              className="text-bold font-Poppins hover:text-slate-400 hover:underline md:hover:no-underline"
            >
              Home
            </a>
          </li>
          <li className="md:hover:scale-125 transition-all duration-200 ">
            <a
              href="#"
              className="text-bold font-Poppins hover:text-slate-400 hover:underline md:hover:no-underline"
            >
              Project
            </a>
          </li>
          <li className="md:hover:scale-125 transition-all duration-200 ">
            <a
              href="#"
              className="text-bold font-Poppins hover:text-slate-400 hover:underline md:hover:no-underline"
            >
              About
            </a>
          </li>
          <li className="md:hover:scale-125 transition-all duration-200 ">
            <a
              href="#"
              className="text-bold font-Poppins hover:text-slate-400 hover:underline md:hover:no-underline"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComp;
