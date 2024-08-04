import Banner from "../../components/Banner/Banner";
import BannerBottom from "../../components/Banner/BannerBottom";
import Sale from "../../components/home/Sale/Sale";
import YearProduct from "../../components/home/YearProduct/YearProduct";
import PopularCategories from "../../components/home/PopularCategories/PopularCategories";
import StartSelling from "../../components/home/StartSelling/StartSelling";
import BestSellers from "../../components/home/BestSellers/BestSellers"

const Home = () => {

  return (
    <div>
      <div className="w-full mx-auto">
      <Banner />
      <BannerBottom />
      <PopularCategories />
      <div className="max-w-container mx-auto px-4">
      <BestSellers />
        <YearProduct />
        <Sale />
        <StartSelling />
        </div>
        </div>     
    </div>
  );
};

export default Home;
