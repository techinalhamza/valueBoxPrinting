import React from "react";
import contactBanner from "/contactus-banner.jpg";

function TermConditions() {
  return (
    <div>
      <div
        className="contact-us-breadcrumb"
        style={{
          backgroundImage: `url(${contactBanner})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          // padding: window.innerWidth > 600 ? "6rem" : " 4rem 0",
          marginTop: "",
        }}
      >
        <div className="listing-overlay w-full h-full bg-[#0007] py-24 sm:py-16 ">
          <h1 className="text-7xl sm:text-4xl text-center text-white ">
            Term & Conditions
          </h1>
        </div>
      </div>
      <div className="main-container flex items-center justify-center min-h-screen">
        <h1 className="text-7xl text-center">COMING SOON</h1>
      </div>
    </div>
  );
}

export default TermConditions;
