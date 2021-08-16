import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
export default function HEADER() {
    const [nav_status, change_nav_status] = useState(true)
    useEffect(() => {
        window.addEventListener('resize', handleResize)
        function handleResize() {
            if (window.innerWidth <= 1024) {
                change_nav_status(true)
            }
            else {
                change_nav_status(false)
            }
        }
        if (window.innerWidth >= 1024) {
            change_nav_status(false)
        }
    }, []);
    const handle_nav_status = () => {
        if (window.innerWidth != 1280) {
            change_nav_status(!nav_status)
        }
    }
    const nav_style = nav_status ? ({ transform: "translateX(-100vw)" }) : null
    return (
        <div className='sticky inset-0 text-purple-500 font-semibold px-8 tracking-wider lg:px-12 h-[100px] uppercase lg:flex items-center justify-between shadow-lg bg-white'>

            <div className='flex items-center h-full justify-between'>
                <Link to='/' className='text-2xl'>Porosh</Link>

                {nav_status ?
                    <svg onClick={handle_nav_status} className='lg:hidden' width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M20 20H25V25H20V20ZM12.5 20H17.5V25H12.5V20ZM5 20H10V25H5V20ZM20 12.5H25V17.5H20V12.5ZM12.5 12.5H17.5V17.5H12.5V12.5ZM5 12.5H10V17.5H5V12.5ZM20 5H25V10H20V5ZM12.5 5H17.5V10H12.5V5ZM5 5H10V10H5V5Z" fill="currentColor" />
                    </svg> : <svg onClick={handle_nav_status} className='lg:hidden' width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.7625 15L22.1375 9.63749C22.3729 9.40211 22.5051 9.08286 22.5051 8.74999C22.5051 8.41711 22.3729 8.09787 22.1375 7.86249C21.9021 7.62711 21.5829 7.49487 21.25 7.49487C20.9171 7.49487 20.5979 7.62711 20.3625 7.86249L15 13.2375L9.63748 7.86249C9.40211 7.62711 9.08286 7.49487 8.74998 7.49487C8.41711 7.49487 8.09786 7.62711 7.86248 7.86249C7.62711 8.09787 7.49487 8.41711 7.49487 8.74999C7.49487 9.08286 7.62711 9.40211 7.86248 9.63749L13.2375 15L7.86248 20.3625C7.74532 20.4787 7.65233 20.6169 7.58887 20.7693C7.52541 20.9216 7.49274 21.085 7.49274 21.25C7.49274 21.415 7.52541 21.5784 7.58887 21.7307C7.65233 21.883 7.74532 22.0213 7.86248 22.1375C7.97869 22.2546 8.11694 22.3476 8.26926 22.4111C8.42159 22.4746 8.58497 22.5072 8.74998 22.5072C8.915 22.5072 9.07838 22.4746 9.23071 22.4111C9.38303 22.3476 9.52128 22.2546 9.63748 22.1375L15 16.7625L20.3625 22.1375C20.4787 22.2546 20.6169 22.3476 20.7693 22.4111C20.9216 22.4746 21.085 22.5072 21.25 22.5072C21.415 22.5072 21.5784 22.4746 21.7307 22.4111C21.883 22.3476 22.0213 22.2546 22.1375 22.1375C22.2546 22.0213 22.3476 21.883 22.4111 21.7307C22.4746 21.5784 22.5072 21.415 22.5072 21.25C22.5072 21.085 22.4746 20.9216 22.4111 20.7693C22.3476 20.6169 22.2546 20.4787 22.1375 20.3625L16.7625 15Z" fill="#9747FF" />
                    </svg>}

            </div>

            <nav onClick={handle_nav_status} style={nav_style} className='duration-300 lg:duration-[0ms] flex-col lg:flex-row flex rounded-sm lg:items-center justify-between lg:w-[650px] text-[14px] bg-purple-500 lg:bg-transparent my-4 lg:my-0 text-white lg:text-purple-500'>
                <Link to='/' className='p-5 lg:p-0  '>Home</Link>
                <Link to='/' className='p-5 lg:p-0  '>SERVICES</Link>
                <Link to='/' className='p-5 lg:p-0  flex items-start'>
                    RECENT WORKS
                    <div className='h-2 w-2 animate-ping rounded-full bg-red-600'></div>
                </Link>
                <Link to='/' className='p-5 lg:p-0  '>ABOUT</Link>
                <Link to='/' className='p-5 lg:py-4 lg:px-5 rounded-sm flex items-center lg:bg-purple-500 lg:text-white lg:border-purple-500 hover:bg-transparent lg:hover:text-purple-500 duration-300 lg:border-2 border-transparent'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 rotate-90" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                    </svg>
                    CONTACT ME
                </Link>
            </nav>

        </div>
    )
}
