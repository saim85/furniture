import React from 'react'
import Product from '../../components/productCards/Product'

function Shop() {
  return (
      <>
        <section className='py-12 mr-10'>
          
          {/* select btn */}
          <div className=' w-full flex items-center justify-end   '>
            <select className='border border-gray-200 focus:outline-none py-2 px-3 rounded-md  bg-white w-1/5'>
              <option value="">Select...</option>
              <option value="">Price : Low to High</option>
              <option value="">Price : High to Low </option>
              <option value="">Name : A to Z</option>
              <option value="">Name : Z to A</option>
            </select>
          </div>


          {/* product card */}
          <div className='w-11/12 py-4 mx-auto '>
            <Product/>
          </div>
        </section>
      
      
      </>
  )
}

export default Shop
