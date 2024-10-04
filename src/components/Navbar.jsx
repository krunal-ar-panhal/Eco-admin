import React from 'react'
import { useDispatch } from 'react-redux'
import { clearToken } from '../Redux/auth/authSlice';

const Navbar = () => {

  const dispatch = useDispatch();

  const handleLogout = () =>{
    dispatch(clearToken())
  }

  return (
    <div className='flex items-center py-2 px-[4%] justify-between'>
    <img src="/assets/logo.png" alt="" className='w-[max(10%,80px)]' />
    <button onClick={handleLogout} className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full sm:text-sm text-xs '>Log Out</button>
</div>
  )
}

export default Navbar