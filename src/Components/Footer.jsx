import { Facebook, Instagram, Twitter } from 'lucide-react'
import React from 'react'

function Footer() {
  return (
    <>
      <section className='bg-custom-beige h-fit p-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 shadow-2xl p-6 items-center max-w-7xl mx-auto rounded-3xl bg-white'>
          <div>
            <img src="/images/Firefly_logo.png"
              alt="firefly_logo"
              className='h-24 mb-4' />
            <p className='w-full'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, libero.</p>
            <div className='flex gap-4'>
              <Instagram strokeWidth={1} />
              <Facebook strokeWidth={1} />
              <Twitter strokeWidth={1} />
            </div>
          </div>
          <div>
            <ul>
              <li>Home</li>
              <li>About us</li>
              <li>Get in touch</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Home</li>
              <li>About us</li>
              <li>Get in touch</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Home</li>
              <li>About us</li>
              <li>Get in touch</li>
            </ul>
          </div>
        </div>
      </section>

    </>
  )
}

export default Footer
