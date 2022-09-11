import Item from "../Item/Item";
import productos from "../mockData";

const ItemList = ({ lista }) => {
console.log(lista)
    return (
        <div >
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