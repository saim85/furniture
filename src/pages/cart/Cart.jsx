import React from 'react'
import { useSelector } from 'react-redux'


function Cart() {
 
    const cartItems = useSelector((state) => state.cart.items)
    console.log(cartItems);
    
  return (
    <div>
      {
        cartItems.map((item , index)=> {
          <div key={index} >
            <img src={item.img} alt="" />
            
          </div>
        })
      }
      
    </div>
  )
}

export default Cart
