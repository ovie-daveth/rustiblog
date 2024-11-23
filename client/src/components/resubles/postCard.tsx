import React from 'react'
import Img from './img'

const PostCard = () => {
  return (
    <div className='lg:h-1/3 h-1/3 flex justify-between gap-4'>
    <div className='w-[50%] md:w-1/3 aspect-video'>
    <Img 
    img_url={'featured3.jpeg'} 
    className="rounded-3xl object-cover w-full h-full" w="298" 
    alt={''} />
    </div>
    <div className='mt-1 w-[50%] md:w-2/3'>
    <div className='flex items-center gap-4 text-sm lg:text-base mb-4'>
            <h1 className='text-indigo-500'>01.</h1>
            <h3 className='text-orange-500'>Web Design</h3>
            <h4 className='text-gray-400'>2 days ago</h4>
        </div>
        <h2 className='mt-3 md:text-xl text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, nihil.</h2>
    </div>
</div>
  )
}

export default PostCard
