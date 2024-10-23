import React from "react" 
import { BrowserRouter as Router , Route , Routes } from "react-router-dom"
import Home   from   '../src/pages/home/Home'
import Shop   from   '../src/pages/shop/Shop'
import Cart   from   '../src/pages/cart/Cart'
import Navbar  from  '../src/components/navbar/Navbar'
import Footer  from  '../src/components/footer/Footer'
import Wishlist from "./pages/wishlist/Wishlist"
// import "slick-carousel/slick/slick.css";


function App() {


  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route   path=""  element={<Home/>}    />
        <Route   path="/shop"  element={<Shop/>}    />
        <Route   path="/cart"  element={<Cart/>}    />
        <Route   path="/wishlist"  element={<Wishlist/>}    />
      </Routes>
      <Footer/>
    </Router>

 
    </>
  )
}

export default App
