import { Facebook, Instagram, Twitter } from 'lucide-react'
import React from 'react'

function Footer() {
  return (
    <>
    <div>
      <div>
        <img src="/images/Firefly_logo.png" 
        alt="firefly_logo" 
        className='h-24'/>
        <p className='w-full'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, libero.</p>
        <div className='flex gap-4'>
          <Instagram strokeWidth={1}/>
          <Facebook strokeWidth={1}/>
          <Twitter strokeWidth={1}/>
        </div>
      </div>
      <div>
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Get in touch</li>
        </ul>
      </div>
    </div>
    </>
  )
}

export default Footer
