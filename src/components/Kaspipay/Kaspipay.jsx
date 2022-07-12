import React from "react";
import Smart from "./img/smart-POS-3x.png";
import Mobile from "./img/QR-display-3x.png";
import Qr from "./img/qr.png";
function Kaspipay() {
  return (
    <div className="max-w-[1200px] mx-auto bg-[rgb(255,255,255)] text-center py-[5%] mt-[2%] rounded-[20px]">
      <h1 className="text-5xl font-bold mb-[3%]">
        Принимайте оплату с Kaspi Pay
      </h1>
      <div className="flex justify-between w-[90%] mx-auto mt-[8%] mb-[4%]">
        <div>
          <img src={Qr} alt="" />
          <p className="text-2xl mt-[6%]">Smart POS</p>
        </div>
        <div>
          <img src={Smart} alt="" />
          <p className="text-2xl mt-[6%]">Мобильный POS</p>
        </div>
        <div>
          <img src={Mobile} alt="" />
          <p className="text-2xl mt-[6%]"> QR Дисплей</p>
        </div>
      </div>
      <a href="#" className="text-xl text-[#0089D0] hover:underline">
        Принимать оплату с Kaspi Pay
      </a>
    </div>
  );
}

export default Kaspipay;
