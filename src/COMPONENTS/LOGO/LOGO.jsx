import React from 'react'
import { Link } from 'react-router-dom'


import LOGO_IMAGE from '../../IMAGES/LOGO.svg'

export default function LOGO() {
    return (
        <Link title='Porosh' to='/'>
            <img src={LOGO_IMAGE} alt='Porosh' className='h-[50px]'/>
        </Link>
    )
}
