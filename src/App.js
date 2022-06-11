import './App.css';
import { useEffect, useState } from 'react';
import useGetProduct from './hooks/useGetProduct';
import Product from './components/Product';

const API = ' https://graditest-store.myshopify.com/products/free-trainer-3-mmw.js';

const App = () => {
  const [product, setProduct] = useState([])

  const products = useGetProduct(API);
	console.log(products);

  return (
   <>

      <Product
        key={products.id}
        product={products}
      />

      

    </>
  );
}

export default App;