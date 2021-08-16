import React from 'react'
// bg-gradient-to-r from-primary to-secondary
export default function TOP_HEADER() {
    return (
        <div className='py-5 px-8 lg:px-12 text-white bg-purple-500 text-center'>
            <div className='h-12 w-12 bg-white rounded-full opacity-20 absolute'></div>
            <div className=' right-0 h-12 w-12 bg-white rounded-full opacity-30 absolute'></div>
            <div className='left-0 w-5 h-5 bg-white rounded-full opacity-20 absolute'></div>
            <div className='w-7 h-7 right-[30%] top-0 bg-white rounded-full opacity-10 absolute'></div>
            <div className='w-12 h-12 right-[55%] top-10 bg-white rounded-full opacity-10 absolute'></div>
            <p className='uppercase text-[13px] tracking-wider font-semibold'>our consulting service is now free !</p>  
        </div>
    )
}
