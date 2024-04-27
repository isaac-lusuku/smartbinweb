import ReactPaginate from "react-paginate";     // Importing the ReactPaginate component for pagination
import Product from "../../home/Products/Product";    // Importing the Product component for displaying individual products
import { useSelector } from "react-redux";      // Importing the useSelector hook from react-redux for accessing Redux store state
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";
import React, { useState, useEffect } from 'react';
import axios from 'axios';    // Importing Axios for making HTTP requests

// Component to render individual product items
function Items({ displayItems }) {

  return (
    <>
      {displayItems.map((item, index) => (
        item && item.id ? (
          <div key={item.id} className="w-full">
          {console.log(item.id)}
          <Product 
              key={item.id}
              id={item.id}
              cat={item.cat}
              color={item.cat}
              des={item.des}
              img={item.img}
              productName={item.productName}
              price={item.price}
              className="p-0"
            />
          </div>
        ) : null
      ))}
    </>
  );
}

// Component for pagination functionality
const Pagination = ({ itemsPerPage }) => {
  const [itemOffset, setItemOffset] = useState(0);    // State to track the offset for pagination
  const [itemStart, setItemStart] = useState(1);    // State to track the start index of displayed items
  const [items, setItems] = useState([]);     // State to store all items fetched from the server

  // Fetch items from the server when component mounts
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/product/getProducts/');
        setItems(response.data);   // Setting the fetched items in state
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems();   // Calling the fetchItems function

  }, []);

    // Selecting checked categories from Redux store state
  const selectedCategories = useSelector(
    (state) => state.mainReducer.checkedCategorys
  );

     // Filtering items based on selected categories
  const filteredItems = items.filter((item) => {
    const isCategorySelected =
      selectedCategories.length === 0 ||
      selectedCategories.some((category) => category.title === item.cat);

    return isCategorySelected;
  });

  const endOffset = itemOffset + itemsPerPage;  // Calculating the end offset for displayed items
  const currentItems = filteredItems.slice(itemOffset, endOffset);  // Selecting items to be displayed based on pagination

  const pageCount = Math.ceil(filteredItems.length / itemsPerPage); // Calculating the total number of pages required for pagination

  // Function to handle page change event
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) // % items.length;
    const newStart = newOffset + 1; 

    setItemOffset(newOffset); // Updating item offset state
    setItemStart(newStart);   // Updating item start state
  };

  // Rendering the pagination component with previous and next buttons, and item count information
  return (

    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mdl:gap-4 lg:gap-10">
        <Items
          displayItems={currentItems}
        />{" "}
      </div>
      <div className="flex flex-col mdl:flex-row justify-center mdl:justify-between items-center">
        <ReactPaginate
          nextLabel={<div className="w-9 h-9 bg-black text-themeColor rounded-full flex items-center justify-center">
            <FaLongArrowAltRight />
          </div>}
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel={<div className="w-9 h-9 bg-black text-themeColor rounded-full flex items-center justify-center mr-6">
            <FaLongArrowAltLeft />
          </div>}
          pageLinkClassName="w-9 h-9 border-[1px] border-lightColor hover:border-gray-500 duration-300 flex justify-center items-center"
          pageClassName="mr-6"
          containerClassName="flex text-base font-semibold font-titleFont py-10  mx-auto w-3/5"
          activeClassName="bg-black text-white"
        />

        <p className="text-base font-normal text-lightText">
          Products from {itemStart} to {Math.min(endOffset, items.length)} of{" "}
          {items.length}
        </p>
      </div>
    </div>
  );
};

export default Pagination;

