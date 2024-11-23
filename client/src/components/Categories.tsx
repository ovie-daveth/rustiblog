import React from 'react'
import { Link } from 'react-router-dom'

const categories = [
    {
        id: 1,
        title: "Design"
    },
    {
        id: 2,
        title: "Web Development"
    },
    {
        id: 3,
        title: "Artificial Intelligence"
    },
    {
        id: 4,
        title: "Development"
    },
    {
        id: 5,
        title: "Database"
    },
]
const Categories = () => {
  return (
    <div>
        <h1 className='text-base md:text-xl'>Categories</h1>
        <div className='flex flex-col gap-1 mt-4'>
            {
                categories.map((item) => (
                    <Link key={item.id} to="" className=' underline text-gray-500'>
                        {item.title}
                    </Link>
                ))
            }
        </div>
    </div>
  )
}

export default Categories