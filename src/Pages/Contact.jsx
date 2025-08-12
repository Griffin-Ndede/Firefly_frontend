import React from 'react'
import Navbar from '../Components/Navbar'

function Contact() {
  return (
    <>
      <Navbar />
      <section className='h-screen grid grid-cols-2 bg-custom-beige'>
        <div className='h-fit w-2/3 rounded-3xl bg-white mx-10 py-6 px-8 mt-24 shadow-2xl'>
          <h1 className='text-xl font-light mb-4'>Get in touch</h1>
          <p className='font-bold text-4xl mb-4'>Let&apos;s chat, Reach out to us!</p>
          <p className='font-light text-sm border-b border-gray-300 pb-6'>Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>


          <form action="">
            <div className='flex justify-between my-6 gap-10'>
              <div>
                <label
                  htmlFor="fname"
                  className='block ml-4'>First name</label>
                <input
                  type="text"
                  name="fname"
                  placeholder='First name'
                  className='w-full py-2 px-3 rounded-3xl border border-gray-300 placeholder:font-light text-sm' />
              </div>
              <div>
                <label
                  htmlFor="lname"
                  className='block ml-4'>Last name</label>
                <input
                  type="text"
                  name='lname'
                  placeholder='Last name'
                  className='w-full py-2 px-3 rounded-3xl border border-gray-300 placeholder:font-light text-sm' />
              </div>
            </div>
            <label
              htmlFor="email"
              className='block ml-4'>Email address</label>
            <input
              type="text"
              name='email'
              placeholder='Enter your email address'
              className='w-full py-2 px-3 rounded-3xl border border-gray-300 mb-6 placeholder:font-light text-sm' />
              <label 
              htmlFor="message" 
              className='block ml-4'>Message</label>
              <textarea 
              name="message" 
              placeholder='Leave us a message'
              className='h-32 w-full border border-gray-300 rounded-3xl pl-4 pt-2 placeholder:font-light text-sm'></textarea>
          </form>
        </div>

      </section>
    </>
  )
}

export default Contact
