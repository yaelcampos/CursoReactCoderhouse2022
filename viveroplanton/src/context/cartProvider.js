
import { CartContext } from "./CartContext";
import { useState } from "react";


export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item, cantidad) => {
        console.log(item)
        console.log(cantidad)
        if(isInCart(item.id)) {
            alert('ya esta en tu carrito');
        } else {
            setCart([...cart, {...item, cantidad}])
        }
    };
    const isInCart = (id) => {
        return cart.some((item)=>  item.id === id);
    };
    const clear = () => {
        setCart([]);
    }

    const removeItem = (productId) => {
        let nuevoArreglo = [];
            cart.forEach(product => {
                if (product.id === productId) {
                    nuevoArreglo.push()
                } 
            });
    setCart(nuevoArreglo);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart , removeItem }}> 
            { children }
        </CartContext.Provider>
    )
}

