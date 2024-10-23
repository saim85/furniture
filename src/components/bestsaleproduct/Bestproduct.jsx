import React from 'react'
import Saleproduct from './Saleproduct'
import Salep1  from  '../../assets/images/p4.jpg'
import Salep2  from  '../../assets/images/p5.jpg'
import Salep3  from  '../../assets/images/p6.jpg'
import Salep4  from  '../../assets/images/p7.jpg'
import Salep5  from  '../../assets/images/p8.jpg'
import Salep6  from  '../../assets/images/p9.jpg'
import { FaArrowRight } from 'react-icons/fa'

function Bestproduct() {
  return (
  <>
    <section className='py-8'>
        {/* title  */}
        <div className='text-center mb-8  '>
            <h2 className='text-3xl  font-bold '>Discover Our Best Seller</h2>
        </div>


        {/* saleProduct */}
        <div className='grid md:grid-cols-3 grid-cols-1 gap-3'>
          <Saleproduct  title={'Spacious Dresser'} img={Salep1} price={' 399.99'}/>
          <Saleproduct  title={'Luxury Sofa'} img={Salep2} price={'299.99'}/>
          <Saleproduct  title={'Stylish Night Stand'} img={Salep3} price={'299.99'}/>
          <Saleproduct  title={'Adjustable Stool Chair'} img={Salep4} price={' 399.99'}/>
          <Saleproduct  title={'Versatile Shelf Unit'} img={Salep5} price={' 499.99'}/>
          <Saleproduct  title={'Adjustable Stool Chair'} img={Salep6} price={' 199.99'}/>
        </div>

         {/* view more btn */}
         <div className="flex items-center gap-1 justify-center py-10">
          <button className="text-lg  font-medium text-gray-600 ">view more </button>
          <span><FaArrowRight className="transition-all 
          hover:translate-x-2 duration-500 ease-out"/></span>
        </div>
    </section>
  
  
  </>
  )
}

export default Bestproduct
