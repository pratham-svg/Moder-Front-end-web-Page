import React from 'react'

const NewLetter = () => {
  return (
    <div className="w-full py-16 text-white">
      <div className='max-w-[1240px] mx-auto lg:grid-cols-3'>
        <div className='lg:col-span-2'>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>want tips & tricks </h1>
            <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className='my-4'>
         <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input className='p-3 flex w-full rounded-md text-black' type='email' placeholder='Enter Email'/>
            <button className='bg-gradient-to-tr from-red-500 to-orange-500 w-[200px] font-bold my-6 mx-auto py-3 rounded-md text-black hover:scale-105 duration-150 '>Notify Me</button>
         </div>
        </div>
      </div>
    </div>
  )
}

export default NewLetter
