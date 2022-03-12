import React,{useState} from 'react'
import Navbar from './component/Navbar';
import Product from './component/Product';
import './App.css';

function App() {
  let [toggleNav,setToggleNav] = useState(false)

  return (
    <div className={!toggleNav ? "App h-screen overflow-hidden":"App"}>
       <Navbar toggleNav={toggleNav} setToggleNav={setToggleNav}/>
       <Product />
    </div>
  );
}

export default App;