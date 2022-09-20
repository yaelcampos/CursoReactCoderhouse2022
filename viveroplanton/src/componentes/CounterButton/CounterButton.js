import "./style.css"
import React, { useState } from 'react'
import { Link } from "react-router-dom"

const Counter = (props) => {
    const [stock, setStock] = useState(0)

    const sumar = () => stock <= props.stockProductos -1 ? setStock(stock + 1) : alert("Alcanzaste el maximo de stock") 
    const restar = () => stock > 0 ? setStock(stock - 1) : alert("Te quedaste sin stock ") 
        
    const handleClick = () => {
        console.log(stock)
    }

return (
    <>
        <div className="DivContenedorBotones">
            <div className="ContenedorBotones">
                <button onClick={restar}>-</button>
                <h3>{stock}</h3>
                <button onClick={sumar}>+</button>
            </div>
            <Link to={'/cart'}className="btnAñadir" onClick={handleClick}><strong>Añadir al carrito</strong></Link>
        </div>
    </>
)
}

export default Counter 