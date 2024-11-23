import React from 'react'
import { BiBookmark } from 'react-icons/bi'
import { BsSave2Fill } from 'react-icons/bs'
import { CgTrash } from 'react-icons/cg'

const PostMenuActions = () => {
  return (
    <div>
      <h1 className='md:text-xl'>Actions</h1>
      <div className='flex flex-col gap-3 mt-3 md:text-lg text-base'>
        <button className='flex items-center gap-2'>
            <BiBookmark />
            <span className='text-blue-600'>Save this post</span>
        </button>
        <button className='flex items-center gap-2'>
            <CgTrash />
            <span className='text-red-600'>Delete this post</span>
        </button>
      </div>
    </div>
  )
}

export default PostMenuActions
