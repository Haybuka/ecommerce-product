import React, { memo, useState,useContext } from 'react'
import { productContext } from '../context/productcontext';
import { LightBox } from 'react-lightbox-pack'; 
import "react-lightbox-pack/dist/index.css";
import '../assets/styles/Product.css'
function Product({productPrice,baseProduct,discount,description,productImages,productName,discountPrice,id}) {
  const {updateCart} = useContext(productContext)

  //lightbox state
  const [toggle, setToggle] =  useState(false);
	const [sIndex, setSIndex] =  useState(0);
	// Handler
	const  lightBoxHandler  = (state, sIndex) => {
		setToggle(state);
		setSIndex(sIndex);
	};
  //end of lightbox state
  let [image,setImage] = useState(baseProduct)
  let [quantity,setQuantity] = useState(1)
  function handleChange(product,index){
    setImage(product.target.src)
  }
  function handleCount(action){
    if(quantity !== 0){
      switch (action) {
        case  "add":
          setQuantity(quantity + 1)
          break;
        case "minus":
           setQuantity(quantity - 1)
           break;
        default:
          break;
      }
    } else{
      setQuantity(1)
    }
  }
  function handleSubmit(e,id){
     e.preventDefault()
     let cartUpdate = {
      productPrice,discount,description,baseProduct,productImages,productName,discountPrice,id,quantity
     }
     updateCart(cartUpdate,id)
    
  }
  return (
    <div className='Product'>
      <aside className='Product-image cursor-pointer'>
       <img src={image} alt="product" className='w-full h-full lg:rounded-xl'/>

         <div className='hidden my-3 lg:flex justify-between image-group'>
            {productImages.map((item,index) =>(
              
              <img 
               key={index}
					     style={{ maxHeight:  "80vh", maxWidth:  "50vw" }}
				      //  onClick={handleChange} 
				       onClick={handleChange} 
               onDoubleClick ={()=> lightBoxHandler(true, index)}
               src={item.image} alt={item.title}
               className='Product-img_style'/>   
          
            ))}   

            {/* //lightbox here */}
            <LightBox
				state={toggle}
        event={lightBoxHandler}
        data={productImages}
        imageWidth="60vw"
        imageHeight="70vh"
        thumbnailHeight={50}
        thumbnailWidth={50}
        setImageIndex={setSIndex}
        imageIndex={sIndex}
			/>
         </div>
      </aside>
      <section className='Product-detail'>
         <h3 className='Product-detail-lead'> sneaker company</h3>
         <p className='Product-type'>{productName}</p>
         <p className='text-gray-500 text-justify'> {description}</p>
         <aside className='Product-detail-action'>
           <div className='flex items-center'>
              <h4 className='text-2xl font-bold lg:my-1'>${discountPrice}.00</h4>
              <span className='Product-discount'> {discount}%</span>
           </div>
           <p className='text-gray-500 line-through text-base'> ${productPrice}.00</p>
         </aside>
         <form className='product-action lg:flex justify-between' onSubmit={ e=>handleSubmit(e,id)}>
            <div className='Product-count'>
               <svg className='btn-count' onClick={e => handleCount("minus")} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
        
               <p className='text-xl font-semibold'>{quantity}</p>
               <svg className='btn-count' onClick={e => handleCount("add")} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path></svg>
               
            </div>
            <button className='btn-cart'>
              <svg className='mr-4' width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#fff" fillRule="nonzero"/></svg>
              Add to cart
            </button>
         </form>
      </section>
    </div>
  )
}

export default memo(Product)