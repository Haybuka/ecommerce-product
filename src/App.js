import React,{useState,memo} from 'react'
import product1 from './assets/images/image-product-1.jpg'
import product2 from './assets/images/image-product-2.jpg'
import product3 from './assets/images/image-product-3.jpg'
import product4 from './assets/images/image-product-4.jpg'
import {v4 as uuid} from 'uuid'
import Navbar from './component/Navbar';
import Product from './component/Product';
import './App.css';

function App() {
  let [toggleNav,setToggleNav] = useState(false)
  let [cartItem,setCartItem] = useState([])
  function updateCart(cartUpdate,id){
    setCartItem([ cartUpdate])
  }
  function deleteItem(id){
    let updatedCart = cartItem.filter(item => item.id !== id );
    setCartItem(updatedCart)
  }
  let products = [
    {
      productImages : [
        {
          "id":  1,
          "image":  product1,
          "title":  "Lorem Ipsum",
          "description":
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos assumenda, velit explicabo non at consequuntur accusamus hic optio alias error nisi sunt sint veniam aperiam similique dolor fugit itaque minima!"
        },
        {
          "id":  2,
          "image":  product2,
          "title":  "Lorem Ipsum",
          "description":
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos assumenda, velit explicabo non at consequuntur accusamus hic optio alias error nisi sunt sint veniam aperiam similique dolor fugit itaque minima!"
        },
        {
          "id":  3,
          "image":  product3,
          "title":  "Lorem Ipsum",
          "description":
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos assumenda, velit explicabo non at consequuntur accusamus hic optio alias error nisi sunt sint veniam aperiam similique dolor fugit itaque minima!"
        },
        {
          "id":  4,
          "image":  product4,
          "title":  "Lorem Ipsum",
          "description":
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos assumenda, velit explicabo non at consequuntur accusamus hic optio alias error nisi sunt sint veniam aperiam similique dolor fugit itaque minima!"
        },
      ],
      baseProduct : product4,
      productName : 'fall limited edition sneakers',
      discountPrice : 125,
      discount : 50,
      amount : 0 ,
      productPrice : 150,
      id:uuid(),
      description:"These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer."
    }
  ]
  return (
    <div className={toggleNav ? "App ":"App h-screen overflow-hidden"}>
       <Navbar toggleNav={toggleNav} cartItem={cartItem} deleteItem={deleteItem} setToggleNav={setToggleNav} updateCart={updateCart}/>
       {products.map(product=>(
          <Product {...product} updateCart={updateCart} key={product.id} id={product.id}/>
       ))}
    </div>
  );
}

export default memo(App);