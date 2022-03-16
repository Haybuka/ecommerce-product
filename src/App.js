import React,{memo,useContext} from 'react'
import Navbar from './component/Navbar';
import Product from './component/Product';
import { productContext } from './context/productcontext';
import './App.css';

function App() {
  const {products,toggleNav} = useContext(productContext)
  return (
    <div className={toggleNav ? "App ":"App h-screen overflow-hidden"}>
       <Navbar />
       {products.map(product=>(
          <Product {...product} key={product.id} id={product.id}/>
       ))}
    </div>
  );
}

export default memo(App);