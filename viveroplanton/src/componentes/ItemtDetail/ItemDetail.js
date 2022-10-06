import "./ItemDetail.css";
import Counter from "../CounterButton/CounterButton";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";


const ItemDetail = ( { item }) => {
    const { addToCart } = useContext(CartContext);
    const [stock, setStock] = useState(1)

   const rutaInicial = '../image';
   function onAdd(item) {
        addToCart(item, stock)
   }

    return ( 
        <div className="ContenedoritemDetail">
            <div className="itemDetailImg">
                <img src={rutaInicial + item.image}/>
            </div>
            <div className="itemDetail">
                <h1>{item.title}</h1>
                <h1>{item.description}</h1>
                <h1>${item.price}</h1>
                <Counter stockProductos={item.stock}  stock={stock}  setStock={setStock}/>
                <button className="btnAñadir" onClick={() => onAdd(item)}>
                    <strong>Añadir al carrito</strong>
                </button>
            </div>
        </div>
    );
};

export default ItemDetail





