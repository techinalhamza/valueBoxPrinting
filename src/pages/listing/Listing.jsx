import React, { useState } from "react";
import productdata from "../../components/Products";
import { Link } from "react-router-dom";
import { Button, Rating } from "@mui/material";
import listingBanner from "/listingBanner_.jpg";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function Listing() {
  const [products, setProducts] = useState(productdata);
  //   console.log(products.map((val) => val.items.map((vall) => vall.name)));
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  // filter popular products
  const popularItems = products
    .map((val) => val.items.filter((item) => item.popular === "true"))
    .flat(); // This flattens the array of arrays
  return (
    <>
      <div className="listing-container">
        <div
          className="listing-us-breadcrumb"
          style={{
            backgroundImage: `url(${listingBanner})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            // padding: window.innerWidth > 600 ? "6rem" : " 4rem 0",
            marginTop: "",
          }}
        >
          <div className="listing-overlay w-full h-full bg-[#0007] py-24 sm:py-16 ">
            <h1 className="text-7xl sm:text-4xl text-center text-[#fff]">
              All Listing
            </h1>
          </div>
        </div>
        <div className="main-container">
          <div className="listing-head border-b mt-8">
            <div className="listing-head-content flex justify-between items-center">
              <h3 className="capitalize font-bold">
                showing result for 30 products
              </h3>
              <div>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                  <Select
                    value={age}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem value="Filter by Category">
                      <em></em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                  {/* <FormHelperText>Without label</FormHelperText> */}
                </FormControl>
              </div>
            </div>
          </div>

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
      </div>
    </>
  );
}

export default Listing;
