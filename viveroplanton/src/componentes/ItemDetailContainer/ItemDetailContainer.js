
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import './ItemDetailContainer.css';
import productos from "../mockData";
import ItemDetail from "../ItemtDetail/ItemDetail";
import { getFirestore, doc, getDoc} from 'firebase/firestore';


const ItemDetailContainer = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const db = getFirestore();
    const queryDoc = doc(db,'items', 'DEuR7n5Fv2GIqVL3ENgb');
    getDoc(queryDoc).then(res => {console.log(res.id);
        console.log(res.data());
    }) .catch(err => console.log(err));

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
            <Link to= "/cart">Carrito</Link>
            <ItemDetail item={product} 
            />
        </div>
    );
};

export default  ItemDetailContainer
