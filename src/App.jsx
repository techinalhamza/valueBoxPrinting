import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "../src/components/ScrollToTop/ScrollToTop";
import PageLoader from "../src/components/PageLoader/PageLoader";
import Home from "./pages/home/Home";
import Listing from "./pages/listing/Listing";
import AboutUs from "./pages/AboutUs/AboutUs";
import SingleProduct from "./pages/singleProduct/SingleProduct";
import CoatingProduct from "./pages/singleProduct/CoatingProduct";
import Contact from "./pages/ContactUs/Contact";
import Product from "./components/product/Product";
import DeliveryInfo from "./pages/delivery info/DeliveryInfo";
import Privacy from "./pages/privacy-policy/Privacy";
import TermConditions from "./pages/term&conditions/TermConditions";
import Support from "./pages/Support center/Support";
import "../src/components/Responsive.css";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route element={<PageLoader />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Listing />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/category/:categoryName" element={<Listing />} />
          <Route path="/coatingProduct/:name" element={<CoatingProduct />} />
          <Route path="/singleProduct/:name" element={<SingleProduct />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product" element={<Product />} />
          <Route path="/delivery-info" element={<DeliveryInfo />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/term-conditions" element={<TermConditions />} />
          <Route path="/support" element={<Support />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
