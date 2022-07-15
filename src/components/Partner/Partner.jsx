import React from "react";
import Cart from "./img/cart.svg";
import KaspiPay from "./img/kaspipay_icon.svg";
import QR from "./img/qr-link-main.svg";
function Partner() {
  return (
    <>
      <div className="max-w-[1200px] mx-auto bg-[rgb(255,255,255)] text-center py-[5%] my-[2%] rounded-[20px]">
        <h1 className="text-5xl font-bold mb-[8%]">Стать Партнером</h1>
        <div className="flex justify-around">
          <div className="flex flex-col bg-[rgba(0,0,0,.04)] w-[45%] p-[2%] rounded-[16px]  text-left">
            <div className="flex items-start justify-between ">
              <p className="text-3xl mb-5">
                Продавать <br /> в Интернет-магазине на Kaspi.kz
              </p>
              <img src={Cart} alt="" />
            </div>
            <p className="text-[1.2rem] mb-3">
              Около 11 млн покупателей, доставка товаров по всему Казахстану,
              возможность продавать в кредит и рассрочку.
            </p>
            <a href="#" className="text-xl text-[#0089D0] hover:underline">
              Начать продавать в Интернет-магазине
            </a>
          </div>

          <div className="flex flex-col bg-[rgba(0,0,0,.04)] w-[45%] p-[2%] rounded-[16px]  text-left">
            <div className="flex items-start justify-between">
              <p className="text-3xl mb-5">
                Продавать <br />с Kaspi Pay
              </p>
              <img src={KaspiPay} alt="" />
            </div>
            <p className="text-[1.2rem] mb-12">
              Принимайте оплату с Kaspi Gold, Red и Kredit. Откройте счет онлайн
              бесплатно и получите мобильный POS за 5 минут.
            </p>
            <a href="#" className="text-xl text-[#0089D0] hover:underline">
              Начать продавать с Kaspi Pay
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto text-center py-[5%] my-[2%] ">
        <h1 className="text-5xl font-bold mb-[8%]">
          Сканируйте, чтобы перейти
          <br /> в приложение Kaspi.kz
        </h1>
        <div className="max-w-[400px] mx-auto bg-[#fff] p-3 flex justify-center items-center py-6 rounded-3xl">
          <img src={QR} alt="" className="w-[90%]" />
        </div>
      </div>
    </>
  );
}

export default Partner;
