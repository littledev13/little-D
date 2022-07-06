import React from "react";
import HeaderComp from "../Component/HeaderComp";
import HeroComp from "../Component/HeroComp";
import ReactIcon from "../Img/9159770461553750379.svg";
const HomePage = () => {
  return (
    <div id="home" className="bg-[#013B61] px-5  md:px-20 min-h-screen">
      <HeaderComp />
      <HeroComp />
      <div className="  "></div>
    </div>
  );
};

export default HomePage;
