import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Facebook, Instagram, Phone, Twitter } from 'lucide-react'

function Contact() {

  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    message: "",
  })


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Form submitted successfully")
  }

  console.log(formData)
  return (
    <>
      <Navbar />
      <section className='min-h-screen grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-32 bg-custom-beige px-10 sm:px-6 lg:px-20 py-10'>

        <div className='h-fit w-full rounded-3xl bg-white py-10 px-10 sm:px-16 mt-16 md:mt-24 shadow-2xl'>
          <h1 className='text-lg sm:text-xl font-light mb-4'>Get in touch</h1>
          <p className='font-bold text-2xl sm:text-3xl lg:text-4xl mb-4'>Let&apos;s chat, Reach out to us!</p>
          <p className='font-extralight text-sm sm:text-lg border-b border-gray-300 pb-6'>
            Let&apos;s connect! We&apos;d love to hear from you — whether it&apos;s for collaborations, partnerships, or just to share ideas.
          </p>
          <form action="" onSubmit={handleSubmit}>
            <div className='flex flex-col sm:flex-row justify-between my-6 gap-6 sm:gap-10'>
              <div className='flex-1'>
                <label htmlFor="fname" className='block ml-2 sm:ml-4 font-light'>First name</label>
                <input
                  type="text"
                  name="fname"
                  onChange={handleChange}
                  value={formData.fname}
                  placeholder='First name'
                  className='w-full py-2 px-3 rounded-3xl border border-gray-300 placeholder:font-light text-sm'
                />
              </div>
              <div className='flex-1'>
                <label htmlFor="lname" className='block ml-2 sm:ml-4 font-light'>Last name</label>
                <input
                  type="text"
                  name='lname'
                  onChange={handleChange}
                  value={formData.lname}
                  placeholder='Last name'
                  className='w-full py-2 px-3 rounded-3xl border border-gray-300 placeholder:font-light text-sm'
                />
              </div>
            </div>

            <label htmlFor="email" className='block ml-2 sm:ml-4 font-light'>Email address</label>
            <input
              type="text"
              name='email'
              value={formData.email}
              onChange={handleChange}
              placeholder='Enter your email address'
              className='w-full py-2 px-3 rounded-3xl border border-gray-300 mb-6 placeholder:font-light text-sm'
            />

            <label htmlFor="message" className='block ml-2 sm:ml-4 font-light'>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder='Leave us a message'
              className='h-32 w-full border border-gray-300 rounded-3xl pl-4 pt-2 placeholder:font-light text-sm'
            ></textarea>

            <button type='submit' className='bg-custom-yellow my-4 mx-auto flex justify-center py-2 px-3 rounded-3xl w-full sm:w-1/3 text-xl font-light hover:bg-custom-gray hover:text-white'>
              Submit
            </button>
          </form>
        </div>

        <div className='w-full flex flex-col items-center md:items-start mt-6 md:mt-24'>
          <img
            src="https://st4.depositphotos.com/1158226/27864/i/450/depositphotos_278643274-stock-photo-stunning-mushrooms-on-moss-and.jpg"
            alt="firefly"
            className='h-40 sm:h-56 md:h-72 w-full object-cover rounded-3xl shadow-2xl'
          />

          <div className='bg-white h-64 sm:h-96 w-full rounded-3xl mt-10 md:mt-20 shadow-2xl p-10 space-y-4 '>
            <div className='flex gap-5 items-center'>
              <Twitter strokeWidth={1} className='h-10 w-10 text-custom-yellow' />
              <p className='text-2xl font-extralight'>Firefly</p>
            </div>
            <div className='flex gap-5 items-center'>
              <Instagram strokeWidth={1} className='h-10 w-10 text-custom-yellow' />
              <p className='text-2xl font-extralight'>Firefly</p>
            </div>
            <div className='flex gap-5 items-center'>
              <Facebook strokeWidth={1} className='h-10 w-10 text-custom-yellow' />
              <p className='text-2xl font-extralight'>Firefly</p>
            </div>
            <div className='flex gap-5 items-center'>
              <Phone strokeWidth={1} className='h-10 w-10 text-custom-yellow' />
              <p className='text-2xl font-extralight'>0712345678</p>
            </div>
          </div>
        </div>

      </section>
      <Footer />
    </>
  )
}

export default Contact
