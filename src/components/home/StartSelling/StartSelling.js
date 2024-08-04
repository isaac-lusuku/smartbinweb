import { React } from "react";
import { Link } from "react-router-dom";

const StartSelling = () =>{
    const divStyle = {
        backgroundImage: 'url("https://live-production.wcms.abc-cdn.net.au/354ff90686dfdfb50b215101889c7679?impolicy=wcms_crop_resize&cropH=562&cropW=1000&xPos=0&yPos=0&width=862&height=485")'
    }

return(
    <div  data-testid="start-selling" className="relative h-[60vh] w-4/5 mx-auto  mb-16 rounded-3xl bg-cover" style={divStyle}>
        <div className="relative text-white w-1/2 flex  mx-auto my-auto flex-col py-16  items-center justify-center gap-4 text-center">
            <h1 className="text-xl font-bold md:text-2xl lg:text-3xl">Order our product<span className="text-themeColor">with us</span> </h1>
            <p className="text-sm  lg:text-lg text-white">Invest in a cleaner future with our Smart Bin. By choosing our innovative solution, you’re not just managing waste—you’re making a statement for environmental responsibility. Perfect for homes, offices, and public spaces, our Smart Bin is your partner in achieving a sustainable lifestyle.</p>
            <div className="mt-4 border-2 border-black rounded-2xl text-black h-10 w-36 flex items-center justify-center ">
                <span>
                    ORDER NOW
                </span>
            </div>
        </div>
    </div>
)
}

export default StartSelling