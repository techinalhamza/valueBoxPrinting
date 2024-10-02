import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiDiscountPercentFill } from "react-icons/ri";
import productdata from "../Products";
import { FaAngleDown } from "react-icons/fa";

function Navbar({ navOpen }) {
  const categories = [
    "Cosmetics & Beauty",
    "Retail Packaging Boxes",
    "Display Packaging",
    "Die Cut Boxes",
    "Software & Electronic",
    "Box By Style",
  ];
  const [products, setProducts] = useState(productdata);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleMouseEnterCat = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeaveCat = () => {
    setIsDropdownOpen(false);
  };
  const handleMouseEnterPro = () => {
    setIsProductDropdownOpen(true);
  };

  const handleMouseLeavePro = () => {
    setIsProductDropdownOpen(false);
  };
  if (navOpen === true) {
    // setCloseNav(true);
  }
  return (
    <>
      <nav className="bg-white mt-[4.4rem] py-4 relative z-50">
        <div className="main-container flex items-center justify-between relative z-20">
          <div
            className={`nav-links ${
              navOpen ? "active " : "nav-links"
            } transition-all duration-500 ease-in-out `}
          >
            <ul
              className="flex mblnav gap-6 uppercase text-[13px]"
              onClick={() => setCloseNav(true)}
            >
              <li>
                <NavLink
                  exact="true"
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-Blue font-bold" : "text-black"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li
  className=""
  onMouseEnter={handleMouseEnterPro}
  onMouseLeave={handleMouseLeavePro}
>
  <NavLink
    exact="true"
    to="/shop"
    className={({ isActive }) =>
      isActive ? "text-blue font-bold" : "text-black"
    }
  >
    Shop
    <FaAngleDown
      style={{
        display: windowWidth > 600 ? "inline" : "none",
        marginLeft: "15px",
        marginTop: "-3px",
        position: windowWidth > 600 ? "relative" : "absolute",
        right: "10px",
      }}
    />
  </NavLink>
  <div
    className={`absolute left-0 top-1/2 mt-6 bg-white  rounded w-full m z-10 transition-all duration-300 ease-in-out overflow-hidden ${
      isProductDropdownOpen ? "max-h-96" : "max-h-0"
    }`}
    style={{ transitionProperty: "max-height", maxHeight: isProductDropdownOpen ? "600px" : "0px", }}
  >
    <div className="grid grid-cols-6 gap-6">
      {products.map((val, index) => {
        return (
          <div key={index} className="px-4">
            <h3 className="font-bold text-nowrap text-black mb-2">
              {val.category}
            </h3>
            {val.items.map((val_) => {
              return (
                <ul>
                  <li className="my-3">
                    <NavLink
                      exact="true"
                      to={`/singleProduct/${val_.name.replace(/\s+/g, "-")}`}
                      className={({ isActive }) =>
                        isActive ? "text-blue font-bold" : "text-black"
                      }
                    >
                      {val_.name}
                    </NavLink>
                  </li>
                </ul>
              );
            })}
          </div>
        );
      })}
    </div>
  </div>
</li>

              <li>
                <NavLink
                  exact="true"
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "text-Blue font-bold" : "text-black"
                  }
                >
                  About us
                </NavLink>
              </li>
              <li
  className="relative"
  onMouseEnter={handleMouseEnterCat}
  onMouseLeave={handleMouseLeaveCat}
  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
>
  <span className="cursor-pointer">
    Categories{" "}
    <FaAngleDown
      style={{
        display: "inline",
        marginLeft: "15px",
        marginTop: "-3px",
        position: windowWidth > 600 ? "relative" : "absolute",
        right: "10px",
      }}
    />
  </span>

  <div
    className={`absolute sm:relative left-0 top-2 mt-2 sm:m-0 bg-white rounded w-48 sm:w-full py-2 z-10 transition-all duration-300 ease-in-out overflow-hidden ${
      isDropdownOpen ? "max-h-96" : "max-h-0"
    }`}
    style={{ transitionProperty: "max-height", maxHeight: isDropdownOpen ? "400px" : "0px" }}
    onMouseEnter={handleMouseEnterCat}
    onMouseLeave={handleMouseLeaveCat}
  >
    <ul>
      {categories.map((category, index) => (
        <li key={index} className="px-4 py-2 hover:bg-gray-200">
          <NavLink
            exact="true"
            to={`/category/${category.replace(/\s+/g, "-").toLowerCase()}`}
            className={({ isActive }) =>
              isActive ? "text-blue font-bold" : "text-black"
            }
          >
            {category}
          </NavLink>
        </li>
      ))}
    </ul>
  </div>
</li>

              <li>
                <NavLink
                  exact="true"
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "text-Blue font-bold" : "text-black"
                  }
                >
                  Contact us
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="nav-discount-tagline flex items-center">
            <span className="text-Yellow text-2xl mr-2">
              <RiDiscountPercentFill />
            </span>
            <p className="text-[13px]">
              Get 10% off when you buy 2 custom products!
            </p>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
// <div key={index} className="px-4">
//   <h3 className="font-bold text-black mb-2">{category}</h3>
//   <ul>
//     {products.map((product, idx) => (
//       <li key={idx} className="py-1">
//         <NavLink
//           exact="true"
//           to={`/product/${product
//             .replace(/\s+/g, "-")
//             .toLowerCase()}`}
//           className={({ isActive }) =>
//             isActive ? "text-blue font-bold" : "text-black"
//           }
//         >
//           {product}
//         </NavLink>
//       </li>
//     ))}
//   </ul>
// </div>
