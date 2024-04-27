import Banner from "../../components/Banner/Banner";
import BannerBottom from "../../components/Banner/BannerBottom";
import BestSellers from "../../components/home/BestSellers/BestSellers";
import NewArrivals from "../../components/home/NewArrivals/NewArrivals";
import Sale from "../../components/home/Sale/Sale";
import SpecialOffers from "../../components/home/SpecialOffers/SpecialOffers";
import YearProduct from "../../components/home/YearProduct/YearProduct";
import PopularCategories from "../../components/home/PopularCategories/PopularCategories";
import StartSelling from "../../components/home/StartSelling/StartSelling";
import HeaderBottom from "../../components/home/Header/HeaderBottom";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DNA } from 'react-loader-spinner'


const Home = () => {

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/product/getProducts');
        if (response){
            setItems(response.data);
            setLoading(false)
        }
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems();

  }, []);

  return (
    <div>
      {loading === false ? (
        <div className="w-full mx-auto">
      <HeaderBottom />
      <Banner />
      <BannerBottom />
      <PopularCategories />
      <div className="max-w-container mx-auto px-4">
        <BestSellers items={items} />
        <NewArrivals  items= {items}/>
        <YearProduct item={items[10]}/>
        <Sale />
        <SpecialOffers items={items} />
        <StartSelling />
        </div>
        </div>
      ):(<div className="h-[80vh] w-[100vw] flex justify-center items-center ">
        <DNA
          visible={true}
          height="300"
          width="300"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
          />
      </div>)}      
    </div>
  );
};

export default Home;
