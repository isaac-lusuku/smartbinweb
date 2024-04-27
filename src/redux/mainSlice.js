import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  userInfo: [],
  products: [],
  checkedCategorys: [],
  favorites: [],
};


export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    addId: (state, action)=>{
      if (state.userInfo){
        state.userInfo = [action.payload]
      }else{
        state.userInfo = [action.payload]
      }
    },
    removeId: (state, action) =>{
      state.userInfo = [];
    },
    addToCart: (state, action) => {
      const item = state.products.find(
        (item) => item.id === action.payload.id
      );
      if (item) {
        item.quantity ++;
      } else {
        const product = {id:action.payload.id, quantity:1}
        state.products.push(product);
      }

      // Dispatch a success toast
      toast.success("Product added to cart");
    },
    addCartBoth: (state, action) =>{
      const item = state.products.find(
        (item) => item.id === action.payload.id
      );
      if (item) {
        item.quantity ++;
      } else {
        const product = {id:action.payload.id, quantity:action.payload.quantity}
        state.products.push(product);
      }
    },
    increaseQuantity: (state, action) => {
      const item = state.products.find(
        (item) => item.id === action.payload.id
      );
      if (item) {
        item.quantity++;
        // Dispatch a success toast
      }
    },
    drecreaseQuantity: (state, action) => {
      const item = state.products.find(
        (item) => item.id === action.payload.id
      );
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
        // Dispatch a success toast
      }
    },
    deleteItem: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
      // Dispatch a success toast
      toast.error("Product removed from cart");
    },
    resetCart: (state) => {
      state.products = [];
      // Dispatch a success toast
    },
    addToFavorites: (state, action) => {
      const item = state.favorites.find(
        (item) => item === action.payload.id
      );
      if (item) {
        toast.error("Product already in favorites")
      } else {
        const product_id = action.payload.id
        state.favorites.push(product_id);
        // Dispatch a success toast
        toast.success("Product added to favorites");
      }      
    },
    deleteFavorite: (state, action) => {
      state.favorites = state.favorites.filter(
        (item) => item !== action.payload
      );
      // Dispatch a success toast
      toast.error("Product removed from favorites");
    },
    updateFavorite: (state, action) => {
      const item = state.favorites.find(
        (item) => item === action.payload.id
      );
      if (!item) {      
        const product_id = action.payload.id
        state.favorites.push(product_id);
      }
    },

    resetRedux: (state, action) =>{
      state.userInfo = [];
      state.products = [];
      state.favorites = [];
      state.checkedCategorys =[];
    },

    toggleCategory: (state, action) => {
      const category = action.payload;
      const isCategoryChecked = state.checkedCategorys.some(
        (b) => b._id === category._id
      );

      if (isCategoryChecked) {
        state.checkedCategorys = state.checkedCategorys.filter(
          (b) => b._id !== category._id
        );
      } else {
        state.checkedCategorys.push(category);
      }
    },
  },
});

export const {
  addId,
  addToCart,
  increaseQuantity,
  drecreaseQuantity,
  deleteItem,
  resetCart,
  toggleLogIn,
  toggleCategory,
  removeId,
  addToFavorites,
  deleteFavorite, 
  resetRedux,
  addCartBoth,
  updateFavorite
} = mainSlice.actions;
export default mainSlice.reducer;
