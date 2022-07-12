import React from "react";

function Footer() {
  return (
    <div className="w-[100%]  border-solid border-t-2 border-[rgba(0,0,0,.08)] py-[3%]">
      <div className="max-w-[1200px] mx-auto flex text-[#4A4A4A]">
        <div className="w-[50%] text-[0.9rem]">
          <span>© 2012-2022, АО «Kaspi Bank» </span>
          <p className="my-3">
            Лицензия на проведение банковских и иных операций и деятельности на
            рынке ценных бумаг №1.2.245/61 от 03.02.2020, выданная Агентством
            Республики Казахстан по регулированию и развитию финансового рынка
          </p>
          <span className=" text-[rgba(0,0,0,.4)]">Корпоративный сайт</span>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Footer;
