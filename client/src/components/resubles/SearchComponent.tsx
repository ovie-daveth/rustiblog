import React from 'react'
import { BiSearch } from 'react-icons/bi'

const SearchComponent = () => {
  return (
    <div className="flex items-center gap-3 bg-gray-100 py-3 px-3 rounded-full ml-auto lg:ml-[unset]">
    <span><BiSearch size={17} color="gray" /></span>
    <input type="text" placeholder="seaarch a post..." className="bg-transparent text-gray-500 font-extralight text-lg outline-none placeholder:text-gray-400 placeholder:font-light" />
</div>
  )
}

export default SearchComponent