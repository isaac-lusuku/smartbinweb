import Slider from "react-slick";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const  shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; 
  }
  return array;
}


const NewArrivals = (props) => {
  const items = props.items


  const catData = shuffleArray(items)
  
  const settings = {
    className: "center",
    centerMode: true,
    centerPadding: "60px",
    speed: 2000,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    dots: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    adaptiveHeight: false,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div data-testid="new-arrivals" className="w-full pb-16">
      <Heading heading="New Arrivals" />
      <Slider {...settings} >
      {catData.map((data) => (
        <div className="px-2 pb-2">
        <Product 
              key={data.id}
              id={data.id}
              cat={data.cat}
              color={data.cat}
              des={data.des}
              img={data.img}
              productName={data.productName}
              price={data.price}
              className="p-0"
            />
        </div>

        ))}
      </Slider>
    </div>
  );
};

export default NewArrivals;
