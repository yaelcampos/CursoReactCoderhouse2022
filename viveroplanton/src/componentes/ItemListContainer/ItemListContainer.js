import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productos from "../mockData";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
    const { id } = useParams();
    const [productList, setProductList] = useState([])
    useEffect(() => {
        getProducts.then((response) => {
            setProductList(response);
        });

    }, []);
    

    const getProducts = new Promise((resolve, reject) => {
            setTimeout(()=> {
                console.log(id)
                if (id != undefined) {
                    console.log("hola charo")
                    resolve(productos.filter((item) => item.categoria == id))
                }
            resolve(productos)
            },2000)
        })
    
    return (
        <>
            <ItemList lista={productList}/>
        </>

    );
}

export default ItemListContainer