import React, { useState } from 'react'

const Login = ({handleLogin}) => {


  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e)=> {
    e.preventDefault();

    handleLogin(email, password)

    setEmail('')
    setPassword('')
  }

  return (
    <div className='flex flex-col h-screen w-screen items-center justify-evenly'>
      <div className='text-5xl font-bold'>Employee Management System</div>
      <div className='border-2 border-emerald-600 rounded-xl p-20'>
        <form 
        onSubmit={(e)=>{
          submitHandler(e);
        }} 
        className='flex flex-col items-center justify-center'
        >
          <input 
          value={email}
          onChange={(e)=>{
            setEmail(e.target.value)
          }}
          required 
          className='border-2 font-medium text-lg outline-none bg-transparent placeholder:text-gray-400 border-emerald-600 py-2 px-6 rounded-full' type="email" placeholder='Enter your email' 
          />
          <input 
          value={password}
          onChange={(e)=>{
            setPassword(e.target.value)
          }}
          required 
          className='border-2 outline-none font-medium text-lg mt-4 bg-transparent placeholder:text-gray-400 border-emerald-600 py-2 px-6 rounded-full' type="password" placeholder='Enter password' 
          />
          <button className='text-white mt-7 outline-none font-semibold hover:bg-emerald-700 placeholder:text-white bg-emerald-600 text-lg py-2 px-8 w-full rounded-full'>Log In</button>
        </form>
      </div>
    </div>
  )
}

export default Login
