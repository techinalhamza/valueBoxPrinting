import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiDiscountPercentFill } from "react-icons/ri";

function Navbar({ navOpen }) {
  const categories = [
    "Cosmetics & Beauty",
    "Retail Packaging Boxes",
    "Display Packaging",
    "Die Cut Boxes",
    "Software & Electronic",
    "Box By Style",
  ];

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <>
      <nav className="bg-white mt-[4.4rem] py-4">
        <div className="main-container flex items-center justify-between">
          <div
            className={`nav-links ${
              navOpen ? "active" : "nav-links"
            } transition-all duration-500 ease-in-out`}
          >
            <ul className="flex gap-4 uppercase text-[13px]">
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
              <li>
                <NavLink
                  exact="true"
                  to="/shop"
                  className={({ isActive }) =>
                    isActive ? "text-Blue font-bold" : "text-black"
                  }
                >
                  Shop
                </NavLink>
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
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <span className="cursor-pointer">Categories</span>
                {isDropdownOpen && (
                  <ul
                    className="absolute left-0 top-2 mt-2 bg-white shadow-lg border rounded w-48 py-2 z-10"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    {categories.map((category, index) => (
                      <li key={index} className="px-4 py-2 hover:bg-gray-200">
                        <NavLink
                          exact="true"
                          to={`/category/${category
                            .replace(/\s+/g, "-")
                            .toLowerCase()}`}
                          className={({ isActive }) =>
                            isActive ? "text-Blue font-bold" : "text-black"
                          }
                        >
                          {category}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
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
