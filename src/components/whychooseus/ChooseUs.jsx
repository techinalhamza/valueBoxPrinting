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
          <div className="choose-content sm:px-4">
            <div className="choose-top text-center sm:text-left text-white">
              <p className="sm:text-xs">OPTIONS AND MATERIALS</p>
              <div className="flex items-center justify-center gap-3">
                <img src={star} alt="" className="w-8 sm:hidden" />
                <h1 className="text-4xl sm:text-[2rem] font-heading uppercase tracking-wide my-6">
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
              className="choose-card-container gap-4 mt-8"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit , minmax(18rem , 1fr))",
                gridRowGap: "1rem",
              }}
            >
              <div className="choose-card flex items-center justify-center flex-col gap-2 text-center bg-white rounded-2xl px-8 py-4">
                <img src={customeSize} alt="" className="w-16" />
                <h1 className="font-bold uppercase">Custome Size</h1>
                <p className="text-xs font-normal ">
                  Take Control And Customize The Size You Need For Your Apparel
                  Packaging To Improve Waste Management For Your Brand.
                </p>
              </div>
              <div className="choose-card flex items-center justify-center flex-col gap-2 text-center bg-white rounded-2xl px-8 py-4">
                <img src={customMaterial} alt="" className="w-16" />
                <h1 className="font-bold uppercase">CUSTOM MATERIALS</h1>
                <p className="text-xs font-normal ">
                  Need A Specific Material To Communicate Your Look And Feel?
                  Enjoy The Luxury Of Accessing Our Extensive Library Of
                  Materials.
                </p>
              </div>
              <div className="choose-card flex items-center justify-center flex-col gap-2 text-center bg-white rounded-2xl px-8 py-4">
                <img src={customPrint} alt="" className="w-16" />
                <h1 className="font-bold uppercase">CUSTOM PRINT</h1>
                <p className="text-xs font-normal ">
                  Choose The Ideal Printing Method For Your Beauty Packaging And
                  Take Advantage Of The Exterior And Interior Of Your Box.
                </p>
              </div>
              <div className="choose-card flex items-center justify-center flex-col gap-2 text-center bg-white rounded-2xl px-8 py-4">
                <img src={customFinish} alt="" className="w-16" />
                <h1 className="font-bold uppercase">CUSTOM FINISHES</h1>
                <p className="text-xs font-normal ">
                  Embellish Your Clothing Box With Special Finishes To Create A
                  Unique Experience That Sets You And Your Competitors Apart.
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
