import React, { useEffect } from "react";
import "./SingleProduct.css";
import { filledInputClasses, Rating } from "@mui/material";
import { Button } from "@mui/material";
import { FaAngleRight } from "react-icons/fa";
import productdata from "../../components/Products";
import { useParams } from "react-router-dom";
import listingBanner from "/listingBanner_.jpg";

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
  const [relatedProducts, setRelatedProducts] = useState([]);
  const { name } = useParams();
  const popularItems = products
    .map((val) => val.items.filter((item) => item.popular === "true"))
    .flat(); // This flattens the array of arrays

  // console.log(popularItems);
  useEffect(() => {
    const filteredProduct = products
      .map((product) =>
        product.items.find(
          (val_) =>
            val_.name.replace(/\s+/g, "-").toLowerCase() === name.toLowerCase()
        )
      )
      .filter(Boolean); // Remove undefined values from the array
    // console.log(filteredProduct.map((k) => k.name));
    setSelectedProduct(filteredProduct);

    const filterCat =
      filteredProduct.length > 0 ? filteredProduct[0].cat : null;

    if (filterCat) {
      const related = products
        .map((val) =>
          val.items.filter(
            (val_) =>
              val_.cat === filterCat && val_.name !== filteredProduct[0].name
          )
        )
        .flat(); // Flatten to avoid arrays of arrays
      setRelatedProducts(related);
      console.log(relatedProducts);
    }
    // const filterCat = filteredProduct.map((cat) => cat.cat);
    // console.log(filterCat);
    // const related = products.map((val) =>
    //   val.items.filter((val_) => val_.cat === filterCat)
    // );
    // console.log(related);
    window.scrollTo(0, 0);
  }, [name, products]);

  // console.log(selectedProduct.map((val) => val.moreInfo));
  const settings = {
    dots: true,
    slidesToShow: 4,
    // slidesToScroll: 4, // Matching slidesToShow and slidesToScroll
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: false, // Set to false to prevent duplicating for now
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          // slidesToScroll: 3, // Adjust scroll to match show
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          // slidesToScroll: 2, // Matching scroll with show
          centerMode: true,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          // slidesToScroll: 1, // Matching scroll with show
          arrows: false,
        },
      },
    ],
  };
  return (
    <>
      <div className="singleProduct-container">
        <div
          className="contact-us-breadcrumb"
          style={{
            backgroundImage: `url(${listingBanner})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            // padding: window.innerWidth > 600 ? "6rem" : " 4rem 0",
            marginTop: "",
          }}
        >
          <div className="listing-overlay w-full h-full bg-[#0007] py-24 sm:py-16 ">
            <h1 className="text-7xl sm:text-4xl text-center text-white ">
              {name.replace(/-/g, " ")}
            </h1>
          </div>
        </div>
        <div className="main-container">
          {selectedProduct.map((product) => {
            return (
              <>
                <div className="product-content sm:px-4 flex sm:flex-wrap gap-4  overflow- overflow-y-auto drop-shadow-xl border-t  pt-8">
                  <div className="product-image w-1/2 sm:w-full max-h-[35rem]  border sm:static sticky top-0">
                    <img
                      src={product.img}
                      alt=""
                      className="w-full h-auto drop-shadow"
                    />
                  </div>

                  <div className="prodluct-info w-1/2 sm:w-full ">
                    <div className="product-name text-4xl font-bold text-Button">
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
                          <div className="w-1/3 px-2 mb-4">
                            <label
                              className="text-black text-[12px]  mb-2"
                              htmlFor="length"
                            >
                              Length (inch)*
                            </label>
                            <input
                              id="length"
                              name="length"
                              type="text"
                              className="w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                              placeholder="Length"
                              required
                            />
                          </div>
                          <div className="w-1/3 px-2 mb-4">
                            <label
                              className="text-black text-[12px]  mb-2"
                              htmlFor="width"
                            >
                              Width (inch)*
                            </label>
                            <input
                              id="width"
                              name="width"
                              type="text"
                              className="w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                              placeholder="Width"
                              required
                            />
                          </div>
                          <div className="w-1/3 px-2 mb-4">
                            <label
                              className="text-black text-[12px]  mb-2"
                              htmlFor="height"
                            >
                              Height (inch)*
                            </label>
                            <input
                              id="height"
                              name="height"
                              type="text"
                              className="w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                              placeholder="Height"
                              required
                            />
                          </div>
                        </div>

                        {/* Second Row: Stock Option, Print Option, Finishing Option */}
                        <div className="flex flex-wrap -mx-2">
                          <div className="w-1/3 px-2 mb-4">
                            <label
                              className="text-black text-[12px]  mb-2"
                              htmlFor="stockOption"
                            >
                              Stock Option
                            </label>
                            <select
                              id="stockOption"
                              name="stockOption"
                              className="w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                              <option value="">Select Print Option</option>
                              <option value="Full_Color_Printing">
                                Full Color Printing
                              </option>
                              <option value="1_Color_Printing">
                                1 Color Printing
                              </option>
                              <option value="2_Color_Printing">
                                2 Color Printing
                              </option>
                              <option value="3_Color_Printing">
                                3 Color Printing
                              </option>
                              <option value="No_Printing">No Printing</option>
                              <option value="PMS_Color_Printing">
                                PMS Color Printing
                              </option>
                            </select>
                          </div>
                          <div className="w-1/3 px-2 mb-4">
                            <label
                              className="text-black text-[12px]  mb-2"
                              htmlFor="printOption"
                            >
                              Print Option
                            </label>
                            <select
                              id="printOption"
                              name="printOption"
                              className="w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                              <option value="">Select Stock Option</option>
                              <option value="14_pt_Card_Stock">
                                14 pt. Card Stock
                              </option>
                              <option value="16_pt_Card_Stock">
                                16 pt. Card Stock
                              </option>
                              <option value="18_pt_Card_Stock">
                                18 pt. Card Stock
                              </option>
                              <option value="24_pt_Card_Stock">
                                24 pt. Card Stock
                              </option>
                              <option value="Brown_Kraft_Stock">
                                Brown Kraft Stock
                              </option>
                              <option value="White_Kraft_Stock">
                                White Kraft Stock
                              </option>
                              <option value="Brown_Corrugated">
                                Brown Corrugated
                              </option>
                              <option value="White_Corrugated">
                                White Corrugated
                              </option>
                              <option value="Texture_Stock">
                                Texture Stock
                              </option>
                              <option value="Linen_Stock">Linen Stock</option>
                              <option value="Other">Other</option>
                            </select>
                          </div>
                          <div className="w-1/3 px-2 mb-4">
                            <label
                              className="text-black text-[12px]  mb-2"
                              htmlFor="finishingOption"
                            >
                              Finishing Option
                            </label>
                            <select
                              id="finishingOption"
                              name="finishingOption"
                              className="w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                              <option value="">Select Finishing Option</option>
                              <option value="Matte_Finish">Matte Finish</option>
                              <option value="Spot_UV">
                                Spot UV (Matte Surface + Glossy)
                              </option>
                              <option value="Aqueous_Coating">
                                Aqueous Coating
                              </option>
                              <option value="Semi_Gloss_Finish">
                                Semi Gloss Finish
                              </option>
                              <option value="Gold_Foiling">
                                Gold Foiling (Glossy or Matte Finish)
                              </option>
                              <option value="Silver_Foiling">
                                Silver Foiling (Glossy or Matte Finish)
                              </option>
                              <option value="Holographic_Foiling">
                                Holographic Foiling (Glossy or Matte Finish)
                              </option>
                              <option value="Others">Others</option>
                            </select>
                          </div>
                        </div>

                        {/* Third Row: Quantity, Full Name, Email */}
                        <div className="flex flex-wrap -mx-2">
                          <div className="w-1/3 px-2 mb-4">
                            <label
                              className="text-black text-[12px]  mb-2"
                              htmlFor="quantity"
                            >
                              Quantity*
                            </label>
                            <input
                              id="quantity"
                              name="quantity"
                              type="number"
                              className="w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                              placeholder="Quantity"
                              required
                            />
                          </div>
                          <div className="w-1/3 px-2 mb-4">
                            <label
                              className="text-black text-[12px]  mb-2"
                              htmlFor="fullName"
                            >
                              Full Name
                            </label>
                            <input
                              id="fullName"
                              name="fullName"
                              type="text"
                              className="w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                              placeholder="Full Name"
                            />
                          </div>
                          <div className="w-1/3 px-2 mb-4">
                            <label
                              className="text-black text-[12px]  mb-2"
                              htmlFor="email"
                            >
                              Email Address*
                            </label>
                            <input
                              id="email"
                              name="email"
                              type="email"
                              className="w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                              placeholder="Email Address"
                              required
                            />
                          </div>
                        </div>

                        {/* Fourth Row: Job Details (Full Width) */}
                        <div className="mb-6">
                          <label
                            className="text-black text-[12px]  mb-2"
                            htmlFor="jobDetails"
                          >
                            Details
                          </label>
                          <textarea
                            id="jobDetails"
                            name="jobDetails"
                            rows="10"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Type Your Needs Here Details"
                          ></textarea>
                        </div>

                        <div className="flex">
                          <Button
                            type="submit"
                            style={{
                              background: "#FAC409",
                              color: "#000",
                              padding: "6px 20px",
                            }}
                            endIcon={<FaAngleRight />}
                          >
                            Get Price Quote
                          </Button>
                        </div>
                      </form>
                    </div>
                    <div className="category my-4">
                      <b>Category:</b> {product.cat}
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
                <div className="product-desc-tabs my-16 bg-[#FEF8ED]">
                  <div className="row w-full  border rounded-lg mt-12 py-12 px-8 sm:px-0">
                    <div className="col px-4">
                      <div className="info-tabs flex flex-wrap gap-4 mb-12">
                        <div
                          className={`discription ${
                            showInfo === 0 ? "border-b-Blue " : "  "
                          }`}
                          onClick={() => setShowInfo(0)}
                        >
                          <Button
                            className={`discription ${
                              showInfo === 0 ? " " : "border border-red-50"
                            }`}
                            style={{
                              color: showInfo === 0 ? "var(--blue)" : "#000",
                            }}
                          >
                            Description
                          </Button>
                        </div>
                        <div
                          className={`additionl-description ${
                            showInfo === 1 ? " " : ""
                          }`}
                          onClick={() => setShowInfo(1)}
                        >
                          <Button
                            style={{
                              color: showInfo === 1 ? "var(--blue)" : "#000",
                            }}
                          >
                            More Info
                          </Button>
                        </div>
                        <div
                          className={`vendor ${showInfo === 2 ? " " : ""}`}
                          onClick={() => setShowInfo(2)}
                        >
                          <Button
                            style={{
                              color: showInfo === 2 ? "var(--blue)" : "#000",
                            }}
                          >
                            Tags
                          </Button>
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
                                    <tr class="stand-up ">
                                      <th className="text-left block ">
                                        Size / Styles:
                                      </th>
                                      <td className="block mt-2 mb-4">
                                        <p>{productInfo.sizeStyles}</p>
                                      </td>
                                    </tr>
                                    <tr class="folded-wo-wheels">
                                      <th className="text-left block">
                                        Specification:
                                      </th>
                                      <td className="block mt-2 mb-4">
                                        <p>{productInfo.specification}</p>
                                      </td>
                                    </tr>
                                    <tr class="folded-w-wheels">
                                      <th className="text-left block">
                                        Colors:
                                      </th>
                                      <td className="block mt-2 mb-4">
                                        <p>{productInfo.colors}</p>
                                      </td>
                                    </tr>
                                    <tr class="door-pass-through">
                                      <th className="text-left block">
                                        Finishing Options:
                                      </th>
                                      <td className="block mt-2 mb-4">
                                        <p>{productInfo.finishingOptions}</p>
                                      </td>
                                    </tr>
                                    <tr class="frame">
                                      <th className="text-left block">
                                        Production Time:
                                      </th>
                                      <td className="block mt-2 mb-4">
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
          <div className="related-products mb-16">
            <div className="category-title-bar  bg-white flex justify-center items-center shadow-xl px-4 py-6 mb-12">
              <h1 className="text-3xl text-center sm:text-[24px] font-heading font-normal">
                Related Products
              </h1>
            </div>
            <div className="all-product-container mt-8 pb-8 grid grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-4">
              {/* <Slider {...settings}> */}
              {relatedProducts.slice(0, 4).map((val_) => (
                <Link
                  to={`/singleProduct/${val_.name.replace(/\s+/g, "-")}`}
                  key={val_.id}
                >
                  <div className="product-card max-w-[18rem] w-full border border-[#e9e3e3] bg-white rounded-lg flex flex-col justify-between p-4 h-full">
                    <div className="flex flex-col h-full">
                      <div className="product-image-bx w-full border-[14px] border-[#94C9F5] rounded-lg">
                        <img
                          src={val_.img}
                          alt={val_.name}
                          className="m-auto bg-[#94C9F5]"
                        />
                      </div>
                      <div className="flex-grow">
                        <h1 className="product-name font-bold my-4 text-xl xsm:text-[13px] xsm:mb-2">
                          {val_.name}
                        </h1>
                        <p className="text-[14px] font-light text-[#555] xsm:text-[12px]">
                          {val_.desc.length > 80
                            ? `${val_.desc.slice(0, 80)}...`
                            : val_.desc}
                        </p>
                      </div>
                      <div className="product-btn mt-auto flex items-center justify-between xsm:flex-wrap gap-4 text-[#FAC409]">
                        <Rating
                          readOnly
                          value={val_.rating || 4} // Ensure rating is dynamic
                          precision={0.5}
                          style={{ fontSize: "18px" }}
                        />
                        <Button
                          sx={{
                            backgroundColor: "var(--btnblue)",
                            color: "#fff",
                            padding: "6px 20px",
                            width: { xs: "100%", sm: "inherit" }, // Responsive button size
                          }}
                        >
                          Buy Now
                        </Button>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
              {/* </Slider> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleProduct;
