import React from 'react'

const Footer = () => {
  return (
    <footer className='absolute bottom-0 w-full flex justify-center whitespace-nowrap p-6 text-sm text-gray-600'>
        <p>Copyright &copy; {new Date().getFullYear()} Vinsensius Kurnia Putra</p>
    </footer>
  )
}

export default Footer