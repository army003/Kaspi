import React from "react";
import { RiStarSFill } from "react-icons/ri";

function Product(props) {
  return (
    <div className="max-w-[1000px] mx-auto">
      <div className="flex bg-[#fff] border-solid border-[0.8px] border-[#e5e7eb] relative">
        <div className="w-[100%] flex items-center justify-center border-solid border-r-[0.8px] border-[#e5e7eb] py-10">
          <img src={props.img} className="w-[40%] " />
        </div>
        <div className="p-8 text-2xl w-[45%]">
          <h1>{props.title}</h1>

          <div className="flex my-2 text-[1.2rem] items-center">
            <RiStarSFill className=" text-[#de5c38]" />
            <RiStarSFill className=" text-[#de5c38]" />
            <RiStarSFill className=" text-[#de5c38]" />
            <RiStarSFill className=" text-[#de5c38]" />
            <RiStarSFill className=" text-[#de5c38]" />
            <a href="#" className="text-sm  text-[#0089d0] hover:underline ">
              ({props.ratingCount} Отзыва)
            </a>
          </div>
          <div className="flex text-[#999] text-[1.2rem] ">
            <section className="flex flex-col border-solid border-r-[1.5px] border-[#d5d7db] pr-2">
              <span className="mb-1">Цена</span>
              <span className=" text-black font-bold">{props.price}$</span>
            </section>
            <section className="flex flex-col ml-2">
              <span className="mb-1">В кредит</span>
              <span>
                <span className="bg-[#ffd300] p-1 text-black  mr-1">
                  7 345 ₸
                </span>
                x12
              </span>
            </section>
          </div>
          <div className="border-solid border-b-[1.5px] border-[#d5d7db] pb-7">
            <button className="py-1 px-1 bg-[#e04131] text-[0.9rem] w-full text-[rgb(255,255,255)] mt-5">
              Открыть в приложении Kaspi.kz
            </button>
          </div>
          <p className="text-[1rem] leading-[20px] mt-5">{props.desc}</p>
        </div>

        <div className="p-4 bg-[#e04131] left-[2%] top-[2%] absolute text-[rgb(255,255,255)] rounded-[50%]">
          {props.rating}
        </div>

        <div className="px-5 py-2 bg-[#259e21] left-[57%] top-[2%] absolute text-[rgb(255,255,255)] rounded-[50PX] text-2xl flex justify-start">
          <span>5</span>
          <span className="text-sm">%</span>Б
        </div>
      </div>
    </div>
  );
}

export default Product;
