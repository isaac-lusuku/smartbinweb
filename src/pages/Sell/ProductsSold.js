import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios';
import { useSelector } from 'react-redux';
import BusinessProduct from './product';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MdProductionQuantityLimits } from "react-icons/md";

const ProductsSold = () => {
  const [items, setItems] = useState([]);
  const [hasProducts, setHasProducts] = useState(true)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchItems();
  }, []);
 
    const ownerId = useSelector((state) => state.mainReducer.userInfo)[0];

  const fetchItems = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/business/businessProducts/", {params:{id : ownerId}});
      if (response.data.length === 0) {
            setHasProducts(false)
      }else{
        setLoading(true)
        setItems(response.data);
      }
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  return (
    <div>
        <div className='flex justify-between px-2 pb-10 items-end'>
          <Link to="/addProduct">
              <div
                  className="w-60 py-2 bg-black hover:bg-blue-600 hover:text-black duration-300 text-white text-lg font-titleFont rounded-3xl flex gap-4 justify-center items-center" >
                    <MdProductionQuantityLimits />
                <p className="text-[14px] font-normal">ADD PRODUCT</p>
              </div>
            </Link>
          <h1 className="font-titleFont underline underline-offset-4 decoration-[1px] font-semibold text-sm mdl:text-lg mb-4">
              Products Sold
          </h1>
        </div>
        <hr  className='py-4'/>
        
      {hasProducts === true?(
        <div>
      <div className='flex justify-end items-end'>
        </div>
      <div className="grid grid-cols-3 gap-4">
        {items.map(item => (
         
          <BusinessProduct 
            key={item.id}
            id={item.id}
            className="p-0"
          />
        
        ))}
      </div>
        
    </div>
      ):(<div>
      <div className='w-full flex items-end justify-end'>
            <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="gap-4 pb-20"
                    >
                    <div className="max-w-[500px] p-4 py-8 bg-white flex gap-4 flex-col items-center rounded-md shadow-lg">
                        <h1 className="font-titleFont text-xl font-bold uppercase">
                        No items for sell
                        </h1>
                        <p className="text-sm text-center px-10 -mt-2">
                        You currently have no items saved putup for sell, add items here theat 
                        will be visible by potential buyer 
                        </p>
                        <Link to="/addProduct">
                        <button className="bg-primeColor rounded-md cursor-pointer hover:bg-black active:bg-gray-900 px-8 py-2 font-titleFont font-semibold text-lg text-gray-200 hover:text-white duration-300">
                            Add Product 
                        </button>
                        </Link>
                    </div>
                    </motion.div>
            </div> 
      </div>)}
    </div>

    
  );
};

export default ProductsSold;
