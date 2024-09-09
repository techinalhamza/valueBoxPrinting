import React from "react";
import banner from "/expertBanner.png";
import fadeBanner from "/expertFadebg.jpg";
import star from "/star.svg";
import customerSupport from "/customer-support.png";
import customSolution from "/custom-solution.png";
import packaging from "/custom-packaging.png";
import highQuality from "/high-quality.png";

function OurExperts() {
  return (
    <>
      <div
        className="expert-container py-12 -mt-[5rem]"
        style={{
          backgroundImage: `url(${fadeBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="main-container">
          <div className="expert-content flex items-center justify-center sm:flex-wrap sm:flex-col-reverse sm:px-4">
            <div className="expert-img">
              <img
                src={banner}
                alt=""
                className="w-full aspect-[4/4] object-contain sm:hidden"
              />
            </div>
            <div className="expert-info">
              <div className="flex items-center gap-2">
                <span>
                  <img src={star} alt="" className="w-3 " />
                </span>{" "}
                <p className="text-white">#1 Printing Services</p>
              </div>
              <h1 className="text-4xl text-white font-heading  tracking-wide my-6 leading-[3rem]">
                Not Sure What You Want ? Our Experts Can Help
              </h1>
              <div
                className="expert-cards gap-4"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit , minmax(18rem , 1fr))",
                  gridRowGap: "1rem",
                }}
              >
                <div className="choose-card flex  justify-center flex-col gap-2  bg-white rounded-2xl px-8 py-4">
                  <img src={customerSupport} alt="" className="w-24" />
                  <h1 className="font-bold uppercase">Custome Size</h1>
                  <p className="text-xs font-semibold ">
                    Take Control And Customize The Size You Need For Your
                    Apparel Packaging To Improve Waste Management For Your
                    Brand.
                  </p>
                </div>
                <div className="choose-card flex  justify-center flex-col gap-2  bg-white rounded-2xl px-8 py-4">
                  <img src={customSolution} alt="" className="w-24" />
                  <h1 className="font-bold uppercase">Custome Size</h1>
                  <p className="text-xs font-semibold ">
                    Take Control And Customize The Size You Need For Your
                    Apparel Packaging To Improve Waste Management For Your
                    Brand.
                  </p>
                </div>
                <div className="choose-card flex  justify-center flex-col gap-2  bg-white rounded-2xl px-8 py-4">
                  <img src={packaging} alt="" className="w-24" />
                  <h1 className="font-bold uppercase">Custome Size</h1>
                  <p className="text-xs font-semibold ">
                    Take Control And Customize The Size You Need For Your
                    Apparel Packaging To Improve Waste Management For Your
                    Brand.
                  </p>
                </div>
                <div className="choose-card flex  justify-center flex-col gap-2  bg-white rounded-2xl px-8 py-4">
                  <img src={highQuality} alt="" className="w-24" />
                  <h1 className="font-bold uppercase">Custome Size</h1>
                  <p className="text-xs font-semibold ">
                    Take Control And Customize The Size You Need For Your
                    Apparel Packaging To Improve Waste Management For Your
                    Brand.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurExperts;
