import React from "react";
import Profile from "../Img/Profile.png";

const HeroComp = () => {
  return (
    <div className="main-section flex sm:flex-row flex-wrap sm:gap-0 gap-5 flex-col justify-between  h-[186vh] sm:h-[92vh] ">
      <div className="summary flex-1 flex flex-col justify-center h-screen ">
        <div className="[&>p]:capitalize gap-2 flex flex-col ">
          <p className="text-slate-200 text-4xl font-semibold">
            Hai everybody <span>👋🏼</span>, i'm
            <br />
            <span className="font-Gugi text-5xl font-bold text-sky-200 animate-pulse">
              {" "}
              Irvan
            </span>
          </p>
          <hr className="sm:hidden block" />
          <p className="text-slate-200 font-Gugi text-2xl font-semibold">
            i'm web developer
          </p>
          <p className="text-slate-200 font-Gugi text-2xl font-semibold">
            and android developer
          </p>
        </div>
        <div className="pt-2">
          <p className="text-slate-300">
            Saya adalah seseorang yang mempunyai minat di bidang Informasi dan
            Teknologi, ketertarikan saya di bidang Informasi / Teknologi
            mendorong saya untuk terus belajar dan belajar sehingga saya
            memiliki modal.
          </p>
        </div>
      </div>
      <div className=" flex-1 relative flex flex-col justify-center items-center ">
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute scale-125"
        >
          <path
            fill="#018181"
            d="M35.8,-54.4C48.5,-54.6,62.6,-49.4,63.4,-39.4C64.2,-29.5,51.7,-14.7,52.9,0.7C54,16.1,68.7,32.1,68.7,43.4C68.7,54.7,53.9,61.3,40,61.1C26.1,61,13.1,54.1,1.4,51.8C-10.3,49.4,-20.7,51.6,-29.7,48.9C-38.6,46.2,-46.2,38.6,-52.2,29.7C-58.1,20.7,-62.3,10.4,-62.8,-0.3C-63.3,-10.9,-60,-21.8,-54.2,-30.9C-48.3,-40,-39.9,-47.3,-30.5,-49.1C-21,-50.8,-10.5,-47.1,0.5,-47.9C11.5,-48.8,23,-54.3,35.8,-54.4Z"
            transform="translate(100 100)"
          />
        </svg>
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute scale-110"
        >
          <path
            fill="#A7F0BA"
            d="M28.1,-47.9C41.4,-41.1,60.4,-43.5,64.7,-37C69.1,-30.6,58.8,-15.3,54,-2.7C49.3,9.8,50.1,19.6,49.3,32.2C48.4,44.7,45.9,60,37.4,69.4C29,78.8,14.5,82.4,3.6,76.1C-7.2,69.8,-14.4,53.6,-22.9,44.2C-31.3,34.7,-40.9,32,-50.5,25.7C-60.1,19.5,-69.6,9.7,-67.3,1.3C-65.1,-7.1,-51.1,-14.3,-42.8,-22.8C-34.6,-31.3,-32.1,-41.3,-25.9,-52.1C-19.7,-63,-9.9,-74.7,-1.2,-72.6C7.4,-70.6,14.9,-54.6,28.1,-47.9Z"
            transform="translate(100 100)"
          />
        </svg>
        {/* <svg
       viewBox="0 0 200 200"
       xmlns="http://www.w3.org/2000/svg"
       className="absolute"
     >
       <path
         fill="#D0E2FF"
         d="M35.8,-42.1C40.3,-38.9,33.7,-21.8,38.1,-5.5C42.5,10.9,57.9,26.7,54,29.1C50.1,31.5,26.8,20.6,12.5,19.1C-1.7,17.7,-7,25.7,-8.6,24.6C-10.2,23.6,-8.2,13.6,-18,5.9C-27.8,-1.8,-49.5,-7.2,-49.4,-8.8C-49.2,-10.5,-27.2,-8.4,-15.4,-10.2C-3.5,-12.1,-1.8,-18,7,-26.3C15.7,-34.6,31.3,-45.3,35.8,-42.1Z"
         transform="translate(100 100)"
       />
     </svg> */}
        {/* <div className="bg-profile w-72 h-72 z-10"></div> */}
        <img
          src={Profile}
          alt=""
          srcset=""
          className="z-10 absolute rounded-full"
        />
      </div>
    </div>
  );
};
export default HeroComp;
