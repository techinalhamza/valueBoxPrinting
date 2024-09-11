import React, { useEffect } from "react";
import "./SingleProduct.css";
import product from "/productsImages/Cosmetics & Beauty/Custom Eyelash Boxes.png";
import { filledInputClasses, Rating } from "@mui/material";
import { Button } from "@mui/material";
import { FaAngleRight } from "react-icons/fa";
import productdata from "../../components/Products";
import Slider from "react-slick";
import { useParams } from "react-router-dom";

import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

function SingleProduct() {
  const [showInfo, setShowInfo] = useState(0);
  const [products, setProducts] = useState(productdata);
  const [selectedProduct, setSelectedProduct] = useState([]); // State to store the filtered product

  const { name } = useParams();
  const popularItems = products
    .map((val) => val.items.filter((item) => item.popular === "true"))
    .flat(); // This flattens the array of arrays

  useEffect(() => {
    const filteredProduct = products
      .map((product) =>
        product.items.find(
          (val_) =>
            val_.name.replace(/\s+/g, "-").toLowerCase() === name.toLowerCase()
        )
      )
      .filter(Boolean); // Remove undefined values from the array

    setSelectedProduct(filteredProduct);
  }, [name, products]);

  console.log(selectedProduct.map((val) => val.moreInfo));
  var settings = {
    dots: false,

    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,
    // mobileFirst: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
          arrows: false,
        },
      },
    ],
  };

  return (
    <>
      <div className="singleProduct-container">
        <div className="main-container">
          {selectedProduct.map((product) => {
            return (
              <>
                <div className="product-content flex sm:flex-wrap gap-4 max-h-[35rem] overflow-hidden overflow-y-auto ">
                  <div className="product-image w-1/2 sm:w-full max-h-[35rem] shadow-xl sm:static sticky top-0">
                    <img src={product.img} alt="" className="w-full h-auto" />
                  </div>

                  <div className="prodluct-info w-1/2 sm:w-full ">
                    <div className="product-name text-4xl font-bold">
                      {product.name}
                    </div>
                    <Rating
                      defaultValue={5}
                      readOnly
                      style={{
                        fontSize: "18px",
                      }}
                    />
                    <div className="price mt-4 text-2xl">10$</div>
                    <div className="short-desc my-4">{product.desc}</div>

                    <div className="inquiry-form">
                      <form>
                        {/* First Row: Length, Width, Height */}
                        <div className="flex flex-wrap -mx-2">
                          <div className=" w-1/3 px-2 mb-4">
                            <label
                              className="  text-white text-[12px] hidden mb-2"
                              htmlFor="length"
                            >
                              Length (inch)*
                            </label>
                            <input
                              id="length"
                              name="length"
                              type="text"
                              className=" w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                              placeholder="Length"
                              required
                            />
                          </div>
                          <div className="w-1/3 px-2 mb-4">
                            <label
                              className="  text-white text-[12px] hidden mb-2"
                              htmlFor="width"
                            >
                              Width (inch)*
                            </label>
                            <input
                              id="width"
                              name="width"
                              type="text"
                              className=" w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                              placeholder="Width"
                              required
                            />
                          </div>
                          <div className="w-1/3 px-2 mb-4">
                            <label
                              className="  text-white text-[12px] hidden mb-2"
                              htmlFor="height"
                            >
                              Height (inch)*
                            </label>
                            <input
                              id="height"
                              name="height"
                              type="text"
                              className=" w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                              placeholder="Height"
                              required
                            />
                          </div>
                        </div>

                        {/* Second Row: Stock Option, Print Option, Finishing Option */}
                        <div className="flex flex-wrap -mx-2">
                          <div className="w-1/3 px-2 mb-4">
                            <label
                              className="  text-white text-[12px] hidden mb-2"
                              htmlFor="stockOption"
                            >
                              Stock Option
                            </label>
                            <input
                              id="stockOption"
                              name="stockOption"
                              type="text"
                              className=" w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                              placeholder="Stock Option"
                            />
                          </div>
                          <div className="w-1/3 px-2 mb-4">
                            <label
                              className="  text-white text-[12px] hidden mb-2"
                              htmlFor="printOption"
                            >
                              Print Option
                            </label>
                            <input
                              id="printOption"
                              name="printOption"
                              type="text"
                              className=" w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                              placeholder="Print Option"
                            />
                          </div>
                          <div className="w-1/3 px-2 mb-4">
                            <label
                              className="  text-white text-[12px] hidden mb-2"
                              htmlFor="finishingOption"
                            >
                              Finishing Option
                            </label>
                            <input
                              id="finishingOption"
                              name="finishingOption"
                              type="text"
                              className=" w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                              placeholder="Finishing Option"
                            />
                          </div>
                        </div>

                        {/* Third Row: Quantity, Full Name, Email */}
                        <div className="flex flex-wrap -mx-2">
                          <div className="w-1/3 px-2 mb-4">
                            <label
                              className="  text-white text-[12px] hidden mb-2"
                              htmlFor="quantity"
                            >
                              Required Quantity*
                            </label>
                            <input
                              id="quantity"
                              name="quantity"
                              type="number"
                              className=" w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                              placeholder="Quantity"
                              required
                            />
                          </div>
                          <div className="w-1/3 px-2 mb-4">
                            <label
                              className="  text-white text-[12px] hidden mb-2"
                              htmlFor="fullName"
                            >
                              Full Name
                            </label>
                            <input
                              id="fullName"
                              name="fullName"
                              type="text"
                              className=" w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                              placeholder="Full Name"
                            />
                          </div>
                          <div className="w-1/3 px-2 mb-4">
                            <label
                              className="  text-white text-[12px] hidden mb-2"
                              htmlFor="email"
                            >
                              Email Address*
                            </label>
                            <input
                              id="email"
                              name="email"
                              type="email"
                              className=" w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                              placeholder="Email Address"
                              required
                            />
                          </div>
                        </div>

                        {/* Fourth Row: Job Details (Full Width) */}
                        <div className="mb-6">
                          <label
                            className="  text-white text-[12px] hidden mb-2"
                            htmlFor="jobDetails"
                          >
                            Job Details
                          </label>
                          <textarea
                            id="jobDetails"
                            name="jobDetails"
                            rows="10"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Job Details"
                          ></textarea>
                        </div>

                        <div className="flex ">
                          <Button
                            style={{
                              background: "#FAC409",
                              color: "#000",
                              padding: "6px 20px",
                            }}
                            endIcon={<FaAngleRight />}
                          >
                            Get Price Quote
                          </Button>
                          {/* <button

                  type="submit"
                  className="bg-blue-500 text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-600 transition duration-300"
                >
                  Submit
                </button> */}
                        </div>
                      </form>
                    </div>
                    <div className="category my-4">
                      <b>Category:</b> box
                    </div>
                    <div className="social flex">
                      <ul className="flex items-center gap-2">
                        <li>
                          <b>Follow us on:</b>
                        </li>
                        <li>
                          <Link>
                            <FaFacebookF />
                          </Link>
                        </li>
                        <li>
                          <Link>
                            <FaInstagram />
                          </Link>
                        </li>
                        <li>
                          <Link>
                            <FaTiktok />
                          </Link>
                        </li>
                        <li>
                          <Link>
                            <FaLinkedinIn />
                          </Link>
                        </li>
                        <li>
                          <Link>
                            <FaWhatsapp />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="product-desc-tabs my-16">
                  <div className="row w-full  border rounded-lg mt-12 py-12">
                    <div className="col px-4">
                      <div className="info-tabs flex flex-wrap gap-8 mb-12">
                        <div
                          className="discription"
                          onClick={() => setShowInfo(0)}
                        >
                          <Button>Description</Button>
                        </div>
                        <div
                          className="additionl-description"
                          onClick={() => setShowInfo(1)}
                        >
                          <Button>More Info</Button>
                        </div>
                        <div className="vendor" onClick={() => setShowInfo(2)}>
                          <Button>Tags</Button>
                        </div>
                      </div>
                      {showInfo === 0 && (
                        <div className="discription-tab mt-4">
                          <p>{product.description}</p>
                        </div>
                      )}
                      {showInfo === 1 && (
                        <div className="additional-description">
                          <div
                            class="tab-pane fade active show"
                            id="Additional-info"
                          >
                            {product.moreInfo.map((productInfo) => {
                              return (
                                <table class="font-md">
                                  <tbody>
                                    <tr class="stand-up">
                                      <th>Size / Styles:</th>
                                      <td>
                                        <p>{productInfo.sizeStyles}</p>
                                      </td>
                                    </tr>
                                    <tr class="folded-wo-wheels">
                                      <th>Specification:</th>
                                      <td>
                                        <p>{productInfo.specification}</p>
                                      </td>
                                    </tr>
                                    <tr class="folded-w-wheels">
                                      <th>Colors:</th>
                                      <td>
                                        <p>{productInfo.colors}</p>
                                      </td>
                                    </tr>
                                    <tr class="door-pass-through">
                                      <th>Finishing Options:</th>
                                      <td>
                                        <p>{productInfo.finishingOptions}</p>
                                      </td>
                                    </tr>
                                    <tr class="frame">
                                      <th>Production Time:</th>
                                      <td>
                                        <p>{productInfo.productionTime}</p>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              );
                            })}
                          </div>
                        </div>
                      )}
                      {showInfo === 2 && (
                        <div className="vendor">
                          <div
                            class="tab-pane fade active show"
                            id="Vendor-info"
                          >
                            <p>{product.tags}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </>
            );
          })}
          <div className="related-products ">
            <div className="all-product-container h-min">
              <Slider {...settings}>
                {popularItems.map((val) => {
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
                          <h1 className="product-name font-bold my-4 text-xl xsm:text-[13px] xsm:mb-2">
                            {val.name}
                          </h1>

                          <p className="text-[14px] font-light text-[#555] xsm:text-[12px]">
                            {val.desc.length > 80
                              ? val.desc.substr(0, 80) + "..."
                              : val.desc}
                          </p>
                          <div className="product-btn flex items-center justify-between xsm:flex-wrap  gap-4 text-[#FAC409] mt-4">
                            <Rating
                              readOnly
                              defaultValue={4}
                              precision={0.5}
                              style={{ fontSize: "18px" }}
                            />
                            <Button
                              style={{
                                background: "var(--btnblue)",
                                color: "#fff",
                                padding: "6px 20px",
                                width:
                                  window.innerWidth > 560 ? "inherit" : "100%",
                              }}
                            >
                              Buy Now
                            </Button>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleProduct;
