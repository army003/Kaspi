import React from "react";
import {
  AiFillLinkedin,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FaOdnoklassnikiSquare, FaTelegramPlane } from "react-icons/fa";
function Footer() {
  return (
    <div className="w-[100%]  border-solid border-t-2 border-[rgba(0,0,0,.08)] py-[3%]">
      <div className="max-w-[1200px] mx-auto flex text-[#4A4A4A] justify-between">
        <div className="w-[50%] text-[0.9rem]">
          <span>© 2012-2022, АО «Kaspi Bank» </span>
          <p className="my-3">
            Лицензия на проведение банковских и иных операций и деятельности на
            рынке ценных бумаг №1.2.245/61 от 03.02.2020, выданная Агентством
            Республики Казахстан по регулированию и развитию финансового рынка
          </p>
          <span className=" text-[rgba(0,0,0,.4)]">Корпоративный сайт</span>
        </div>
        <div className="flex w-[23%]  text-[1.3rem] items-start text-[#6565659e]">
          <div className="flex items-center  w-[100%] justify-between    ">
            <AiFillLinkedin className="text-[1.6rem] transition-colors cursor-pointer hover:text-[#4A4A4A]" />
            <BsFacebook className="transition-colors cursor-pointer hover:text-[#4A4A4A]" />
            <AiFillInstagram className="text-[1.7rem] transition-colors cursor-pointer hover:text-[#4A4A4A]" />
            <FaOdnoklassnikiSquare className="transition-colors cursor-pointer hover:text-[#4A4A4A]" />
            <AiFillYoutube className="text-[1.6rem] transition-colors cursor-pointer hover:text-[#4A4A4A]" />
            <FaTelegramPlane className="transition-colors cursor-pointer hover:text-[#4A4A4A]" />
            <AiOutlineTwitter className="transition-colors cursor-pointer hover:text-[#4A4A4A]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
