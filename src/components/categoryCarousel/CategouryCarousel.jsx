import React from "react";
import Slider from "react-slick";
import catImg1 from "/category/castom boxes.jpg";
import catImg2 from "/category/custom-software-boxes.jpg";
import catImg3 from "/category/soap boxes.jpg";
import catImg4 from "/category/wendow boxes.jpg";
import catImg5 from "/category/popup-display-boxes.jpg";
import catImg6 from "/category/body fusion.jpg";

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
      <div className="cat-container mb-20  bg-[#fef8ed]">
        <div className="main-container ">
          <div className="category-title-bar  bg-white flex justify-between items-center shadow-xl px-4 py-6 mb-12">
            <h1 className="text-3xl font-heading font-normal">
              Shop By Category
            </h1>
            <Button
              style={{
                background: "var(--btnblue)",
                color: "#fff",
                padding: "6px 20px",
              }}
              endIcon={<FaAngleRight />}
            >
              See All Shop
            </Button>
          </div>
          <Slider {...settings}>
            <div className="w-full ">
              <div className="category-info">
                <div className="category-img border border-solid w-40 rounded-full overflow-hidden h-40 ">
                  <img src={catImg1} alt="" />
                </div>
                <h1 className="w-40 text-center">Custom Cosmetic Boxes</h1>
                <div className="category-name"></div>
              </div>
            </div>
            <div className="w-full ">
              <div className="category-info">
                <div className="category-img border border-solid w-40 rounded-full overflow-hidden h-40 ">
                  <img src={catImg2} alt="" />
                </div>
                <h1 className="w-40 text-center">
                  Software & Electronic Boxes
                </h1>
                <div className="category-name"></div>
              </div>
            </div>
            <div className="w-full">
              <div className="category-info">
                <div className="category-img border border-solid w-40 rounded-full overflow-hidden h-40 ">
                  <img src={catImg3} alt="" />
                </div>
                <h1 className="w-40 text-center">Soap Boxes</h1>
                <div className="category-name"></div>
              </div>
            </div>
            <div className="w-full">
              <div className="category-info">
                <div className="category-img border border-solid w-40 rounded-full overflow-hidden h-40 ">
                  <img src={catImg4} alt="" />
                </div>
                <h1 className="w-40 text-center">Window Boxes</h1>
                <div className="category-name"></div>
              </div>
            </div>
            <div className="w-full">
              <div className="category-info">
                <div className="category-img border border-solid w-40 rounded-full overflow-hidden h-40 ">
                  <img src={catImg5} alt="" />
                </div>
                <h1 className="w-40 text-center">Popup Display Boxes</h1>
                <div className="category-name"></div>
              </div>
            </div>
            <div className="w-full">
              <div className="category-info">
                <div className="category-img border border-solid w-40 rounded-full overflow-hidden h-40 ">
                  <img src={catImg6} alt="" />
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