import React from "react";

function Card(props) {
  return (
    <div className="flex items-center justify-around bg-[rgb(255,255,255)] rounded-[25px] max-w-[588px] h-full px-[8%] py-[5%] relative">
      <div className="text-left w-[60%]">
        <h3 className="text-xl text-[rgba(0,0,0,.6)] mb-5">{props.title}</h3>
        <h1 className="text-3xl leading-2 mb-5">{props.desc}</h1>
        <a
          href={`${props.link}`}
          className="text-xl text-[#0089D0] hover:underline"
        >
          {props.action}
        </a>
      </div>
      <img src={props.img} alt="" className="" />
    </div>
  );
}

export default Card;
