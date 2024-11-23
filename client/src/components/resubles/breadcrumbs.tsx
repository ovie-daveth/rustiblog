import React from 'react'
import { Link } from "react-router-dom"
import { BsDot } from "react-icons/bs"

interface Prop {
    Home: string
    Destination: string
}
const Breadcrumbs = ({Home, Destination}: Prop) => {
  return (
    <div className="flex items-center gap-3">
        <Link to={"/"}>
        {Home}
        </Link>
        <span><BsDot /></span>
        <Link className="text-blue-600 tracking-wider" to={"/"}>
       {Destination}
        </Link>
    </div>
  )
}

export default Breadcrumbs