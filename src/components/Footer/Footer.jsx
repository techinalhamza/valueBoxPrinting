import React from "react";
import "../../components/Footer/Footer.css";
import logo from "/white-logo.png";
import { CiLocationOn } from "react-icons/ci";
import { FaHeadset } from "react-icons/fa";
import { BsSend } from "react-icons/bs";
import { Link } from "react-router-dom";
import appstore from "/app-store.jpg";
import googlestore from "/google-store.jpg";
import payment from "/payment.png";
import FooterTop from "./FooterTop";
import { TiArrowRight } from "react-icons/ti";
import FooterBottom from "./FooterBottom";

import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

function Footer() {
  return (
    <>
      <FooterTop />
      <div className="footer-container bg-zinc-800  py-16 sm:pt-2">
        <div className="main-container">
          <div className="footer-content ">
            <div className="row footer-data ">
              <div className="footer-col mt-4  ">
                <div className="img">
                  <img src={logo} alt="" className="w-40" />
                </div>
                <div className="company-info mt-4 ">
                  <p className="text-[#999999]">
                    valueBox is your go-to for custom box printing. We create
                    packaging that reflects your brand, combining quality and
                    design to bring your ideas to life.
                  </p>
                </div>
              </div>
              <div className="footer-col mt-4">
                <div className="hd ">Quick Links</div>
                <div className="links">
                  <ul>
                    <li>
                      <Link>
                        {" "}
                        <TiArrowRight />
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link>
                        <TiArrowRight />
                        Shop
                      </Link>
                    </li>
                    <li>
                      <Link>
                        <TiArrowRight />
                        About us
                      </Link>
                    </li>
                    <li>
                      <Link>
                        <TiArrowRight />
                        Blogs
                      </Link>
                    </li>
                    <li>
                      <Link>
                        <TiArrowRight />
                        Contact us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer-col mt-4">
                <div className="hd">Company</div>
                <div className="links">
                  <ul>
                    <li>
                      <Link>
                        <TiArrowRight />
                        Delivery Information
                      </Link>
                    </li>
                    <li>
                      <Link>
                        <TiArrowRight />
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link>
                        <TiArrowRight />
                        Terms & Conditions
                      </Link>
                    </li>
                    <li>
                      <Link>
                        <TiArrowRight />
                        Contact Us
                      </Link>
                    </li>
                    <li>
                      <Link>
                        <TiArrowRight />
                        Support Center
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer-col mt-4">
                <div className="hd">Social Links</div>
                <div className="links">
                  <ul>
                    <li>
                      <Link>
                        <FaFacebookF />
                        Facebook
                      </Link>
                    </li>
                    <li>
                      <Link>
                        <FaInstagram />
                        Instagram
                      </Link>
                    </li>
                    <li>
                      <Link>
                        <FaTiktok />
                        Tiktok
                      </Link>
                    </li>
                    <li>
                      <Link>
                        <FaLinkedinIn />
                        Linkedin
                      </Link>
                    </li>
                    <li>
                      <Link>
                        <FaWhatsapp />
                        WhatsApp
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer-col mt-4">
                <div className="text-white font-bold">Contact Us</div>
                <div className="links mt-4 text-[#999999]">
                  <h1>
                    <CiLocationOn />
                    <span>address:</span> 5171 W Campbell Ave undefined Kent,
                    Utah 53127 lahore
                  </h1>

                  <h1>
                    <FaHeadset />
                    <span>Call Us:</span> (+91) - 540-025-124553
                  </h1>

                  <h1>
                    <BsSend />
                    <span>Email:</span> inf0@valueBoxprinting.com
                  </h1>
                </div>
              </div>
              {/* <div className="footer-col mt-4">
                <div className="hd">Install App</div>
                <div className="links mt-4">
                  <p>From App Store or Google Play</p>

                  <div className="row imgs my-4">
                    <div className="col-6 pr-0">
                      <img src={appstore} alt="" />
                    </div>
                    <div className="col-6 pl-0">
                      <img src={googlestore} alt="" />
                    </div>
                  </div>

                  <p>Secured Payment Gateways</p>
                  <div className="mt-4">
                    <img src={payment} alt="" />
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <FooterBottom />
    </>
  );
}

export default Footer;
