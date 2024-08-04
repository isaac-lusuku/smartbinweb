import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Image from "../designLayouts/Image";


const CustomSlide = ({ Subtext, imgSrc, text, buttonLink, buttonText }) => (
<div
  style={{
    position: "relative",
    backgroundImage: `url(${imgSrc})`, 
    display: "flex",
    justifyContent: "center",
    alignItems:"center",
    height: "500px",
    textAlign: "center",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "92vw",
    margin: "0 auto",
    borderRadius: "30px",
    backgroundRepeat: "no-repeat",
  }}
>
  {/* Opaque overlay */}
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.4)", 
      borderRadius: "30px",
    }}
  />
  
  {/* Content */}
  <div
    style={{
      position: "relative",
      width: "40vw",
      zIndex: 1, 
      color: "white",
    }}
  >
    <h1
      style={{
        marginBottom: "20px",
        fontSize: "2.5rem",
        fontWeight: "700",
      }}
    >
      {text}
    </h1>
    <p
      style={{
        marginBottom: "25px",
        fontSize: "1.5rem", 
      }}
    >
      {Subtext}
    </p>

    <Link to= "/contact">
      <button className="bg-[#EE4266] text-white text-lg font-bodyFont w-[185px] h-[50px] rounded-md hover:bg-black duration-300 font-bold">
        {buttonText}
      </button>
    </Link>
  </div>
</div>

);

const Banner = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false,
    arrows: false,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  const slides = [
    {
      imgSrc: "https://cdn-kepnf.nitrocdn.com/qguMOshktHzrlBnKpznltfRgqPIOwZoi/assets/images/optimized/rev-21f9c49/www.paulsrubbish.com.au/wp-content/uploads/2023/04/pauls_rubbish-2-768x256.jpg",
      text: "Lets make the world a better place",
      Subtext:
        "Join us as we make the world a better place for every creature whether on land or in the waters.",
      buttonLink: "/about",
      buttonText: "About-us",
    },
    {
      imgSrc: "https://cdn.unenvironment.org/s3fs-public/2017-09/slider2-ietc_0.jpg",
      text: "Enhance Your Home Experience",
      Subtext:
        "Explore the world of endless sustainability, enhance your home sanitation with our smart bin ",
      buttonLink: "/about",
      buttonText: "Shop Now",
    },

    {
      imgSrc: "https://wwwcdn.imo.org/localresources/en/MediaCentre/HotTopics/PublishingImages/BeatPlasticPollution%20banner.png",
      text: "Efficiency Redefined",
      Subtext:
        "Make the waste disposal process more efficient and keep clean and healthy. ",
      buttonLink: "/contact",
      buttonText: "Contact-us",
    },

  ];
  return (
    <div className="w-full bg-white" data-testid="banner">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <CustomSlide key={index} {...slide} />
        ))}
      </Slider>
    </div>


  );
};

export default Banner;
