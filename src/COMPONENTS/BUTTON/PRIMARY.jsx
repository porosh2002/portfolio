import React from 'react'
import { NavLink } from 'react-router-dom';
export default function PRIMARY(props) {
    const {value,destination, ...others} = props
    return (
        <NavLink to={destination} {...others}>
        <p className="rounded-sm py-4 px-6 overflow-hidden group bg-purple-500 relative hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-400 text-white transition-all ease-out duration-300">
    <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-500 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
    <span className="relative text-[14px]">{value}</span>
</p>
    </NavLink>
    )
}
