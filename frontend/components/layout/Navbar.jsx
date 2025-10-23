import React from 'react'
import GithubButton from '../ui/GithubButton'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='w-full relative z-1 max-w-[1520px] h-20 flex justify-center items-center'>
      <div className='w-[80%] h-full flex justify-between items-center  border-red-500'>
        <div className='w-1/4 h-full flex justify-start items-center  border-red-500'>
          <Link href={"/"}>
            <h1 className='text-4xl cursor-pointer select-none font-normal'>LogLense</h1>

          </Link>
        </div>

        <div className='w-1/4 h-full flex justify-end items-center  border-red-500'>
          <GithubButton />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
