import './products.css'
 import {useGetProducts} from "./hooks/useGetProducts";
 import ProductCard from '../Atom/ProductCard';

const Products = () => {
  const { products, error, loading } = useGetProducts();


  return (
    <div>
      {error && <h2>{error}</h2>}
      {loading && <h2>{error}</h2>}
      {products.length > 0 ? (
        products.map((product) => (
            <ProductCard
           key={product.id}
           image = {product.image}
           product = {product.title}
            // <h3>{product.title}</h3>
          />
        ))
      ) : !loading && <h2>No products found</h2>}
    </div>
  );
};

export default Products;