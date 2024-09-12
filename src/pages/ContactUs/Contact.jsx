import React from "react";
import contactBanner from "/contactus-banner.jpg";
import phone from "/contact.png";
import location from "/location.png";
import mail from "/mail.png";
import work from "/workTogether.png";
import { FaUser } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";
import { MdOutlineSubject } from "react-icons/md";
import { Button } from "@mui/material";

function Contact() {
  return (
    <>
      <div className="contact-us-banner ">
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
              Contact Us
            </h1>
          </div>
        </div>
        <div className="main-container py-16">
          <div className="contact-us-cards-container">
            <div
              className="contact-cards gap-4 sm:px-4 "
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit , minmax(18rem , 1fr))",
                gridRowGap: "1rem",
              }}
            >
              <div className="contact-card border-4 border-gray-100 border-dashed flex  justify-between flex-col items-center sm:text-center gap-6  bg-white rounded-2xl px-8 py-8 ">
                <img src={phone} alt="" className="w-16 m-auto" />
                {/* <h1 className="font-bold uppercase text-2xl">
                  If you need help, don't look far, call us today!
                </h1> */}
                <p className="text-lg text-center font-light ">
                  If you need help, don't look far, call us today!
                </p>
                <b className="text-lg text-center">+92-300-0000-000</b>
              </div>
              <div className="contact-card border-4 border-gray-100 border-dashed flex  justify-center flex-col sm:items-center sm:text-center gap-6  bg-white rounded-2xl px-8 py-8 ">
                <img src={location} alt="" className="w-16 m-auto" />

                <p className="text-lg text-center font-light ">
                  Visit our office
                </p>
                <b className="text-lg text-center">
                  3501 Jack Northrop Ave,Hawthorne, CA United States
                </b>
              </div>
              <div className="contact-card border-4 border-gray-100 border-dashed flex  justify-center flex-col sm:items-center sm:text-center gap-6  bg-white rounded-2xl px-8 py-8 ">
                <img src={mail} alt="" className="w-16 m-auto" />
                <p className="text-lg text-center font-light ">
                  Do you have a project to work? send your details.
                </p>
                <b className="text-lg text-center">info@valueBoxPrinting.com</b>
              </div>
            </div>
            <div className="contact-us-form mt-24 ">
              <div className="sm:px-4 ">
                <div className="flex items-center justify-center ">
                  <img src={work} alt="" className="w-8" />
                  <p className="text-center text-xl ">Work Together</p>
                </div>
                <h1 className="text-5xl sm:text-3xl text-center my-4 font-bold font-">
                  Tell us what you're Looking
                </h1>
                <p className="text-center sm:text-sm">
                  There are many variations of passages of lorem but the
                  majority.
                </p>
              </div>
              <form
                action=""
                className="bg-[#fef8ed] p-12 sm:px-4 sm:py-8 rounded-xl mt-12"
              >
                <div className="grid grid-cols-3 sm:grid-cols-2  gap-4">
                  <div className="flex items-center bg-white rounded-lg drop-shadow p-4">
                    <input
                      type="text"
                      placeholder="name"
                      className="border bg-transparent   outline-none border-none  w-full"
                    />
                    <FaUser style={{ color: "gray" }} />
                  </div>
                  <div className="flex items-center bg-white rounded-lg drop-shadow p-4">
                    <input
                      type="email"
                      placeholder="email"
                      className="border bg-transparent   outline-none border-none  w-full"
                    />
                    <IoMail style={{ color: "gray" }} />
                  </div>
                  <div className="flex items-center sm:col-span-2 bg-white rounded-lg drop-shadow p-4">
                    <input
                      type="number"
                      placeholder="phone"
                      className="border bg-transparent    outline-none border-none  w-full"
                    />
                    <FaPhone style={{ color: "gray" }} />
                  </div>
                </div>
                <div className="flex items-center bg-white rounded-lg drop-shadow p-4 my-4">
                  <input
                    type="text"
                    placeholder="subject"
                    className="w-full  border-none outline-none"
                  />
                  <MdOutlineSubject style={{ color: "gray" }} />
                </div>

                <textarea
                  name=""
                  placeholder="Your Message"
                  rows="10"
                  cols="10"
                  className="w-full p-4 drop-shadow rounded-lg border-none outline-none"
                ></textarea>
                <Button
                  style={{
                    background: "var(--yellow )",
                    color: "#fff",
                    padding: "8px 2rem ",
                    fontWeight: "Bold",
                    marginTop: "1rem",
                  }}
                >
                  Send Your Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
