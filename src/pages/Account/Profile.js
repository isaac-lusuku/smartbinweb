import { react } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Image from "../../components/designLayouts/Image";
import { MdOutlineAttachEmail } from "react-icons/md";
import { MdOutlinePermPhoneMsg } from "react-icons/md";
import { MdEditLocationAlt } from "react-icons/md";
import { toggleLogIn } from "../../redux/mainSlice";

const Profile = () => {
    const dispatch  = useDispatch()
    const logInStatus  =  true//useSelector((state) => state.mainReducer.isLoggedIn)
    return (
        <div className="h-[90vh] flex items-center justify-center">
            {logInStatus == false ? (
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
            ):(<div className="w-6/12 h-5/6 bg-black text-white my-10 rounded-3xl shadow-xl border-b-[2px] relative grid grid-cols-6 grid-rows-2">
                    <div className="col-start-1 col-end-3 row-start-1 row-end-2 flex justify-center items-center"><Image imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsynwv-5qtogtOwJbIjaPFJUmHpzhxgqIAug&usqp=CAU" className={" rounded-full  w-[200px] h-[200px]"}/></div>
                    <div className="col-start-3 col-end-7 row-start-1 row-end-2 flex justify-end items-end mb-10   "><p className=" font-bold text-5xl  w-full border-b-white">User Name</p></div>
                    <div className="col-start-2 col-end-7 row-start-2 row-end-3 flex-col justify-center items-center">
                        <div className="flex gap-4 items-center">
                            <MdOutlineAttachEmail className="w-6 h-6 text-gray-400"/>  
                            <div className="flex-col border-b-[1px] border-grey-400 w-full">
                                <p className="text- text-gray-400">About</p>
                                <p className="text-lg">a shppoer by life style</p>
                            </div>
                        </div>
                        <div className="flex gap-4  items-center">
                            <MdOutlinePermPhoneMsg className="w-6 h-6 text-gray-400"/>  
                            <div className="flex-col border-b-[1px] border-grey-400 w-full">
                                <p className="text- text-gray-400">Contact</p>
                                <p className="text-lg">+256 7538593248</p>
                            </div>
                        </div>
                        <div className="flex gap-4  items-center">
                            <MdEditLocationAlt className="w-6 h-6 text-gray-400"/>  
                            <div className="flex-col border-b-[1px] border-grey-400 w-full">
                                <p className="text- text-gray-400">Location</p>
                                <p className="text-lg">Kikoni</p>
                            </div>
                        </div>
                    <div 
                    onClick={()=>dispatch(toggleLogIn())}
                    className="mt-4 border-2 border-themeColor rounded-2xl text-themeColor h-10 w-36 flex items-center justify-center">
                        <span>
                            START NOW
                        </span>
                    </div>
                    </div>
            </div>)}
        </div>
    )
}

export default Profile