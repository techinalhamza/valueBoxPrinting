import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { Button } from "@mui/material";
import immidiateBox from "/immidiate box.jpg";
import immidiateBox_ from "/immidiateBox_.png";
import QuoteForm from "../QuoteForm/QuoteForm";
function Inquery() {
  return (
    <>
      <div
        className="form-container py-4"
        style={{
          backgroundImage:
            window.innerWidth > 600
              ? `url(${immidiateBox})`
              : `url(${immidiateBox_})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="main-container">
          <div className="form-content w-[45%] sm:w-full px-4">
            <h1 className="text-4xl text-white font-heading  tracking-wide mt- leading-[3rem]">
              Immediate Box Printing
            </h1>
            <p className="text-white">
              When You Have{" "}
              <span className="text-Yellow"> Immediate Box Printing </span>{" "}
              Need, We Can Typically Turn Your Quote Around In Minutes.
            </p>
            <QuoteForm labelColor="white" />
          </div>
          <div className="inq-img">
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Inquery;
