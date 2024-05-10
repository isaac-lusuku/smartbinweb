import Image from "../../components/designLayouts/Image"
import { MdOutlineLabelImportant } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import React, { useState, useEffect } from 'react';
import axios from "axios";
import { deleteFavorite } from "../../redux/mainSlice";


const FavoriteProduct = (props) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const [productData, setProductData] = useState(null);
    console.log("prod_before", productData)

    const handleProductDetails = () => {
      navigate(`/product/${props.id}`, {
        state: {
          item: props.id,
        },
      });
    };
    const id = props.id
    useEffect(() => {
      console.log("in the effect")
      const getProductInfo = async () => {
          try {
              console.log(id)
              const response = await axios.get('https://lusukugroup21.online/product/getOne', { params: { id: id } });
              if (response){
                setLoading(false); // Set loading to false after data is fetched
                setProductData(response.data);
                console.log('User info:', response.data);
              }
              
          } catch (error) {
              console.error('Error getting user info:', error);
          }
      };

      if (id) {
          getProductInfo();
      }
  }, []); 

  console.log("prod_after", productData)

    return (
      <div className="w-full relative group rounded-xl  hover:shadow-lg">
        {loading === false ? (
          <div>
          <div className="w-full h-[30vh] relative overflow-y-hidden rounded-xl border-b-[1px]"> 
              <Image className="w-full h-full" imgSrc={productData.img} />
                <div 
                onClick={() => dispatch(deleteFavorite(props.id))}
                className="absolute top-4 left-4 bg-primeColor w-[75px] h-[30px] text-white flex justify-center items-center text-sm font-semibold rounded hover:bg-black duration-300 cursor-pointer">
                <p>REMOVE</p>

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

        <div className="flex py-4 gap-1  justify-between font-titleFont items-end">
            <h2 className="text-sm text-primeColor font-bold group-hover:underline duration-700">
            {productData.productName}
            </h2>
            <p className="text-[#767676] text-[14px] group-hover:text-themeColor font-semibold duration-700">UGX{productData.price}</p>
        </div>
          </div>
        ):(
          <div> 
              <div className="w-full h-[30vh] relative overflow-y-hidden rounded-2xl border-b-[1px]">
                <div className="w-full h-full bg-[#B3C8CF]"></div>
              </div>
            <div className="max-w-80 py-6 flex flex-col gap-1 px-4">
              <div className="flex items-center justify-between font-titleFont">
                <div className="bg-[#B3C8CF] text-primeColor font-bold group-hover:underline duration-700"></div>
              </div>  
            </div>
          </div>
        )}
      </div>

    );
};

export default FavoriteProduct;
