import { react } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const customStyles = {
    backgroundImage:"url('https://img.freepik.com/free-photo/full-shot-woman-online-shopping-concept_23-2149629600.jpg?t=st=1711181747~exp=1711185347~hmac=ed60944ba55d10a8393cbabd92c3df0cc67665759116b8661b10a36458377992&w=2000')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "rgba(0, 0, 0, 0.9)", 
}

const heading = "Start selling with US".split(" ")
const semiheading = "the PRODUCTS below are from PARTNERS selling with US".split(" ")
const text = "Unlock the potential of your products with our online platform! Reach a global audience, boost your sales, and connect with customers like never before. Join us today and let your products shine in the digital marketplace! start selling with us TODAY".split(" ")

const ShopBanner = () =>{
    return (
        <div className="h-[68vh] w-full mb-16 rounded-3xl" style={customStyles}>
            <div className="relative  bg-black top-0 left-0 h-full  text-white w-1/2 rounded-r-full  rounded-l-3xl rounded-t-none flex flex-col py-16 p-20 items-start justify-start gap-4 text-start">
            <div className="w-4/5 ">
            <div className="text-4xl font-bold">
                {heading.map((el, i) => (
                    <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 0.25,
                        delay: i / 10
                    }}
                    key={i}
                    >
                    {el}{" "}
                    </motion.span>
                ))}
            </div>
            <div className="text-2xl font-bold text-themeColor">
                {semiheading.map((el, i) => (
                    <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 0.25,
                        delay: (i+10)/ 10
                    }}
                    key={i}
                    >
                    {el}{" "}
                    </motion.span>
                ))}
            </div>
            <div className="text-xl text-gray-400">
                {text.map((el, i) => (
                    <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 0.25,
                        delay: (i+20) / 10
                    }}
                    key={i}
                    >
                    {el}{" "}
                    </motion.span>
                ))}
            </div>
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 0.1,
                    delay:6
                }}
                key={1}>
                    <Link to="/sell" className="mt-4 border-2 border-themeColor rounded-2xl text-themeColor h-10 w-36 flex items-center justify-center">
                        <span>
                                START NOW
                        </span>
                    </Link>
            </motion.span>

            </div>
            </div>
        </div>
    )
}

export default ShopBanner