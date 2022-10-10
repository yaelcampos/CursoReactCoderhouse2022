import "./ItemDetail.css";
import Counter from "../CounterButton/CounterButton";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from 'react-router-dom';


const ItemDetail = ( { item }) => {
    const { addToCart } = useContext(CartContext);
    const [stock, setStock] = useState(1)

   function onAdd(item) {
        addToCart(item, stock)
   }

    return ( 
        <div className="ContenedoritemDetail">
            <div className="itemDetailImg">
                <img src={'../../../public/img' + item.img}/>
            </div>
            <div className="itemDetail">
                <h1>{item.title}</h1>
                <h1>{item.description}</h1>
                <h1>${item.price}</h1>
                <Counter stockProductos={item.stock}  stock={stock}  setStock={setStock}/>
                <div>
                    <button className="btnAñadir" onClick={() => onAdd(item)}>
                    <strong>Añadir al carrito</strong>
                    </button>
                    <Link to={'/productos'}><button className="btnCarrito" >Seguir Comprando</button></Link>
                    <Link to={'/cart/'} ><button  className="btnCarrito"  >Ir a pagar</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail





