import Item from "../Item/Item";
import './ItemList.css';



const ItemList = ({ lista }) => {

    return (
        <div className="divContenedorCardProductos">
            {
                lista.map((product) => (  
                    <Item 
                    image={product.image} 
                    title={product.title}
                    price={product.price} 
                    key={product.id}
                    />
            ))}
        </div>
    );
};

export default ItemList;