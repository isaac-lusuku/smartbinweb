import React from "react";

import Image from "../../designLayouts/Image";
import ShopNow from "../../designLayouts/buttons/ShopNow";

const Sale = () => {
  return (
    <div data-testid="sale" className="w-full flex items-center h-80 mb-20 bg-[#EEEEEE]  relative font-titleFont rounded-r-full">
      <div className="text-center h-140 md:h-200 lg:h-260 w-full mx-4 ">
        <div className="mx-8">
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-6">
            Lots Of Offers
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl mb-6">
            Up to{" "}
            <span className="text-4xl md:text-5xl lg:text-5xl font-bold">
              30%
            </span>{" "}
            off transport costs for meals bought through our platform{" "}
          </p>
          <div className=" mb-8">
            <ShopNow />
          </div>
        </div>
      </div>
      <Image
          className="w-5/12 h-full object-cover hidden md:inline-block rounded-r-full"
          imgSrc={"https://img.freepik.com/fotos-gratis/ainda-vida-de-delicioso-hamburguer-americano_23-2149637289.jpg?t=st=1711097694~exp=1711101294~hmac=05fb78d9a35921589bb4d29e3b5bc89317914c3d469416a5e21bdf5423450d44&w=2000"}
        />
    </div>
  );
};

export default Sale;
