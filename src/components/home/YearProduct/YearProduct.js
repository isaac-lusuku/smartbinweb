import React from "react";
import { Link } from "react-router-dom";
import ShopNow from "../../designLayouts/buttons/ShopNow";
import Image from "../../designLayouts/Image";
import { useNavigate } from "react-router-dom";

const YearProduct = (props) => {

const product= props.item
const navigate = useNavigate()


const handleProductDetails = () => {
    navigate(`/product/${product.id}`, {
      state: {
        item: product.id,
      },
    });
  };




  return (
      <div data-testid="year-product"
          className="rounded-l-full w-full h-80 mb-20   relative font-titleFont flex">
        <Image
          className="w-5/12 h-full object-cover hidden md:inline-block rounded-l-full"
          imgSrc="https://i.pinimg.com/564x/8a/56/38/8a5638b9f717250d4aee366f7f557492.jpg"
        />

        <div className="w-1/2 md:w-2/3 xl:w-1/2 h-80   flex flex-col items-start  justify-center">
          <h2 class="text-2xl font-bold text-black mb-6 mx-auto ">Automated Waste Segregation:</h2> 
          <p class="text-xl text-gray-800 leading-relaxed mb-4 w-2/3 mx-auto">
            Say goodbye to sorting your trash manually. Our Smart Bin uses advanced sensors and AI technology to accurately distinguish between biodegradable and non-biodegradable waste.
          </p>
        </div>
      </div>
  );
};

export default YearProduct;
