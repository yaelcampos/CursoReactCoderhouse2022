import { useContext } from "react"
import './Cart.css'
import { CartContext } from "../../context/CartContext"

const Cart = () => {
        const { cart, addToCart, removeItem } = useContext(CartContext);
    return (
        <div className="contenedorCarrito">
            <h1>Cart</h1>
            {cart.lenght === 0 ? (<h2>No hay productos en tu carrito</h2>) : (
                <>
                </>
            )}
            {cart.map((item) => (  
                <div key={item.id}>
                    <img className="imagenCarrito" src={item.image} alt={item.title}/>
                    <h3>{item.title}</h3>
                    <p>Precio : ${item.price}</p>
                    <p>Cantidad :{item.cantidad}</p>
                    <button className="removeItem" onClick={() => removeItem(item)}> Eliminar productos</button>
                </div>
        ))}
    </div>);
};

export default Cart