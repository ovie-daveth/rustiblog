import React from 'react'
import Img from './img'
import { Link } from 'react-router-dom'

const RecentPostCard = () => {
  return (
    <div className='flex flex-col md:flex-row items-start gap-3'>
    <div className="md:hidden xl:block xl:w-1/3">
    <Img 
    img_url={'featured3.jpeg'} 
    className="rounded-2xl object-cover" w="735" alt="posts" />
</div>
    <div className="flex flex-col gap-4 xl:w-2/3">
    <div className='flex items-center font-light gap-3 tracking-wide md:text-md md:text-2xl text-xl'>
            <h1 className='text-indigo-500'>01.</h1>
            <h3 className='text-orange-500'>Web Design</h3>
            <h4 className='text-gray-400'>2 days ago</h4>
        </div>
        <h2 className='mt-3 md:text-4xl text-3xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, tempora. </h2>
        <p className='text-gray-600 my-3 text-base md:text-lg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis reiciendis, saepe sit, facilis minima beatae optio, sapiente tempore placeat dicta nisi inventore! Inventore voluptatem reiciendis harum nostrum tempora veniam recusandae! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, quam? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, nobis? ...</p>
        <Link to={`/post/${1}`} className='mb-auto text-red-600 text-base md:text-lg'>Read more</Link>
    </div>
</div>
  )
}

export default RecentPostCard
