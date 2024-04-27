import React from "react";
import { useDispatch, useSelector} from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "../../components/designLayouts/Image";
import { MdEditDocument } from "react-icons/md";
import { MdOutlineAttachEmail } from "react-icons/md";
import { MdDeliveryDining } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { MdCategory } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";



const BussInfo = (props) =>{
    const ownerId = useSelector((state) => state.mainReducer.userInfo)[0];
    const [businessData, setBusinessData] = useState(null);
    const userInfo = useSelector((state) => state.mainReducer.userInfo);
    const id = userInfo[0];
    const [loading, setLoading] = useState(true)



    useEffect(() => {
        const getUserInfo = async () => {
            try {
                console.log(id)
                const response = await axios.get('http://127.0.0.1:8000/business/business_info/', { params: { id: id } });
                setBusinessData(response.data);
                if (response.data){
                    setLoading(false)
                }
                console.log('Business info:', response.data);

            } catch (error) {
                console.error('Error getting business info:', error);
            }
        };
    
        if (id) {
            getUserInfo();
        }
    }, [id]); // Only run the effect when the `id` value changes

    return (
    <div className="h-full ">
        {loading === false? (
        <div className= "h-full w-full flex-col">
            <div className="h-2/5">
                <div className="h-full relative">
                    <Image imgSrc={businessData.banner} className={"w-full h-full object-cover inset-0"} style={{}}/>
                    <div class="absolute w-36 h-36 bg-black rounded-full left-5 bottom-0 transform translate-y-1/2">
                        <Image imgSrc={businessData.logo} className={"w-full h-full object-cover inset-0"} style={{borderRadius: "100%"}}/>
                    </div>
                    <div className="flex justify-center pr-4 mr-4 h-10  w-3/12 my-4 absolute right-0 cursor-pointer items-center gap-2 text-primeColor border-black border-2 rounded-2xl">
                        <MdEditDocument className="w-5 h-5" />
                        <p className="text-[14px] font-normal">EDIT PROFILE</p>
                    </div>
            </div>
        </div>
        <div className="h-3/5 flex-col pt-24 pl-10">
            <p className="text-3xl font-black">{businessData.name}</p>
            <div className="flex gap-4  items-center">
                <div className="flex-col border-b-[1px] border-grey-400 gap-0 w-full">
                    <p className="text-xs text-gray-400">About</p>
                    <p className="text-lg font-bold">{businessData.about}</p>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-3">

            <div className="flex gap-4  items-center">
                <MdDeliveryDining  className="w-6 h-6 text-gray-400"/>  
                <div className="flex-col  gap-0 w-full">
                    <p className="text-xs text-gray-400">Delivery</p>
                    <p className="text-sm font-semibold">{businessData.delivery_options}</p>
                </div>
            </div>
            <div className="flex gap-4  items-center">
                <MdCategory className="w-6 h-6 text-gray-400"/>  
                <div className="flex-col  gap-0 w-full">
                    <p className="text-xs text-gray-400">Category</p>
                    <p className="text-sm font-semibold">{businessData.category}</p>
                </div>
            </div>
            <div className="flex gap-4  items-center">
                <MdOutlineAttachEmail className="w-6 h-6 text-gray-400"/>  
                <div className="flex-col  gap-0 w-full">
                    <p className="text-xs text-gray-400">Email</p>
                    <p className="text-sm font-semibold">{businessData.email}</p>
                </div>
            </div>
            <div className="flex gap-4  items-center">
                <MdLocalPhone className="w-6 h-6 text-gray-400"/>  
                <div className="flex-col  gap-0 w-full">
                    <p className="text-xs text-gray-400">Contact</p>
                    <p className="text-sm font-semibold">{businessData.contact}</p>
                </div>
            </div>
            <div className="flex gap-4  items-center">
                <MdLocationOn className="w-6 h-6 text-gray-400"/>  
                <div className="flex-col  gap-0 w-full">
                    <p className="text-xs text-gray-400">Location</p>
                    <p className="text-sm font-semibold">{businessData.location}</p>
                </div>
            </div>
            </div>
            
        </div>
        </div>
        ):(<div>

        </div>)}
    </div>
)
}

export default BussInfo