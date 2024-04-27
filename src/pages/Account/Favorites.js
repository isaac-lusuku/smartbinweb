import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import FavoriteProduct from './FavoriteProduct';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Favorites = () => {
    const favorites = useSelector((state) => state.mainReducer.favorites)

  return (
    <div>
        <div className='flex justify-end items-end'>
            <h1 className="font-titleFont underline underline-offset-4 decoration-[1px] font-semibold text-lg mdl:text-lg mb-4">
                Favorite Items
            </h1>
        </div>
        {favorites.length > 0 ? (
        <div>        
            <div className="grid grid-cols-3 gap-4">
            {favorites.map(favorite => (
            
            <FavoriteProduct
                key={favorite}
                id={favorite}
                className="p-0"
            />
            
            ))}
            </div>
        </div>  
        ) : (
            <div className='w-full flex items-end justify-end'>
            <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="gap-4 pb-20"
                    >
                    <div className="max-w-[500px] p-4 py-8 bg-white flex gap-4 flex-col items-center rounded-md shadow-lg">
                        <h1 className="font-titleFont text-xl font-bold uppercase">
                        Your Favorite Item's list is EMPTY 
                        </h1>
                        <p className="text-sm text-center px-10 -mt-2">
                        You currently have no items saved in your Favorites, you can always save 
                        you favorite items or those you plan on buying later in ths list and view 
                        them on this page
                        </p>
                        <Link to="/shop">
                        <button className="bg-primeColor rounded-md cursor-pointer hover:bg-black active:bg-gray-900 px-8 py-2 font-titleFont font-semibold text-lg text-gray-200 hover:text-white duration-300">
                            Continue Shopping
                        </button>
                        </Link>
                    </div>
                    </motion.div>
            </div>
        )}
    </div>
       
  );
};

export default Favorites;
