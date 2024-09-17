import React, { useRef } from "react";
import HeroSlider from "../../components/hero/HeroSlider";
import CategouryCarousel from "../../components/categoryCarousel/CategouryCarousel";
import PopularProduct from "../../components/popularProducts/PopularProduct";
import ChooseUs from "../../components/whychooseus/ChooseUs";
import Coating from "../../components/coating/Coating";
import OurExperts from "../../components/OurExperts/OurExperts";
import Inquery from "../../components/inquiryForm/Inquery";
import Testimonals from "../../components/testimonials/Testimonals";
import FaqAccording from "../../components/FaqAccording/FaqAccording";

function Home() {
  const inqueryRef = useRef(null);

  const scrollToInquery = () => {
    if (inqueryRef.current) {
      inqueryRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <HeroSlider scrollToInquery={scrollToInquery} />
      <PopularProduct />
      <ChooseUs />
      <Coating />
      <CategouryCarousel />
      <OurExperts />
      <FaqAccording />
      <div ref={inqueryRef}>
        <Inquery />
      </div>
      <Testimonals />
    </>
  );
}

export default Home;
