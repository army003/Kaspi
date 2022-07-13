import React from "react";
import Banner from "./Banner/banner.jsx";
import Business from "./Business/Business.jsx";
import Footer from "./Footer/Footer.jsx";
import Header from "./Header/header.jsx";
import Kaspipay from "./Kaspipay/Kaspipay.jsx";
import Partner from "./Partner/Partner.jsx";
import Products from "./Products/Products.jsx";
import Section from "./Section/section.jsx";
import Store from "./Store/store.jsx";
function Homepage() {
  return (
    <div>
      <Header />
      <Banner />
      <Section />
      <Store />
      <Products />
      <Business />
      <Kaspipay />
      <Partner />
      <Footer />
    </div>
  );
}

export default Homepage;
