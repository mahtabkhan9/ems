import React from 'react'
import { useState } from 'react'
import { setLocalStorage } from '../../utils/localStorage'

const Header = ({props, data}) => {
  // const [username, setusername] = useState('')

  // if(!data){
  //   setusername('Admin')
  // }else{
  //   setusername(data.firstname)
  // }

  const logOutUser = ()=>{
    localStorage.setItem('loggedInUser', '')
    // props.changeUser('')
    window.location.reload();
  }

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-bold'>{data ? data.firstname : 'Admin'} 👋</span></h1>
      <button onClick={logOutUser} className='bg-red-600 hover:bg-red-700 cursor-pointer text-lg font-medium text-white px-5 py-2 rounded-sm'>Log Out</button>
    </div>
  )
}

export default Header
