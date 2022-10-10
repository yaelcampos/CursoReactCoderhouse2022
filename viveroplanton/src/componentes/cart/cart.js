import { useContext } from "react";
import './Cart.css';
import { CartContext } from "../../context/CartContext";
import {Link} from 'react-router-dom';
import moment from 'moment';
import { getFirestore, collection , addDoc} from "firebase/firestore";


const Cart = () => {
        const { cart, removeItem } = useContext(CartContext);

        const createOrder = () => {
            const db = getFirestore();
            const order = {
                buyer: {
                    name:'Yael',
                    phone: '673567',
                    email: 'blabla@test.com'
                },
                items: cart, 
                total: cart.reduce((valorPasado, valorActual) => valorPasado + (valorActual.price 
                    * valorActual.cantidad) , 0),
                date: moment().format('DD/MM/YYYY, h:mm:ss a'),
            };
            const query = collection(db, 'orders');
            addDoc(query, order)  
            .then(({id}) => {
                console.log(id)
                alert('Compra exitosa')})
            .catch(() => alert('No pudiste generar tu compra, intentalo más tarde'))
        }

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
                    <img className="imagenCarrito" src={'../../../public/image/Dragena.jpg'} alt={item.title}/>
                    <h3>{item.title}</h3>
                    <p>Precio : ${item.price}</p>
                    <p>Cantidad :{item.cantidad}</p>
                    <button className="removeItem" onClick={() => removeItem(item.id)}> Eliminar productos</button>
                </div>
                ))}
                </>
            )}
            <div>
                <button  className="btnCrearOrden" onClick={createOrder}>Crear Orden</button>

            </div>
    </div>);
};

export default Cart