import React from "react";

import Image from "../../designLayouts/Image";
import ShopNow from "../../designLayouts/buttons/ShopNow";

const Sale = () => {
  return (
    <div data-testid="sale" className="w-full flex items-center h-80 mb-20   relative font-titleFont rounded-r-full">
      <div className="w-1/2 md:w-2/3 xl:w-1/2 h-80   flex flex-col items-start  justify-center">
          <h2 class="text-2xl font-bold text-black mb-6 mx-auto ">Full Bin Alerts:</h2> 
          <p class="text-xl text-gray-800 leading-relaxed mb-4 w-2/3 mx-auto">
          Never worry about an overflowing bin again! Our Smart Bin sends real-time email notifications when it’s full, ensuring timely disposal and a cleaner space.
          </p>
        </div>
      <Image
          className="w-5/12 h-full object-cover hidden md:inline-block rounded-r-full"
          imgSrc={"data:image/jpeg;base64,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"}
        />
    </div>
  );
};

export default Sale;
