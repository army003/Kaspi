import React from "react";
import Redmi from "./xiaomi-redmi-9c-4-128gb-seryj-102053541-1-Container.jpg";
import { RiStarSFill } from "react-icons/ri";
import { useEffect } from "react";
function Cards(props) {
  useEffect(() => {}, []);
  return (
    <div className="flex flex-col items-center w-[230px] border-2 p-3 bg-white">
      <img
        src={props.img}
        className="w-[50%] mb-5 min-h-[150px] max-h-[150px]"
        id="img"
      />
      <div className="flex justify-start flex-col text-[0.8rem] leading-4 border-solid border-t-[1.5px] border-[#d5d7db] pt-5 text-[#0089d0] min-h-[150px] max-h-[150px]">
        <p>{props.title}</p>
        <div className="flex my-2 items-center">
          <RiStarSFill className=" text-[#de5c38]" />
          <RiStarSFill className=" text-[#de5c38]" />
          <RiStarSFill className=" text-[#de5c38]" />
          <RiStarSFill className=" text-[#de5c38]" />
          <RiStarSFill className=" text-[#de5c38]" />
          <span className="">({props.ratingCount} Отзыва)</span>
        </div>
        <div className="flex text-[#999] ">
          <section className="flex flex-col border-solid border-r-[1.5px] border-[#d5d7db] pr-2">
            <span className="mb-2">Цена</span>
            <span className=" text-black font-bold text-[1rem]">
              {props.price}$
            </span>
          </section>
          <section className="flex flex-col  ml-2">
            <span className="mb-2">В кредит</span>
            <span>
              <span className="bg-[#ffd300] p-1 text-black font-bold">
                7 345 ₸
              </span>
              x12
            </span>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Cards;
