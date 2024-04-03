import { React } from "react";
import { Link } from "react-router-dom";

const StartSelling = () =>{
    const divStyle = {
        backgroundImage: 'url("https://img.freepik.com/fotos-gratis/vista-frontal-do-carrinho-de-compras-de-segunda-feira-cibernetica-com-sacolas-e-espaco-de-copia_23-2148657638.jpg?t=st=1710971262~exp=1710974862~hmac=e13e2bed2ac02d1cd7f77ab1ac7bfa844b48653af28bb72e9fe380f337981386&w=2000")'
    }

return(
    <div  data-testid="start-selling" className="relative h-[60vh] w-4/5 mx-auto  mb-16 rounded-3xl bg-cover" style={divStyle}>
        <div className="relative text-white w-1/2 flex flex-col py-16 p-20 items-center justify-center gap-4 text-center">
            <h1 className="text-4xl font-bold">Start selling <span className="text-themeColor">with us</span> </h1>
            <p className="text-xl text-gray-400">Have been looking for the right opportunity and place to take your business to another level, look no more...what are waiting for, start selling with us TODAY</p>
            <Link to="/shop" className="mt-4 border-2 border-themeColor rounded-2xl text-themeColor h-10 w-36 flex items-center justify-center">
                <span>
                    START NOW
                </span>
            </Link>
        </div>
    </div>
)
}

export default StartSelling