import React, { useEffect, useState } from "react";
import logo from "/updatedLogo2.png";
import { FaSearch } from "react-icons/fa";
import { BiPhoneCall } from "react-icons/bi";
import { CiUser } from "react-icons/ci";
import Navbar from "./Navbar";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 786) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    // Add event listener to handle screen resize
    window.addEventListener("resize", handleResize);

    // Call handler right away so the state gets updated with initial window size
    handleResize();

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSearch = (e) => {
    if (e.key === "Enter" && searchTerm.trim()) {
      // Redirect to the shop page with the search term as a query parameter
      navigate(`/shop?search=${searchTerm}`);
    }
  };

  return (
    <>
      <header className=" ">
        <div className="main-container flex items-center justify-between  pt-1 pb-3 sm:pb-1 m-h-[80px]">
          <div className="logo w-[20%}">
            <Link to="/">
              {" "}
              <img src={logo} alt="" className="w-24" />
            </Link>
          </div>
          <div className="header-search-bar flex items-center bg-white  border border-gray-200 h-min rounded-full overflow-hidden w-[40%] px-6">
            <div className="search-btn">
              <FaSearch />
            </div>
            <input
              type="search"
              placeholder="Search products..."
              className="p-3 border-none outline-none w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleSearch} // Trigger search on Enter key
            />
          </div>
          <div className="contact-details">
            <div className="nav-contact-info flex items-center gap-4">
              <div className="nav-phone flex items-center gap-4">
                <div className="phone-icon text-2xl font-light border border-gray-300 p-2.5 rounded-full text-black">
                  <BiPhoneCall />
                </div>
                <div className="nav-num">
                  <p className="text-[12px] text-center text-[#7A869A]">
                    Need Help? Call us
                  </p>
                  <p>(713) 893-4763</p>
                </div>
              </div>
              <div className="nav-divider">|</div>
              <div className="nav-account flex items-center gap-4">
                <div className="user-icon text-2xl font-light  p-2.5 rounded-full text-black">
                  <CiUser />
                </div>
                <p>My Account</p>
              </div>
              {isMobile && (
                <div
                  className="hamburger-menu"
                  onClick={() => setNavOpen(!navOpen)}
                >
                  {navOpen ? <IoClose /> : <RxHamburgerMenu />}
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
      <Navbar navOpen={navOpen} />
    </>
  );
}

export default Header;
