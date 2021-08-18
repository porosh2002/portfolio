import React from 'react'
import { NavLink } from 'react-router-dom';
export default function PRIMARY(props) {
    const {value,destination, ...others} = props
    return (
        <NavLink to={destination} className='p-5 lg:py-4 lg:px-8 rounded-sm lg:bg-purple-500 lg:text-white lg:border-purple-500 hover:bg-transparent lg:hover:text-purple-500 duration-300 lg:border-2 border-transparent text-[14px] font-semibold tracking-wider' {...others}>
        {value}
    </NavLink>
    )
}
