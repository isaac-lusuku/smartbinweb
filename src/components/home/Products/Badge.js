import React from "react";

const Badge = ({ text }) => {
  return (
    <div className="bg-primeColor w-[85px] h-[35px] text-white flex justify-center items-center text-base font-semibold rounded hover:bg-black duration-300 cursor-pointer">
      {text}
    </div>
  );
};

export default Badge;
