import { useEffect, useState } from "react";
import productos from "../mockData";
import ItemList from "../ItemList/ItemList";


const ItemListContainer = ({greeting}) => {
    const [productList, setProductList] = useState([])

    useEffect(() => {
        getProducts.then((response) => {
            setProductList(response);
        });

    }, []);
    

    const getProducts = new Promise((resolve, reject) => {
            setTimeout(()=> {
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