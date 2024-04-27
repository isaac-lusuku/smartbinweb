import Heading from "../Products/Heading";
import Product from "../Products/Product";
import React, { useState, useEffect } from 'react';
import axios from 'axios';



const  shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; 
  }
  return array;
}


const BestSellers = (props) => {

  const items = props.items
  const catData = shuffleArray(items).slice(0,12)

  return (
    <div>
      {items.length > 0?(
      <div data-testid="best-sellers" className="w-full py-14">
        <Heading heading="Our Bestsellers" />
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        {catData.map((data) => (
          <div className="p-2">
          {console.log(data.id)}
          <Product 
              key={data.id}
              id={data.id}
              cat={data.cat}
              color={data.cat}
              des={data.des}
              img={data.img}
              productName={data.productName}
              price={data.price}
              className="p-0"
            />
              </div>))}
            </div>
        </div>
      ):(<div></div>)}
    </div>

  );
};

export default BestSellers;
