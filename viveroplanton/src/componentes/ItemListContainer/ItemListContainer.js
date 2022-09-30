import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { getFirestore, getDocs, collection} from "firebase/firestore";

const ItemListContainer = () => {
    const { id } = useParams();
    const [productList, setProductList] = useState([])
 
   

    

    const getProducts = () => {
            const db = getFirestore();
            const querySnapshot = collection(db, 'items');
            getDocs(querySnapshot).then((response) => {
                const data = response.docs.map((doc) => {
                    return doc.data();
                });
            });
            
        }
    
    return (
        <>
            <ItemList lista={productList}/>
        </>

    );
}

export default ItemListContainer