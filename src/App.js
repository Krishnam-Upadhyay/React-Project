import "./styles.css";
import '../node_modules/bootstrap/dist/css/bootstrap.css';

import ProductList from './Components/ProductList/ProductList';
import CreateProduct from "./Components/CreateProduct/CreateProduct";


export default function App() {
  return (
    <div>
      <CreateProduct />
      <ProductList />
    </div>
  );



}
