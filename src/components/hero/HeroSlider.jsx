import React from "react";
import Slider from "react-slick";
import firstSlide from "/firstSlider_.jpg";
import secSlide from "/secSlider.png";
import thirdSlide from "/thirdSlider.png";
import sliderText from "/sliderText.png";
import star from "/star.svg";
import { Button } from "@mui/material";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function HeroSlider() {
  var settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    // centerMode: true,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    adaptiveHeight: true,
  };
  return (
    <>
      <Slider {...settings}>
        <div className="w-full h-[80vh]">
          <div
            style={{
              width: "100%",
              height: "100%",
              // background: "#ccc  ",
              backgroundImage: `url(${firstSlide})`, // Corrected here
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            className="flex items-center justify-start "
          >
            <div className="main-container">
              <div
                style={
                  {
                    //   background: " linear-gradient(90deg, #ffffff, transparent)",
                  }
                }
                className=" slider-content  w-max sm:w-full p-8 sm:p-[10px] rounded-2xl"
              >
                <div className="flex items-center gap-2">
                  <span>
                    <img src={star} alt="" className="w-3 " />
                  </span>{" "}
                  <p className="text-white">#1 Printing Services</p>
                </div>
                <div className="slider-h1 mt-4 mb-6">
                  {/* <h1 className="text-[4rem] font-bold text-Blue leading-[70px] sm:text-[2rem] sm:leading-[40px]">
                    Experience the Art of <br />
                    Perfect
                    <i className="font-serif text-Yellow"> Printing </i>
                  </h1> */}
                  {/* <h1 className=" font-inter">The Art OF Perfect Printing</h1> */}
                  <img src={sliderText} alt="" className="sm:w-80" />
                </div>
                <p className="text-xs text-end text-white tracking-[1px]">
                  Explore,design and order enviromentally conscious packaging
                </p>
                {/* <img src={rightAngle} alt="" /> */}
                <div className="flex justify-end">
                  <Button
                    style={{
                      background: "var(--yellow)",
                      color: "#fff",
                      padding: "10px 20px",
                      marginTop: "1rem",
                      fontFamily: "buttons",
                      fontWeight: "bold",
                    }}
                    endIcon={<MdOutlineKeyboardArrowRight />}
                  >
                    Request a Quote
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[80vh]">
          <div
            style={{
              width: "100%",
              height: "100%",
              // background: "#ccc  ",
              backgroundImage: `url(${secSlide})`, // Corrected here
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            className="flex items-center justify-start "
          >
            <div className="main-container">
              <div
                style={
                  {
                    //   background: " linear-gradient(90deg, #ffffff, transparent)",
                  }
                }
                className=" slider-content  w-max sm:w-full p-8 sm:p-[10px] rounded-2xl"
              >
                <div className="flex items-center gap-2">
                  <span>
                    <img src={star} alt="" className="w-3 " />
                  </span>{" "}
                  <p className="text-white">#1 Printing Services</p>
                </div>
                <div className="slider-h1 mt-4 mb-6">
                  {/* <h1 className="text-[4rem] font-bold text-Blue leading-[70px] sm:text-[2rem] sm:leading-[40px]">
                    Experience the Art of <br />
                    Perfect
                    <i className="font-serif text-Yellow"> Printing </i>
                  </h1> */}
                  {/* <h1 className=" font-inter">The Art OF Perfect Printing</h1> */}
                  <img src={sliderText} alt="" className="sm:w-80" />
                </div>
                <p className="text-xs text-end text-white tracking-[1px]">
                  Explore,design and order enviromentally conscious packaging
                </p>
                {/* <img src={rightAngle} alt="" /> */}
                <div className="flex justify-end">
                  <Button
                    style={{
                      background: "var(--yellow)",
                      color: "#fff",
                      padding: "10px 20px",
                      marginTop: "1rem",
                      fontFamily: "buttons",
                      fontWeight: "bold",
                    }}
                    endIcon={<MdOutlineKeyboardArrowRight />}
                  >
                    Request a Quote
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[80vh]">
          <div
            style={{
              width: "100%",
              height: "100%",
              // background: "#ccc  ",
              backgroundImage: `url(${thirdSlide})`, // Corrected here
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            className="flex items-center justify-start "
          >
            <div className="main-container">
              <div
                style={
                  {
                    //   background: " linear-gradient(90deg, #ffffff, transparent)",
                  }
                }
                className=" slider-content  w-max sm:w-full p-8 sm:p-[10px] rounded-2xl"
              >
                <div className="flex items-center gap-2">
                  <span>
                    <img src={star} alt="" className="w-3 " />
                  </span>{" "}
                  <p className="text-white">#1 Printing Services</p>
                </div>
                <div className="slider-h1 mt-4 mb-6">
                  {/* <h1 className="text-[4rem] font-bold text-Blue leading-[70px] sm:text-[2rem] sm:leading-[40px]">
                    Experience the Art of <br />
                    Perfect
                    <i className="font-serif text-Yellow"> Printing </i>
                  </h1> */}
                  {/* <h1 className=" font-inter">The Art OF Perfect Printing</h1> */}
                  <img src={sliderText} alt="" className="sm:w-80" />
                </div>
                <p className="text-xs text-end text-white tracking-[1px]">
                  Explore,design and order enviromentally conscious packaging
                </p>
                {/* <img src={rightAngle} alt="" /> */}
                <div className="flex justify-end">
                  <Button
                    style={{
                      background: "var(--yellow)",
                      color: "#fff",
                      padding: "10px 20px",
                      marginTop: "1rem",
                      fontFamily: "buttons",
                      fontWeight: "bold",
                    }}
                    endIcon={<MdOutlineKeyboardArrowRight />}
                  >
                    Request a Quote
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </>
  );
}

export default HeroSlider;
