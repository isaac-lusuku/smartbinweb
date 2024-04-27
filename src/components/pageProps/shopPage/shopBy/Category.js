import React, { useState } from "react";    // Importing React and useState hook
import NavTitle from "./NavTitle";       // Importing the NavTitle component
import { useDispatch, useSelector } from "react-redux";   // Importing useDispatch and useSelector hooks from react-redux
import { toggleCategory } from "../../../../redux/mainSlice";   // Importing the toggleCategory action creator from mainSlice in Redux


// Defining the Category functional component
const Category = () => {

  // Accessing the checkedCategorys state from Redux store
  const checkedCategorys = useSelector(
    (state) => state.mainReducer.checkedCategorys
  );
  const dispatch = useDispatch();   // Initializing the useDispatch hook to dispatch actions to Redux store

  // Defining an array of category objects
  const category = [
    {
      _id: 9006,
      title: "electronics",
    },
    {
      _id: 9007,
      title: "automobiles",
    },
    {
      _id: 9008,
      title: "fashion",
    },
    {
      _id: 9009,
      title: "Real-estate",
    },
    {
      _id: 9009,
      title: "Pets",
    },
    {
      _id: 9009,
      title: "Furniture",
    },
  ];

  // Define a function to handle toggling categories
  const handleToggleCategory = (category) => {
    dispatch(toggleCategory(category));   // Dispatching the toggleCategory action with the category parameter
  };

    //JSX CONTENT
  return (
    <div className="w-full">
      <NavTitle title="Shop by Category" icons={true} />
      <div>
        <ul className="flex flex-col gap-4 text-sm lg:text-base text-[#767676]">
          {category.map((item) => (
            <li
              key={item._id} 
              className="border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center gap-2 hover:text-primeColor hover:border-gray-400 duration-300"
            >
              <input
                type="checkbox"
                id={item._id}
                checked={checkedCategorys.some((b) => b._id === item._id)}
                onChange={() => handleToggleCategory(item)}
              />
              {item.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Category;
