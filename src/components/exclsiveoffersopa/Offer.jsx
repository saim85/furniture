import React from "react";
import offer1 from "../../assets/images/01 (1).jpg";
import offer2 from "../../assets/images/04.jpg";

function Offer() {
  return (
    <>
      <section className="py-14">
        {/* main div */}
        <div
          className=" w-full h-full  flex md:flex-row flex-col justify-center
      gap-3 items-center  "
        >
          {/* left-side */}
          <div className="flex-1 relative">
            <div>
              <img src={offer1} alt="" className="w-full h-full" />
            </div>
            {/* content */}
            <div class="absolute bottom-4 p-3">
              <h1 class="text-[clamp(1em,2.5vw,3em)] font-semibold">
                Exclusive Deal:
              </h1>
              <h1 class="text-[clamp(1em,3vw,4em)] font-bold">
                Save Big on Stylish Chairs!
              </h1>
            </div>
          </div>
          {/* right-side */}
          <div className="flex-1 relative">
            <div>
              <img src={offer2} alt="" className=" w-full  h-full" />
            </div>
             {/* content */}
            <div class="absolute top-4 p-3">
              <h1 class="text-[clamp(1em,2.5vw,3em)] font-semibold">
                Limited Time Offer:
              </h1>
              <h1 class="text-[clamp(1em,3vw,4em)] font-bold">
                Get Cozy with Discounted Sofas!
              </h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Offer;
