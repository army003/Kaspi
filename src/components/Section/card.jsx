import React from "react";
import "../../index.css";
function Card(props) {
  const Hide = () => {
    const btn = document.getElementById("btn");
    const image = document.getElementById("image");
    console.log(btn);
    console.log(image);
    btn.classList.remove("hidden");
    image.classList.add("hidden");
  };
  return (
    <div
      className="flex flex-col bg-[rgb(255,255,255)] rounded-[25px] max-w-[330px] min-w-[330px] h-full items-start p-[2%] relative"
      onMouseOver={Hide}
    >
      <h3 className="text-xl">{props.title}</h3>
      <h1 className="text-2xl">{props.desc}</h1>
      <div className="" id="image">
        <img
          src={props.img}
          alt=""
          className="w-[90%] mt-[15%] "
          style={{
            transition: "0.5s linear",
          }}
        />
      </div>
      <div id="btn" className="hidden">
        <button
          className="px-[10%] py-[3%] bg-[#0089D0] text-[rgb(255,255,255)] rounded-[8px] w-[200px] text-[1.2em] mt-[15%] ml-[13%]"
          style={{ transition: "0.5s linear" }}
        >
          Подключиться
        </button>
      </div>
    </div>
  );
}

export default Card;
