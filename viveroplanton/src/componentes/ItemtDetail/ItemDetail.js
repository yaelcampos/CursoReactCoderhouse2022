import "./ItemDetail.css"

const ItemDetail = ( { item }) => {
console.log(item)
    return (
        <div className="prueba">
            <h1>{item.title}</h1>
            <h1>{item.description}</h1>


        </div>
    );
};

export default ItemDetail





