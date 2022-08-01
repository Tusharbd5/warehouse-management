import { useEffect, useState } from "react";

const useProducts = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('https://morning-spire-56199.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [items]);
    return [items, setItems];
}
export default useProducts;