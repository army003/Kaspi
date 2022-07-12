import React from "react";
import Logo from "./main_logo.svg";
import Phone from "./phone-3x.png";
function Banner() {
  return (
    <section className="bg-[#f0f0f0]">
      <div className="flex max-w-[1300px] w-[full] mx-auto pt-[15vh] justify-around">
        <img src={Logo} alt="kaspi logo" />
        <img src={Phone} alt="phone photo" className="w-[23%]" />
      </div>
    </section>
  );
}

export default Banner;
