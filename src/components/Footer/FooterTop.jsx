import React from "react";

const Newsletter = () => {
  return (
    <>
      <div className="w-full  text-white bg-zinc-800 px-4 sm:px-0">
        <div className="main-container">
          <div className="max-w-[1290px]  mx-auto grid grid-cols-3 sm:grid-cols-1">
            <div className=" col-span-2 my-4 sm:mb-0 place-content-center">
              <h1 className=" sm:text-[19px] text-4xl sm:leading-[30px] font-bold py-2">
                Sign up for exclusive promotions on
                <br /> our packaging products.
              </h1>
              {/* <p>Sign   up to our newsletter and stay up to date.</p> */}
            </div>
            <div className="my-4 sm:my-0">
              <div className="flex  flex-row items-center justify-between w-full">
                <input
                  className="p-3 flex w-full rounded-md text-black"
                  type="email"
                  placeholder="Enter Email"
                />
                <button className="bg-Yellow text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3">
                  Notify Me
                </button>
              </div>
              {/* <p>
                We care bout the protection of your data. Read our{" "}
                <span className="text-Yellow">Privacy Policy.</span>
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
