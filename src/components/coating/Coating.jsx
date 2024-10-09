import React, { useState } from "react";
import "./Coating.css";
import { Link } from "react-router-dom";
import coating1 from "/coating1.png";
import coatingData from "../Coating";

function Coating() {
  const [activeIndex, setActiveIndex] = useState(0); // To track which option is active
  const [coating, setCoating] = useState(coatingData);

  // Options list
  const options = [
    "COATING & LAMINATIONS",
    "PRINTING OPTIONS",
    "SPECIAL FINISHES",
    "PAPERBOARD",
    "CORRUGATED",
    "FLUTED GRADES",
    "RIGID MATERIALS",
  ];

  // This handles the option click
  const handleClick = (index) => {
    setActiveIndex(index); // Set active index to highlight the selected option
  };

  // Filter the items based on the active category
  const filteredItems = coating
    .filter((data) => data.category === options[activeIndex]) // Filter items based on selected category
    .map((data) => data.items)
    .flat(); // Flatten the array to access the items
  // console.log(filteredItems);
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
                {options.map((option, index) => (
                  <li
                    key={index}
                    className={`p-2 ${
                      activeIndex === index
                        ? "text-black bg-white"
                        : "text-gray-500"
                    }`}
                    onClick={() => handleClick(index)}
                    style={{
                      color: activeIndex === index ? "#000" : "",
                      transition: "color 0.3s ease, background-color 0.3s ease", // smooth transition for color and background
                    }}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            </div>

            <div className="coating-cards-container py-8 grid grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-4">
              {/* Render filtered items here */}
              {filteredItems.map((item) => (
                <Link
                  to={`/coatingProduct/${item.name.replace(/\s+/g, "-")}`}
                  key={item.id}
                >
                  <div className="coating-card flex flex-col gap-2 bg-white rounded-2xl overflow-hidden">
                    <img src={item.img} alt={item.name} />
                    <div className="coating-info p-4">
                      <h1 className="font-bold mb-2 xsm:text-[13px]">
                        {item.name}
                      </h1>
                      <p className="text-xs xsm:text-[12px]">{item.desc}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Coating;
