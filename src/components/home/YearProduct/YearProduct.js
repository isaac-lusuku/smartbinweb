import React from "react";
import { Link } from "react-router-dom";
import ShopNow from "../../designLayouts/buttons/ShopNow";
import Image from "../../designLayouts/Image";
import { useNavigate } from "react-router-dom";

const YearProduct = () => {

const product={ _id:"1011",
img:"https://s.yimg.com/ny/api/res/1.2/C4Hde55bAOIjHwHXncV49g--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTM2MA--/https://media.zenfs.com/en/techradar_949/c1a5b0ba019363e309cf7feb0e6cbdff",
productName:"Flower Base",
price:"35.00",
color:"Blank and White",
badge:true,
des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."}

const _id = product.productName;
const idString = (_id) => {
  return String(_id).toLowerCase().split(" ").join("");
};
const rootId = idString(_id);
const navigate = useNavigate();

const handleProductDetails = () => {
    navigate(`/product/${rootId}`, {
      state: {
        item: product,
      },
    });
  };




  return (
      <div 
          onClick={handleProductDetails}
          className="rounded-l-full w-full h-80 mb-20 bg-[#EEEEEE]  relative font-titleFont">
        <Image
          className="w-5/12 h-full object-cover hidden md:inline-block rounded-l-full"
          imgSrc={product.img}
        />
        <div className="w-7/12 md:w-2/3 xl:w-1/2 h-80 absolute px-2 md:px-0 top-0 right-0 flex flex-col items-start gap-6 justify-center">
          <h1 className="text-3xl font-semibold text-primeColor">
            Product of The year
          </h1>
          <p className="text-base font-normal text-primeColor max-w-[600px] mr-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
            cupiditate modi amet! Facilis, aperiam quaerat.
          </p>
          <ShopNow />
        </div>
      </div>
  );
};

export default YearProduct;
