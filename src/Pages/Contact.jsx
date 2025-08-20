import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Facebook, Instagram, Phone, Twitter, Mail, MapPin, ShoppingCart, Workflow } from 'lucide-react'
import Swal from 'sweetalert2'

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
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Form submitted successfully",
      showConfirmButton: true,
      // timer: 1500
    });
    setFormData({
      fname: "",
      lname: "",
      email: "",
      message: "",
    })
  }
  const contactInformation = [
    {
      "icon": Workflow,
      "title": "Collaborations",
      "description": "Work with Firefly on creative projects, photography, and visual storytelling."
    },
    {
      "icon": Mail,
      "title": "Email",
      "description": "firefly@gmail.com"
    },
    {
      "icon": Phone,
      "title": "Phone",
      "description": "+254-712-345-678"
    },
    {
      "icon": MapPin,
      "title": "Location",
      "description": "Westlands, Nairobi"
    }
  ]

  return (
    <>
      <Navbar />
      <section className='min-h-screen grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-32 bg-custom-beige border-b border-gray-300 px-10 sm:px-6 lg:px-20 py-10'>

        <div className='h-fit w-full rounded-3xl bg-white py-10 px-10 sm:px-16 mt-16 md:mt-24 shadow-2xl'>
          <h1 className='text-lg sm:text-xl font-light mb-4'>Get in touch</h1>
          <p className='font-bold text-2xl sm:text-3xl lg:text-4xl mb-4'>Let&apos;s chat, <br/> Reach out to us!</p>
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
                  required
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
                  required
                  placeholder='Last name'
                  className='w-full py-2 px-3 rounded-3xl border border-gray-300 placeholder:font-light text-sm'
                />
              </div>
            </div>

            <label htmlFor="email" className='block ml-2 sm:ml-4 font-light'>Email address</label>
            <input
              type="email"
              name='email'
              value={formData.email}
              onChange={handleChange}
              required
              placeholder='Enter your email address'
              className='w-full py-2 px-3 rounded-3xl border border-gray-300 mb-6 placeholder:font-light text-sm'
            />

            <label htmlFor="message" className='block ml-2 sm:ml-4 font-light'>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder='Leave us a message'
              className='h-32 w-full border border-gray-300 rounded-3xl pl-4 pt-2 placeholder:font-light text-sm'
            ></textarea>

            <button type='submit' className='bg-custom-yellow my-4 mx-auto flex justify-center py-2 px-3 rounded-3xl w-full sm:w-1/3 text-xl font-light hover:bg-custom-gray hover:text-white'>
              Submit
            </button>
          </form>
        </div>


        <div className='w-full flex flex-col items-center md:items-start mt-20'>
             <div className="space-y-8 mt-12">
            {contactInformation.map((contactInfo, index) => (
              <div
                key={index}
                className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <contactInfo.icon className="w-6 h-6 text-orange" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-black">{contactInfo.title}</h3>
                  <p className="text-custom-gray font-light text-lg">{contactInfo.description}</p>
                </div>
              </div>
            ))}
          </div>
          <img
            src="https://st4.depositphotos.com/1158226/27864/i/450/depositphotos_278643274-stock-photo-stunning-mushrooms-on-moss-and.jpg"
            alt="firefly"
            className='h-40 sm:h-56 md:h-72 w-full object-cover rounded-3xl shadow-2xl mt-6 md:mt-16'
          />

       
        </div>

      </section>
      <Footer />
    </>
  )
}

export default Contact
