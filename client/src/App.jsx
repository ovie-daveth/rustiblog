import { Link } from "react-router-dom"
import Breadcrumbs from "./components/resubles/breadcrumbs"
import MainCategories from "./components/MainCategories"
import FeaturedPost from "./components/FeaturedPost"
import RecentPostsLists from "./components/RecentPostsLists"



const App = () => {
  return (
    <div className="pb-[300px]">
      {/* Breadcrumbs */}
      <div >
        <Breadcrumbs Home={"Home"} Destination="Home & Articles" />
      </div>
       {/* INTRO */}
      <div className="flex items-start justify-between">
      <div className="mt-10 lg:w-[70%]">
        <h1 className="text-2xl xl:text-4xl 2xl:text-6xl">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <p className="mt-4 text-sm font-normal font-sans text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam minima nihil, soluta dolore, inventore temporibus officia.</p>
       </div>
        <Link to="write" className="hidden md:block relative">
          <svg
            viewBox="0 0 200 200"
            width="170"
            height="170"
            className="text-lg tracking-widest animate-spin animatedButton"
          >
            <path
              id="circlePath"
              fill="none"
              d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
            />
            <text>
              <textPath href="#circlePath" startOffset="0%">
                Write your story •
              </textPath>
              <textPath href="#circlePath" startOffset="50%">
                Share your idea •
              </textPath>
            </text>
          </svg>
          <button className="absolute top-0 left-0 right-0 bottom-0 m-auto w-20 h-20 bg-blue-800 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="50"
              height="50"
              fill="none"
              stroke="white"
              strokeWidth="2"
            >
              <line x1="6" y1="18" x2="18" y2="6" />
              <polyline points="9 6 18 6 18 15" />
            </svg>
          </button>
        </Link>
      </div>
        {/* FEATUREDPOST */}
        <div className="mt-10">
        <MainCategories />
        </div>
         {/* POSTLIST */}
        <div className="mt-10">
        <FeaturedPost />
        </div>
        <div className="md:mt-20 mt-10">
          <h1 className="text-gray-600 md:text-2xl text-xl mb-5">Recent Posts</h1>
          <RecentPostsLists />
        </div>
    </div>
  )
}

export default App