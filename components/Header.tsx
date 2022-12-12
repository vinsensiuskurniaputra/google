import React from 'react'
import User from './User'

const Header = () => {
  return (
    <header className='flex justify-between p-5 text-gray-700'>
        <div className='flex space-x-4 items-center'>
            <p className='link'>About</p>
            <p className='link'>Store</p>
        </div>
        <div className='flex space-x-4 items-center'>
            <p className='link'>Gmail</p>
            <p className='link'>Images</p>
            <User />
        </div>
    </header>
  )
}

export default Header