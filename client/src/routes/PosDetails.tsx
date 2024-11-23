import React from 'react'
import Img from '../components/resubles/img'
import { Link } from 'react-router-dom'
import { BsFacebook, BsLinkedin, BsTwitterX } from 'react-icons/bs'
import PostMenuActions from '../components/PostMenuActions'
import Categories from '../components/Categories'
import SearchComponent from '../components/resubles/SearchComponent'
import Comments from '../components/Comments'

const PosDetails = () => {
  return (
    <div className='flex flex-col gap-8 pb-52'>
      {/* details */}
      <div className='flex flex-col lg:flex-row items-start justify-between gap-8 mt-16'>
        <div className='flex flex-col gap-8 lg:w-3/5 w-full'>
          <h1 className='text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptas veritatis facere maxime sunt ut tum. Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
          <div className='flex items-center font-light gap-3  md:text-xl text-lg'>
          <h4 className='text-gray-400'>Written By</h4>
                    <h1 className='text-indigo-500'>John Owen</h1>
                    <h4 className='text-gray-400'>on</h4>
                    <h3 className='text-orange-500'>Web Design</h3>
                    <h4 className='text-gray-400'>2 days ago</h4>
                </div>
                <p className='text-lg md:text-xl text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa laborum perspiciatis expedita explicabo distinctio, perferendis molestiae officiis quo voluptate ab aliquid incidunt repellat, placeat odit, debitis amet nihil sit ducimus.</p>
        </div>
        <div className='lg:w-2/5 w-full'>
          <Img img_url='featured4.jpeg' className={'rounded-2xl h-[330px] lg:h-[300px]'} alt={'detail'} w="800"/>
        </div>
      </div>
      {/* content */}
      <div className='mt-10 flex flex-col lg:flex-row gap-8'>
        <div className='lg:text-xl text-lg flex flex-col gap-6 text-justify text-gray-600 lg:w-4/5'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque repellat similique facere nostrum assumenda! Earum, ut sint. Id est facere beatae enim rem repudiandae nemo ea quas, mollitia architecto dolor at nam iste aliquam numquam provident necessitatibus voluptatem voluptatum itaque error. Quam quas vitae corporis dignissimos quidem minima ut rerum facere fuga, rem, suscipit recusandae temporibus culpa numquam ab repudiandae ipsum accusantium. Eius dignissimos ex hic porro cumque dolorem voluptate est, ut ab dolore ullam corrupti assumenda illo earum officiis eum impedit totam corporis illum voluptates repellendus ea quae dolores aut. Sit quis molestiae voluptate, ipsum exercitationem sapiente corrupti cum!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque repellat similique facere nostrum assumenda! Earum, ut sint. Id est facere beatae enim rem repudiandae nemo ea quas, mollitia architecto dolor at nam iste aliquam numquam provident necessitatibus voluptatem voluptatum itaque error. Quam quas vitae corporis dignissimos quidem minima ut rerum facere fuga, rem, suscipit recusandae temporibus culpa numquam ab repudiandae ipsum accusantium. Eius dignissimos ex hic porro cumque dolorem voluptate est, ut ab dolore ullam corrupti assumenda illo earum officiis eum impedit totam corporis illum voluptates repellendus ea quae dolores aut. Sit quis molestiae voluptate, ipsum exercitationem sapiente corrupti cum!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque repellat similique facere nostrum assumenda! Earum, ut sint. Id est facere beatae enim rem repudiandae nemo ea quas, mollitia architecto dolor at nam iste aliquam numquam provident necessitatibus voluptatem voluptatum itaque error. Quam quas vitae corporis dignissimos quidem minima ut rerum facere fuga, rem, suscipit recusandae temporibus culpa numquam ab repudiandae ipsum accusantium. Eius dignissimos ex hic porro cumque dolorem voluptate est, ut ab dolore ullam corrupti assumenda illo earum officiis eum impedit totam corporis illum voluptates repellendus ea quae dolores aut. Sit quis molestiae voluptate, ipsum exercitationem sapiente corrupti cum!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque repellat similique facere nostrum assumenda! Earum, ut sint. Id est facere beatae enim rem repudiandae nemo ea quas, mollitia architecto dolor at nam iste aliquam numquam provident necessitatibus voluptatem voluptatum itaque error. Quam quas vitae corporis dignissimos quidem minima ut rerum facere fuga, rem, suscipit recusandae temporibus culpa numquam ab repudiandae ipsum accusantium. Eius dignissimos ex hic porro cumque dolorem voluptate est, ut ab dolore ullam corrupti assumenda illo earum officiis eum impedit totam corporis illum voluptates repellendus ea quae dolores aut. Sit quis molestiae voluptate, ipsum exercitationem sapiente corrupti cum!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque repellat similique facere nostrum assumenda! Earum, ut sint. Id est facere beatae enim rem repudiandae nemo ea quas, mollitia architecto dolor at nam iste aliquam numquam provident necessitatibus voluptatem voluptatum itaque error. Quam quas vitae corporis dignissimos quidem minima ut rerum facere fuga, rem, suscipit recusandae temporibus culpa numquam ab repudiandae ipsum accusantium. Eius dignissimos ex hic porro cumque dolorem voluptate est, ut ab dolore ullam corrupti assumenda illo earum officiis eum impedit totam corporis illum voluptates repellendus ea quae dolores aut. Sit quis molestiae voluptate, ipsum exercitationem sapiente corrupti cum!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque repellat similique facere nostrum assumenda! Earum, ut sint. Id est facere beatae enim rem repudiandae nemo ea quas, mollitia architecto dolor at nam iste aliquam numquam provident necessitatibus voluptatem voluptatum itaque error. Quam quas vitae corporis dignissimos quidem minima ut rerum facere fuga, rem, suscipit recusandae temporibus culpa numquam ab repudiandae ipsum accusantium. Eius dignissimos ex hic porro cumque dolorem voluptate est, ut ab dolore ullam corrupti assumenda illo earum officiis eum impedit totam corporis illum voluptates repellendus ea quae dolores aut. Sit quis molestiae voluptate, ipsum exercitationem sapiente corrupti cum!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque repellat similique facere nostrum assumenda! Earum, ut sint. Id est facere beatae enim rem repudiandae nemo ea quas, mollitia architecto dolor at nam iste aliquam numquam provident necessitatibus voluptatem voluptatum itaque error. Quam quas vitae corporis dignissimos quidem minima ut rerum facere fuga, rem, suscipit recusandae temporibus culpa numquam ab repudiandae ipsum accusantium. Eius dignissimos ex hic porro cumque dolorem voluptate est, ut ab dolore ullam corrupti assumenda illo earum officiis eum impedit totam corporis illum voluptates repellendus ea quae dolores aut. Sit quis molestiae voluptate, ipsum exercitationem sapiente corrupti cum!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque repellat similique facere nostrum assumenda! Earum, ut sint. Id est facere beatae enim rem repudiandae nemo ea quas, mollitia architecto dolor at nam iste aliquam numquam provident necessitatibus voluptatem voluptatum itaque error. Quam quas vitae corporis dignissimos quidem minima ut rerum facere fuga, rem, suscipit recusandae temporibus culpa numquam ab repudiandae ipsum accusantium. Eius dignissimos ex hic porro cumque dolorem voluptate est, ut ab dolore ullam corrupti assumenda illo earum officiis eum impedit totam corporis illum voluptates repellendus ea quae dolores aut. Sit quis molestiae voluptate, ipsum exercitationem sapiente corrupti cum!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque repellat similique facere nostrum assumenda! Earum, ut sint. Id est facere beatae enim rem repudiandae nemo ea quas, mollitia architecto dolor at nam iste aliquam numquam provident necessitatibus voluptatem voluptatum itaque error. Quam quas vitae corporis dignissimos quidem minima ut rerum facere fuga, rem, suscipit recusandae temporibus culpa numquam ab repudiandae ipsum accusantium. Eius dignissimos ex hic porro cumque dolorem voluptate est, ut ab dolore ullam corrupti assumenda illo earum officiis eum impedit totam corporis illum voluptates repellendus ea quae dolores aut. Sit quis molestiae voluptate, ipsum exercitationem sapiente corrupti cum!</p>
        </div>
        <div className='w-1/5 hidden lg:flex sticky flex-col gap-8 px-4 h-max top-8 pb-6'>
          <h1>Author</h1>
          <div className='flex items-center gap-12'>
            <Img img_url={'userImg.jpeg'} className={'rounded-full h-12 w-12'} alt={''} w="48" h="48" />
            <Link to="/user" className="text-blue-800 md:text-lg">John Owen</Link>
          </div>
          <p className='text-gray-500 text-sm md:text-base'>Lorem ipsum dolor sit amet consectetur</p>

          <div className="flex gap-2">
            <a>
              <BsFacebook />
            </a>
            <a>
              <BsTwitterX />
            </a>
            <a>
              <BsLinkedin />
            </a>
          </div>
            <PostMenuActions />
            <Categories />
            <div className='flex flex-col gap-2'>
              <h1 className='ml-1 md:text-xl text-base'>Search</h1>
              <SearchComponent />
            </div>
        </div>
      </div>

      {/* comment */}
     <div className='flex flex-col gap-3'>
        <h1 className='text-gray-600 md:text-xl'>Comments</h1>
        <div>
          <Comments />
        </div>
     </div>
    </div>
  )
}

export default PosDetails