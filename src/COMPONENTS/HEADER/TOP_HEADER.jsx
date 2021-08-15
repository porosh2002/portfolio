import React from 'react'

export default function TOP_HEADER() {
    return (
        <div className='py-4 px-8 lg:px-12 text-white bg-gradient-to-r from-primary to-secondary text-center'>
            <div className='h-12 w-12 bg-white rounded-full opacity-20 absolute'></div>
            <div className=' right-0 h-12 w-12 bg-white rounded-full opacity-30 absolute'></div>
            <div className='left-0 w-5 h-5 bg-white rounded-full opacity-20 absolute'></div>
            <div className='w-7 h-7 right-[30%] top-0 bg-white rounded-full opacity-10 absolute'></div>
            <div className='w-12 h-12 right-[55%] top-10 bg-white rounded-full opacity-10 absolute'></div>
            <p>Sed this bumce duan ut perspiciatis unde omnis iste natus error sit voluptatem accusantium </p>  
        </div>
    )
}
