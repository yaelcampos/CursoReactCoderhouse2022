
import { cartContext } from "./cartContext";
import { useState } from "react";

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item, cantidad) => {
        if(isInCart(item.id)) {
            alert('ya esta en tu carrito');
        } else {
            setCart([...cart, {...item,cantidad}])
        }
    };
    const isInCart = (id) => {
        return cart.some((item)=>  item.id === id);
    };
    const clear = () => {
        setCart([]);
    }

  return (
    <cartContext.Provider value={{ cart, addToCart , isInCart, clear}}> 
        { children}
    </cartContext.Provider>
  )
}

