import React from "react";
import { FaHeart, FaHome, FaShoppingCart } from "react-icons/fa";
import { FaShop } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav
        className=" w-full md:py-4 py-2 md:px-20 px-10
      flex items-center  justify-between  h-28 shadow-md 
     "
      >
        {/* logo sec */}
        <div>
          <Link to={"/"}>
            <h1 className="text-xl font-bold ">Furniture</h1>
          </Link>
        </div>

        {/* navlink */}
        <div className="md:flex hidden ">
          <ul className="flex space-x-5 items-center">
            <Link to={"/"}>
              <li className="text-lg font-medium hover:underline ease-out ">
                Home
              </li>
            </Link>
            <Link to={"/shop"}>
              <li className="text-lg font-medium hover:underline ease-out ">
                Shop
              </li>
            </Link>
            <Link to={"/cart"}>
              <li className="text-lg font-medium hover:underline ease-out ">
                Cart
              </li>
            </Link>
            <Link to={"/wishlist"}>
              <li className="text-lg font-medium hover:underline ease-out ">
                Wishlist
              </li>
            </Link>
          </ul>
        </div>

        {/* cart */}
        <div className="flex space-x-2">
          <Link>
            <FaHeart
              className="shadow-md rounded-full text-4xl  bg-lime-300 hover:bg-lime-600 p-2
          "
              size={40}
            />
          </Link>
          <Link to={"/cart"}>
            <button className="relative">
              <FaShoppingCart
                className="shadow-md rounded-full text-4xl  bg-lime-300  hover:bg-lime-600 p-2
          text-slate-600"
                size={40}
              />
            </button>
            <span className="absolute top-7 bg-lime-100 hover:bg-lime-200 rounded-full  text-lg  px-2">
              0
            </span>
          </Link>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden  w-full fixed bottom-0 z-50 left-0 ">
          <ul
            className="flex items-center justify-between shadow-xl bg-white 
        h-20 mx-auto px-5"
          >
            <Link to={"/"}>
              <li className="text-xl font-bold">
                <FaHome
                  size={40}
                  className="  font-semibold 
              hover:text-orange-500 transition-all ease-in-out
              text-4xl  rounded-full
               bg-lime-300 hover:bg-lime-500 p-2
           "
                />
              </li>
            </Link>

            <Link to={"/shop"}>
              <li>
                <FaShop
                  size={40}
                  className=" font-semibold 
              hover:text-orange-500 transition-all ease-in-out
             bg-lime-300 hover:bg-lime-500 p-2
          
              text-4xl  rounded-full "
                />
              </li>
            </Link>

            <Link to={"/cart"}>
              <li>
                <FaShoppingCart
                  size={40}
                  className=" font-semibold 
              hover:text-orange-500 transition-all ease-in-out
               bg-lime-300 hover:bg-lime-500 p-2
          
              text-4xl  rounded-full "
                />
              </li>
            </Link>
            <Link to={"/wishlist"}>
              <li>
                <FaHeart
                  size={40}
                  className=" font-semibold 
              hover:text-orange-500 transition-all ease-in-out 
               bg-lime-300 hover:bg-lime-500 p-2
    
              text-4xl  rounded-full"
                />
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
