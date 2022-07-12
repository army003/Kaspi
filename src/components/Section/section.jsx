import React, { useEffect, useState } from "react";
import Card from "./card.jsx";
import data from "./data.js";
import { useDispatch, useSelector } from "react-redux";
import { translateSlider } from "../../features/sliderSlice.js";
function Section() {
  return (
    <div className="text-center pt-[8%]">
      <h1 className="text-5xl font-bold mb-[3%]">Сервисы Kaspi.kz</h1>
      <div className="w-[100vw] overflow-hidden">
        <div
          className="flex justify-around gap-10"
          style={
            {
              // transform: `translateX(${offset}px)`,
            }
          }
        >
          {data.map((item) => {
            return <Card title={item.title} desc={item.desc} img={item.img} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Section;
