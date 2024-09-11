import { useState } from "react";
import "./App.css";
import "../src/components/Responsive.css";
import Header from "./components/header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Footer from "./components/Footer/Footer";
import SingleProduct from "./pages/singleProduct/SingleProduct";
import SingleProduct2 from "./pages/singleProduct/SingleProduct2";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/singleProduct2/:name" element={<SingleProduct2 />} />
        <Route path="/singleProduct/:name" element={<SingleProduct />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
