import React from 'react'
import Product from './Product'

function Cart({cartItem,deleteItem}) {
  return (
    <section className='Cart-section' >
           <h3 className=''>Cart</h3>
           {cartItem.length < 1 ? (
             <div className='px-4 h-40'>
                <p className='text-center'>your cart is empty</p>
             </div>) : 
              (
                cartItem.map(({id,productName,discountPrice,baseProduct,productPrice,quantity}) => (
                <>
                <aside className='Cart-items py-4' key={id}>
                  <div className=''>
                  
                      <aside className='w-14 h-14'>
                          <img src={baseProduct} alt="product thumbnail" className='w-full h-full rounded-md'/>
                      </aside>
                      <section className='ml-4 tracking-wider'>
                        <h4 className='tracking-wide text-lg text-gray-400'>{productName}</h4>
                        <p>
                            <span className='text-gray-400'>${discountPrice}.00 x {quantity}</span>
                            <span className='font-bold ml-2'> ${`${discountPrice * quantity}.00`}</span>
                        </p>
                      </section>
                  </div>
                  <svg onClick={e => deleteItem(id)} className="w-6 h-6 text-gray-400 font-bold cursor-pointer" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>
                
                   
                </aside>
              </>
                ))
           )}
          {cartItem.length > 0 &&  (
            <div className='px-4'>
                <button className='bg-orange-400 py-4 w-full rounded-lg my-6 text-white'>Checkout</button>
            </div>
          )}
   </section>
  )
}

export default Cart

