import React from "react";
import star from "/star.svg";
import customeSize from "/castom size.png";
import customMaterial from "/custom matrial.png";
import customPrint from "/custom print.png";
import customFinish from "/custom finishes.png";
function ChooseUs() {
  return (
    <>
      <div
        className="choose-container  py-12"
        style={{ background: "linear-gradient(#0C4D82,#168AE9)" }}
      >
        <div className="main-container ">
          <div className="choose-content">
            <div className="choose-top text-center text-white">
              <p>OPTIONS AND MATERIALS</p>
              <div className="flex items-center justify-center gap-3">
                <img src={star} alt="" className="w-8 sm:hidden" />
                <h1 className="text-4xl sm:text-xl font-heading uppercase tracking-wide my-6">
                  build your <span className="text-Yellow"> cosmetics </span>
                  boxes any way you want
                </h1>
              </div>
              <p className="uppercase text-[13px]">
                enjoy your endless packaging customization to create the
                cosmetic product packaging you need to succeed
              </p>
            </div>
            <div
              className="choose-card-container gap-4 mt-16"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit , minmax(18rem , 1fr))",
                gridRowGap: "1rem",
              }}
            >
              <div className="choose-card flex items-center justify-center flex-col gap-2 text-center bg-white rounded-2xl px-8 py-4">
                <img src={customeSize} alt="" className="w-24" />
                <h1 className="font-bold uppercase">Custome Size</h1>
                <p className="text-xs font-normal ">
                  Take Control And Customize The Size You Need For Your Apparel
                  Packaging To Improve Waste Management For Your Brand.
                </p>
              </div>
              <div className="choose-card flex items-center justify-center flex-col gap-2 text-center bg-white rounded-2xl px-8 py-4">
                <img src={customMaterial} alt="" className="w-24" />
                <h1 className="font-bold uppercase">Custome Size</h1>
                <p className="text-xs font-normal ">
                  Take Control And Customize The Size You Need For Your Apparel
                  Packaging To Improve Waste Management For Your Brand.
                </p>
              </div>
              <div className="choose-card flex items-center justify-center flex-col gap-2 text-center bg-white rounded-2xl px-8 py-4">
                <img src={customPrint} alt="" className="w-24" />
                <h1 className="font-bold uppercase">Custome Size</h1>
                <p className="text-xs font-normal ">
                  Take Control And Customize The Size You Need For Your Apparel
                  Packaging To Improve Waste Management For Your Brand.
                </p>
              </div>
              <div className="choose-card flex items-center justify-center flex-col gap-2 text-center bg-white rounded-2xl px-8 py-4">
                <img src={customFinish} alt="" className="w-24" />
                <h1 className="font-bold uppercase">Custome Size</h1>
                <p className="text-xs font-normal ">
                  Take Control And Customize The Size You Need For Your Apparel
                  Packaging To Improve Waste Management For Your Brand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChooseUs;
