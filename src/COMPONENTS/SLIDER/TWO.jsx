import React from 'react'
import ASTRONOT from '../../IMAGES/ASTRONOT.svg'
import PRIMARY from "../BUTTON/PRIMARY";
import SECONDARY from "../BUTTON/SECONDARY";
export default function ONE() {
    return (
        <div className='text-left tracking-wider h-full w-full px-12 flex items-center justify-between'>
        <div className='w-[50vw]'>
          <p className='text-gray-700 text-4xl leading-relaxed py-8'>DESIGN INTERFACES THATS USERS LOVE TO USE </p>
          <p className='text-[13px] leading-relaxed tracking-wider'>WE PROVIDE MOCKUP DESIGN AND DESIGN AND DEVELOPMENT SERVICES FOR WEBSITE, SOFTWARE, MOBILE APP, WEB APPLICATION </p>
          <div className='mt-12 flex'>
    
          <PRIMARY value='GET A QUOTE' destination='/contact'/>
          <SECONDARY value='RECENT WORKS' activeClassName="selected" exact destination='/contact' />
          </div>
        </div>
        <img src={ASTRONOT} alt='ASTRONOT' className='h-[450px]' />
      </div>
    )
}
