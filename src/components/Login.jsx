import React, { useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setToken } from '../Redux/auth/authSlice'

const Login = () => {

    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch()


    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const response = await axios.post("/api/user/admin", {
                email: email, 
                password: password,
            });
            if (response.data.success) {
                dispatch(setToken(response.data.token))
                navigate('/add')
                toast.success("AA GAYA ANDAR CHUTIYE")
            } else {
                toast.error(response.data.message)
            }
            console.log(response.data); 
        } catch (error) {
            console.error("Error:", error); 
        }
    }

  return (
    <div className='min-h-screen flex items-center justify-center w-full'>
        <div className='bg-white shadow-md rounded-lg px-8 py-6 max-w-md'>
            <h1 className=' text-2xl font-bold mb-4'>Admin Panel</h1>
            <form onSubmit={handleSubmit}>
                <div className='mb-3 min-w-72'>
                    <p className='text-sm font-medium text-gray-700 mb-2'>Email Adress</p>
                    <input  onChange={(e)=>setEmail(e.target.value)} value={email} className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none' type="email" placeholder='Enter your Email' />
                </div>
                <div className='mb-3 min-w-72'>
                    <p className='text-sm font-medium text-gray-700 mb-2'>Password</p>
                    <input onChange={(e)=>setPassword(e.target.value)} value={password} className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none' type="password"  placeholder='Enter Password'/>
                </div>
                <button className='mt-2 w-full py-2 px-4 rounded-md text-white bg-black active:opacity-75 '>Good To Go In</button>
            </form>
        </div>
    </div>
  )
}

export default Login