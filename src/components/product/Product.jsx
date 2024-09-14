import React from "react";
import { Link } from "react-router-dom";
import { Button, Rating } from "@mui/material";

function Product({ items }) {
  console.log("Rendering Products:", items); // Debugging

  if (!items || items.length === 0) {
    return <p>No products available</p>;
  }

  return (
    <div className="main-container">
      <div className="product-main-container">
        <div className="all-product-container mt-8 pb-8 grid grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-4">
          {items.map((val_) => (
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
                        ? val_.desc.substr(0, 80) + "..."
                        : val_.desc}
                    </p>
                  </div>
                  <div className="product-btn mt-auto flex items-center justify-between xsm:flex-wrap gap-4 text-[#FAC409]">
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
                        width: window.innerWidth > 560 ? "inherit" : "100%",
                      }}
                    >
                      Buy Now
                    </Button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Product;
