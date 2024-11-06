import  { useState } from "react";
import { addToCartContext } from "../components/addToCartContexnt";

// eslint-disable-next-line react/prop-types
const ContextProvider = ({children}) => {
    const [carts, setCart] = useState([]);
    const [wishlist, setWishlist] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [wishlistCount, setWishlistCount] = useState(0);
    const [subtotal, setSubtotal] = useState(0);
    const [modaltotal, setModaltotal] = useState(0);
    return (
        <addToCartContext.Provider 
            value={{carts,setCart,
                wishlist,setWishlist
                ,cartCount,setCartCount
                ,wishlistCount,setWishlistCount
                ,subtotal,setSubtotal,
                modaltotal,setModaltotal
                                                    }}>
                {children}
        </addToCartContext.Provider>
    );
};

export default ContextProvider;