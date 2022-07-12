import React from "react";
import Phone from "./img/entrep-phone-3x.png";
import KaspiPay from "./img/kaspipay_icon.svg";
import Gold from "./img/gold.svg";
import Red from "./img/red.svg";
import Kredit from "./img/kredit.svg";
import Bus from "./img/business.svg";
import Qr from "./img/actions-sales.svg";
function Business() {
  return (
    <div className="text-center pt-[8%]  box-border">
      <h1 className="text-5xl font-bold mb-[3%] ">Для Бизнеса</h1>
      <div className="max-w-[1200px] mx-auto ">
        <div className="flex justify-between">
          <div className="bg-[rgb(255,255,255)] w-[49%] flex justify-between gap-10 py-[3%] px-[3%] rounded-[20px]">
            <div className="w-[50%] ">
              <img src={KaspiPay} alt="" />
              <h2 className="text-left text-3xl mt-[15%]">
                Kaspi Pay.
                <br /> Приложение
                <br /> для бизнеса
              </h2>
              <div className="text-left mt-[20%]">
                <h2 className="text-xl mb-[5%]">Принимайте оплату с</h2>
                <div className="flex justify-around w-[80%]">
                  <img src={Gold} alt="" className="max-w-[62px]" />
                  <img src={Red} alt="" className="max-w-[62px]" />
                  <img src={Kredit} alt="" className="max-w-[62px]" />
                </div>
              </div>
              <button className="px-[10%] py-[3%] bg-[#0089D0] text-[rgb(255,255,255)] rounded-[8px] w-[200px] text-[1.2em] mt-[15%] ml-[-20%]">
                Подключиться
              </button>
            </div>
            <img src={Phone} alt="" className="w-[50%]" />
          </div>
          <div className="w-[49%]">
            <div className="flex items-center justify-around bg-[rgb(255,255,255)] rounded-[20px] py-[3%] px-[3%] min-h-[280px] mb-6">
              <div className="text-left w-[60%]">
                <h3 className="text-xl text-[rgba(0,0,0,.6)] mb-5">
                  Бизнес Кредит
                </h3>
                <h1 className="text-3xl leading-2 mb-5">
                  Без залога <br /> и документов. <br /> Онлайн за 1 минуту
                </h1>
                <a
                  href="https://kaspi.kz/bizkredit"
                  className="text-xl text-[#0089D0] hover:underline"
                >
                  Подробнее
                </a>
              </div>
              <img src={Bus} alt="" className="" />
            </div>

            <div className="flex items-center justify-around bg-[rgb(255,255,255)] rounded-[20px] py-[3%] px-[3%] min-h-[280px]">
              <div className="text-left w-[60%]">
                <h3 className="text-xl text-[rgba(0,0,0,.6)] mb-5">
                  Акции Kaspi QR
                </h3>
                <h1 className="text-3xl leading-2 mb-5">
                  Участвуйте в акциях <br /> и увеличивайте свои <br /> продажи
                </h1>
                <a
                  href="https://kaspi.kz/marketingactions"
                  className="text-xl text-[#0089D0] hover:underline"
                >
                  Принять участие
                </a>
              </div>
              <img src={Qr} alt="" className="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Business;
