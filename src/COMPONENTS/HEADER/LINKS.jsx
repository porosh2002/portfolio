import React from 'react'
import { NavLink } from 'react-router-dom';
import PRIMARY from '../BUTTON/PRIMARY';
export default function LINKS(props) {
    const { ...props_all } = props
    return (
        <nav {...props_all} className='text-gray-700 flex text-[14px] flex-col lg:flex-row items-center justify-between w-full p-12 lg:p-0 lg:w-[550px] h-[300px] lg:h-auto bg-white duration-300 lg:duration-[0ms] my-4 rounded-sm'>
            <NavLink exact to='/'>HOME</NavLink>
            <NavLink exact to='/Linkrvices'>SERVICES</NavLink>
            <NavLink exact to='/works' className='flex items-start'>PROJECTS
                <div className='h-2 w-2 animate-ping rounded-full bg-purple-500'></div>
            </NavLink>
            <PRIMARY value='CONTACT ME' activeClassName="selected" exact destination='/contact' />
        </nav>
    )
}
