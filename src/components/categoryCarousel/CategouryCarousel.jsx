import React from "react";
import Slider from "react-slick";
import catImg1 from "/category/castom boxes.jpg";
import catImg2 from "/category/custom-software-boxes.jpg";
import catImg3 from "/category/soap boxes.jpg";
import catImg4 from "/category/wendow boxes.jpg";
import catImg5 from "/category/popup-display-boxes.jpg";
import catImg6 from "/category/body fusion.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function CategouryCarousel() {
  var settings = {
    dots: false, // Hide dots for navigation
    infinite: true, // Enable infinite looping
    speed: 500, // Animation speed
    slidesToShow: 5, // Number of slides to show at a time (default)
    slidesToScroll: 1, // Number of slides to scroll at a time
    arrows: true, // Show navigation arrows
    autoplay: true, // Enable autoplay
    autoplaySpeed: 1500, // Autoplay speed
    mobileFirst: true, // Prioritize mobile settings first
    responsive: [
      {
        breakpoint: 1400, // For screens smaller than 1400px
        settings: {
          slidesToShow: 5, // Show 4 slides
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200, // For screens smaller than 1200px
        settings: {
          slidesToShow: 4, // Show 3 slides
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 560, // For screens smaller than 768px
        settings: {
          slidesToShow: 2, // Show 1 slide
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="cat-container mb-20  bg-[#fef8ed]">
        <div className="main-container ">
          <div className="category-title-bar  bg-white flex justify-between items-center shadow-xl px-4 py-6 mb-12">
            <h1 className="text-3xl sm:text-[24px] font-heading font-normal">
              Shop By Category
            </h1>
            <Link to="/shop">
              <Button
                style={{
                  background: "var(--btnblue)",
                  color: "#fff",
                  padding: "10px 20px",
                  textWrap: "nowrap",
                  fontSize: window.innerWidth > 600 ? "16px" : "10px",
                }}
                endIcon={
                  window.innerWidth > 600 ? (
                    <MdOutlineKeyboardArrowRight />
                  ) : null
                }
              >
                {" "}
                Shop All
              </Button>
            </Link>
          </div>
          <Slider {...settings}>
            <div className="w-full ">
              <div className="category-info">
                <div className="category-img border border-solid w-40 rounded-full overflow-hidden h-40 ">
                  <img src={catImg1} alt="" />
                </div>
                <Link
                  to={`/category/${"Cosmetics & Beauty"
                    .replace(/\s+/g, "-")
                    .toLowerCase()}`}
                >
                  <h1 className="w-40 text-center">Cosmetics & Beauty</h1>
                </Link>
                <div className="category-name"></div>
              </div>
            </div>
            <div className="w-full ">
              <div className="category-info">
                <div className="category-img border border-solid w-40 rounded-full overflow-hidden h-40 ">
                  <img src={catImg2} alt="" />
                </div>
                <Link
                  to={`/category/${"Software & Electronic"
                    .replace(/\s+/g, "-")
                    .toLowerCase()}`}
                >
                  <h1 className="w-40 text-center">Software & Electronic</h1>
                </Link>

                <div className="category-name"></div>
              </div>
            </div>
            <div className="w-full">
              <div className="category-info">
                <div className="category-img border border-solid w-40 rounded-full overflow-hidden h-40 ">
                  <img src={catImg3} alt="" />
                </div>
                <Link
                  to={`/category/${"Software & Electronic Boxes"
                    .replace(/\s+/g, "-")
                    .toLowerCase()}`}
                >
                  <h1 className="w-40 text-center">Soap Boxes</h1>
                </Link>
                <div className="category-name"></div>
              </div>
            </div>
            <div className="w-full">
              <div className="category-info">
                <div className="category-img border border-solid w-40 rounded-full overflow-hidden h-40 ">
                  <img src={catImg4} alt="" />
                </div>
                <Link
                  to={`/category/${"display-packaging"
                    .replace(/\s+/g, "-")
                    .toLowerCase()}`}
                >
                  <h1 className="w-40 text-center">Display Packaging</h1>
                </Link>
                <div className="category-name"></div>
              </div>
            </div>
            <div className="w-full">
              <div className="category-info">
                <div className="category-img border border-solid w-40 rounded-full overflow-hidden h-40 ">
                  <img src={catImg5} alt="" />
                </div>
                <Link
                  to={`/category/${"Software & Electronic Boxes"
                    .replace(/\s+/g, "-")
                    .toLowerCase()}`}
                >
                  <h1 className="w-40 text-center">Popup Display Boxes</h1>
                </Link>
                <div className="category-name"></div>
              </div>
            </div>
            <div className="w-full">
              <div className="category-info">
                <div className="category-img border border-solid w-40 rounded-full overflow-hidden h-40 ">
                  <img src={catImg6} alt="" />
                </div>
                <Link
                  to={`/category/${"retail-packaging-boxes"
                    .replace(/\s+/g, "-")
                    .toLowerCase()}`}
                >
                  <h1 className="w-40 text-center">Retail Packaging Boxes</h1>
                </Link>
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
