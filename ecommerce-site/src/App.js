import './App.css';
import Navbar, { Landing } from './Navbar/navbar';
// import ProductList from './Products/hooks/useGetProducts';
import Products from './Products/products';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing/>
      <Products />
      {/* <ProductList/> */}
    </div>
  );
}

export default App;
