import React from "react";
import productdata from "../../components/Products";
import { Link } from "react-router-dom";
import { Button, Rating } from "@mui/material";
function Product() {
  const [products, setProducts] = useState(productdata);
  return (
    <>
      <div className="product-main-container">
        <div className="all-product-container mt-8 pb-8 grid grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-4">
          {products.map((val) => {
            //   console.log(val.items.map((vall) => vall.name));
            return val.items.map((val_) => {
              return (
                <>
                  <Link
                    to={`/singleProduct/${val_.name.replace(/\s+/g, "-")}`}
                    key={val_.id}
                  >
                    <div className="product-card max-w-[18rem] w-full border border-[#e9e3e3] bg-white rounded-lg flex flex-col justify-between p-4">
                      <div className="product-image-bx w-full border-[14px] border-[#94C9F5] rounded-lg">
                        <img
                          src={val_.img}
                          alt=""
                          className="m-auto bg-[#94C9F5]"
                        />
                      </div>
                      <div className="product-info ">
                        <h1 className="product-name font-bold my-4 text-xl xsm:text-[13px] xsm:mb-2">
                          {val_.name}
                        </h1>
                        <p className="text-[14px] font-light text-[#555] xsm:text-[12px]">
                          {val_.desc.length > 80
                            ? val_.desc.substr(0, 80) + "..."
                            : val_.desc}
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
                  </Link>
                </>
              );
            });
          })}
        </div>
      </div>
    </>
  );
}

export default Product;
