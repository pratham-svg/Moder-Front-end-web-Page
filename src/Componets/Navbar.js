import React, { useState } from 'react'
import { AiOutlineClose , AiOutlineBars } from 'react-icons/ai'


const Navbar = () => {
  const [ nav , SetNav ] = useState(true)
  const nvaHandler = ()=>{
    SetNav(!(nav))
  }
  return (
    <div className='text-white flex justify-between items-center h-16 px-4 max-w-[1240px] mx-auto'>
        <h1 className='w-full text-3xl font-semibold text-orange-400'>Pratham</h1>
      <ul className='hidden md:flex cursor-pointer text-gray-400'>
       <li className='p-4 hover:scale-105 duration-150 hover:text-white'>Home</li>
       <li className='p-4 hover:scale-105 duration-150 hover:text-white'>Company</li>
       <li className='p-4 hover:scale-105 duration-150 hover:text-white'>Resources</li>
       <li className='p-4 hover:scale-105 duration-150 hover:text-white'>About</li>
       <li className='p-4 hover:scale-105 duration-150 hover:text-white'>Contact</li>
      </ul>
      <div onClick={nvaHandler} className=" cursor-pointer hover:scale-105 duration-150 block md:hidden">
       {nav ? <AiOutlineBars size={20} /> : <AiOutlineClose size={20}/>}
      </div>
      <div className={!nav ? 'fixed w-[60%] h-screen left-0 top-0 border-r border-r-gray-900 bg-black ease-in-out duration-300' : "fixed left-[-100%] ease-in-out duration-300"}>
      <h1 className='w-full text-3xl font-semibold text-blue-400 pl-2'>Pratham</h1>
        <ul className='p-4 uppercase cursor-pointer'>
        <li className='p-4  hover:scale-105 duration-150 hover:text-white'>Home</li>
       <li className='p-4   hover:scale-105 duration-150 hover:text-white'>Company</li>
       <li className='p-4   hover:scale-105 duration-150 hover:text-white'>Resources</li>
       <li className='p-4   hover:scale-105 duration-150 hover:text-white'>About</li>
       <li className='p-4   hover:scale-105 duration-150 hover:text-white'>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
