import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useSelector } from "react-redux";
import { MdPhotoCamera } from "react-icons/md";


const AddProduct = () => {

    const ownerId = useSelector((state) => state.mainReducer.userInfo)[0];
    const navigate = useNavigate()

    const [productName, setProductName] = useState("");
    const [units, setUnits] = useState("");
    const [price, setPrice] = useState("")
    const [des, setDes] = useState("")
    const [color, setColor] = useState("")
    const [cat, setCat] = useState("");
    const [img, setimg] = useState(null);


    const [errProductName, setErrProductName] = useState("");
    const [errUnits, setErrUnits] = useState("");
    const [errPrice, setErrPrice] = useState("")
    const [errDes, setErrDes] = useState("")
    const [errColor, setErrColor] = useState("")
    const [errCat, setErrCat] = useState("");
    const [errImg, setErrImg] = useState("");


    const handleProductName = (e) => {
        setProductName(e.target.value);
        setErrProductName("");
    };
    const handleUnits = (e) => {
        setUnits(e.target.value);
        setErrUnits("");
    };
    const handlePrice = (e) => {
        setPrice(e.target.value);
        setErrPrice("");
    };
    const handleDes = (e) => {
        setDes(e.target.value);
        setErrDes("");
    };
    const handleColor = (e) => {
        setColor(e.target.value);
        setErrColor("");
    };
    const handleCat = (e) => {
        setCat(e.target.value);
        setErrCat("");
    };
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setimg(file);
            console.log("the image has been recieved")
        }
    };




    const handleAddItem = (e) => {
        e.preventDefault();
        if (!productName) {
            setErrProductName("Enter your product's name");
        }
        if (!units) {
            setErrUnits("Enter the number units available");
        } 
        if (!price) {
            setErrPrice("Enter your product's price");
        }
        if (!des) {
            setErrDes("Tell us something about your product");
        }
        if (!color) {
            setErrColor("Enter the color of the product");
        }
        if (!cat) {
            setErrCat("What category is the product");
        }
        if (img == null) {
            setErrImg("please add a product image")
        }
        

        
        // ============== Restore the state ==============
        if (
            productName &&
            units &&
            des &&
            color &&
            cat &&
            ownerId &&
            price &&
            img
        ) {
            console.log("passed the stage")
            const formData = new FormData();

            formData.append("id", ownerId);
            formData.append("productName", productName);
            formData.append("units", units);
            formData.append("des", des);
            formData.append("color", color);
            formData.append("cat", cat);
            formData.append("price", price);
            formData.append('img', img);
            
            
            for (const entry of formData.entries()) {
                console.log(entry);
            }


            axios.post(
            'http://127.0.0.1:8000/product/addProduct/',
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
            )
            .then(function (response) {
                console.log(response);
                setCat("");
                setColor("");
                setDes("");
                setPrice("");
                setProductName("");
                setUnits("");  
                navigate(-1)
            })
            .catch(function (error) {
                console.log(error);
            });
            
             
        }
    };
    return (
        <div className='flex items-center justify-center w-full y-[40vh] overflow-scroll '>
            <div className="w-full h-screen flex items-center border-2 justify-center">
        {(ownerId == null) ? (
            <div className="w-full lgl:w-[500px] h-full flex flex-col justify-center">
            <p className="w-full px-4 py-10 text-black font-medium font-titleFont">
              You are currently not logged in so you can not register a business with us,
              sign in or create an account if you don't have one and then you can register a business with us
            </p>
            <Link to="/signin">
              <button
                className="w-full h-10 bg-primeColor text-gray-200 rounded-md text-base font-titleFont font-semibold 
            tracking-wide hover:bg-black hover:text-white duration-300"
              >
                SIGN IN
              </button>
            </Link>
          </div>
        ):(
            <div className="w-full lgl:w-1/2 h-full flex flex-col justify-center  ">
            <form className="w-full lgl:w-[500px] h-screen flex items-center justify-center">
                <div className="px-6 py-4 w-full h-[96%] flex flex-col justify-center ">
                <h1 className="font-titleFont underline underline-offset-4 decoration-[1px] font-semibold text-2xl mdl:text-3xl mb-4">
                    Add Product
                </h1>
                <div className="flex flex-col gap-3">
                    {/* Product name */}
                    <div className="flex flex-col gap-.5">
                    <p className="font-titleFont text-base font-semibold text-gray-600">
                        product name
                    </p>
                    <input
                        onChange={handleProductName}
                        value={productName}
                        className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-black outline-none"
                        type="text"
                        placeholder="eg. Sneakers"
                    />
                    {errProductName && (
                        <p className="text-sm text-themeColor font-titleFont font-semibold px-4">
                        <span className="font-bold italic mr-1">!</span>
                        {errProductName}
                        </p>
                    )}
                    </div>
                    {/* description */}
                    <div className="flex flex-col gap-.5">
                    <p className="font-titleFont text-base font-semibold text-gray-600">
                        Product description
                    </p>
                    <input
                        onChange={handleDes}
                        value={des}
                        className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-black outline-none"
                        type="text"
                        placeholder="any detail about the product"
                    />
                    {errDes && (
                        <p className="text-sm text-themeColor font-titleFont font-semibold px-4">
                        <span className="font-bold italic mr-1">!</span>
                        {errDes}
                        </p>
                    )}
                    </div>

                    {/* category */}
                    <div className="flex flex-col gap-.5">
                    <p className="font-titleFont text-base font-semibold text-gray-600">
                        Product Category
                    </p>
                    <select
                        onChange={handleCat}
                        value={cat}
                        className="w-full h-8 px-4 text-base font-medium rounded-md border-[1px] border-black outline-none"
                    >
                        <option value="">Select category</option>
                        <option value="electronics">Electronics</option>
                        <option value="automobiles">Automobiles</option>
                        <option value="fashion">Fashion</option>
                        <option value="real-estate">Real Estate</option>
                        <option value="pets">Pets</option>
                        <option value="furniture">Furniture</option>
                        <option value="fast-foods">Fast Foods</option>
                    </select>
                    {errCat && (
                        <p className="text-sm text-themeColor font-titleFont font-semibold px-4">
                        <span className="font-bold italic mr-1">!</span>
                        {errCat}
                        </p>
                    )}
                    </div>

                    {/* price */}
                    <div className="flex flex-col gap-.5">
                    <p className="font-titleFont text-base font-semibold text-gray-600">
                        Product Price
                    </p>
                    <input
                        onChange={handlePrice}
                        value={price}
                        className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-black outline-none"
                        type="text"
                        placeholder="price in UGX"
                    />
                    {errPrice && (
                        <p className="text-sm text-themeColor font-titleFont font-semibold px-4">
                        <span className="font-bold italic mr-1">!</span>
                        {errPrice}
                        </p>
                    )}
                    </div>

                    {/* color */}
                    <div className="flex flex-col gap-.5">
                    <p className="font-titleFont text-base font-semibold text-gray-600">
                        Product color
                    </p>
                    <input
                        onChange={handleColor}
                        value={color}
                        className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-black outline-none"
                        type="text"
                        placeholder="eg black, blue, red, all..."
                    />
                    {errColor && (
                        <p className="text-sm text-themeColor font-titleFont font-semibold px-4">
                        <span className="font-bold italic mr-1">!</span>
                        {errColor}
                        </p>
                    )}
                    </div>

                    {/* units */}
                    <div className="flex flex-col gap-.5">
                    <p className="font-titleFont text-base font-semibold text-gray-600">
                        How many units are in stock
                    </p>
                    <input
                        onChange={handleUnits}
                        value={units}
                        className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-black outline-none"
                        type="text"
                        placeholder="eg 200 "
                    />
                    {errUnits && (
                        <p className="text-sm text-themeColor font-titleFont font-semibold px-4">
                        <span className="font-bold italic mr-1">!</span>
                        {errUnits}
                        </p>
                    )}
                    </div>

                    {/* image */}
                    <div>
                        <p className="font-titleFont text-base font-semibold text-gray-600">
                            Upload an image of the product
                        </p>
                        <div>
                            <input
                                type="file"
                                onChange={handleFileChange}
                                // style={{ display: 'none' }} 
                            />
                            <MdPhotoCamera />
                        </div>
                        {errImg && (
                            <p className="text-sm text-themeColor font-titleFont font-semibold px-4">
                            <span className="font-bold italic mr-1">!</span>
                            {errImg}
                            </p>
                        )}

                    </div>
                    

                    <button
                    onClick={handleAddItem}
                    className="bg-gray-500 hover:bg-black w-full text-gray-200 text-base font-medium h-10 rounded-md hover:text-white duration-300"
                    >
                    Add Item
                    </button>
                </div>
                </div>
            </form>
        </div>
        )}
        
        </div>
        </div>
        
    );
    };

export default AddProduct;
