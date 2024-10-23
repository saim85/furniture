import React from 'react'
// import Product1  from  '../../assets/images/p1.jpg'
import { FaEye, FaHeart } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { addtocart } from '../../redux/Cartslice'
import Product from './Product'


function ProductCard({ img , title , price}) {  
   
  
  const dispatch = useDispatch()

  const handleAddtocart = ()=> {
    dispatch(addtocart(Product))
    alert('product is added')
    // console.log(item);
  }

  

  return (
     <>
       <section>
          {/* product card 1*/}
          <div className='w-full group cursor-pointer h-full'>
          <div class="relative   overflow-hidden">
             <img src={img} alt="" /> 
             {/* product add to cart */}
             <div className=' w-full absolute -bottom-20 group-hover:-bottom-2 transition-all duration-500 ease-in-out  '>
               <button
                 onClick={handleAddtocart}
                className='w-full bg-lime-200 hover:bg-lime-400 
               block transition-all duration-200 mx-auto py-4
               text-lg font-medium'>Add to Cart</button>
             </div>

             {/* social icon */}
             <div className='absolute top-5 -right-20 group-hover:right-2
             flex flex-col gap-3 transition-all duration-500
             ease-in-out p-2 '>
              <button className=' ' >
                <FaHeart  className='bg-lime-200 hover:bg-lime-400 rounded-full w-full px-3 py-3 text-5xl '  size={40}  />
              </button>
              <button>
                <FaEye className='bg-lime-200 hover:bg-lime-400 rounded-full w-full px-3 py-3 text-5xl '  size={40} />
              </button>
             </div>
          </div>
          <div className='flex items-center justify-between mt-2'>
            <h3 className='text-lg font-bold '>{title}</h3>
            <p className='text-green-700 font-bold'>$ {price}</p>
          </div>
          </div>
          
         
       </section>
     
     
     </>
  )
}

export default ProductCard
