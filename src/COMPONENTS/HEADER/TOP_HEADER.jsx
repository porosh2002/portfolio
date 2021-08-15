import React from 'react'
import { Link } from 'react-router-dom'
export default function TOP_HEADER() {
    return (
        <div className='h-[100px] bg-purple-500 flex items-center justify-between text-white px-8 tracking-wider lg:px-12 text-[15px]'>
            <div className='flex lg:items-center items-start'>

            <svg className='mr-4' width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 15C6.14348 15 4.36301 14.2625 3.05025 12.9497C1.7375 11.637 1 9.85652 1 8C1 6.14348 1.7375 4.36301 3.05025 3.05025C4.36301 1.7375 6.14348 1 8 1C9.85652 1 11.637 1.7375 12.9497 3.05025C14.2625 4.36301 15 6.14348 15 8C15 9.85652 14.2625 11.637 12.9497 12.9497C11.637 14.2625 9.85652 15 8 15ZM8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16V16Z" fill="currentColor"/>
<path d="M8.93 6.588L6.64 6.875L6.558 7.255L7.008 7.338C7.302 7.408 7.36 7.514 7.296 7.807L6.558 11.275C6.364 12.172 6.663 12.594 7.366 12.594C7.911 12.594 8.544 12.342 8.831 11.996L8.919 11.58C8.719 11.756 8.427 11.826 8.233 11.826C7.958 11.826 7.858 11.633 7.929 11.293L8.93 6.588ZM9 4.5C9 4.76522 8.89464 5.01957 8.7071 5.20711C8.51957 5.39464 8.26521 5.5 8 5.5C7.73478 5.5 7.48043 5.39464 7.29289 5.20711C7.10535 5.01957 7 4.76522 7 4.5C7 4.23478 7.10535 3.98043 7.29289 3.79289C7.48043 3.60536 7.73478 3.5 8 3.5C8.26521 3.5 8.51957 3.60536 8.7071 3.79289C8.89464 3.98043 9 4.23478 9 4.5Z" fill="currentColor"/>
</svg>


            <p className='w-[70vw]'>Aenean id libero nisl. Phasellus auctor placerat mauris. Morbi non egestas lorem <Link to='/' className='underline'>Contact</Link></p>
            </div>
            
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
        </div>
    )
}
