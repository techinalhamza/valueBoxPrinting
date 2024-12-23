import React from "react";
import { Link } from "react-router-dom";
import { Button, Rating } from "@mui/material";

function Product({ items }) {
  if (!items || items.length === 0) {
    return <p>No products available</p>;
  }

  return (
    <>
      <div className="main-container">
        <div className="product-main-container">
          <div className="all-product-container mt-8 pb-8 grid grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-4">
            {items.map((val_, index) => (
              <Link
                to={`/singleProduct/${val_.name.replace(/\s+/g, "-")}`}
                key={index}
              >
                <div className="product-card max-w-[18rem] w-full border border-[#e9e3e3] bg-white rounded-lg flex flex-col justify-between p-4 h-full">
                  <div className="flex flex-col h-full">
                    <div className="product-image-bx w-full border-[14px] border-[#94C9F5] rounded-lg h-48 sm:h-max overflow-hidden">
                      <img
                        src={val_.img}
                        alt={val_.name}
                        className="m-auto bg-[#94C9F5] w-full aspect-[4/3] object-contain"
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
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
