import Banner from "./components/Banner/banner.jsx";
import Business from "./components/Business/Business.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/header.jsx";
import Kaspipay from "./components/Kaspipay/Kaspipay.jsx";
import Partner from "./components/Partner/Partner.jsx";
import Products from "./components/Products/Products.jsx";
import Section from "./components/Section/section.jsx";
import Store from "./components/Store/store.jsx";
import "./index.css";
function App() {
  return (
    <div className="App">
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

export default App;
