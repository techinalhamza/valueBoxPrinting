import React, { useState } from "react";
import { Button, Rating } from "@mui/material";
import productdata from "../Products";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import star from "/star.svg";
import Product from "../product/Product";

function PopularProduct() {
  const [products, setProducts] = useState(productdata);
  const [activeIndex, setActiveIndex] = useState(0);

  // Handle list item click
  const handleClick = (index) => {
    setActiveIndex(index);
  };

  // filter popular products
  const popularItems = products
    .map((val) => val.items.filter((item) => item.popular === "true"))
    .flat(); // This flattens the array of arrays
  // filter popular products
  const newArrival = products
    .map((val) => val.items.filter((item) => item.newArrival === "true"))
    .flat(); // This flattens the array of arrays

  const topSeller = products
    .map((val) => val.items.filter((item) => item.topSeller === "true"))
    .flat(); // This flattens the array of arrays

  // console.log(popularItems.map((val) => val.name));

  return (
    <>
      <div className="product-contaoner my- bg-[#fef8ed]">
        <div className="main-container">
          <div className="product-title-bar bg-white flex justify-between flex-wrap items-center sm:gap-4 shadow-xl px-4 py-6">
            <h1 className="text-3xl sm:text-[24px] font-heading font-normal ">
              Popular Print Products
              {/* <i className=" text-Yellow"> Products</i> */}
            </h1>
            <ul className="flex items-center gap-4">
              <li
                className={`text-base sm:text-[10px] text-nowrap font-bold text-[#555] ${
                  activeIndex === 0 ? "text-Button" : ""
                }`}
                onClick={() => handleClick(0)}
              >
                <Link>Best Seller</Link>
              </li>
              <li>|</li>
              <li
                className={`text-base sm:text-[10px] text-nowrap font-bold text-[#555] ${
                  activeIndex === 1 ? "text-Button" : ""
                }`}
                onClick={() => handleClick(1)}
              >
                <Link>New Arrival</Link>
              </li>
              <li>|</li>
              <li
                className={`text-base sm:text-[10px] text-nowrap font-bold text-[#555] ${
                  activeIndex === 2 ? "text-Button" : ""
                }`}
                onClick={() => handleClick(2)}
              >
                <Link>Top Seller</Link>
              </li>
              <li>
                <Link to="/shop">
                  <Button
                    style={{
                      background: "var(--btnblue)",
                      color: "#fff",
                      padding: "10px 20px",
                      textWrap: "nowrap",
                      fontSize: window.innerWidth > 600 ? "16px" : "10px",
                    }}
                    endIcon={
                      window.innerWidth > 600 ? (
                        <MdOutlineKeyboardArrowRight />
                      ) : null
                    }
                  >
                    Shop All
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
          {activeIndex == 0 && <Product items={popularItems} />}
          {activeIndex == 1 && <Product items={newArrival} />}
          {activeIndex == 2 && <Product items={topSeller} />}
        </div>
      </div>
    </>
  );
}

export default PopularProduct;
