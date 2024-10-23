import React from 'react'

function Contact() {
  return (
    <>
     <section className='mb-12'>
        <div className='w-full h-full bg-gray-200 md:py-14 py-5 px-2 
        flex justify-center items-center'>
            <div className='max-w-lg  w-full p-2'>
             <h1 className='py-5 font-bold md:text-3xl text-xl text-center  '>Subscribe for Exclusive Updates</h1>
             {/* input button */}
             <div className='flex w-full'>
                <input type="text" placeholder='' className='w-full border focus:outline-none focus:border-gray-400 p-2 h-10 border-gray-400' />
                <button className='bg-black hover:bg-slate-500 text-white transition-all duration-300 ease-in-out px-5 '>Send</button>
             </div>
            </div>

        </div>
     </section>
    
    </>
  )
}

export default Contact
