import React from 'react'
import Img from './resubles/img'
import PostCard from './resubles/postCard'
import { Link } from 'react-router-dom'

const FeaturedPost = () => {
  return (
    <div className='w-full'>
      <div className='flex flex-col md:flex-row justify-between gap-6'>
        <div className='flex flex-col gap-3 lg:w-1/2 w-full'>
            <Img 
            img_url={'featured1.jpeg'}
            className="rounded-3xl object-cover"
            w="895" alt={'featured'} />
            <div className='mt-4'>
                <div className='flex items-center font-light gap-3 tracking-wide md:text-xl text-lg'>
                    <h1 className='text-indigo-500'>01.</h1>
                    <h3 className='text-orange-500'>Web Design</h3>
                    <h4 className='text-gray-400'>2 days ago</h4>
                </div>
                <h2 className='mt-5 text-3xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
            </div>
        </div>
        <div className='w-full lg:w-1/2 flex flex-col gap-4'>
            {
                [Array(1,2,3).map((_, i) => (
                    <PostCard key={i} />
                ))]
            }
        </div>
      </div> 
    </div>
  )
}

export default FeaturedPost
