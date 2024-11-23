import React from 'react'
import PostCard from './resubles/postCard'
import RecentPostCard from './resubles/RecentPostCard'

const RecentPostsLists = () => {
  return (
    <div className='flex flex-col gap-10'>
       {
        [Array(1,2,3,4,5,6,7,8,9,10).map((_, i) => (
            <RecentPostCard key={i} />
        ))]
       }
    </div>
  )
}

export default RecentPostsLists