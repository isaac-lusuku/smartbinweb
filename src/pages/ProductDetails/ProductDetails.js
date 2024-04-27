import React, { useEffect, useState } from "react";
import { useLocation, Link} from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/mainSlice";
import { FaDownload } from "react-icons/fa";
import axios from "axios";
import { BsSuitHeartFill } from "react-icons/bs";
import { addToFavorites } from "../../redux/mainSlice";
import { IoRocket } from "react-icons/io5";
import { DNA } from 'react-loader-spinner'



  
const ProductDetails = () =>{   
    const location = useLocation();
    const [prevLocation, setPrevLocation] = useState("");
    const [productInfo, setProductInfo] = useState([]);
    const dispatch = useDispatch();
    const [businessData, setBusinessData] = useState(null)
    const [loading, setLoading] = useState(false)
  
    useEffect(() => {
      setProductInfo(location.state.item);
      setPrevLocation(location.pathname);
      const getProductInfo = async () => {
          try {
              const response = await axios.get('http://127.0.0.1:8000/product/getOne', { params: { id: location.state.item } });
              if (response){
                setProductInfo(response.data);
                console.log('Product info:', response.data);
              }
              
          } catch (error) {
              console.error('Error getting user info:', error);
          }
      };

      if (location.state.item) {
          getProductInfo();
      }
    }, [location]);

    console.log(productInfo)

    useEffect(() => {
      console.log("in the effect")
      const getBusinessInfo = async () => {
          try {
              console.log(location.state.item);
              // Fetch product data
              const Response = await axios.get('http://127.0.0.1:8000/product/getOneFull', { params: { id: location.state.item } });
              if (Response.data) {
                  setBusinessData(Response.data);
                  console.log('Business info:', Response.data);
              }
          } catch (error) {
              console.error('Error getting user info:', error);
          }
      };
  
      if (location.state.item) {
          getBusinessInfo();
      }
  }, [location.state.item]); 

  useEffect(()=>{
    if (businessData && productInfo){
      setLoading(true)
    }

  }, [businessData, productInfo])
  
    return (
      <div>
        {loading === true? (
          <div className="w-[70vw] h-[80vh] py-8 m-10 mx-auto rounded-3xl flex shadow-xl">
          <div className="h-full w-6/12 mx-8 rounded-3xl bg-black">
            <img
              className="w-full h-full rounded-3xl "
              src={productInfo.img}
              alt={productInfo.img}
            />
          </div>
          <div className="h-full w-6/12 xl:px-4 flex flex-col gap-6 justify-center relative">
            <div
              onClick={() => dispatch(addToFavorites({id:productInfo.id}))}
              className=" absolute top-6 right-6 bg-[#E72929] w-32 h-12 text-white flex items-center justify-center gap-4 rounded-full cursor-pointer">
                <p>Save</p>
                <BsSuitHeartFill />
            </div>
            <h2 className="text-4xl font-semibold">{productInfo.productName}</h2>
            <p className="text-base font-medium">
              {productInfo.des} 
            </p>
            <hr />
            <div className="flex justify-start gap-10">
                <p className="text-base text-green-600 font-medium">In Stock</p>
                <h3 className="font-bold">UGX {productInfo.price}</h3>
            </div>
            <div className="flex justify-between">
                <div className=" flex gap-2 justify-center items-center">
                    <img
                      className="w-14 h-14 rounded-full "
                      src={businessData.logo}
                      alt={businessData.logo}
                    />
                    <div>
                      <p className="text-sm font-bold">{businessData.name}</p>
                      <p className="text-xs font-semibold">@{businessData.email}</p>
                    </div>
                </div>
                <button
                    onClick={() =>
                      dispatch(
                        addToCart({
                          id: productInfo.id,
                        })
                      )
                    }
                    className="w-40 py-2 bg-black hover:bg-blue-600 hover:text-black duration-300 text-white text-lg font-titleFont rounded-3xl"
                  >
                    Add to Cart
              </button>
            </div>
            <div className="flex items-center justify-between pr-24">
                <p className="font-normal text-base">
                    <span className="font-semibold">Colors:</span> {productInfo.color}
                </p>

                <p className="font-normal text-base">
                    <span className="font-semibold"> Categories:</span> {productInfo.cat}
                </p>
            </div>
            <Link to="/shop">
              <div
                  className="flex justify-center h-12 w-full cursor-pointer items-center gap-2 text-primeColor border-[#EE4266] border-2 rounded-2xl">
                    <IoRocket className="w-5 h-5 text-[#EE4266]" />
                <p className="text-[14px] font-normal">CONTINUE SHOPPING</p>
              </div>
            </Link>
        </div>
      </div>
        ):(<div className="h-[80vh] w-[100vw] flex justify-center items-center ">
        <DNA
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
          />
      </div>)}
      </div>
      
    );
}

export default ProductDetails;
