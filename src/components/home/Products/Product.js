import { BsSuitHeartFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineLabelImportant } from "react-icons/md";
import Image from "../../designLayouts/Image";
import Badge from "./Badge";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart, addToFavorites } from "../../../redux/mainSlice";
import React, { useState, useEffect } from 'react';
import axios from "axios";


const Product = (props) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleProductDetails = () => {
      navigate(`/product/${props.id}`, {
        state: {
          item: props.id,
        },
      });
    };


    return (
      <div className="w-full relative group rounded-2xl border-b-[2px] hover:shadow-lg">
        {props.id ? (
          <div>
          <div className="w-full h-80 relative overflow-y-hidden rounded-2xl border-b-[1px]"> 
              <Image className="w-full h-full" imgSrc={props.img} />
            <div className="absolute top-6 left-6">
            {/* you can do the logic to get the tag from productData.time_added */}
              <Badge text="New" /> 
            </div>
            <div
                  onClick={() => dispatch(addToFavorites({id:props.id}))}
                  className=" absolute top-6 right-6 bg-primeColor h-[35px] w-[35px] text-white flex items-center justify-center rounded-full"
                >
                    <BsSuitHeartFill />
              </div>
            <div className="w-full h-12 absolute bg-white -bottom-[130px] group-hover:bottom-0 duration-700">
              <div className="w-full h-full flex items-end justify-center  font-titleFont px-2 ">
                <div
                  onClick={handleProductDetails}
                  className="text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full"
                >
                  View Details
                  <span className="text-lg">
                    <MdOutlineLabelImportant />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-80 py-6 flex flex-col gap-1 px-4">
            <div className="flex items-center justify-between font-titleFont">
              <h2 className="text-lg text-primeColor font-bold group-hover:underline duration-700">
                {props.productName}
              </h2>
              <p className="text-[#767676] text-[14px] group-hover:text-themeColor font-semibold duration-700">UGX{props.price}</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-[#767676] text-[14px]">{props.color}</p>
              <div
                  onClick={() =>
                    dispatch(
                      addToCart({
                        id: props.id,
                      })
                    )
                  }
                  className="text-[#767676] flex "
                >
                  <FaShoppingCart className="text-2xl text-black -translate-x-12 opacity-0 group-hover:translate-x-3 transition-transform duration-700 group-hover:opacity-100"/>
                  <FaShoppingCart className="text-2xl -translate-x-3 group-hover:translate-x-4 transition-transform duration-0 group-hover:opacity-0"/>
                </div>
            </div>
          </div>
          </div>
        ):(
          <div> 
              <div className="w-full h-80 relative overflow-y-hidden rounded-2xl border-b-[1px]">
                <div className="w-full h-full bg-[#B3C8CF]"></div>
              </div>
            <div className="max-w-80 py-6 flex flex-col gap-1 px-4">
              <div className="flex items-center justify-between font-titleFont">
                <div className="bg-[#B3C8CF] text-primeColor font-bold group-hover:underline duration-700"></div>
              </div>  
              <div className="flex justify-between items-center">
                <div className="bg-[#B3C8CF] text-[14px]"></div>
                <div>
                    <FaShoppingCart className="text-2xl text-black -translate-x-12 opacity-0 group-hover:translate-x-3 transition-transform duration-700 group-hover:opacity-100"/>
                    <FaShoppingCart className="text-2xl -translate-x-3 group-hover:translate-x-4 transition-transform duration-0 group-hover:opacity-0"/>
                </div>
              </div>
            </div>
          </div>
        )}
          
      </div>
    );
};

export default Product;
