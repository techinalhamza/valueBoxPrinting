import React from "react";
import listingBanner from "/listingBanner_.jpg";
import aboutImg from "/aboutus.jpg";

const AboutUs = () => {
  return (
    <>
      <div className="about-us-container mb-16">
        <div
          className="listing-us-breadcrumb"
          style={{
            backgroundImage: `url(${listingBanner})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="listing-overlay w-full h-full bg-[#0007] py-24 sm:py-16 ">
            <h1 className="text-7xl sm:text-4xl text-center text-[#fff]">
              About Us
            </h1>
          </div>
        </div>
        <div className="main-container sm:px-4">
          <div className="about-us-header max-w-[70%] sm:max-w-[100%]   my-12 m-auto text-center w-full">
            <h1 className="text-4xl font-bold mb-2 ">Value Box Printing</h1>
            <p>
              Welcome to Value Box Printing! We specialize in providing
              top-quality box printing solutions for all your packaging needs.
              From cosmetics to display boxes, we offer durable materials and
              vibrant printing to make your products stand out. Our team
              combines tradition with innovation to create eye-catching designs
              that elevate your brand. Experience fast, reliable service with
              the added benefit of free graphics and quick delivery. Let us
              bring your packaging vision to life!
            </p>
          </div>
          <div className="about-us-content grid grid-cols-2 sm:grid-cols-1 gap-8 my-16">
            <div className="brand-img w-full h-[30rem] sm:h-min overflow-hidden rounded-xl">
              <img
                src={aboutImg}
                alt=""
                className="w-full aspect-square object-contain"
              />
            </div>
            <div className="brand-info flex flex-col justify-center ">
              <h1 className="text-4xl font-bold mb-5">Some Words About us</h1>
              <p className="text-justify">
                Value Box Printing is a dynamic company specializing in
                packaging and printing services that are fast, convenient, and
                designed to simplify your business needs. With a commitment to
                quality and innovation, we go beyond traditional methods to
                offer creative solutions that not only meet but exceed your
                expectations. Our approach combines time-tested traditions with
                fresh, modern ideas, ensuring that your packaging is both
                functional and visually compelling. We believe that the right
                packaging is a key component of any brand's success, and we are
                dedicated to helping you achieve that through our expert
                services.
                <br />
                <br /> Our team consists of highly skilled professionals who are
                passionate about delivering excellence. Whether you need custom
                packaging for cosmetics, software, retail, or any other
                industry, we have the expertise to bring your vision to life.
                From concept to delivery, we work closely with our clients to
                understand their needs and deliver tailor-made solutions that
                stand out in the competitive marketplace. We focus on the small
                details that make a big difference, such as color combinations,
                design elements, and materials, all of which contribute to
                creating packaging that captures attention and enhances brand
                recognition.
              </p>
            </div>
          </div>
          <div
            className="about-cards gap-4 sm:px-4 "
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit , minmax(18rem , 1fr))",
              gridRowGap: "1rem",
            }}
          >
            <div className="about-card border-4 border-grey-400 border-dashed flex  justify-between flex-col items-cente  gap-4 sm:gap-8  bg-white rounded-2xl px-8 py-8 ">
              {/* <h1 className="text-3xl  font-bold ">Our Mission</h1> */}
              <h1 className="text-3xl  font-bold before:content-[''] before:absolute before:top-full relative  before:w-[40%] before:sm:w-[60%] before:h-1 before:rounded-md before:mt-2 before:bg-Yellow">
                Our Mission
              </h1>

              <p className="text-lg ">
                Our mission is to provide premium-quality packaging services,
                collaborating with clients to bring their ideas to life
                efficiently and effectively.
              </p>
            </div>
            <div className="about-card border-4 border-grey-400 border-dashed flex  justify-between flex-col items-cente  gap-4 sm:gap-8  bg-white rounded-2xl px-8 py-8 ">
              {/* <h1 className="text-3xl  font-bold ">Our Mission</h1> */}
              <h1 className="text-3xl  font-bold before:content-[''] before:absolute before:top-full relative  before:w-[40%] before:sm:w-[60%] before:h-1 before:rounded-md before:mt-2 before:bg-Yellow">
                Our Vision
              </h1>

              <p className="text-lg ">
                Our vision is to lead the global packaging industry through
                innovation, reliability, and setting new standards in creativity
                and functionality.
              </p>
            </div>
            <div className="about-card border-4 border-grey-400 border-dashed flex  justify-between flex-col items-cente  gap-4 sm:gap-8  bg-white rounded-2xl px-8 py-8 ">
              {/* <h1 className="text-3xl  font-bold ">Our Mission</h1> */}
              <h1 className="text-3xl  font-bold before:content-[''] before:absolute before:top-full relative  before:w-[40%] before:sm:w-[60%] before:h-1 before:rounded-md before:mt-2 before:bg-Yellow">
                Our Values
              </h1>

              <p className="text-lg ">
                We value quality, trust, and customer satisfaction, ensuring a
                friendly environment where clients feel comfortable sharing
                their ideas and suggestions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
