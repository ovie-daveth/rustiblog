import React, { useState } from 'react'
import { BiLogInCircle, BiLogOutCircle, BiMenu } from 'react-icons/bi'
import { BsPenFill } from 'react-icons/bs'
import { CgClose } from 'react-icons/cg'
import Img from './resubles/img';
import { Link } from 'react-router-dom';
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';

const Navbar = () => {

    const [open, setIsOpen] = useState(false)
    const [isLogin, setIsLogin] = useState(true)
  return (
    <div className='w-full h-16 md:h-20 flex items-center justify-between'>
      <Link to="/" className='flex items-center gap-4'>
        <Img img_url={'logo.png'} className={''} alt={'logo'} w={28} h={28} />
        <span className='text-2xl font-bold'>RustiBlog</span>
      </Link>
      {/* MobileView */}
      <div className='flex md:hidden'>
        <div className='flex items-center gap-5'>
            <SignedIn>
                <UserButton  />
            </SignedIn>
            <button onClick={() => setIsOpen(!open)} className='text-3xl text-gray-500 hover:bg-gray-200 rounded-full p-1 active:bg-gray-300 transition-all ease-in-out duration-500 z-50'>
            {
                open ? <CgClose /> : <BiMenu />
            }
            </button>
        </div>
        {/* MOBILE LINK LIST */}
        <div className={`${open ? "flex":"hidden"} flex-col gap-10 items-center justify-center absolute left-0 top-0 w-full h-full bg-[#eee] z-10`}>
            <Link to="">Home</Link>
            <Link to="/posts">Trending</Link>
            <Link to="/posts">Popular</Link>
            <Link to="/posts">Latest</Link>
            <Link to="/posts">Creators</Link>
            <div>
            <SignedOut>
            <Link to="/login" className='flex items-center gap-4 py-3 px-5 rounded-full bg-blue-500 text-white font-normal  justify-center'>
                <span><BiLogInCircle /></span>
                <span>Login</span>
            </Link> 
            </SignedOut>
            <SignedIn>
               <div className='flex gap-3 w-full'>
                <Link to="/write" className='flex items-center gap-4 py-3 px-5 rounded-full border bg-transparent border-blue-500 text-blue-600 font-normal  justify-center hover:bg-blue-600 hover:text-white transition-all ease-in-out duration-500'>
                    <span><BsPenFill /></span>
                    <span>Write</span>
                </Link>
               </div>
            </SignedIn>
            </div>   
        </div>
      </div>

      {/* DESKTOP VIEW */}
      <div className='hidden md:flex'>
      <div className={`flex flex-row gap-8 xl:gap-12 items-center justify-center`}>
      <Link to="">Home</Link>
            <Link to="/posts">Trending</Link>
            <Link to="/posts">Popular</Link>
            <Link to="/posts">Latest</Link>
            <Link to="/posts">Creators</Link>
            <SignedOut>
            <Link to="/login" className='flex items-center gap-4 py-3 px-5 rounded-full bg-blue-500 text-white font-normal  justify-center'>
                    <span><BiLogInCircle /></span>
                    <span>Login</span>
                </Link> 
            </SignedOut>
            <SignedIn>
            <div className='flex items-center gap-5'>
                <Link to="/write" className='flex items-center gap-4 py-3 px-5 rounded-full border bg-transparent border-blue-500 text-blue-600 font-normal  justify-center hover:bg-blue-600 hover:text-white transition-all ease-in-out duration-500'>
                    <span><BsPenFill /></span>
                    <span>Write</span>
                </Link>
                <div >
                <UserButton showName 
                
                />
                </div>
                </div>
            </SignedIn>
            
        </div>
      </div>
    </div>
  )
}

export default Navbar
