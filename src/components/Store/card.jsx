import React from "react";
function Card(props) {
  return (
    <div className="flex flex-col bg-[rgb(255,255,255)] rounded-[25px] max-w-[250px] min-w-[250px] h-full items-center p-[2%] relative ">
      <h1 className="text-2xl mb-[10%]">{props.title}</h1>
      <img src={props.img} alt="" className="w-[70%]" />
    </div>
  );
}
export default Card;
