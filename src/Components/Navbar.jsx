import React, { useState } from 'react'
import { Menu, X, Home, Briefcase, Users, PhoneCall } from 'lucide-react'
import { Link } from 'react-router'
import { motion } from "motion/react"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  // Shared animation props for nav items
  const navMotion = {
    initial: { y: 0 },
    whileHover: { y: [0, -10, 0] },
    transition: { duration: 0.5, ease: "easeInOut" },
  }

  return (
    <header className="antialiased rounded-full flex justify-center z-20">
      <div className="fixed top-10 left-1/2 -translate-x-1/2 w-4/6 text-black bg-custom-beige shadow-xl rounded-full">
        <div className="mx-auto flex items-center justify-between px-6 py-2">
          {/* Logo */}
          <img
            src="/images/Firefly_logo.png"
            alt="Firefly Logo"
            className="h-12 w-auto"
          />

          {/* Hamburger Menu - Mobile Only */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="w-8 h-8 text-custom-yellow" />
            ) : (
              <Menu className="w-8 h-8 text-custom-yellow" />
            )}
          </button>

          {/* Nav Links */}
          <nav
            className={`${isOpen ? 'flex' : 'hidden'}
            absolute top-full right-0 w-fit bg-white 
            md:static md:flex md:w-auto md:bg-transparent md:items-center 
            gap-3 md:gap-8 px-6 py-4 md:p-0 
            flex-col md:flex-row rounded-3xl md:rounded-none shadow-md md:shadow-none`}
          >
            <ul className="flex flex-col md:flex-row gap-2 md:gap-4 items-center">
              
              <motion.li {...navMotion}>
                <Link
                  to="/"
                  className="py-2 px-5 rounded-3xl text-gray-800 hover:bg-custom-yellow font-light text-base hover:text-white flex items-center gap-2"
                >
                  {/* <Home strokeWidth={1.5} size={20} />  */}
                  Home
                </Link>
              </motion.li>

              <motion.li {...navMotion}>
                <a
                  href="#services"
                  className="py-2 px-5 rounded-3xl text-gray-800 hover:bg-custom-yellow font-light text-base hover:text-white flex items-center gap-2"
                >
                  {/* <Briefcase strokeWidth={1.5} size={20} />  */}
                  Our Services
                </a>
              </motion.li>

              <motion.li {...navMotion}>
                <a
                  href="#about"
                  className="py-2 px-5 rounded-3xl text-gray-800 hover:bg-custom-yellow font-light text-base hover:text-white flex items-center gap-2"
                >
                  {/* <Users strokeWidth={1.5} size={20} />  */}
                  About Us
                </a>
              </motion.li>

              <motion.li {...navMotion}>
                <a
                  href="#contact"
                  className="py-2 px-5 rounded-3xl text-gray-800 bg-custom-yellow hover:bg-custom-gray hover:text-white flex items-center gap-2"
                >
                  <PhoneCall strokeWidth={1.5} size={20} /> Get in Touch
                </a>
              </motion.li>

            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar
