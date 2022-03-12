import React from 'react'
import product1 from '../assets/images/image-product-1.jpg'
import product2 from '../assets/images/image-product-2.jpg'
import product3 from '../assets/images/image-product-3.jpg'
import product4 from '../assets/images/image-product-4.jpg'
function Product() {
  return (
    <div className='Product lg:flex justify-between items-center my-8'>
      <aside className='Product-image'>
         <img src={product1} alt="" className='w-full h-full lg:rounded-xl'/>
         <div className='hidden lg:flex justify-between'>
            <img src={product1} alt="" className='w-1/4 h-20 m-4 ml-0 lg:rounded-xl'/>   
            <img src={product2} alt="" className='w-1/4 h-20 m-4 lg:rounded-xl'/>   
            <img src={product3} alt="" className='w-1/4 h-20 m-4 lg:rounded-xl'/>   
            <img src={product4} alt="" className='w-1/4 h-20 m-4 mr-0 lg:rounded-xl'/>   
         </div>
      </aside>
      <section className='Product-detail px-6 lg:px-20 py-4'>
         <h3 className='uppercase tracking-wider text-sm font-semibold text-orange-600 my-5'> sneaker company</h3>
         <p className='capitalize text-4xl font-bold my-4'>Fall limited edition sneakers</p>
         <p className='text-gray-500 text-justify'> These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
         <aside className='my-8 flex justify-between items-center lg:flex-col lg:block'>
           <div className='flex items-center'>
              <h4 className='text-2xl font-bold lg:my-1'>$125.00</h4>
              <span className='text-orange-500 bg-orange-200 text-sm px-2 py-1 ml-6 rounded-md'> 50%</span>
           </div>
           <p className='text-gray-500 line-through text-base'> $250.00</p>
         </aside>
         <form className='product-action lg:flex justify-between'>
            <div className='flex my-6 lg:my-0 justify-between items-center lg:w-1/3 lg:bg-gray-200 rounded-md lg:px-4'>
               <span className='text-orange-600 font-bold text-xl'> - </span>
               <p className='text-xl font-semibold'>0</p>
               <span className='text-orange-600 font-bold text-xl'>+</span>
            </div>
            <button className='bg-orange-400 w-full my-4 lg:my-0 text-white py-4 rounded-xl lg:w-2/3 lg:ml-4'>
              Add to cart
            </button>
         </form>
      </section>
    </div>
  )
}

export default Product