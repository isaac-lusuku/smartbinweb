import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import { SampleData } from "../../../constants";



const  shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; 
  }
  return array;
}

const catData = shuffleArray(SampleData).slice(0,8)
const BestSellers = () => {
  return (
    <div data-testid="best-sellers" className="w-full py-14">
      <Heading heading="Our Bestsellers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
      {catData.map((data) => (
        <div className="p-2">
        <Product 
            key={data._id}
            _id={data._id}
            img={data.img}
            productName={data.productName}
            price={data.price}
            color={data.color}
            badge={true}
            des={data.des} 
            className="p-0"
          />
        </div>))}
      </div>
    </div>
  );
};

export default BestSellers;
