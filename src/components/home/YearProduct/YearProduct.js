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
          onClick={handleProductDetails}
          className="rounded-l-full w-full h-80 mb-20 bg-[#EEEEEE]  relative font-titleFont flex">
        <Image
          className="w-5/12 h-full object-cover hidden md:inline-block rounded-l-full"
          imgSrc={product.img}
        />
        <div className="w-1/2 md:w-2/3 xl:w-1/2 h-80   pl-20 lg:pl-40 flex flex-col items-start gap-6 justify-center">
          <h1 className="text-3xl font-semibold text-primeColor">
            Product of The year
          </h1>
          <p className="text-base font-normal text-primeColor  mr-4">
            {product.des}
          </p>
          <ShopNow />
        </div>
      </div>
  );
};

export default YearProduct;
