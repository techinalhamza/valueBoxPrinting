import React from "react";
import "./SingleProduct.css";
import product from "/productsImages/Cosmetics & Beauty/Custom Eyelash Boxes.png";
import { Rating } from "@mui/material";
import { Button } from "@mui/material";
import { FaAngleRight } from "react-icons/fa";
import productdata from "../../components/Products";
import Slider from "react-slick";

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

  const popularItems = products
    .map((val) => val.items.filter((item) => item.popular === "true"))
    .flat(); // This flattens the array of arrays

  var settings = {
    dots: false, // Hide dots for navigation
    infinite: true, // Enable infinite looping
    speed: 500, // Animation speed
    slidesToShow: 5, // Number of slides to show at a time (default)
    slidesToScroll: 1, // Number of slides to scroll at a time
    arrows: false, // Show navigation arrows
    autoplay: true, // Enable autoplay
    autoplaySpeed: 1500, // Autoplay speed
    mobileFirst: true,
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
          <div className="product-content flex sm:flex-wrap gap-4 max-h-[35rem] overflow-hidden overflow-y-auto ">
            {/* Image Container */}
            <div className="product-image w-1/2 sm:w-full max-h-[35rem] shadow-xl sm:static lg:sticky top-0">
              <img src={product} alt="" className="w-full h-auto" />
            </div>

            {/* Product Info Container */}
            <div className="prodluct-info w-1/2 sm:w-full ">
              <div className="product-name text-4xl font-bold">
                Box By Style
              </div>
              <Rating
                defaultValue={5}
                readOnly
                style={{
                  fontSize: "18px",
                }}
              />
              <div className="price mt-4 text-2xl">10$</div>
              <div className="short-desc my-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur placeat culpa aliquam architecto, veniam quas ut
                maiores nesciunt facilis repellendus tempora praesentium,
                deleniti, tempore corrupti?
              </div>
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
          <div className="product-desc-tabs ">
            <div className="row w-full  border mt-12 py-12">
              <div className="col">
                <div className="info-tabs flex flex-wrap gap-8 mb-12">
                  <div className="discription" onClick={() => setShowInfo(0)}>
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
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Itaque ad optio corporis maxime tempora dolorem, cumque
                      nulla sequi deserunt laudantium.
                    </p>
                  </div>
                )}
                {showInfo === 1 && (
                  <div className="additional-description">
                    <div class="tab-pane fade active show" id="Additional-info">
                      <table class="font-md">
                        <tbody>
                          <tr class="stand-up">
                            <th>Stand Up</th>
                            <td>
                              <p>35″L x 24″W x 37-45″H(front to back wheel)</p>
                            </td>
                          </tr>
                          <tr class="folded-wo-wheels">
                            <th>Folded (w/o wheels)</th>
                            <td>
                              <p>32.5″L x 18.5″W x 16.5″H</p>
                            </td>
                          </tr>
                          <tr class="folded-w-wheels">
                            <th>Folded (w/ wheels)</th>
                            <td>
                              <p>32.5″L x 24″W x 18.5″H</p>
                            </td>
                          </tr>
                          <tr class="door-pass-through">
                            <th>Door Pass Through</th>
                            <td>
                              <p>24</p>
                            </td>
                          </tr>
                          <tr class="frame">
                            <th>Frame</th>
                            <td>
                              <p>Aluminum</p>
                            </td>
                          </tr>
                          <tr class="weight-wo-wheels">
                            <th>Weight (w/o wheels)</th>
                            <td>
                              <p>20 LBS</p>
                            </td>
                          </tr>
                          <tr class="weight-capacity">
                            <th>Weight Capacity</th>
                            <td>
                              <p>60 LBS</p>
                            </td>
                          </tr>
                          <tr class="width">
                            <th>Width</th>
                            <td>
                              <p>24″</p>
                            </td>
                          </tr>
                          <tr class="handle-height-ground-to-handle">
                            <th>Handle height (ground to handle)</th>
                            <td>
                              <p>37-45″</p>
                            </td>
                          </tr>
                          <tr class="wheels">
                            <th>Wheels</th>
                            <td>
                              <p>12″ air / wide track slick tread</p>
                            </td>
                          </tr>
                          <tr class="seat-back-height">
                            <th>Seat back height</th>
                            <td>
                              <p>21.5″</p>
                            </td>
                          </tr>
                          <tr class="head-room-inside-canopy">
                            <th>Head room (inside canopy)</th>
                            <td>
                              <p>25″</p>
                            </td>
                          </tr>
                          <tr class="pa_color">
                            <th>Color</th>
                            <td>
                              <p>Black, Blue, Red, White</p>
                            </td>
                          </tr>
                          <tr class="pa_size">
                            <th>Size</th>
                            <td>
                              <p>M, S</p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
                {showInfo === 2 && (
                  <div className="vendor">
                    <div class="tab-pane fade active show" id="Vendor-info">
                      <div class="vendor-logo d-flex mb-30">
                        <img src="src\assets\vendor-18.svg" alt="" />
                        <div class="vendor-name ml-5">
                          <h6>
                            <a href="vendor-details-2.html" className="ml-5">
                              Noodles Co.
                            </a>
                          </h6>
                          <div class="product-rate-cover text-end">
                            <div class="product-rate d-inline-block">
                              <div
                                class="product-rating flex ml-5"
                                style={{ width: "90%" }}
                              >
                                <Rating
                                  style={{ fontSize: "1rem" }}
                                  defaultValue={3}
                                  readOnly
                                />
                              </div>
                            </div>
                            <span class="font-small  text-muted ">
                              (32 reviews)
                            </span>
                          </div>
                        </div>
                      </div>
                      <ul class="contact-infor my-16">
                        <li className="flex gap-3">
                          <img src="src\assets\icon-location.svg" alt="" />
                          <strong>Address: </strong>{" "}
                          <span>
                            5171 W Campbell Ave undefined Kent, Utah 53127
                            United States
                          </span>
                        </li>
                        <li className="flex gap-3">
                          <img src="src\assets\icon-contact.svg" alt="" />
                          <strong>Contact Seller:</strong>
                          <span>(+91) - 540-025-553</span>
                        </li>
                      </ul>
                      <div class="d-flex mb-55">
                        <div class="mr-30">
                          <p class="text-brand font-xs">Rating</p>
                          <h4 class="mb-0">92%</h4>
                        </div>
                        <div class="mr-30">
                          <p class="text-brand font-xs">Ship on time</p>
                          <h4 class="mb-0">100%</h4>
                        </div>
                        <div>
                          <p class="text-brand font-xs">Chat response</p>
                          <h4 class="mb-0">89%</h4>
                        </div>
                      </div>
                      <p className="m-0">
                        Noodles &amp; Company is an American fast-casual
                        restaurant that offers international and American noodle
                        dishes and pasta in addition to soups and salads.
                        Noodles &amp; Company was founded in 1995 by Aaron
                        Kennedy and is headquartered in Broomfield, Colorado.
                        The company went public in 2013 and recorded a $457
                        million revenue in 2017.In late 2018, there were 460
                        Noodles &amp; Company locations across 29 states and
                        Washington, D.C.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="related-products">
            <div
              className="all-product-container"
              // style={{
              //   display: "grid",
              //   gridTemplateColumns: "repeat(auto-fit , minmax(18rem , 1fr))",
              //   gridRowGap: "1rem",
              // }}
            >
              <Slider {...settings}>
                {popularItems.map((val) => {
                  // console.log(val.name);
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
