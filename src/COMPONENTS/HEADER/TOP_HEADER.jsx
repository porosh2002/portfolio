import React from 'react'
import { Link } from 'react-router-dom'
export default function TOP_HEADER() {
    return (
        <div className='h-[70px] md:px-12 font-semibold tracking-wider text-[13px] px-4 flex items-center justify-end text-gray-700'>
            <Link to='/works/search' className='md:mr-12 mr-6'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </Link>
            <Link to='/services/free' className='md:mr-12 mr-6'>
                ABOUT ME
            </Link>
            <Link to='/services/free'>
                TRY OUR FREE SERVICES
            </Link>
        </div>
    )
}
