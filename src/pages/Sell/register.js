import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Message from "../Account/Message";
import axios from 'axios';
import { useSelector} from "react-redux";

const Register = () => {
    const navigate = useNavigate()

    const ownerId = useSelector((state) => state.mainReducer.userInfo)[0];
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [about, setAbout] = useState("")
    const [name, setName] = useState("")
    const [location, setLocation] = useState("")
    const [category, setCategory] = useState("");
    const [deliveryOptions, setDeliveryOptions] = useState("");

    const [errEmail, setErrEmail] = useState("");
    const [errContact, setErrContact] = useState("");
    const [errAbout, setErrAbout] = useState("")
    const [errName, setErrName] = useState("")
    const [errLocation, setErrLocation] = useState("")
    const [errCategory, setErrCategory] = useState("");
    const [errDeliveryOptions, setErrDeliveryOptions] = useState("");

    const handleName = (e) => {
        setName(e.target.value);
        setErrName("");
    };
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setErrEmail("");
    };
    const handleContact = (e) => {
        setContact(e.target.value);
        setErrContact("");
    };
    const handleAbout = (e) => {
        setAbout(e.target.value);
        setErrAbout("");
    };
    const handleLocation = (e) => {
        setLocation(e.target.value);
        setErrLocation("");
    };
    const handleCategory = (e) => {
        setCategory(e.target.value);
        setErrCategory("");
    };
    const handleDeliveryOptions = (e) => {
        setDeliveryOptions(e.target.value);
        setErrDeliveryOptions("");
    };

    // ================= Email Validation =============
    const EmailValidation = (email) => {
        return String(email)
        .toLowerCase()
        .match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
    };


    const handleRegister = (e) => {
        e.preventDefault();
        if (!name) {
            setErrName("Enter your bussiness name");
        }
        if (!email) {
            setErrEmail("Enter your email");
        } else {
            if (!EmailValidation(email)) {
            setErrEmail("Enter a Valid email");
            }
        }
        if (!contact) {
            setErrContact("Enter your business contact");
        }
        if (!about) {
            setErrAbout("Tell us something about your business");
        }
        if (!location) {
            setErrLocation("Enter you business location");
        }
        if (!category) {
            setErrCategory("What category are planning to sell");
        }
        if (!deliveryOptions) {
            setErrDeliveryOptions("Enter the delivary options offerred");
        }
        
        // ============== Restore the state ==============
        if (
            name &&
            email &&
            EmailValidation(email) &&
            contact &&
            about &&
            location &&
            category &&
            deliveryOptions
        ) {
            axios.post(
            'https://lusukugroup21.online/business/register_business/',
            {
                email: email,
                name: name,
                contact: contact,
                about: about,
                location: location,
                category: category,
                delivery_options: deliveryOptions,
                owner: ownerId
            },
            {
                headers: {
                'Content-Type': 'application/json'
                }
            }
            )
            .then(function (response) {
                setName("");
                setEmail("");
                setCategory("");
                setContact("");
                setLocation("");
                setDeliveryOptions("");
                setAbout("");
                console.log(response);
                navigate(-1);

            })
            .catch(function (error) {
                console.log(error);
            });
            
        }
    };
    return (
        <div className="w-full h-screen flex items-start justify-start">
        <Message page="register"/>
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
                    Register Your Business
                </h1>
                <div className="flex flex-col gap-3">
                    {/* name */}
                    <div className="flex flex-col gap-.5">
                    <p className="font-titleFont text-base font-semibold text-gray-600">
                        business name
                    </p>
                    <input
                        onChange={handleName}
                        value={name}
                        className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-black outline-none"
                        type="text"
                        placeholder="eg. WeFashions"
                    />
                    {errName && (
                        <p className="text-sm text-themeColor font-titleFont font-semibold px-4">
                        <span className="font-bold italic mr-1">!</span>
                        {errName}
                        </p>
                    )}
                    </div>
                    {/* Email */}
                    <div className="flex flex-col gap-.5">
                    <p className="font-titleFont text-base font-semibold text-gray-600">
                        Bussiness Email
                    </p>
                    <input
                        onChange={handleEmail}
                        value={email}
                        className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-black outline-none"
                        type="email"
                        placeholder="wefashion@yahoo.com"
                    />
                    {errEmail && (
                        <p className="text-sm text-themeColor font-titleFont font-semibold px-4">
                        <span className="font-bold italic mr-1">!</span>
                        {errEmail}
                        </p>
                    )}
                    </div>

                    {/* about */}
                    <div className="flex flex-col gap-.5">
                    <p className="font-titleFont text-base font-semibold text-gray-600">
                        About Business
                    </p>
                    <input
                        onChange={handleAbout}
                        value={about}
                        className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-black outline-none"
                        type="text"
                        placeholder="Write something about your business"
                    />
                    {errAbout && (
                        <p className="text-sm text-themeColor font-titleFont font-semibold px-4">
                        <span className="font-bold italic mr-1">!</span>
                        {errAbout}
                        </p>
                    )}
                    </div>

                    {/* contact */}
                    <div className="flex flex-col gap-.5">
                    <p className="font-titleFont text-base font-semibold text-gray-600">
                        Business Contact
                    </p>
                    <input
                        onChange={handleContact}
                        value={contact}
                        className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-black outline-none"
                        type="text"
                        placeholder="123456789"
                    />
                    {errContact && (
                        <p className="text-sm text-themeColor font-titleFont font-semibold px-4">
                        <span className="font-bold italic mr-1">!</span>
                        {errContact}
                        </p>
                    )}
                    </div>

                    {/* location */}
                    <div className="flex flex-col gap-.5">
                    <p className="font-titleFont text-base font-semibold text-gray-600">
                        Business Location
                    </p>
                    <input
                        onChange={handleLocation}
                        value={location}
                        className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-black outline-none"
                        type="text"
                        placeholder="eg Kampala"
                    />
                    {errLocation && (
                        <p className="text-sm text-themeColor font-titleFont font-semibold px-4">
                        <span className="font-bold italic mr-1">!</span>
                        {errLocation}
                        </p>
                    )}
                    </div>

                    {/* deliveryOptions */}
                    <div className="flex flex-col gap-.5">
                    <p className="font-titleFont text-base font-semibold text-gray-600">
                        delivery options offerred
                    </p>
                    <input
                        onChange={handleDeliveryOptions}
                        value={deliveryOptions}
                        className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-black outline-none"
                        type="text"
                        placeholder="delivery options"
                    />
                    {errDeliveryOptions && (
                        <p className="text-sm text-themeColor font-titleFont font-semibold px-4">
                        <span className="font-bold italic mr-1">!</span>
                        {errDeliveryOptions}
                        </p>
                    )}
                    </div>

                    {/* category */}
                    <div className="flex flex-col gap-.5">
                    <p className="font-titleFont text-base font-semibold text-gray-600">
                        Category
                    </p>
                    <select
                        onChange={handleCategory}
                        value={category}
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
                    {errCategory && (
                        <p className="text-sm text-themeColor font-titleFont font-semibold px-4">
                        <span className="font-bold italic mr-1">!</span>
                        {errCategory}
                        </p>
                    )}
                    </div>


                    <button
                    onClick={handleRegister}
                    className="bg-gray-500 hover:bg-black w-full text-gray-200 text-base font-medium h-10 rounded-md hover:text-white duration-300"
                    >
                    Register Business
                    </button>
                </div>
                </div>
            </form>
        </div>
        )}
        
        </div>
    );
    };

export default Register;
