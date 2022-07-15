import React from "react";
import Cards from "./Cards.jsx";
import { useState, useEffect } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function Body(props) {
  const productsRedux = useSelector((state) => state.products.products);
  console.log(productsRedux);
  return (
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
            <select
              name="  Популярные"
              value="  Популярные"
              id=""
              className="text-[0,9rem] bg-[#f5f5f5] text-[#0089d0] mt-4"
            >
              <option value=""> Показать еще</option>
            </select>
          </div>

          <div className="pt-5 pb-[15%] border-solid border-b-[1.5px] border-[#d5d7db]">
            <span className="font-bold">Популярные модели</span>
            <div className="pt-[3%]">
              <input type="checkbox" className="mr-1" />
              <span>
                BQ 6645L <span className="text-[#999]">(2)</span>
              </span>
            </div>

            <div className="pt-[3%]">
              <input type="checkbox" className="mr-1" />
              Infinix HOT <span className="text-[#999]">(3)</span>
            </div>

            <div className="pt-[3%]">
              <input type="checkbox" className="mr-1" />
              Realme C21Y <span className="text-[#999]">(4)</span>
            </div>
            <select
              name="  Популярные"
              value="  Популярные"
              id=""
              className="text-[0,9rem] bg-[#f5f5f5] text-[#0089d0] mt-4"
            >
              <option value=""> Показать еще</option>
            </select>
          </div>
        </aside>

        <aside className="ml-5">
          <div className="flex items-center text-[#0089d0] pb-3  w-[100%] border-solid border-b-[1.5px] border-[#d5d7db] mb-5">
            <Link to="/">Kaspi Магазин </Link>
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
          <section className="grid grid-cols-3 mb-5">
            {productsRedux[0].map((item) => {
              if (item.category === props.active) {
                return (
                  <Cards
                    key={item.id}
                    title={item.title}
                    img={item.image}
                    price={item.price}
                    ratingCount={item.rating.count}
                    id={item.id}
                  />
                );
              } else {
                return "";
              }
            })}
          </section>
        </aside>
      </main>
    </div>
  );
}

export default Body;
