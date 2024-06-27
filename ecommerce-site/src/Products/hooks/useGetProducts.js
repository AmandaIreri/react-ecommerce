import { getProducts } from '../utils';
import { useState, useEffect } from 'react';


export function useGetProducts() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await getProducts();
        // console.log({data})
        setProducts(data);
        setLoading(false);
      } catch (error) {
        setError(`Error: ${error.message}`);
        setLoading(false)
      }
    };

    fetchProducts();
  }, []);
  
    return{products,error,loading};

}

// export default useGetProducts;