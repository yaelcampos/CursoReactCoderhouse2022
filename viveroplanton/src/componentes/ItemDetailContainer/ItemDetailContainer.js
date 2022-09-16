
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './ItemDetailContainer.css';
import productos from "../mockData";
import ItemDetail from "../ItemtDetail/ItemDetail";


const ItemDetailContainer = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);

    const getProductos = new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos.filter ((item) => item.id == id))
        }, 1000)
        })

    useEffect(() => {
        getProductos.then((response) => {
            setProduct(...response)
        })
    }, [id])

    return (
        <div>
            <ItemDetail item={product} 
            />
        </div>
    );
};

export default  ItemDetailContainer
