import React from "react";
import Transfer from "./img/transfers-main.svg";
function Card(props) {
  return (
    <div className="flex flex-col bg-[rgb(255,255,255)] rounded-[25px] max-w-[330px] min-w-[330px] h-full items-start p-[2%] relative">
      <h3 className="text-xl">{props.title}</h3>
      <h1 className="text-2xl">{props.desc}</h1>
      <img src={props.img} alt="" className="w-[90%] mt-[15%]" />
    </div>
  );
}

export default Card;
