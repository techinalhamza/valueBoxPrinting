import { Button } from "@mui/material";
import React from "react";
import { FaAngleRight } from "react-icons/fa";
import "./QuoteForm.css";

function QuoteForm({ labelColor }) {
  console.log(labelColor);
  return (
    <>
      <div className="quote-form-container">
        <form>
          {/* First Row: Length, Width, Height */}
          <div className="flex flex-wrap -mx-2">
            <div className="w-1/3 px-2 ">
              <label
                className=" text-[12px]  mb-2"
                htmlFor="length"
                style={{
                  color: labelColor,
                }}
              >
                Length (inch) <span className="text-red-500">*</span>
              </label>
              <input
                id="length"
                name="length"
                type="text"
                className="w-full px-2  border  focus:outline-none "
                // placeholder="Length"
                required
              />
            </div>
            <div className="w-1/3 px-2 ">
              <label
                className="text-black text-[12px]  mb-2"
                htmlFor="width"
                style={{
                  color: labelColor,
                }}
              >
                Width (inch) <span className="text-red-500">*</span>
              </label>
              <input
                id="width"
                name="width"
                type="text"
                className="w-full px-2  border  focus:outline-none "
                // placeholder="Width"
                required
              />
            </div>
            <div className="w-1/3 px-2 ">
              <label
                className="text-black text-[12px]  mb-2"
                htmlFor="height"
                style={{
                  color: labelColor,
                }}
              >
                Height (inch) <span className="text-red-500">*</span>
              </label>
              <input
                id="height"
                name="height"
                type="text"
                className="w-full px-2  border  focus:outline-none "
                // placeholder="Height"
                required
              />
            </div>
          </div>

          {/* Second Row: Stock Option, Print Option, Finishing Option */}
          <div className="flex flex-wrap -mx-2">
            <div className="w-1/3 px-2 ">
              <label
                className="text-black text-[12px]  mb-2"
                htmlFor="stockOption"
                style={{
                  color: labelColor,
                }}
              >
                Stock Option
              </label>
              <select
                id="stockOption"
                name="stockOption"
                className="w-full px-2  border  focus:outline-none "
              >
                <option value="">Select Print Option</option>
                <option value="Full_Color_Printing">Full Color Printing</option>
                <option value="1_Color_Printing">1 Color Printing</option>
                <option value="2_Color_Printing">2 Color Printing</option>
                <option value="3_Color_Printing">3 Color Printing</option>
                <option value="No_Printing">No Printing</option>
                <option value="PMS_Color_Printing">PMS Color Printing</option>
              </select>
            </div>
            <div className="w-1/3 px-2 ">
              <label
                className="text-black text-[12px]  mb-2"
                htmlFor="printOption"
                style={{
                  color: labelColor,
                }}
              >
                Print Option
              </label>
              <select
                id="printOption"
                name="printOption"
                className="w-full px-2  border  focus:outline-none "
              >
                <option value="">Select Stock Option</option>
                <option value="14_pt_Card_Stock">14 pt. Card Stock</option>
                <option value="16_pt_Card_Stock">16 pt. Card Stock</option>
                <option value="18_pt_Card_Stock">18 pt. Card Stock</option>
                <option value="24_pt_Card_Stock">24 pt. Card Stock</option>
                <option value="Brown_Kraft_Stock">Brown Kraft Stock</option>
                <option value="White_Kraft_Stock">White Kraft Stock</option>
                <option value="Brown_Corrugated">Brown Corrugated</option>
                <option value="White_Corrugated">White Corrugated</option>
                <option value="Texture_Stock">Texture Stock</option>
                <option value="Linen_Stock">Linen Stock</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="w-1/3 px-2 ">
              <label
                className="text-black text-[12px]  mb-2"
                htmlFor="finishingOption"
                style={{
                  color: labelColor,
                }}
              >
                Finishing Option
              </label>
              <select
                id="finishingOption"
                name="finishingOption"
                className="w-full px-2  border  focus:outline-none "
              >
                <option value="">Select Finishing Option</option>
                <option value="Matte_Finish">Matte Finish</option>
                <option value="Spot_UV">
                  Spot UV (Matte Surface + Glossy)
                </option>
                <option value="Aqueous_Coating">Aqueous Coating</option>
                <option value="Semi_Gloss_Finish">Semi Gloss Finish</option>
                <option value="Gold_Foiling">
                  Gold Foiling (Glossy or Matte Finish)
                </option>
                <option value="Silver_Foiling">
                  Silver Foiling (Glossy or Matte Finish)
                </option>
                <option value="Holographic_Foiling">
                  Holographic Foiling (Glossy or Matte Finish)
                </option>
                <option value="Others">Others</option>
              </select>
            </div>
          </div>

          {/* Third Row: Quantity, Full Name, Email */}
          <div className="flex flex-wrap -mx-2">
            <div className="w-1/3 px-2 ">
              <label
                className="text-black text-[12px]  mb-2"
                htmlFor="quantity"
                style={{
                  color: labelColor,
                }}
              >
                Quantity <span className="text-red-500">*</span>
              </label>
              <input
                id="quantity"
                name="quantity"
                type="number"
                className="w-full px-2  border  focus:outline-none "
                placeholder="Quantity"
                required
              />
            </div>
            <div className="w-1/3 px-2 ">
              <label
                className="text-black text-[12px]  mb-2"
                htmlFor="fullName"
                style={{
                  color: labelColor,
                }}
              >
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                className="w-full px-2  border  focus:outline-none "
                placeholder="Full Name"
                required
              />
            </div>
            <div className="w-1/3 px-2 ">
              <label
                className="text-black text-[12px]  mb-2"
                htmlFor="email"
                style={{
                  color: labelColor,
                }}
              >
                Company Name
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full px-2  border  focus:outline-none "
                placeholder="company name"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-2">
            <div className="w-1/2 px-2 ">
              <label
                className="text-black text-[12px]  mb-2"
                htmlFor="fullName"
                style={{
                  color: labelColor,
                }}
              >
                Phone Num
              </label>
              <input
                id="fullName"
                name="fullName"
                type="number"
                className="w-full px-2  border  focus:outline-none "
                placeholder="Phone Num"
              />
            </div>
            <div className="w-1/2 px-2 ">
              <label
                className="text-black text-[12px]  mb-2"
                htmlFor="email"
                style={{
                  color: labelColor,
                }}
              >
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full px-2  border  focus:outline-none "
                placeholder="Email Address"
                required
              />
            </div>
          </div>

          {/* Fourth Row: Job Details (Full Width) */}
          <div className="mb-6">
            <label
              className="text-black text-[12px]  mb-2"
              htmlFor="jobDetails"
              style={{
                color: labelColor,
              }}
            >
              Details
            </label>
            <textarea
              id="jobDetails"
              name="jobDetails"
              rows="10"
              className="w-full px-2  border  focus:outline-none "
              placeholder="Type Your Needs Here in Details"
            ></textarea>
          </div>

          <div className="flex">
            <Button
              type="submit"
              style={{
                background: "#FAC409",
                color: "#000",
                padding: "6px 20px",
              }}
              endIcon={<FaAngleRight />}
            >
              Get Price Quote
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}

export default QuoteForm;
