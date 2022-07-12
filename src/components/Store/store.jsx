import React from "react";
import Card from "./card.jsx";
import { useState, useEffect } from "react";
import Electronics from "./img/iphone.png";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
function Store() {
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          return Promise.reject("something wrong");
        }
      })
      .then((data) => {
        console.log(data);
        setTitles(data);
      });
  }, []);
  return (
    <div className="text-center pt-[8%] relative flex flex-col items-center ">
      <h1 className="text-5xl font-bold mb-[3%] ">
        Интернет-магазин на Kaspi.kz
      </h1>
      <div className="flex max-w-[1240px] w-full justify-between">
        {titles.map((title) => (
          <Card title={title} img={Electronics} />
        ))}
      </div>
      <BsFillArrowLeftCircleFill className="absolute top-[70%] text-3xl left-[6%]" />
      <BsFillArrowRightCircleFill className="absolute top-[70%] text-3xl right-[6%]" />
    </div>
  );
}

export default Store;
