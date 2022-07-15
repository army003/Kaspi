import React from "react";
import { RiStarSFill } from "react-icons/ri";
function Reviews() {
  return (
    <div>
      <div className="flex items-center justify-between border-solid border-[0.5px] border-[#e5e7eb] py-3 border-r-0 border-l-0">
        <div className="">
          <p className="  text-[#0089d0]">NEMO-KZ</p>
          <div className="flex text-[1.1rem] items-center">
            <RiStarSFill className=" text-[#279e3a]" />
            <RiStarSFill className=" text-[#279e3a]" />
            <RiStarSFill className=" text-[#279e3a]" />
            <RiStarSFill className=" text-[#279e3a]" />
            <RiStarSFill className=" text-[#279e3a]" />
            <a href="#" className="text-xs  text-[#0089d0] hover:underline ">
              (532 Отзыва)
            </a>
          </div>
        </div>

        <div className="">
          <p>
            Kaspi Доставка 16 июля,
            <br /> бесплатно <br />
            Самовывоз: сегодня
          </p>
        </div>
        <span>38 844 ₸</span>
        <span>12 948 ₸</span>
        <button className="px-10 h-[35px] text-[#fff] bg-[#0089d0] rounded-[2px]">
          Выбрать
        </button>
      </div>
    </div>
  );
}

export default Reviews;
