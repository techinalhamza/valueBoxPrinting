import React from "react";
import paymentImg from "/payment.png";
function FooterBottom() {
  return (
    <>
      <div className="copy-right-contianer bg-zinc-800">
        <div className="main-container">
          <div className="copy-right-content flex justify-between">
            <div className="copy-tagline">
              <p className="text-[#ffffff]">
                © 2024 ValueBox. All Rights Reserved
              </p>
            </div>
            <div className="payment-icons">
              <img src={paymentImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FooterBottom;
