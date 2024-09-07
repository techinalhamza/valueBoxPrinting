import React from "react";
import Slider from "react-slick";
// import catImg1 from "../../assets/sample-product.jpg";

import { Button } from "@mui/material";
import { FaAngleRight } from "react-icons/fa";

function CategouryCarousel() {
  var settings = {
    dots: false, // Hide dots for navigation
    infinite: true, // Enable infinite looping
    speed: 500, // Animation speed
    slidesToShow: 5, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll at a time
    arrows: true, // Show navigation arrows
    autoplay: true, // Enable autoplay
    autoplaySpeed: 1500, // Autoplay speed
    mobileFirst: true,
  };
  return (
    <>
      <div className="cat-container mb-20">
        <div className="main-container ">
          <div className="category-title-bar flex justify-between my-16">
            <h1 className="text-3xl text-[#075697]">
              Shop By
              <i className="font-serif text-[#FAC409]"> Category</i>
            </h1>
            {/* <Button
              style={{
                background: "#075697",
                color: "#fff",
                padding: "6px 20px",
              }}
              endIcon={<FaAngleRight />}
            >
              See All Shop
            </Button> */}
          </div>
          <Slider {...settings}>
            <div className="w-full ">
              <div className="category-info">
                <div className="category-img border border-solid w-40 rounded-full overflow-hidden h-40 p-5">
                  {/* <img src={catImg1} alt="" /> */}
                </div>
                <h1 className="w-40 text-center">Custom Cosmetic Boxes</h1>
                <div className="category-name"></div>
              </div>
            </div>
            <div className="w-full ">
              <div className="category-info">
                <div className="category-img border border-solid w-40 rounded-full overflow-hidden h-40 p-5">
                  {/* <img src={catImg2} alt="" /> */}
                </div>
                <h1 className="w-40 text-center">
                  Software & Electronic Boxes
                </h1>
                <div className="category-name"></div>
              </div>
            </div>
            <div className="w-full">
              <div className="category-info">
                <div className="category-img border border-solid w-40 rounded-full overflow-hidden h-40 p-5">
                  {/* <img src={catImg1} alt="" /> */}
                </div>
                <h1 className="w-40 text-center">Soap Boxes</h1>
                <div className="category-name"></div>
              </div>
            </div>
            <div className="w-full">
              <div className="category-info">
                <div className="category-img border border-solid w-40 rounded-full overflow-hidden h-40 p-5">
                  {/* <img src={catImg1} alt="" /> */}
                </div>
                <h1 className="w-40 text-center">Window Boxes</h1>
                <div className="category-name"></div>
              </div>
            </div>
            <div className="w-full">
              <div className="category-info">
                <div className="category-img border border-solid w-40 rounded-full overflow-hidden h-40 p-5">
                  {/* <img src={catImg1} alt="" /> */}
                </div>
                <h1 className="w-40 text-center">Popup Display Boxes</h1>
                <div className="category-name"></div>
              </div>
            </div>
            <div className="w-full">
              <div className="category-info">
                <div className="category-img border border-solid w-40 rounded-full overflow-hidden h-40 p-5">
                  {/* <img src={catImg1} alt="" /> */}
                </div>
                <h1 className="w-40 text-center">Gable Boxes</h1>
                <div className="category-name"></div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}

export default CategouryCarousel;
