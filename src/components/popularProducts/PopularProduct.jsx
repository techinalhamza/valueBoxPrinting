import React, { useState } from "react";
import { Button, Rating } from "@mui/material";
import productdata from "../Products";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import star from "/star.svg";
import Product from "../product/Product";

function PopularProduct() {
  const [products, setProducts] = useState(productdata);

  // filter popular products
  const popularItems = products
    .map((val) => val.items.filter((item) => item.popular === "true"))
    .flat(); // This flattens the array of arrays

  console.log(popularItems.map((val) => val.name));

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
              <li className="text-base sm:text-[10px] text-nowrap font-bold">
                <Link>Best Seller</Link>
              </li>
              <li>|</li>
              <li className="text-base sm:text-[10px] text-nowrap font-bold text-[#555]">
                <Link>New Arrival</Link>
              </li>
              <li>|</li>
              <li className="text-base sm:text-[10px] text-nowrap font-bold text-[#555]">
                <Link>Top Seller</Link>
              </li>
              <li>
                <Link>
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
                    {" "}
                    Shop All
                  </Button>
                </Link>
              </li>
            </ul>
          </div>

          <Product items={popularItems} />
        </div>
      </div>
    </>
  );
}

export default PopularProduct;
