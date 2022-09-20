import "./ItemDetail.css";
import Counter from "../CounterButton/CounterButton";

const ItemDetail = ( { item }) => {

    return (
        <div className="ContenedoritemDetail">
            <div className="itemDetailImg">
                <img src={item.image}/>
            </div>
            <div className="itemDetail">
                <h1>{item.title}</h1>
                <h1>{item.description}</h1>
                <h1>${item.price}</h1>
                <Counter stockProductos={item.stock} />
            </div>
        </div>
    );
};

export default ItemDetail





