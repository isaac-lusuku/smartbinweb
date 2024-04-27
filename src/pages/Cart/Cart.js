import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import { resetCart } from "../../redux/mainSlice";
import { emptyCart } from "../../assets/images/index";
import ItemCard from "./ItemCard";
import axios from "axios";
import { DNA } from 'react-loader-spinner'


const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.mainReducer.products);
  const [totalAmt, setTotalAmt] = useState("");
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState(null)
  

  useEffect(() => {
    const getCart = async () => {
      const prod = [];
      let price = 0;
  
      for (let i = 0; i < items.length; i++) {
        try {
          const response = await axios.get('http://127.0.0.1:8000/product/getOne/', { params: { id: items[i]['id'] } });
          prod.push(response.data);
          price += response.data.price * items[i].quantity;
        } catch (error) {
          console.error('Error fetching items:', error);
        }
      }

      if (prod.length === items.length){
        setProducts(prod)
        setLoading(true)
        setTotalAmt(price)
      }
      
      // Here, you can do something with the `prod` array and `price`
      console.log(prod);
      console.log('Total price:', price);
    };
  
    getCart();
  }, [items]);
  



  return (

      <div className="max-w-container mx-auto px-4">
      {console.log("prods", products)}
        <Breadcrumbs title="Cart" />
        {items.length > 0 ? (
          <div>
            {loading?(          
            <div className="pb-20">
            <div className="w-full h-20 bg-[#F5F7F7] text-primeColor rounded-md hidden lgl:grid grid-cols-12 place-content-center px-6 text-lg font-titleFont font-semibold">
              <h2 className="col-span-5">Product</h2>
              <h2 className="col-span-2">Price</h2>
              <h2 className="col-span-2">Quantity</h2>
              <h2 className="col-span-2">Sub Total</h2>
            </div>
            <div className="mt-5">
              {(products.length === items.length) && products.map((item) => (
                <div key={item.id}>
                  <ItemCard item={item} />
                </div>
              ))}
            </div>
            <div className="flex justify-end items-center">
              <button
                onClick={() => dispatch(resetCart())}
                className="py-2 px-10 bg-red-500 text-white rounded-3xl font-semibold uppercase mb-4 hover:bg-red-700 duration-300"
              >
                Reset cart
              </button>
            </div>
            <div className="flex flex-col mdl:flex-row justify-center items-center gap-4 pb-20">
            <div>
              <img
                className="w-80 rounded-lg p-4 mx-auto"
                src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv08YXi1FBCXCVgUecXqnnIsEE4ermPU0uLg&s"}
                alt="emptyCart"
              />
            </div>
            <div className="max-w-[500px] p-4 py-8 bg-white flex gap-4 flex-col items-center rounded-md shadow-lg">
              <h1 className="font-titleFont text-xl font-bold uppercase">
                YOUR CART TOTAL IS   <span className="underline text-orange-300 font-black text-2xl">UGX {totalAmt}</span>.
              </h1>
              <p className="text-sm text-center px-10 -mt-2">
                Your Shopping cart is ready to be checked out, by checking out you confirm you details to be
                sent to the sellers to contact you about payments and deliveries
              </p>
              
                <button className="bg-primeColor rounded-md cursor-pointer hover:bg-black active:bg-gray-900 px-8 py-2 font-titleFont font-semibold text-lg text-gray-200 hover:text-white duration-300">
                  CHECKOUT
                </button>
              
            </div>

            </div>
            

          </div>):(
            <div className="h-[80vh] w-[100vw] flex justify-center items-center ">
            <DNA
              visible={true}
              height="300"
              width="300"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="dna-wrapper"
              />
          </div>
            )}
          </div>

        ) : (
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col mdl:flex-row justify-center items-center gap-4 pb-20"
          >
            <div>
              <img
                className="w-80 rounded-lg p-4 mx-auto"
                src={"https://static.vecteezy.com/system/resources/previews/016/026/442/original/empty-shopping-cart-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vector.jpg"}
                alt="emptyCart"
              />
            </div>
            <div className="max-w-[500px] p-4 py-8 bg-white flex gap-4 flex-col items-center rounded-md shadow-lg">
              <h1 className="font-titleFont text-xl font-bold uppercase">
                Your Cart seems to be empty.
              </h1>
              <p className="text-sm text-center px-10 -mt-2">
                Your Shopping cart is meant to be filled with all that my appeal you...
                go on to add items like books, foods, clothes to make it serve you
              </p>
              <Link to="/shop">
                <button className="bg-primeColor rounded-md cursor-pointer hover:bg-black active:bg-gray-900 px-8 py-2 font-titleFont font-semibold text-lg text-gray-200 hover:text-white duration-300">
                  Continue Shopping
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </div>

    
  );
};

export default Cart;
