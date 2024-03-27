import {react} from "react"
import { emptyCart } from "../../assets/images";
import { BsCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Message = (props) => {
    const handlePage = () =>{
        if (props.page == "signup"){
            return {
                heading:"Get started for free",
                message:"Create your account to access more"
            }
        };
        if (props.page == "signin"){
            return {
                heading:"Stay sign in for more",
                message:"When you sign in, you are with us!"
            }
        }
    }

return (
<div className="w-2/3 hidden lgl:inline-flex h-full text-white rounded-r-[250px]">
    <div className="w-2/3 h-full bg-primeColor px-10 flex flex-col gap-6 justify-center rounded-r-[250px]">
      <Link to="/">
        <img src={emptyCart} alt="logoImg" className="w-28" />
      </Link>
      <div className="flex flex-col gap-1 -mt-1">
        <h1 className="font-titleFont text-xl font-medium text-themeColor">
          {handlePage().heading}
        </h1>
        <p className="text-base">{handlePage().message}</p>
      </div>
      <div className="w-[300px] flex items-start gap-3">
        <span className="text-themeColor mt-1">
          <BsCheckCircleFill />
        </span>
        <p className="text-base text-gray-300">
          <span className="text-white font-semibold font-titleFont">
            Get started shopping fast
          </span>
          <br />
          With us you can get into shopping and finding any products you love really
          first from a number of businesses that sale with us
        </p>
      </div>
      <div className="w-[300px] flex items-start gap-3">
        <span className="text-themeColor mt-1">
          <BsCheckCircleFill />
        </span>
        <p className="text-base text-gray-300">
          <span className="text-white font-semibold font-titleFont">
            Access all OUR services
          </span>
          <br />
          When you sign up or in you can freely access all our services all for
          free with a variety of promotions that come with laoyalty
        </p>
      </div>
      <div className="w-[300px] flex items-start gap-3">
        <span className="text-themeColor mt-1">
          <BsCheckCircleFill />
        </span>
        <p className="text-base text-gray-300">
          <span className="text-white font-semibold font-titleFont">
            Start selling on our platform
          </span>
          <br />
          Are you a business owner, you can start selling for as less
          as one dollar for your first month so what are you waiting for
        </p>
      </div>
      <div className="flex items-center justify-start gap-4 mt-10">
        <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
          Terms
        </p>
        <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
          Privacy
        </p>
        <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
          Security
        </p>
        <p className="text-sm font-titleFont font-semibold text-themeColor hover:text-white cursor-pointer duration-300">
          © GROUP 21
        </p>
      </div>
    </div>
  </div>)
}


export default Message