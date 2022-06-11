import { useEffect, useState } from "react";
import axios from "axios";

const useGetProduct = (API) => {
    const [ products, setProducts ] = useState([]);

	useEffect(() => {
        const callback = async () => {
            const response = await axios(API);
            setProducts(response.data);
        }
        callback();
	}, []);
    return products;
}

export default useGetProduct;