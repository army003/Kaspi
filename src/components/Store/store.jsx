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
  const [offset, setOffset] = useState(0);

  const leftClick = () => {
    console.log("left");
    setOffset((current) => {
      const newOffset = current + 1044;

      return Math.min(newOffset, 0);
    });
  };
  const rightClick = () => {
    console.log("right");
    const max = -(1047 * 2);
    setOffset((current) => {
      const newOffset = current - 1045;

      return Math.max(newOffset, max);
    });
  };
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
        setTitles(data);
      });
  }, []);
  return (
    <div className="text-center pt-[8%] relative flex flex-col items-center ">
      <h1 className="text-5xl font-bold mb-[3%] ">
        Интернет-магазин на Kaspi.kz
      </h1>
      <div className="overflow-hidden max-w-[1050px] mx-auto">
        <div
          className="flex justify-between w-full "
          style={{
            transform: `translateX(${offset}px)`,
            transition: "1s ease",
          }}
        >
          <div className="flex max-w-[1040px] min-w-[1040px] mr-3 w-full justify-between">
            {titles.map((title) => (
              <Card title={title} img={Electronics} />
            ))}
          </div>
          <div className="flex max-w-[1040px] min-w-[1040px] mr-3 w-full justify-between">
            {titles.map((title) => (
              <Card title={title} img={Electronics} />
            ))}
          </div>
          <div className="flex max-w-[1040px] min-w-[1040px] w-full justify-between">
            {titles.map((title) => (
              <Card title={title} img={Electronics} />
            ))}
          </div>
        </div>
      </div>
      <BsFillArrowLeftCircleFill
        onClick={leftClick}
        className="absolute top-[70%] text-3xl left-[6%] hover:pointer-events-auto"
      />
      <BsFillArrowRightCircleFill
        onClick={rightClick}
        className="absolute top-[70%] text-3xl right-[6%] hover:pointer-events-auto"
      />
    </div>
  );
}

export default Store;
