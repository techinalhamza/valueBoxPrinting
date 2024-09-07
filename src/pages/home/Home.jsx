import React from "react";
import HeroSlider from "../../components/hero/HeroSlider";
import CategouryCarousel from "../../components/categoryCarousel/CategouryCarousel";
import PopularProduct from "../../components/popularProducts/PopularProduct";

function Home() {
  return (
    <>
      <HeroSlider />
      <PopularProduct />
      {/* <CategouryCarousel /> */}
    </>
  );
}

export default Home;
