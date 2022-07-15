import { Routes, Route, Link } from "react-router-dom";
import "./index.css";
import Main from "./components/Product_Pages/Main.jsx";
import Homepage from "./components/Homepage.jsx";
import { addProducts } from "./features/productsSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import DetailPage from "./components/Product_Pages/DetailPage";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          return Promise.reject("something wrong");
        }
      })
      .then((data) => {
        dispatch(addProducts(data));
      });
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route
          exact
          path="/electronics"
          element={<Main active="electronics" />}
        />
        <Route exact path="/jewelery" element={<Main active="jewelery" />} />
        <Route exact path="/men" element={<Main active="men's clothing" />} />
        <Route
          exact
          path="/women"
          element={<Main active="women's clothing" />}
        />
        <Route path="poroduct/:id" element={<DetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
