import { React } from "react";
import Flex from "../../designLayouts/Flex";
import { CgMenuGridO } from "react-icons/cg";
import { Link } from "react-router-dom";


const CategoryDsign = ({imgScr, text}) =>{
   return  (<div className="flex flex-col gap-5 h-5/6 justify-center items-center group">
        <img  className=" w-10 h-10 md:w-20 md:h-20 lg:w-30 lg:h-30 xl:w-40 xl:h-40 rounded-full group-hover:brightness-50 duration-700" src={imgScr}/>
        <p className="text-[5px] md:text-xs lg:text-lg xl:text-xl font-semibold group-hover:underline underline-offset-4">{text}</p>
    </div>)
}

const categories = [
    {
        imgScr: "https://img.freepik.com/fotos-gratis/vista-lateral-shawarma-com-batatas-fritas-em-panelas-de-bordo_176474-3215.jpg?t=st=1710922182~exp=1710925782~hmac=a35d0ee5b432faa64956e955bd6d1c0c2ff158573a6442a4b189472d2ae2df42&w=1380",
        text: "Fast foods"
    },
    {
        imgScr: "https://img.freepik.com/fotos-gratis/carro-3d-com-cores-vibrantes_23-2150796926.jpg?t=st=1710922903~exp=1710926503~hmac=501370074cb8ba8d12ea0ce55b97e5f8a63fb8a09fbbe9c0ecb0374341b3adf9&w=1380",
        text: "Automobiles"
    },
    {
        imgScr: "https://img.freepik.com/fotos-gratis/dispositivo-de-tecnologia-com-fundo-de-natureza_23-2150470457.jpg?t=st=1710919958~exp=1710923558~hmac=97aadd6fcf4b5043f7f835d4029a6c0b9a2b228049a435b383d1f5b04456d065&w=1380",
        text: "Electronics"
    },
    {
        imgScr: "https://img.freepik.com/fotos-premium/roupa-adolescente-de-moda-outono-inverno_161568-3264.jpg?w=1380",
        text: "Fashion"
    },
    {
        imgScr: "https://img.freepik.com/fotos-gratis/modelo-de-casa-de-ferias-chave-e-desenho-em-area-de-trabalho-retro-conceito-de-venda-de-imoveis_1387-312.jpg?t=st=1710921314~exp=1710924914~hmac=db4700eb933b0a8f08fb82942a2903b58bd2e080ed4d7fc70e8d4fba72dde41b&w=826",
        text: "Real-estate"
    },
    {
        imgScr: "https://img.freepik.com/fotos-gratis/gatinho-adoravel-com-parede-monocromatica-atras-dela_23-2148955136.jpg?t=st=1710921491~exp=1710925091~hmac=09a53e9403272ec5c87e66b22c2b6d07f25fc7ab007e7b451ef0d57908262d0c&w=900",
        text: "Pets"
    },
    {
        imgScr: "https://img.freepik.com/fotos-gratis/sofa-travesseiro_74190-3652.jpg?t=st=1710921715~exp=1710925315~hmac=a6e9227e40858f2e3bbab50b4e39b0ab874880d2dc8eab44d4d6334a6824d1af&w=826",
        text: "Furniture"
    }
]

const PopularCategories = () =>{
    return (<div data-testid="popular-categories" className="h-screen sm:h-[40vh] flex-col mt-12">
        <div className="flex justify-between h-1/6 items-center">
            <div className="flex gap-1 ml-20 text-2xl font-semibold">
                 <CgMenuGridO className="text-3xl text-themeColor" />
                <p >Explore Popular Categories</p>
            </div>
            <Link to="/shop">
                 <p  className="mr-20 text-xl hover:underline">see all</p>
            </Link>
        </div>
        <Flex className="flex gap-6 justify-evenly items-center h-5/6 w-11/12 mx-auto">
        {categories.map((category) => (
          <CategoryDsign {...category} />
        ))}
        </Flex>
    </div>)
}
export default PopularCategories