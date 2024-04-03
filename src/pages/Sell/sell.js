import react from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Sell = () => {
    return(
        <div>
            <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col mdl:flex-row justify-center items-center gap-4 pb-20"
            >
                <div>
                    <img
                    className="w-80 rounded-lg p-4 mx-auto"
                    src={"https://st3.depositphotos.com/18826394/34650/v/450/depositphotos_346509240-stock-illustration-sad-sorry-face-expression-cup.jpg"}
                    alt="emptyCart"
                    />
                </div>
                <div className="max-w-[500px] p-4 py-8 bg-white flex gap-4 flex-col items-center rounded-md shadow-lg">
                    <h1 className="font-titleFont text-xl font-bold uppercase">
                    the sell feature NOT AVAILABLE YET
                    </h1>
                    <p className="text-sm text-center px-10 -mt-2">
                    We are sorry to inform you dear estimed customer that the sell feture is still
                    in development and shall be coming soon... we shall send you an email on its arrival
                    </p>
                    <Link to="/signin">
                    <button className="bg-primeColor rounded-md cursor-pointer hover:bg-black active:bg-gray-900 px-8 py-2 font-titleFont font-semibold text-lg text-gray-200 hover:text-white duration-300">
                        Sign in 
                    </button>
                    </Link>
                </div>
            </motion.div>
        </div>

    )
}

export default Sell