import React, { useRef, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Image from "../../components/designLayouts/Image";
import { MdOutlineAttachEmail } from "react-icons/md";
import { MdOutlinePermPhoneMsg } from "react-icons/md";
import { MdEditLocationAlt } from "react-icons/md";
import { MdPhotoCamera } from "react-icons/md";
import { MdEditDocument } from "react-icons/md";
import { resetRedux } from "../../redux/mainSlice";
import { useDispatch, useSelector } from "react-redux";
import Favorites from './Favorites';
import axios from "axios";
import SpecialCase from "../../components/SpecialCase/SpecialCase";
import Header from '../../components/home/Header/Header';
import Footer from '../../components/home/Footer/Footer';
import FooterBottom from '../../components/home/Footer/FooterBottom';
import { DNA } from 'react-loader-spinner';


const Profile = () => {
    const dispatch  = useDispatch()
    const fileInputRef = useRef(null);
    const [logInStatus, setLogInStatus] =  useState(false)
    const [userData, setUserData] = useState(null);
    const userInfo = useSelector((state) => state.mainReducer.userInfo);
    const id = userInfo[0];
    const [loading, setLoading] = useState(true)

    const cartProducts = useSelector((state) => state.mainReducer.products);
    const favorites = useSelector((state) => state.mainReducer.favorites);


    useEffect(() => {
        if (id) {
            setLogInStatus(true);
        }
    }, [id]);

    console.log(id);

    
    useEffect(() => {
        const getUserInfo = async () => {
            try {
                console.log(id)
                const response = await axios.get('https://lusukugroup21.online/user/userinfo', { params: { id: id } });
                if (response){
                    setUserData(response.data);
                    setLoading(false)
                }
                console.log('User info:', response.data);
            } catch (error) {
                console.error('Error getting user info:', error);
            }
        };
    
        if (id) {
            getUserInfo();
        }
    }, [id]); // Only run the effect when the `id` value changes

    const sendCart = async () => {
        try {
            console.log(cartProducts)
            const response = await axios.post('https://lusukugroup21.online/product/updatecart/',
            {
                id : id,
                cartItems : cartProducts
            },{
                headers: {'Content-Type': 'application/json'}
            }
            );
            console.log(response);
        } catch (error) {
            console.error('Error sending cart', error);
        }
    };

    const sendFavorites = async () => {
        try {
            console.log(favorites)
            const response = await axios.post('https://lusukugroup21.online/product/updatefavorites/',
            {
                id : id,
                favorites : favorites
            },{
                headers: {'Content-Type': 'application/json'}
            }
            );
            console.log(response);
        } catch (error) {
            console.error('Error sending favorites', error);
        }
    };

    const LogOut = () =>{
        sendCart();
        sendFavorites();
        dispatch(resetRedux());
        setLogInStatus(false);
        localStorage.clear();
    }
    
     
    const uploadImage = async (file) => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('user_id', id)
    
        try {
            const response = await axios.put('https://lusukugroup21.online/user/avatar/', formData);
            console.log('Uploaded image URL:', response.data.url);
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    }
    
    const handleButtonClick = () => {
        fileInputRef.current.click(); 
      };

    const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
        uploadImage(file);
        console.log("the image has been recieved")
    }
    };

    return (
        <div>
            {/* {loading === false?( */}
                <div>
            <Header />
            <div className='w-full flex justify-end items-end'><SpecialCase /></div>
            <div className="h-[90vh] flex items-center justify-center my-20 ">
            {logInStatus === false ? (
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="flex flex-col mdl:flex-row justify-center items-center gap-4 pb-20"
                    >
                    <div>
                        <img
                        className="w-80 rounded-lg p-4 mx-auto"
                        src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxGl4CWJAQoOoZMscmR6jgZpNwTWEqDD6TLPX4HuHRh2O03VkSAf-UdYZTG9j02cZv3OU&usqp=CAU"}
                        alt="emptyCart"
                        />
                    </div>
                    <div className="max-w-[500px] p-4 py-8 bg-white flex gap-4 flex-col items-center rounded-md shadow-lg">
                        <h1 className="font-titleFont text-xl font-bold uppercase">
                        You are currently not LOGGED IN
                        </h1>
                        <p className="text-sm text-center px-10 -mt-2">
                        You are currently logged out of your account OR you do nothave an account 
                        continue to log in page or signup to access lots of features
                        </p>
                        <Link to="/signin">
                        <button className="bg-primeColor rounded-md cursor-pointer hover:bg-black active:bg-gray-900 px-8 py-2 font-titleFont font-semibold text-lg text-gray-200 hover:text-white duration-300">
                            Sign in 
                        </button>
                        </Link>
                    </div>
                    </motion.div>
            ):(loading == false? (
                <div className='flex w-full justify-center gap-4 my-10 py-10'>
                <div className="w-4/1 my-10 flex-col  items-end">
                    <div className="aspect-w-1 aspect-h-1 w-72 h-72 relative " >
                        <Image imgSrc={userData.avatar_link} className={"w-full h-full object-cover inset-0"} style={{borderRadius: "100%"}}/>
                        <div onClick={handleButtonClick}
                        className='absolute bottom-3 right-0 z-50 flex justify-center items-center h-8  w-32 cursor-pointer gap-2 bg-primeColor text-white border-white border-2 rounded-2xl'>
                            <input
                                type="file"
                                ref={fileInputRef}
                                onChange={handleFileChange}
                                style={{ display: 'none' }} 
                            />
                            <button >
                                <MdPhotoCamera />
                            </button>
                            <p>Update</p>
                        </div>
                    </div>
                    <div className="flex justify-end items-end pt-6  "><p className=" font-bold text-3xl  w-full border-b-white">{userData.user_name}</p></div>
                    <div className="flex justify-center  h-10  w-full cursor-pointer items-center gap-2 text-primeColor border-black border-2 rounded-2xl">
                        <MdEditDocument className="w-5 h-5" />
                        <p className="text-[14px] font-normal">EDIT PROFILE</p>
                    </div>
                    <div className="flex-col justify-center items-center py-4">
                        <div className="flex gap-4 items-center">
                            <MdEditLocationAlt className="w-6 h-6 text-gray-400"/>  
                            <div className="flex-col border-b-[1px] border-grey-400  gap-0 w-full">
                                <p className="text-xs text-gray-400">About</p>
                                <p className="text-sm">{userData.bio}</p>
                            </div>
                        </div>
                        <div className="flex gap-4  items-center">
                            <MdOutlinePermPhoneMsg className="w-6 h-6 text-gray-400"/>  
                            <div className="flex-col border-b-[1px] border-grey-400  gap-0 w-full">
                                <p className="text-xs text-gray-400">Contact</p>
                                <p className="text-sm">{userData.phone}</p>
                            </div>
                        </div>
                        <div className="flex gap-4  items-center">
                            <MdOutlineAttachEmail className="w-6 h-6 text-gray-400"/>  
                            <div className="flex-col border-b-[1px] border-grey-400 gap-0 w-full">
                                <p className="text-xs text-gray-400">Email</p>
                                <p className="text-sm">{userData.email}</p>
                            </div>
                        </div>
                    <div className='flex justify-center items-center'>
                        <div 
                        onClick={LogOut}
                        className="mt-4 border-2 border-themeColor rounded-2xl text-themeColor h-10 w-36 flex items-center justify-center">
                            <span>
                                LOGOUT
                            </span>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="w-6/12  h-[90vh] overflow-y-auto overflow-hidden py-10"
                        style={{"overflow-y": "scroll", "scrollbar-width": "none"}}>
                        <Favorites/></div>

                </div>

            ):(
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
            ))

            }</div>
                <Footer />
                <FooterBottom />
            </div>
            {/* )} */}
        </div>
        
        
    )
}

export default Profile