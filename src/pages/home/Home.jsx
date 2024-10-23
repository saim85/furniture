import React from 'react'
import Banner from '../../components/banner/Banner'
import Cateogrys from '../../components/category/Cateogrys'
import Product from '../../components/productCards/Product'
import Offer from '../../components/exclsiveoffersopa/Offer'
import Bestproduct from '../../components/bestsaleproduct/Bestproduct'
import Contact from '../../components/contact/Contact'

function Home() {
  return (
    <>
    <div className='max-w-screen'>
    <Banner/>
    </div>

    <div className='max-w-screen-2xl md:px-20 px-4'>
      <Cateogrys/>
      <Product/>
      <Offer/>
      <Bestproduct/>
      <Contact/>
    </div>
     
    
    
    </>
  )
}

export default Home
