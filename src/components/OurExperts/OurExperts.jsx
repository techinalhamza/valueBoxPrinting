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
        className="expert-container  -mt-[5rem]"
        style={{
          backgroundImage: `url(${fadeBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="main-container">
          <div className="expert-content flex items-center justify-center sm:flex-wrap sm:flex-col-reverse p-4">
            <div className="expert-img">
              <img
                src={banner}
                alt=""
                className="w-[80%] aspect-[4/4] object-contain sm:hidden"
              />
            </div>
            <div className="expert-info">
              <div className="flex items-center gap-2">
                <span>
                  <img src={star} alt="" className="w-3 " />
                </span>{" "}
                <p className="text-white">#1 Printing Services</p>
              </div>
              <h1 className="text-4xl sm:text-[2rem] text-white font-heading  tracking-wide my-2 leading-[3rem]">
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
                <div className="choose-card flex  justify-center flex-col sm:items-center sm:text-center gap-2  bg-white rounded-2xl px-8 py-4">
                  <img src={customerSupport} alt="" className="w-16" />
                  <h1 className="font-bold uppercase">Customer Support</h1>
                  <p className="text-xs font-normal ">
                    Provide Outstanding Unlimited Support To Your Packaging
                    Project
                  </p>
                </div>
                <div className="choose-card flex  justify-center flex-col sm:items-center sm:text-center gap-2  bg-white rounded-2xl px-8 py-4">
                  <img src={customSolution} alt="" className="w-16" />
                  <h1 className="font-bold uppercase">End To End Solution</h1>
                  <p className="text-xs font-normal ">
                    Get Dedicated Support From Start To Finish And Even Beyond
                  </p>
                </div>
                <div className="choose-card flex  justify-center flex-col sm:items-center sm:text-center gap-2  bg-white rounded-2xl px-8 py-4">
                  <img src={packaging} alt="" className="w-16" />
                  <h1 className="font-bold uppercase">
                    Packaging Without Limits
                  </h1>
                  <p className="text-xs font-normal ">
                    Our Packaging Experts Are Able To Help Turn Your Idea To
                    Reality.
                  </p>
                </div>
                <div className="choose-card flex  justify-center flex-col sm:items-center sm:text-center gap-2  bg-white rounded-2xl px-8 py-4">
                  <img src={highQuality} alt="" className="w-16" />
                  <h1 className="font-bold uppercase">
                    High Quality Guaranteed
                  </h1>
                  <p className="text-xs font-normal ">
                    Enjoy The Perks Of Our Proactive Cost Saving Solutions
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
