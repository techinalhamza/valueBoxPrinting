import React, { useState } from "react";
import product1 from "/productsImages/Body & Face Lotion Boxes.png";
import { Button, Rating } from "@mui/material";
import productdata from "../Products";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import star from "/star.svg";

function PopularProduct() {
  const [products, setProducts] = useState(productdata);
  // console.log(products);

  return (
    <>
      <div className="product-contaoner my- bg-[#fef8ed]">
        <div className="main-container">
          <div className="product-title-bar bg-white flex justify-between items-center shadow-xl px-4 py-6">
            <h1 className="text-3xl font-heading font-normal ">
              Popular Print Products
              {/* <i className=" text-Yellow"> Products</i> */}
            </h1>
            <ul className="flex items-center gap-4">
              <li className="text-base font-bold">
                <Link>Best Seller</Link>
              </li>
              <li>|</li>
              <li className="text-base font-bold text-[#555]">
                <Link>New Arrival</Link>
              </li>
              <li>|</li>
              <li className="text-base font-bold text-[#555]">
                <Link>Top Seller</Link>
              </li>
              <li>
                <Link>
                  <Button
                    style={{
                      background: "var(--btnblue)",
                      color: "#fff",
                      padding: "10px 20px",
                    }}
                    endIcon={<MdOutlineKeyboardArrowRight />}
                  >
                    {" "}
                    Show All Products
                  </Button>
                </Link>
              </li>
            </ul>
            {/* <Button
              style={{
                background: "#075697",
                color: "#fff",
                padding: "10px 20px",
              }}
              endIcon={<FaAngleRight />}
            >
              {" "}
              Show All Products
            </Button> */}
          </div>
          <div
            className="all-product-container mt-8 pb-8"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit , minmax(18rem , 1fr))",
              gridRowGap: "1rem",
            }}
          >
            {products.map((val) => {
              console.log(val.name);
              return (
                <>
                  <div className="product-card max-w-[18rem] w-full border border-[#e9e3e3] bg-white rounded-lg flex flex-col justify-between p-4">
                    <div className="product-image-bx w-full border-[14px] border-[#94C9F5] rounded-lg">
                      <img
                        src={val.img}
                        alt=""
                        className="m-auto bg-[#94C9F5]"
                      />
                    </div>
                    <div className="product-info ">
                      <h1 className="product-name font-bold my-4 text-xl">
                        {val.name}
                      </h1>
                      {/* <Rating
                        readOnly
                        defaultValue={4}
                        precision={0.5}
                        style={{ fontSize: "18px" }}
                      /> */}
                      <p className="text-[14px] font-light text-[#555]">
                        {val.desc.length > 80
                          ? val.desc.substr(0, 80) + "..."
                          : val.desc}
                      </p>
                      <div className="product-btn flex items-center justify-between  text-[#FAC409] mt-4">
                        <Rating
                          readOnly
                          defaultValue={4}
                          precision={0.5}
                          style={{ fontSize: "18px" }}
                        />
                        <Button
                          style={{
                            background: "var(--blue)",
                            color: "#fff",
                            padding: "6px 20px",
                            // width: "100%",
                          }}
                        >
                          Buy Now
                        </Button>
                        {/* <span>15% discount</span> */}
                      </div>
                    </div>
                  </div>
                </>
              );
            })}

            {/* <div className="product-card max-w-[18rem] w-full border border-[#e9e3e3] rounded-lg flex flex-col justify-between">
              <div className="product-image-bx w-full">
                <img src={product1} alt="" className="m-auto" />
              </div>
              <div className="product-info p-4">
                <h1 className="product-name font-bold">Coffee Cups</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Fugit voluptatum iusto voluptatem?
                </p>
                <div className="product-btn flex items-center justify-between  text-[#FAC409] mt-8">
                  <Button
                    style={{
                      background: "#075697",
                      color: "#fff",
                      padding: "6px 20px",
                    }}
                  >
                    Buy Now
                  </Button>
                  <span>15% discount</span>
                </div>
              </div>
            </div>
            <div className="product-card max-w-[18rem] w-full border border-[#e9e3e3] rounded-lg flex flex-col justify-between">
              <div className="product-image-bx w-full">
                <img src={product1} alt="" className="m-auto" />
              </div>
              <div className="product-info p-4">
                <h1 className="product-name font-bold">Coffee Cups</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Fugit voluptatum iusto voluptatem?
                </p>
                <div className="product-btn flex items-center justify-between  text-[#FAC409] mt-8">
                  <Button
                    style={{
                      background: "#075697",
                      color: "#fff",
                      padding: "6px 20px",
                    }}
                  >
                    Buy Now
                  </Button>
                  <span>15% discount</span>
                </div>
              </div>
            </div>
            <div className="product-card max-w-[18rem] w-full border border-[#e9e3e3] rounded-lg flex flex-col justify-between">
              <div className="product-image-bx w-full">
                <img src={product1} alt="" className="m-auto" />
              </div>
              <div className="product-info p-4">
                <h1 className="product-name font-bold">Coffee Cups</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Fugit voluptatum iusto voluptatem?
                </p>
                <div className="product-btn flex items-center justify-between  text-[#FAC409] mt-8">
                  <Button
                    style={{
                      background: "#075697",
                      color: "#fff",
                      padding: "6px 20px",
                    }}
                  >
                    Buy Now
                  </Button>
                  <span>15% discount</span>
                </div>
              </div>
            </div>
            <div className="product-card max-w-[18rem] w-full border border-[#e9e3e3] rounded-lg flex flex-col justify-between">
              <div className="product-image-bx w-full">
                <img src={product1} alt="" className="m-auto" />
              </div>
              <div className="product-info p-4">
                <h1 className="product-name font-bold">Coffee Cups</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Fugit voluptatum iusto voluptatem?
                </p>
                <div className="product-btn flex items-center justify-between  text-[#FAC409] mt-8">
                  <Button
                    style={{
                      background: "#075697",
                      color: "#fff",
                      padding: "6px 20px",
                    }}
                  >
                    Buy Now
                  </Button>
                  <span>15% discount</span>
                </div>
              </div>
            </div>
            <div className="product-card max-w-[18rem] w-full border border-[#e9e3e3] rounded-lg flex flex-col justify-between">
              <div className="product-image-bx w-full">
                <img src={product1} alt="" className="m-auto" />
              </div>
              <div className="product-info p-4">
                <h1 className="product-name font-bold">Coffee Cups</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Fugit voluptatum iusto voluptatem?
                </p>
                <div className="product-btn flex items-center justify-between  text-[#FAC409] mt-8">
                  <Button
                    style={{
                      background: "#075697",
                      color: "#fff",
                      padding: "6px 20px",
                    }}
                  >
                    Buy Now
                  </Button>
                  <span>15% discount</span>
                </div>
              </div>
            </div>
            <div className="product-card max-w-[18rem] w-full border border-[#e9e3e3] rounded-lg flex flex-col justify-between">
              <div className="product-image-bx w-full">
                <img src={product1} alt="" className="m-auto" />
              </div>
              <div className="product-info p-4">
                <h1 className="product-name font-bold">Coffee Cups</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Fugit voluptatum iusto voluptatem?
                </p>
                <div className="product-btn flex items-center justify-between  text-[#FAC409] mt-8">
                  <Button
                    style={{
                      background: "#075697",
                      color: "#fff",
                      padding: "6px 20px",
                    }}
                  >
                    Buy Now
                  </Button>
                  <span>15% discount</span>
                </div>
              </div>
            </div>
            <div className="product-card max-w-[18rem] w-full border border-[#e9e3e3] rounded-lg flex flex-col justify-between">
              <div className="product-image-bx w-full">
                <img src={product1} alt="" className="m-auto" />
              </div>
              <div className="product-info p-4">
                <h1 className="product-name font-bold">Coffee Cups</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Fugit voluptatum iusto voluptatem?
                </p>
                <div className="product-btn flex items-center justify-between  text-[#FAC409] mt-8">
                  <Button
                    style={{
                      background: "#075697",
                      color: "#fff",
                      padding: "6px 20px",
                    }}
                  >
                    Buy Now
                  </Button>
                  <span>15% discount</span>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default PopularProduct;
