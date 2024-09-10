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
              className="coating-navigation-bar bg-white shadow-xl px-4 py-6"
              style={{ background: "linear-gradient(#0C4D82,#168AE9)" }}
            >
              <ul className="coating-nav-links flex items-center justify-start text-sm sm:text-[10px] whitespace-nowrap overflow-x-auto no-scrollbar">
                <li className="bg-white text-black p-2">
                  COATING & LAMINATIONS
                </li>
                <li className="p-2">PRINTING OPTIONS</li>
                <li className="p-2">SPECIAL FINISHES</li>
                <li className="p-2">PAPERBOARD</li>
                <li className="p-2">CORRUGATED</li>
                <li className="p-2">FLUTED GRADES</li>
                <li className="p-2">RIGID MATERIALS</li>
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
