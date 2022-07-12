import React from "react";
import Card from "./Card.jsx";
import products from "./productData.js";
function Products() {
  return (
    <div className="text-center pt-[8%]  ">
      <h1 className="text-5xl font-bold mb-[3%] ">Продукты Kaspi.kz </h1>
      <div className="grid grid-cols-2 gap-y-[20px] gap-x-0 max-w-[1200px] mx-auto">
        {products.map((item) => (
          <Card
            title={item.title}
            desc={item.desc}
            action={item.action}
            link={item.link}
            img={item.img}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
