import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import cardpng  from   '../../assets/images/card.png'

function Footer() {
  return (
  
      <>
        <footer className="bg-gray-200  ">
          <div className="grid  md:grid-cols-4 grid-cols-2  md:px-10 px-10 md:gap-10 gap-6">
            {/* col-1 */}
          <div className="flex flex-col gap-4  py-10 ">
           <h4 className="text-lg font-bold">Furniture</h4>
           <p className="text-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto sapiente ducimus accusamus autem hic est error sit quisquam animi omnis natus deserunt quaerat, dicta sint adipisci. Sint facilis reiciendis incidunt!</p>
          </div>
          {/* col-2 */}
          <div className="md: py-12 flex flex-col gap-2 md:px-0 px-12">
            <h2 className="text-xl font-extrabold ">Quick Links</h2>
            <ul className="flex flex-col gap-2">
              <li className="text-lg font-medium hover:text-green-600 cursor-pointer">Home</li>
              <li className="text-lg font-medium hover:text-green-600 cursor-pointer">Shop</li>
              <li className="text-lg font-medium hover:text-green-600 cursor-pointer">Cart</li>
            </ul>
          </div>
          {/* col-3 */}
          <div className="flex flex-col gap-3 md:py-14 mb-24">
            <h2 className="text-lg font-extrabold ">Terms & Conditions</h2>
            <span className="text-lg font-medium">Privacy Policy</span>
            <span className="text-lg font-medium">Terms of use</span>
          </div>
          {/* col-4 */}
          <div className="flex flex-col gap-3 md:py-20">
            <h2 className="text-xl font-extrabold ">Social Links</h2>
            <div className="flex items-center gap-3 ">
              <span className="bg-green-300 text-slate-600 text-2xl p-2 hover:bg-red-500 hover:text-black transition-all ease-linear rounded-lg"><FaFacebook/></span>
              <span className="bg-green-300 text-slate-600 text-2xl p-2 
               hover:bg-red-500 hover:text-black transition-all ease-linear rounded-lg"><FaInstagram/></span>
              <span className="bg-green-300 text-slate-600 text-2xl p-2  hover:bg-red-500 hover:text-black transition-all ease-linear rounded-lg"><FaTwitter/></span> 
            </div>
          </div>
          </div>
          {/* <hr /> */}
          <div className="flex items-center justify-between w-11/12 sm-pb-3 pb-24 mx-auto py-3 border-t-2 border-t-gray-600 ">
            <span> @ All rights reserved Furniture 2024.</span>
            <img src={cardpng} alt="" className="w-full h-full max-w-[200px] " />

          </div>
          
        </footer>
      
      </>
    
  );
}

export default Footer;
