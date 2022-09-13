import "./item.css"
import productos from "../mockData";
import Counter  from "../CounterButton/CounterButton";


const Item = ({title, price, image, stock}) => {
    return (
    <div>
        <div className="divCardProductos">
            <h2>{title}</h2>
            <img width={'200px'} src={image} alt={title}/>
            <h3>Precio:{price}</h3>
            <Counter stock = {stock}/> 
        </div>
        
    </div>
    );
};

export default Item;