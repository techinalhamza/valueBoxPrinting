import React from "react";
import { NavLink } from "react-router-dom";
import { RiDiscountPercentFill } from "react-icons/ri";

function Navbar({ navOpen }) {
  console.log({ navOpen });
  return (
    <>
      <nav className=" bg-whit border-t mt-[4.4rem]  py-4 ">
        <div className="main-container flex items-center justify-between">
          <div
            className={`nav-links ${
              navOpen ? "active " : "nav-links"
            }  transition-all duration-500 ease-in-out `}
          >
            <ul className="flex gap-4 uppercase text-[13px]">
              <li>
                <NavLink exact="true" to="/products">
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink exact="true" to="/products">
                  Quote by style
                </NavLink>
              </li>
              <li>
                <NavLink exact="true" to="/products">
                  Upload your Art work
                </NavLink>
              </li>
              <li>
                <NavLink exact="true" to="/products">
                  free design services
                </NavLink>
              </li>
              <li>
                <NavLink exact="true" to="/products">
                  Sample request
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
