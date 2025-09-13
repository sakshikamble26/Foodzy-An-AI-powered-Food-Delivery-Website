import { createContext, useState, useEffect } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

export const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});

    const addToCart = (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }));  // Add new item
        } else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));  // Increment existing item
        }
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };

    // Use useEffect to log cartItems whenever they change
    useEffect(() => {
        console.log(cartItems);
    }, [cartItems]);

    const contextValue = {
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        food_list,
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};
