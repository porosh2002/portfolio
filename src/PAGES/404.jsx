import React from 'react'
import SECONDARY from '../COMPONENTS/BUTTON/SECONDARY'
import ASTRONOT from '../IMAGES/ASTRONOT.svg'
export default function NotFound() {
    return (
        <div className='h-[80vh] flex items-center justify-center'>
            <div>
                <p className='text-4xl text-gray-700'><span className='text-yellow-600'>OPS!</span> INVALID URL OR BROKEN URL</p>
                <br />
                <SECONDARY value='BACK TO HOME' destination='/' />
            </div>
        </div>
    )
}
