import React from "react";
import ProductCard from "./ProductCard";
import Product1 from "../../assets/images/p1.jpg";
import Product2 from "../../assets/images/p2.jpg";
import Product3 from "../../assets/images/p3.jpg";
import Product4 from "../../assets/images/p4.jpg";
import Product5 from "../../assets/images/p5.jpg";
import Product6 from "../../assets/images/p6.jpg";
import { FaArrowRight } from "react-icons/fa";

function Product() {
  return (
    <>
      <section>
        {/* title */}
        <div className="text-center">
          <h2 className="text-3xl font-bold ">
            Discover Our Featured Products
          </h2>
        </div>

        {/* product */}
        <div
          className="w-full grid md:grid-cols-3 grid-cols-1  mb-12 mt-12 
           gap-12"
        >
          <ProductCard img={Product1} title={"Elegant Table Lamp"} price={'$ 49.99'} />
          <ProductCard
            img={Product2}
            titl={"Modern Coffee Table"}
            price={"$ 159.99"}
          />
          <ProductCard
            img={Product3}
            title={"Comfortable Armchair"}
            price={"$ 249.99"}
          />
          <ProductCard img={Product4} title={"Spacious Dresser"} price={"$ 399.99"} />
          <ProductCard img={Product5} title={"Classic Wooden Cot"} price={"$ 299.99"} />
          <ProductCard
            img={Product6}
            title={"Stylish Night Stand"}
            price={"$ 129.99"}
          />
        </div>

        {/* view more btn */}
        <div className="flex items-center gap-1 justify-center mb-12">
          <button className="text-lg  font-medium text-gray-600 ">view more </button>
          <span><FaArrowRight className="transition-all 
          hover:translate-x-2 duration-500 ease-out"/></span>
        </div>
      </section>
    </>
  );
}

export default Product;
