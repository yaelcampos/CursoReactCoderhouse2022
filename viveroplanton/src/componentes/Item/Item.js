
const Item = ({title, price, image}) => {
    return (
    <div className="divCardProducto">
        <h2>{title}</h2>
        <img width={'200px'} src={image} alt={title}/>
        <h3>{price}</h3>
    </div>
    );
};

export default Item;