import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Main from "../Product_Pages/Main";
function Card(props) {
  let linkTo = "";
  if (props.title === "electronics") {
    linkTo = "/electronics";
  } else if (props.title === "jewelery") {
    linkTo = "/jewelery";
  } else if (props.title === "men's clothing") {
    linkTo = "/men";
  } else if (props.title === "women's clothing") {
    linkTo = "/women";
  }
  return (
    <div>
      <Link to={`${linkTo}`}>
        <div className="flex flex-col bg-[rgb(255,255,255)] rounded-[25px] max-w-[250px] min-w-[250px] h-full items-center p-[2%] relative ">
          <h1 className="text-2xl mb-[10%]">{props.title}</h1>
          <img src={props.img} alt="" className="w-[70%]" />
        </div>
      </Link>
    </div>
  );
}
export default Card;
