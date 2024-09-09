import React from "react";
import "./Coating.css";
import { NavLink } from "react-router-dom";
import coating1 from "/coating1.png";
function Coating() {
  return (
    <>
      <div className="coating-container mt-8  bg-[#fef8ed]">
        <div className="main-container">
          <div className="coating-content">
            <div
              className="coating-navigation-bar bg-white  shadow-xl px-4 py-6"
              style={{ background: "linear-gradient(#0C4D82,#168AE9)" }}
            >
              <ul className=" coating-nav-links flex items-center justify-center  text-sm">
                <li className="bg-white text-black ">COATING & LAMINATIONS</li>
                <li>PRINTING OPTIONS</li>
                <li>SPECIAL FINISHES</li>
                <li>PAPERBOARD</li>
                <li>CORRUGATED</li>
                <li>FLUTED GRADES</li>
                <li>RIGID MATERIALS</li>
              </ul>
            </div>
            <div className="coating-cards-container gap-4 py-8 grid grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-4">
              <div className="coating-card flex flex-col gap-2  bg-white rounded-2xl  overflow-hidden">
                <img src={coating1} alt="" />
                <div className="coating-info  p-4">
                  <h1 className="font-bold mb-2 xsm:text-[13px]">
                    {" "}
                    AQUEOUS COATING
                  </h1>
                  <p className="text-xs xsm:text-[12px]">
                    Clear, Fast-Drying, Water-Based, And Eco-Friendly Coating.
                    Available In Gloss Or Matte Finish.
                  </p>
                </div>
              </div>
              <div className="coating-card flex flex-col gap-2  bg-white rounded-2xl  overflow-hidden">
                <img src={coating1} alt="" />
                <div className="coating-info  p-4">
                  <h1 className="font-bold mb-2 xsm:text-[13px]">
                    {" "}
                    AQUEOUS COATING
                  </h1>
                  <p className="text-xs xsm:text-[12px]">
                    Clear, Fast-Drying, Water-Based, And Eco-Friendly Coating.
                    Available In Gloss Or Matte Finish.
                  </p>
                </div>
              </div>
              <div className="coating-card flex flex-col gap-2  bg-white rounded-2xl  overflow-hidden">
                <img src={coating1} alt="" />
                <div className="coating-info  p-4">
                  <h1 className="font-bold mb-2 xsm:text-[13px]">
                    {" "}
                    AQUEOUS COATING
                  </h1>
                  <p className="text-xs xsm:text-[12px]">
                    Clear, Fast-Drying, Water-Based, And Eco-Friendly Coating.
                    Available In Gloss Or Matte Finish.
                  </p>
                </div>
              </div>
              <div className="coating-card flex flex-col gap-2  bg-white rounded-2xl  overflow-hidden">
                <img src={coating1} alt="" />
                <div className="coating-info  p-4">
                  <h1 className="font-bold mb-2 xsm:text-[13px]">
                    {" "}
                    AQUEOUS COATING
                  </h1>
                  <p className="text-xs xsm:text-[12px]">
                    Clear, Fast-Drying, Water-Based, And Eco-Friendly Coating.
                    Available In Gloss Or Matte Finish.
                  </p>
                </div>
              </div>
              <div className="coating-card flex flex-col gap-2  bg-white rounded-2xl  overflow-hidden">
                <img src={coating1} alt="" />
                <div className="coating-info  p-4">
                  <h1 className="font-bold mb-2 xsm:text-[13px]">
                    {" "}
                    AQUEOUS COATING
                  </h1>
                  <p className="text-xs xsm:text-[12px]">
                    Clear, Fast-Drying, Water-Based, And Eco-Friendly Coating.
                    Available In Gloss Or Matte Finish.
                  </p>
                </div>
              </div>
              <div className="coating-card flex flex-col gap-2  bg-white rounded-2xl  overflow-hidden">
                <img src={coating1} alt="" />
                <div className="coating-info  p-4">
                  <h1 className="font-bold mb-2 xsm:text-[13px]">
                    {" "}
                    AQUEOUS COATING
                  </h1>
                  <p className="text-xs xsm:text-[12px]">
                    Clear, Fast-Drying, Water-Based, And Eco-Friendly Coating.
                    Available In Gloss Or Matte Finish.
                  </p>
                </div>
              </div>
              <div className="coating-card flex flex-col gap-2  bg-white rounded-2xl  overflow-hidden">
                <img src={coating1} alt="" />
                <div className="coating-info  p-4">
                  <h1 className="font-bold mb-2 xsm:text-[13px]">
                    {" "}
                    AQUEOUS COATING
                  </h1>
                  <p className="text-xs xsm:text-[12px]">
                    Clear, Fast-Drying, Water-Based, And Eco-Friendly Coating.
                    Available In Gloss Or Matte Finish.
                  </p>
                </div>
              </div>
              <div className="coating-card flex flex-col gap-2  bg-white rounded-2xl  overflow-hidden">
                <img src={coating1} alt="" />
                <div className="coating-info  p-4">
                  <h1 className="font-bold mb-2 xsm:text-[13px]">
                    {" "}
                    AQUEOUS COATING
                  </h1>
                  <p className="text-xs xsm:text-[12px]">
                    Clear, Fast-Drying, Water-Based, And Eco-Friendly Coating.
                    Available In Gloss Or Matte Finish.
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

export default Coating;
