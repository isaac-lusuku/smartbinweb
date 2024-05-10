import react from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import BussInfo from "./BussInfo";
import ProductsSold from "./ProductsSold";
import Header from "../../components/home/Header/Header";
import Footer from "../../components/home/Footer/Footer";
import FooterBottom from "../../components/home/Footer/FooterBottom";
import { useDispatch, useSelector} from "react-redux";
import SpecialCase from "../../components/SpecialCase/SpecialCase";
import { useState, useEffect } from "react";
import axios from "axios";
import { DNA } from 'react-loader-spinner'



const Sell = () => {
    const userInfo = useSelector((state) => state.mainReducer.userInfo);
    const id = userInfo[0];
    const [businessData, setBusinessData] = useState(null);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const getUserInfo = async () => {
            try {
                console.log(id)
                const response = await axios.get('https://lusukugroup21.online/business/business_info/', { params: { id: id } });
                if (response){
                    setBusinessData(response.data);
                    setLoading(true)
                }
                
                console.log('Business info:', response.data);

            } catch (error) {
                console.error('Error getting business info:', error);
            }
        };
    
        if (id) {
            getUserInfo();
        }
    }, [id]);

    return(
        <div>
            <Header />
            <div className='w-full flex justify-end items-end'><SpecialCase /></div>
                <div>
                    {id ? (
                        <div>
                        {loading ? (
                            
                            <div className="h-auto py-6 pr-6">
    
                        {businessData ? (<div className="flex w-[100vw] h-auto gap-12 pr-10">
                            <div className="w-5/12 h-[100vh] sticky  border-black"><BussInfo/></div>
                            <div className="w-6/12  h-[100vh] overflow-y-auto overflow-hidden"
                            style={{"overflow-y": "scroll", "scrollbar-width": "none"}}>
                            <ProductsSold/></div>
                        </div>):(
                            <div>
                            <motion.div
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1 }}
                                className="flex flex-col mdl:flex-row justify-center items-center gap-4 pb-20">
                            <div>
                                <img
                                className="w-80 rounded-lg p-4 mx-auto"
                                src={"https://st3.depositphotos.com/18826394/34650/v/450/depositphotos_346509240-stock-illustration-sad-sorry-face-expression-cup.jpg"}
                                alt="emptyCart"
                                />
                            </div>
                            <div className="max-w-[500px] p-4 py-8 bg-white flex gap-4 flex-col items-center rounded-md shadow-lg">
                                <h1 className="font-titleFont text-xl font-bold uppercase">
                                You currently have no Business set up
                                </h1>
                                <p className="text-sm text-center px-10 -mt-2">
                                Dear customer, in order to sell you need to first set up a business 
                                registered on our app and you can post anything for sell
                                </p>
                                <Link to="/register">
                                <button className="bg-primeColor rounded-md cursor-pointer hover:bg-black active:bg-gray-900 px-8 py-2 font-titleFont font-semibold text-lg text-gray-200 hover:text-white duration-300">
                                    Register Business 
                                </button>
                                </Link>
                            </div>
                        </motion.div>
                        </div>
                    )}
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
                        )}                
                    </div>
                    ):(
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
                    )}
                </div>
                
                
            <Footer />
            <FooterBottom />
        </div>
        

    )
}

export default Sell