import React from "react";
import Header from "../../components/Header/header.jsx";
import { AiOutlineSearch } from "react-icons/ai";
import Cards from "./Cards.jsx";
import { useState, useEffect } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";
import Logo from "../Header/Logo.svg";
import Footer from "../Footer/Footer.jsx";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "../../features/productsSlice.js";
import Body from "./Body.jsx";

function Main(props) {
  const currentPage = useSelector((state) => state.pages.activePage);
  return (
    <div>
      <header className="fixed w-full z-10">
        <div className=" bg-[rgb(255,255,255)] shadow-lg shadow-[rgba(0,0,0,.08)] ">
          <div className="flex  justify-between w-[100%] py-[1.3%] mx-auto max-w-[1000px] items-center">
            <Link to="/">
              <img src={Logo} alt="kaspi logo" className="w-4xl" />
            </Link>
            <ul className="flex justify-around w-[25vw] text-[rgba(0,0,0,.4)] mr-[20vw]">
              <li>
                <a href="#">Клиентам</a>
              </li>
              <li>
                <a href="#">Бизнесу</a>
              </li>
              <li>
                <a href="#">Kaspi Гид</a>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <div className="max-w-[1000px] mx-auto flex pt-[6%] box-border text-[#0089d0]  ">
        <div className="flex max-w-[620px] w-[80%] ">
          <div className=" bg-[#e7e7e7a8] font-bold px-5 py-1 border-solid border-2 border-[#e5e7eb]">
            Магазин
          </div>
          <input
            type="text"
            placeholder="Поиск товара"
            className="w-[100%] bg-[#fbfbfb] pl-2 text-sm border-solid border-2 border-[#e5e7eb] border-l-0 max-w-[460px] opacity-[0.5]"
          />
          <div className="flex items-center justify-center bg-[#0089d0] border-solid border-2 border-[#0089d0] w-[10%]">
            <AiOutlineSearch className="ml-0 text-[rgb(255,255,255)]  text-2xl" />
          </div>
        </div>

        <div className="ml-4 text-sm leading-5 my-[-1px]">
          <p className="text-[rgb(0,0,0)]">Мой город</p>
          <a href="#" className="decoration-dashed " id="app">
            Алматы
          </a>
        </div>
      </div>
      <nav className=" border-solid border-[0.5px] text-sm border-[#e5e7eb] mt-[1%] bg-[#ffffffd6]">
        <div className="max-w-[1000px] mx-auto flex box-border text-[#0089d0] justify-between  uppercase font-medium ">
          <Link
            to="/"
            className=" p-2 border-solid border-[0.5px] border-[#e5e7eb] border-r-0 border-t-0 border-b-0 text-center"
          >
            Все категории
          </Link>
          <a
            href=""
            className=" p-2 border-solid border-[0.5px] border-[#e5e7eb] border-r-0 border-t-0 border-b-0 text-center"
          >
            Спорт, туризм
          </a>
          <a
            href=""
            className=" p-2 border-solid border-[0.5px] border-[#e5e7eb] border-r-0 border-t-0 border-b-0 text-center flex items-center"
          >
            обувь
          </a>
          <Link
            to="/men"
            className=" p-2 border-solid border-[0.5px] border-[#e5e7eb] border-r-0 border-t-0 border-b-0 text-center flex items-center"
          >
            одежда
          </Link>
          <Link
            to="/electronics"
            className=" p-2 border-solid border-[0.5px] border-[#e5e7eb] border-r-0 border-t-0 border-b-0 text-center"
          >
            телефоны, гаджеты
          </Link>
          <a
            href=""
            className=" p-2 border-solid border-[0.5px] border-[#e5e7eb] border-r-0 border-t-0 border-b-0 text-center flex items-center"
          >
            автотовары
          </a>
          <Link
            to="/jewelery"
            className=" p-2 border-solid border-[0.5px] border-[#e5e7eb] border-r-0 border-t-0 border-b-0 text-center"
          >
            украшения,
            <br />
            аксессуары
          </Link>
          <Link
            to="/women"
            className=" p-2 border-solid border-[0.5px] border-[#e5e7eb] border-r-0 border-t-0 border-b-0 text-center"
          >
            красота, здоровье
          </Link>
          <a
            href=""
            className=" p-2 border-solid border-[0.5px] border-[#e5e7eb] border-t-0 border-b-0 text-center "
          >
            бытовая техника
          </a>
        </div>
      </nav>
      <div>
        <Body active={props.active} />
      </div>
      <Footer />
    </div>
  );
}

export default Main;
