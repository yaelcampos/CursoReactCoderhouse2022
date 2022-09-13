import "./style.css"
import React, { useState } from 'react'

const Counter = (props) => {
    const [items, setItems] = useState(0)

    
    const sumar = () => items <= props.stock -1 ? setItems(items + 1) : alert("Alcanzaste el maximo de stock") 
    const restar = () => items > 0 ? setItems(items - 1) : alert("Te quedaste sin stock ") 
        
    

return (
    <>
        <div className="DivContenedorBotones">
            <h3>Tengo {items} producto </h3>
            <div className="ContenedorBotones">
                <button onClick={restar}>Restar</button>
                <button onClick={sumar}>Suma</button>
            </div>
        </div>
    </>
)
}

export default Counter 