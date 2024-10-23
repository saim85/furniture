import React from "react";
import banner1 from "../../assets/images/01.jpg";
// import Slider from "react-slick";

function Banner() {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

  return (
    <>
      <div>
        <div className="relative">
          {/* <div></div> */}
          <img src={banner1} alt="" className="w-full  " />

          <div className="absolute md:top-52 top-14 md:left-[32%] left-20 flex flex-col gap-3 justify-center items-center">
            <h2 className="text-5xl font-bold ">
              Discover Our Latest Collection
            </h2>
            <p className="text-base text-gray-700">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <button className="bg-green-600 text-white rounded-md px-4 py-2">
              Shop now
            </button>
          </div>
        </div>
        
      </div>

      {/* <div className="w-full  flex ">
        <Slider {...settings}>
          <div className="relative">
            <img src={banner1} alt="" className="w-full  " />

            <div className="absolute md:top-52 top-14 md:left-[35%] left-20 flex flex-col gap-2 justify-center items-center">
              <h2 className="text-lg font-bold">
                Discover Our Latest Collection
              </h2>
              <p className="text-base text-gray-700">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <button className="bg-green-600 text-white rounded-md px-4 py-2">
                Shop now
              </button>
            </div>
          </div>
        </Slider>
      </div> */}
    </>
  );
}
export default Banner;
