import  { useState } from "react";
import { addToCartContext } from "../components/addToCartContexnt";

// eslint-disable-next-line react/prop-types
const ContextProvider = ({children}) => {
    const [carts, setCart] = useState([]);
    const [wishlist, setWishlist] = useState([]);
    return (
        <addToCartContext.Provider value={{carts,setCart,wishlist,setWishlist}}>
            {children}
        </addToCartContext.Provider>
    );
};

export default ContextProvider;