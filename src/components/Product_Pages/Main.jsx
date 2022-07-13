import React from "react";
import Header from "../../components/Header/header.jsx";
import { AiOutlineSearch } from "react-icons/ai";
import Cards from "./Cards.jsx";
import { useState, useEffect } from "react";
import { BsArrowRightShort } from "react-icons/bs";
function Main(props) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    if (props.active === "electronics") {
      fetch("https://fakestoreapi.com/products/category/electronics")
        .then((response) => {
          if (response.status === 200) {
            return response.json();
          } else {
            return Promise.reject("something wrong");
          }
        })
        .then((data) => {
          console.log(data);
          setProducts(data);
        });
    } else if (props.active === "jewelery") {
      fetch("https://fakestoreapi.com/products/category/jewelery")
        .then((response) => {
          if (response.status === 200) {
            return response.json();
          } else {
            return Promise.reject("something wrong");
          }
        })
        .then((data) => {
          console.log(data);
          setProducts(data);
        });
    } else if (props.active === "men") {
      fetch("https://fakestoreapi.com/products/category/men's clothing")
        .then((response) => {
          if (response.status === 200) {
            return response.json();
          } else {
            return Promise.reject("something wrong");
          }
        })
        .then((data) => {
          console.log(data);
          setProducts(data);
        });
    } else if (props.active === "women") {
      fetch("https://fakestoreapi.com/products/category/women's clothing")
        .then((response) => {
          if (response.status === 200) {
            return response.json();
          } else {
            return Promise.reject("something wrong");
          }
        })
        .then((data) => {
          console.log(data);
          setProducts(data);
        });
    }
  }, []);
  return (
    <div>
      <Header />
      <div className="max-w-[1000px] mx-auto flex pt-[6%] box-border text-[#0089d0] ">
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
          <a
            href=""
            className=" p-2 border-solid border-[0.5px] border-[#e5e7eb] border-r-0 border-t-0 border-b-0 text-center"
          >
            Все категории
          </a>
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
          <a
            href=""
            className=" p-2 border-solid border-[0.5px] border-[#e5e7eb] border-r-0 border-t-0 border-b-0 text-center flex items-center"
          >
            одежда
          </a>
          <a
            href=""
            className=" p-2 border-solid border-[0.5px] border-[#e5e7eb] border-r-0 border-t-0 border-b-0 text-center"
          >
            телефоны, гаджеты
          </a>
          <a
            href=""
            className=" p-2 border-solid border-[0.5px] border-[#e5e7eb] border-r-0 border-t-0 border-b-0 text-center flex items-center"
          >
            автотовары
          </a>
          <a
            href=""
            className=" p-2 border-solid border-[0.5px] border-[#e5e7eb] border-r-0 border-t-0 border-b-0 text-center"
          >
            украшения,
            <br />
            аксессуары
          </a>
          <a
            href=""
            className=" p-2 border-solid border-[0.5px] border-[#e5e7eb] border-r-0 border-t-0 border-b-0 text-center"
          >
            красота, здоровье
          </a>
          <a
            href=""
            className=" p-2 border-solid border-[0.5px] border-[#e5e7eb] border-t-0 border-b-0 text-center "
          >
            бытовая техника
          </a>
        </div>
      </nav>
      <div>
        <main className="flex max-w-[1000px] mx-auto text-sm pt-5">
          <aside className="w-[12vw]">
            <div className="pb-[15%] border-solid border-b-[1.5px] border-[#d5d7db] ">
              <p className="text-[#0089d0]">
                Все категории <span className="text-[#999]">(1039)</span>
              </p>
            </div>
            <div className="pt-5 pb-[15%] border-solid border-b-[1.5px] border-[#d5d7db]">
              <span className="font-bold">Цена</span>
              <div className="pt-[3%]">
                <input type="checkbox" className="mr-1" />
                <span>
                  10 000 - 49 999 т <span className="text-[#999]">(109)</span>
                </span>
              </div>

              <div className="pt-[3%]">
                <input type="checkbox" className="mr-1" />
                <span>
                  50 000 - 99 999 т <span className="text-[#999]"> (204)</span>
                </span>
              </div>

              <div className="pt-[3%]">
                <input type="checkbox" className="mr-1" />
                <span>
                  100 000 - 149 999 т<span className="text-[#999]"> (162)</span>
                </span>
              </div>
            </div>

            <div className="pt-5 pb-[15%] border-solid border-b-[1.5px] border-[#d5d7db]">
              <span className="font-bold">Бренд</span>
              <div className="pt-[3%]">
                <input type="checkbox" className="mr-1" />
                <span>BQ</span>
              </div>

              <div className="pt-[3%]">
                <input type="checkbox" className="mr-1" />
                <span>Blackview</span>
              </div>

              <div className="pt-[3%]">
                <input type="checkbox" className="mr-1" />
                <span>Huawei</span>
              </div>
            </div>
          </aside>

          <aside className="ml-5">
            <div className="flex items-center text-[#0089d0] pb-3  w-[100%] border-solid border-b-[1.5px] border-[#d5d7db] mb-5">
              <span>Kaspi Магазин </span>
              <span className="text-[#999]">
                <BsArrowRightShort className="text-2xl" />
              </span>
              <span className="capitalize">{props.active}</span>
            </div>
            <div className="flex justify-end mb-3">
              <select
                name="  Популярные"
                value="  Популярные"
                id=""
                className="w-[25%] border-solid border-[1.5px] border-[#d5d7db] px-3 py-2 bg-[#fff] text-[0.8rem]"
              >
                <option value=""> Популярные</option>
              </select>
            </div>
            <section className="grid grid-cols-3">
              {products.map((item) => (
                <Cards
                  title={item.title}
                  img={item.image}
                  price={item.price}
                  ratingCount={item.rating.count}
                />
              ))}
            </section>
          </aside>
        </main>
      </div>
    </div>
  );
}

export default Main;
