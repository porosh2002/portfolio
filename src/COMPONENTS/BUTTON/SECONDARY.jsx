import React from 'react'
import { NavLink } from 'react-router-dom';
export default function SECONDARY(props) {
    const {value,destination, ...others} = props
    return (
        <NavLink to={destination} className='group mx-8 flex items-center text-purple-500 duration-300  text-[14px] font-semibold tracking-wider' {...others}>
<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
</svg>
        <p className='group-hover:ml-1 duration-300'>{value}</p>
    </NavLink>
    )
}
