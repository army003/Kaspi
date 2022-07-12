import React from "react";
import Logo from "./Logo.svg";
import "../../index.css";
function Header() {
  return (
    <header className="fixed w-full z-10">
      <div className=" bg-[rgb(255,255,255)] shadow-lg shadow-[rgba(0,0,0,.08)] ">
        <div className="flex  justify-between w-[100%] py-[1.3%] mx-auto max-w-[1200px] items-center">
          <img src={Logo} alt="kaspi logo" className="w-4xl" />
          <ul className="flex justify-around w-[25vw] text-[rgba(0,0,0,.4)] mr-[26vw]">
            <li>
              <a href="#">Клиентам</a>
            </li>
            <li>
              <a href="#">Бизнесу</a>
            </li>
            <li>
              <a href="#">Kaspi Гид</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
export default Header;
