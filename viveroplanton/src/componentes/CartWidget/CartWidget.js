import './style.css';
import carrito from '../../carrito.png';
import Cart from '../Cart/Cart';

const CartWidget = () => {
    return (
        <>
            <img src={carrito} alt="logo" />
            {Cart.length !== 0 ? <h6>{Cart.length}</h6>: ""}
        </>
        )
    }

export default CartWidget