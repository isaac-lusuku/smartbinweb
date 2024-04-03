import React, { useEffect, useState } from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import { SampleData } from "../../../constants";
import { useParams } from "react-router-dom";
import  SampleNextArrow  from "../NewArrivals/SampleNextArrow";
import  SamplePrevArrow  from "../NewArrivals/SamplePrevArrow";
import Slider from "react-slick";


const  shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; 
  }
  return array;
}

const SpecialOffers = () => {
  const { category } = useParams();

  const [data, setData] = useState([]);
  useEffect(() => {
    setData(SampleData);
  }, [data]);

  const catData = shuffleArray(data)
  // .filter((item) => item.cat === category);

  const settings = {
    speed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: false,
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
    <div data-testid="special-offers" className="w-full pb-20">
      <Heading heading="Special Offers- All with free shipping" />
      <Slider {...settings} >
      {catData.map((data) => (
        <div className="p-2">
        <Product 
            key={data._id}
            _id={data._id}
            img={data.img}
            productName={data.productName}
            price={data.price}
            color={data.color}
            badge={data.badge}
            des={data.des} 
            className="p-0"
          />
        </div>

        ))}
      </Slider>
    </div>
  );
};

export default SpecialOffers;
