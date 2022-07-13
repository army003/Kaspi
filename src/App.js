import { Routes, Route, Link } from "react-router-dom";
import "./index.css";
import Main from "./components/Product_Pages/Main.jsx";
import Homepage from "./components/Homepage.jsx";
function App() {
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
        <Route exact path="/men" element={<Main active="men" />} />
        <Route exact path="/women" element={<Main active="women" />} />
      </Routes>
    </div>
  );
}

export default App;
