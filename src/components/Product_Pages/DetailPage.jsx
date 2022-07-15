import React from "react";
import { Link, useParams } from "react-router-dom";
import Logo from "../Header/Logo.svg";
import { AiOutlineSearch } from "react-icons/ai";
import { BsArrowRightShort } from "react-icons/bs";
import { useSelector } from "react-redux";
import Product from "./Product";
import Footer from "../Footer/Footer";
import { RiStarSFill } from "react-icons/ri";
import Reviews from "./Reviews";

function DetailPage() {
  const { id } = useParams();

  const productsRedux = useSelector((state) => state.products.products);
  console.log(productsRedux[0]);
  const product = productsRedux[0].find((item) => item.id == id);
  console.log(product);
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
      <div className="max-w-[1000px] mx-auto mt-3 text-sm mb-5">
        <div className="flex items-center gap-2">
          <Link to="/" className="text-[#0089d0]">
            Kaspi Магазин
          </Link>
          <BsArrowRightShort className="text-2xl text-[#a7a9ac]" />
          <Link
            to={`/${product.category}`}
            href=""
            className="text-[#0089d0] capitalize"
          >
            {product.category}
          </Link>
          <BsArrowRightShort className="text-2xl text-[#a7a9ac]" />
        </div>
        <Product
          key={product.id}
          title={product.title}
          img={product.image}
          price={product.price}
          ratingCount={product.rating.count}
          id={product.id}
          desc={product.description}
          rating={product.rating.rate}
        />
      </div>
      <div className="max-w-[1000px] mx-auto mt-3">
        <nav className="list-none flex  w-[50%] text-center border-solid border-[0.5px] border-[#e5e7eb] border-b-0">
          <li className="px-2 py-1 border-r-solid border-[0.5px] border-[#e5e7eb] w-full bg-[#fff] ">
            Продавцы
          </li>
          <li className="px-2 py-1 border-r-solid border-[0.5px] border-[#e5e7eb] w-full">
            Отзывы
          </li>
          <li className="px-2 py-1 border-r-solid border-[0.5px] border-[#e5e7eb] w-full">
            Характеристики
          </li>
          <li className="px-2 py-1 border-r-solid border-[0.5px] border-[#e5e7eb] w-full">
            Описание
          </li>
        </nav>
      </div>
      <div className="text-sm max-w-[1000px] mx-auto mb-8  bg-[#fff] border-solid border-[0.5px] border-[#e5e7eb] p-5">
        <Reviews />
        <Reviews />
        <Reviews />
        <Reviews />
      </div>
      <Footer />
    </div>
  );
}

export default DetailPage;
