import React from 'react'



const Home = () => {
  return (
    <div className='text-white'>
      <div className=' max-w-[880px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
     <p className='text-green-300 font-bold '>growing with data analytic</p>
      <h1 className='md:text-7xl sm:text-6xl  text-4xl font-bold md:py-3'>Grow with data </h1>
      <div className='flex justify-center items-center'>
        <p className='md:text-5xl sm:text-4xl text-xlf font-bold'>fast flexing financing for client</p>
     {/* <Typed className='md:text-5xl sm:text-4xl text-xl font-bold px-2'
     strings={['BTS' , 'BTC' , 'SASS' ]} typeSpeed={120} backSpeed={140} loop/> */}
     </div>
     <p className='md:5xl sm:text-3xl text-gray-500 font-bold'>
      Monitor your data analytic to increase revenue for BTB,BTC,& SASS platform
     </p>
     <button className='bg-gradient-to-tr from-red-700 to-orange-500 w-[200px] font-bold my-6 mx-auto py-3 rounded-md text-black hover:scale-105 duration-150 '>Get Started</button>
      </div>
    </div>
  )
}

export default Home
