import React from "react";
import Category from "./shopBy/Category";
import SellBanner from "./SellBanner";

const ShopSideNav = () => {
  return (
    <div className="w-full  h-full flex flex-col gap-36">
      <Category icons={false} />
      <SellBanner />
    </div>
  );
};

export default ShopSideNav;
