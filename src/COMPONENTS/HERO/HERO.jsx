import React from 'react'
import ASTRONOT from '../../IMAGES/ASTRONOT.svg'
import TEXT from './TEXT'
import { LazyLoadImage } from 'react-lazy-load-image-component';
export default function HERO() {
    return (
        <div className='h-[700px] flex items-center justify-between'>

<TEXT />

<LazyLoadImage 
      alt='ASTRONOT'
      height='650px'
      src={ASTRONOT} // use normal <img> attributes as props
      width='450px' 
          
      />
        </div>
    )
}
