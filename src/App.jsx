import { useState } from "react";
import "./App.css";
import "../src/components/Responsive.css";
import Header from "./components/header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Footer from "./components/Footer/Footer";
import SingleProduct from "./pages/singleProduct/SingleProduct";
import SingleProduct2 from "./pages/singleProduct/SingleProduct2";
import Contact from "./pages/ContactUs/Contact";
import Listing from "./pages/listing/Listing";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Listing />} />
        <Route path="/singleProduct2/:name" element={<SingleProduct2 />} />
        <Route path="/singleProduct/:name" element={<SingleProduct />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
