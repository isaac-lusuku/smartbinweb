import React from "react";
import Banner from "../../components/Banner/Banner";
import BannerBottom from "../../components/Banner/BannerBottom";
import BestSellers from "../../components/home/BestSellers/BestSellers";
import NewArrivals from "../../components/home/NewArrivals/NewArrivals";
import Sale from "../../components/home/Sale/Sale";
import SpecialOffers from "../../components/home/SpecialOffers/SpecialOffers";
import YearProduct from "../../components/home/YearProduct/YearProduct";
import PopularCategories from "../../components/home/PopularCategories/PopularCategories";
import StartSelling from "../../components/home/StartSelling/StartSelling";


const Home = () => {
  return (
    <div className="w-full mx-auto">
      <Banner />
      <BannerBottom />
      <PopularCategories />
      <div className="max-w-container mx-auto px-4">
        <BestSellers />
        <NewArrivals />
        <YearProduct />
        <Sale />
        <SpecialOffers />
        <StartSelling />
        </div>

      
    </div>
  );
};

export default Home;
