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
      imgSrc: "https://img.freepik.com/fotos-gratis/organizacao-de-diferentes-elementos-de-viagem_23-2148884921.jpg?t=st=1710920065~exp=1710923665~hmac=b6971682a1512e3cc5c3b2ef77a4552b53e5033dceedd3205f614756311a686d&w=1800",
      text: "Quality Solutions You Everyday Needs",
      Subtext:
        "Discover our wide range of electrons and consumables designed for consumer needs.",
      buttonLink: "/shop",
      buttonText: "About-us",
    },
    {
      imgSrc: "https://img.freepik.com/fotos-gratis/ainda-vida-de-homem-casual-acessorios-masculinos-modernos-em-preto_155003-1726.jpg?size=626&ext=jpg&ga=GA1.2.1808718460.1710860225&semt=ais",
      text: "Enhance Your Shopping Experience",
      Subtext:
        "Explore the world of endless accessibility, dream of it, we have it ",
      buttonLink: "/shop",
      buttonText: "Shop Now",
    },

    {
      imgSrc: "https://img.freepik.com/fotos-gratis/design-de-interiores-minimalista_23-2150870800.jpg?t=st=1710877596~exp=1710881196~hmac=65441728d75e3526802a53fb1b6301a5a62d5fe0c970de5689a6c48534d3e746&w=2000",
      text: "Efficiency Redefined",
      Subtext:
        "Maximize productivity with high-quality consumables. ",
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
