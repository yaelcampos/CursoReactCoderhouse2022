import { useContext } from "react";
import './Cart.css';
import { CartContext } from "../../context/CartContext";
import {Link} from 'react-router-dom';

const Cart = () => {
        const { cart, addToCart, removeItem } = useContext(CartContext);

    return (
        <div className="contenedorCarrito">
            <h1>Cart</h1>
            {cart.length  === 0 ? (
                <>
                    (alert("No hay productos en tu carrito")) 
                    <Link to={'/'}> Volver a comprar </Link> */
                </> 
                ) : (<>
                {cart.map((item) => (  
                <div key={item.id}>
                    <img className="imagenCarrito" src={item.image} alt={item.title}/>
                    <h3>{item.title}</h3>
                    <p>Precio : ${item.price}</p>
                    <p>Cantidad :{item.cantidad}</p>
                    <button className="removeItem" onClick={() => removeItem(item.id)}> Eliminar productos</button>
                </div>
                ))}
                </>
            )}
    </div>);
};

export default Cart