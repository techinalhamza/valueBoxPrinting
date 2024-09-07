import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { Button } from "@mui/material";
import immidiateBox from "/immidiate box.jpg";
function Inquery() {
  return (
    <>
      <div
        className="form-container py-12"
        style={{
          backgroundImage: `url(${immidiateBox})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="main-container">
          <div className="form-content w-[45%]">
            <h1 className="text-4xl text-white font-heading  tracking-wide mt-6 leading-[3rem]">
              Immediate Box Printing
            </h1>
            <p className="text-white">
              When You Have{" "}
              <span className="text-Yellow"> Immediate Box Printing </span>{" "}
              Need, We Can Typically Turn Your Quote Around In Minutes.
            </p>
            <form className="mt-8">
              {/* First Row: Length, Width, Height */}
              <div className="flex flex-wrap -mx-2">
                <div className=" w-1/3 px-2 mb-4">
                  <label
                    className="block  text-white text-[12px] font- mb-2"
                    htmlFor="length"
                  >
                    Length (inch)*
                  </label>
                  <input
                    id="length"
                    name="length"
                    type="text"
                    className=" w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    // placeholder="Length"
                    required
                  />
                </div>
                <div className="w-1/3 px-2 mb-4">
                  <label
                    className="block  text-white text-[12px] font- mb-2"
                    htmlFor="width"
                  >
                    Width (inch)*
                  </label>
                  <input
                    id="width"
                    name="width"
                    type="text"
                    className=" w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    // placeholder="Width"
                    required
                  />
                </div>
                <div className="w-1/3 px-2 mb-4">
                  <label
                    className="block  text-white text-[12px] font- mb-2"
                    htmlFor="height"
                  >
                    Height (inch)*
                  </label>
                  <input
                    id="height"
                    name="height"
                    type="text"
                    className=" w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    // placeholder="Height"
                    required
                  />
                </div>
              </div>

              {/* Second Row: Stock Option, Print Option, Finishing Option */}
              <div className="flex flex-wrap -mx-2">
                <div className="w-1/3 px-2 mb-4">
                  <label
                    className="block  text-white text-[12px] font- mb-2"
                    htmlFor="stockOption"
                  >
                    Stock Option
                  </label>
                  <input
                    id="stockOption"
                    name="stockOption"
                    type="text"
                    className=" w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    // placeholder="Stock Option"
                  />
                </div>
                <div className="w-1/3 px-2 mb-4">
                  <label
                    className="block  text-white text-[12px] font- mb-2"
                    htmlFor="printOption"
                  >
                    Print Option
                  </label>
                  <input
                    id="printOption"
                    name="printOption"
                    type="text"
                    className=" w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    // placeholder="Print Option"
                  />
                </div>
                <div className="w-1/3 px-2 mb-4">
                  <label
                    className="block  text-white text-[12px] font- mb-2"
                    htmlFor="finishingOption"
                  >
                    Finishing Option
                  </label>
                  <input
                    id="finishingOption"
                    name="finishingOption"
                    type="text"
                    className=" w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    // placeholder="Finishing Option"
                  />
                </div>
              </div>

              {/* Third Row: Quantity, Full Name, Email */}
              <div className="flex flex-wrap -mx-2">
                <div className="w-1/3 px-2 mb-4">
                  <label
                    className="block  text-white text-[12px] font- mb-2"
                    htmlFor="quantity"
                  >
                    Required Quantity*
                  </label>
                  <input
                    id="quantity"
                    name="quantity"
                    type="number"
                    className=" w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    // placeholder="Quantity"
                    required
                  />
                </div>
                <div className="w-1/3 px-2 mb-4">
                  <label
                    className="block  text-white text-[12px] font- mb-2"
                    htmlFor="fullName"
                  >
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    className=" w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    // placeholder="Full Name"
                  />
                </div>
                <div className="w-1/3 px-2 mb-4">
                  <label
                    className="block  text-white text-[12px] font- mb-2"
                    htmlFor="email"
                  >
                    Email Address*
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className=" w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    // placeholder="Email Address"
                    required
                  />
                </div>
              </div>

              {/* Fourth Row: Job Details (Full Width) */}
              <div className="mb-6">
                <label
                  className="block  text-white text-[12px] font- mb-2"
                  htmlFor="jobDetails"
                >
                  Job Details
                </label>
                <textarea
                  id="jobDetails"
                  name="jobDetails"
                  rows="10"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  // placeholder="Job Details"
                ></textarea>
              </div>

              <div className="flex ">
                <Button
                  style={{
                    background: "#FAC409",
                    color: "#000",
                    padding: "6px 20px",
                  }}
                  endIcon={<FaAngleRight />}
                >
                  Request a Quote
                </Button>
                {/* <button

                  type="submit"
                  className="bg-blue-500 text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-600 transition duration-300"
                >
                  Submit
                </button> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Inquery;
