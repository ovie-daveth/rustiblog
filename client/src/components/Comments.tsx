import React, { useState } from 'react'
import CustomButton from './resubles/CustomButton'
import Img from './resubles/img'

const Comments = () => {

    const [seeMore, setSeeMore] = useState(false)
    const handleSubmit = () => {

    }
  return (
    <div className='md:w-2/3'>
        <div className='flex flex-col gap-5'>
            <textarea className=' min-h-32 outline-none p-5 text-gray-500 tracking-wide rounded-xl' placeholder='Add a comment' />
            <CustomButton title={'Submit'} variant={'primary'} isActive={false} onClick={handleSubmit} className='w-1/5 h-12 self-end' />
        </div>
        <div className='mt-10 flex flex-col gap-12 w-full'>
           {
            [seeMore ? Array(1,2,3,4,5,6) : Array(1,2,3).map((_, i) => (
                <div key={i} className=' shadow-lg p-4 drop-shadow-lg bg-white rounded-xl'>
                <div className='flex items-center gap-3'>
                    <Img img_url={'default-image.jpg'} className={'rounded-full h-10 w-10'} alt={''} w="45" h="45" />
                    <p className='text-blue-800'>Evans Broth</p>
                    <span className="text-gray-500">2 days ago</span>
                </div>
                <div className='mt-5 text-gray-600'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eius aspernatur vitae cupiditate exercitationem. Ipsum!</p>
                </div>
            </div>
            ))]
           }
           <button onClick={() => setSeeMore(!seeMore)} className='md:text-lg bg-red-600 text-white px-4 py-1 rounded-full self-end'>more</button>
        </div>
    </div>
  )
}

export default Comments