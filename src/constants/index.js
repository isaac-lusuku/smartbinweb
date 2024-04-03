import {
    laptop1,
    emptyCart,
    paymentCard,
    bed,
    bmx_bike,
    makeup_pack,
    cat,
    dog,
    home,
    iphone_14,
    mini_fridge,
    motorsport,
    rent_space,
    rest_chair,
    shelf,
    smart_tv,
    sneaker,
    sofas,
    sweater,
    vehicle,
    vr_headset,
    women_handbag,
} from "../assets/images/index";

import "./style.css";

// =================== NavBarList Start here ====================
export const navBarList = [
  {
    _id: 1001,
    title: "Home",
    link: "/",
  },
  {
    _id: 1002,
    title: "Shop",
    link: "/shop",
  },
  {
    _id: 1003,
    title: "About",
    link: "/about",
  },
  {
    _id: 1005,
    title: "Sell",
    link: "/sell",
  },
];
// =================== NavBarList End here ======================
// =================== Special Offer data Start here ============
export const SampleData = [
  {
    _id: "201",
    img: iphone_14,
    productName: "iphone 14",
    price: "3500000",
    color: "Blank and White",
    badge: true,
    des: "Brand new in perfect condition and comes with a year warranty, comes with all the extra accessories.",
    cat: "electronics",
  },
  {
    _id: "202",
    img: laptop1,
    productName: "HP laptop",
    price: "2000000",
    color: "Gray",
    badge: false,
    des: "Brand new in perfect condition and comes with a year warranty, comes with all the extra accessories..",
    cat: "electronics",
  },
  {
    _id: "203",
    img: vr_headset,
    productName: "VR Headset",
    price: "1500000",
    color: "Mixed",
    badge: true,
    des: "Brand new in perfect condition and comes with a year warranty, comes with all the extra accessories..",
    cat: "electronics",
  },
  {
    _id: "204",
    img: vehicle,
    productName: "Benz",
    price: "150000000",
    color: "Black",
    badge: false,
    des: "Brand new in perfect condition and comes with a year warranty, comes with all the extra accessories..",
    cat: "automobiles",
  },
  {
    _id: "205",
    img:motorsport,
    productName: "MotorSport Bike",
    price: "9000000",
    color: "White",
    badge: true,
    des: "Brand new in perfect condition and comes with a year warranty, comes with all the extra accessories..",
    cat: "automobiles",
  },
  {
    _id: "206",
    img: bmx_bike,
    productName: "BMX bike",
    price: "1000000",
    color: "Black",
    badge: false,
    des: "Brand new in perfect condition and comes with a year warranty, comes with all the extra accessories..",
    cat: "automobiles",
  },
  {
    _id: "207",
    img:women_handbag,
    productName: "Women Handbag",
    price: "60000",
    color: "Mixed",
    badge: true,
    des: "Amazing designs, you can wear it with any of your favorite atires, it belongs to your closet, a few units left.",
    cat: "fashion",
  },
  {
    _id: "208",
    img: sweater,
    productName: "sweater",
    price: "50000",
    color: "Black",
    badge: true,
    des: "Amazing designs, you can wear it with any of your favorite atires, it belongs to your closet, a few units left.",
    cat: "fashion",
  },
  {
    _id: "209",
    img: sneaker,
    productName: "Sneakers",
    price: "120000",
    color: "Mixed",
    badge: true,
    des: "Amazing designs, you can wear it with any of your favorite atires, it belongs to your closet, a few units left.",
    cat: "fashion",
  },
  {
    _id: "210",
    img: makeup_pack,
    productName: "Makeup Pack",
    price: "70000",
    color: "Mixed",
    badge: true,
    des: "Amazing designs, you can wear it with any of your favorite atires, it belongs to your closet, a few units left.",
    cat: "fashion",
  },
  {
    _id: "211",
    img: rent_space,
    productName: "Rent Space",
    price: "800000",
    color: "Mixed",
    badge: true,
    des: "Alot of space for all that you may need it for, quit neighborhood and near the main road that leads to Kampala",
    cat: "Real-estate",
  },
  {
    _id: "212",
    img: home,
    productName: "Home",
    price: "1000000000",
    color: "Mixed",
    badge: true,
    des: "Alot of space for all that you may need it for, quit neighborhood and near the main road that leads to Kampala",
    cat: "Real-estate",
  },
  {
    _id: "213",
    img:dog,
    productName: "Dog",
    price: "25000",
    color: "Brown & White",
    badge: false,
    des: "He is a good boy, well trained and is nice with kids, the companion that is missing in your house.",
    cat: "Pets",
  },
  {
    _id: "214",
    img: cat,
    productName: "Cat",
    price: "22000",
    color: "White",
    badge: false,
    des: "He is a good girl, well trained and is nice with kids, the companion that is missing in your house.",
    cat: "Pets",
  },
  {
    _id: "215",
    img: rest_chair,
    productName: "Rest chair",
    price: "250000",
    color: "White",
    badge: true,
    des: "Very comfortable, its in a good condition, its easy to clean and comes in variour colors. the start of comfort",
    cat: "Furniture",
  },
  {
    _id: "216",
    img: sofas,
    productName: "Sofas",
    price: "350000",
    color: "White",
    badge: false,
    des: "Very comfortable, its in a good condition, its easy to clean and comes in variour colors. the start of comfort",
    cat: "Furniture",
  },
  {
    _id: "217",
    img: shelf ,
    productName: "Shelf",
    price: "250000",
    color: "Brown",
    badge: false,
    des: "Very comfortable, its in a good condition, its easy to clean and comes in variour colors. the start of comfort",
    cat: "Furniture",
  },
  {
    _id: "219",
    img: mini_fridge,
    productName: "Mini fridge",
    price: "220000",
    color: "White",
    badge: true,
    des: "Brand new in perfect condition and comes with a year warranty, comes with all the extra accessories..",
    cat: "electronics",
  },
  {
    _id: "220",
    img:smart_tv,
    productName: "Smart TV",
    price: "1500000",
    color: "Black",
    badge: false,
    des: "Brand new in perfect condition and comes with a year warranty, comes with all the extra accessories..",
    cat: "electronics",
  },
  {
    _id: "221",
    img:bed,
    productName: "Bed",
    price: "1200000",
    color: "Brown",
    badge: true,
    des: "Very comfortable, its in a good condition, its easy to clean and comes in variour colors. the start of comfort",
    cat: "Furniture",
  },
];
// =================== Special Offer data End here ==============

