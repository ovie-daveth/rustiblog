import React from 'react'
import RecentPostsLists from '../components/RecentPostsLists'
import SearchComponent from '../components/resubles/SearchComponent'
import Categories from '../components/Categories'
import PostMenuActions from '../components/PostMenuActions'
import { BsFacebook, BsLinkedin, BsTwitterX } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Img from '../components/resubles/img'

const PostListPage = () => {
  return (
    <div className='py-10 '>
      <h2 className='text-2xl md:text-3xl xl:text-4xl'>Trending</h2>
      <div className='flex md:flex-row flex-col'>
        <div className='mt-10'>
          <RecentPostsLists />
        </div>
        <div className='w-1/5 hidden lg:flex sticky flex-col gap-8 px-4 h-max top-8 pb-6'>
          <div className='flex flex-col gap-2'>
              <h1 className='ml-1 md:text-xl text-base'>Search</h1>
              <SearchComponent />
            </div>
            <div>
                <div className="flex items-center gap-3">
                  <input className=' cursor-pointer' type="checkbox" />
                  <span className='mt-1 text-gray-600'>Latest</span>
                </div>
                <div className="flex items-center gap-3">
                  <input className=' cursor-pointer' type="checkbox" />
                  <span className='mt-1 text-gray-600'>Most Popular</span>
                </div>
                <div className="flex items-center gap-3">
                  <input className=' cursor-pointer' type="checkbox" />
                  <span className='mt-1 text-gray-600'>Trending</span>
                </div>
                <div className="flex items-center gap-3">
                  <input className=' cursor-pointer' type="checkbox" />
                  <span className='mt-1 text-gray-600'>Oldest</span>
                </div>
            </div>
            <Categories />
        </div>
      </div>
    </div>
  )
}

export default PostListPage
