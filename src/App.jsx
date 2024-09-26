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
import Product from "./components/product/Product";
import AboutUs from "./pages/AboutUs/AboutUs";
import DeliveryInfo from "./pages/delivery info/DeliveryInfo";
import Privacy from "./pages/privacy-policy/Privacy";
import TermConditions from "./pages/term&conditions/TermConditions";
import Support from "./pages/Support center/Support";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Listing />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/category/:categoryName" element={<Listing />} />
        <Route path="/singleProduct2/:name" element={<SingleProduct2 />} />
        <Route path="/singleProduct/:name" element={<SingleProduct />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />
        <Route path="/delivery-info" element={<DeliveryInfo />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/term-conditions" element={<TermConditions />} />
        <Route path="/support" element={<Support />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
