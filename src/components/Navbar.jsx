import React from 'react'

const Navbar = () => {
  return (
    <div  className='flex items-center justify-between p-4 z-[100] w-full absolute'>
      <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>
          SEXTFLIX
        </h1>
      <div>
        <buttom className='text-white pr-4'>
          Sin In 
        </buttom>
        <buttom className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>
          Sin Up
        </buttom>

      </div>
    </div>
  )
}

export default Navbar
