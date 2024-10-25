import React, { useEffect } from "react";
import "./SingleProduct.css";
import { filledInputClasses, Rating } from "@mui/material";
import { Button } from "@mui/material";
import { FaAngleRight } from "react-icons/fa";
import productdata from "../../components/Products";
import { useParams } from "react-router-dom";
import listingBanner from "/listingBanner_.jpg";
import coatingData from "../../components/Coating";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import QuoteForm from "../../components/QuoteForm/QuoteForm";

function CoatingProduct() {
  const [showInfo, setShowInfo] = useState(0);
  const [products, setProducts] = useState(coatingData);
  const [selectedProduct, setSelectedProduct] = useState([]); // State to store the filtered product
  const [relatedProducts, setRelatedProducts] = useState([]);
  const { name } = useParams();

  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Initial image index
  const [direction, setDirection] = useState(""); // Track the transition direction

  const handleImageClick = (index) => {
    setDirection(index > currentImageIndex ? "right" : "left"); // Determine slide direction
    setCurrentImageIndex(index); // Update the current image
  };

  useEffect(() => {
    console.log("Products:", products); // Check the entire products array
    console.log("Name to filter by:", name); // The name we are filtering by

    // Step 1: Filter the selected product based on the name
    const filteredProduct = products
      .map((product) =>
        product.items.find(
          (val_) =>
            val_.name.replace(/\s+/g, "-").toLowerCase() === name.toLowerCase()
        )
      )
      .filter(Boolean); // Remove undefined values
    console.log("Filtered Product:", filteredProduct); // Log the filtered product

    if (filteredProduct.length > 0) {
      setSelectedProduct(filteredProduct); // Update selected product state

      // Step 2: Find the category of the filtered product
      const filterCategory = products.find((product) =>
        product.items.some(
          (val_) =>
            val_.name.replace(/\s+/g, "-").toLowerCase() ===
            filteredProduct[0].name.replace(/\s+/g, "-").toLowerCase()
        )
      )?.category;

      console.log("Filter Category:", filterCategory); // Log the filter category

      if (filterCategory) {
        // Step 3: Find related products based on the category
        const related = products
          .filter((product) => product.category === filterCategory) // Filter by category
          .flatMap((product) =>
            product.items.filter(
              (val_) => val_.name !== filteredProduct[0].name // Exclude the selected product
            )
          );

        console.log("Related Products:", related); // Log related products

        // Step 4: Update the relatedProducts state
        setRelatedProducts(related);
      }
    } else {
      console.log("No matching product found for the name");
    }
    window.scrollTo(0, 0);
  }, [name, products]);

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
                <div className="product-content sm:px-4 flex sm:flex-wrap gap-4  border-t  pt-8">
                  {/* <div className="product-image w-1/2 sm:w-full max-h-[35rem]  border sm:static sticky top-0">
                    <img
                      src={product.img}
                      alt=""
                      className="w-full h-auto drop-shadow"
                    />
                  </div> */}
                  <div className="product-image w-1/2 sm:w-full ">
                    {/* <img
                      src={productImages[currentIndex]}
                      alt=""
                      className="w-full h-auto drop-shadow"
                    /> */}

                    <div className="large-image bg-[#F6F6F6]">
                      <img
                        src={product.images[currentImageIndex]}
                        alt={`Product ${currentImageIndex + 1}`}
                        className="w-full h-[635px] sm:h-auto drop-shadow"
                      />
                    </div>
                    <div className="small-images">
                      {product.images.map((image, index) => (
                        <div
                          key={index}
                          className="small-image-box"
                          onClick={() => handleImageClick(index)}
                        >
                          <img src={image} alt={`Small product ${index + 1}`} />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="prodluct-info w-1/2 sm:w-full ">
                    <div className="product-name text-4xl sm:text-[2rem] font-bold text-Button">
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
                      <QuoteForm />
                    </div>
                    {/* <div className="category my-4">
                      <b>Category:</b> {product.cat}
                    </div> */}
                    {/* <div className="social flex">
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
                    </div> */}
                  </div>
                </div>
                {/* <div className="product-desc-tabs my-16 bg-[#FEF8ED]">
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
                </div> */}
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
              {relatedProducts.length > 0 ? (
                relatedProducts.map((val_) => (
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
                            value={val_.rating || 4}
                            precision={0.5}
                            style={{ fontSize: "18px" }}
                          />
                          <Button
                            sx={{
                              backgroundColor: "var(--btnblue)",
                              color: "#fff",
                              padding: "6px 20px",
                              width: { xs: "100%", sm: "inherit" },
                            }}
                          >
                            Buy Now
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))
              ) : (
                <p>No related products found</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CoatingProduct;
