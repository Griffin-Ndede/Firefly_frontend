import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router'
import { motion } from "motion/react"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-50 bg-white backdrop-blur-md shadow-md">
      <div className="mx-auto flex items-center justify-between px-6 py-3">
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
          className={`${isOpen ? 'flex items-end w-fit float-end' : 'hidden'
            } absolute top-full right-0 w-fit  bg-white  md:static md:flex md:w-auto md:bg-transparent md:items-center gap-3 md:gap-8  md:mt-0 px-6 py-4 md:p-0 flex-col md:flex-row  md:rounded-none md:shadow-none rounded-3xl`}
        >
          <Link
            to="/"
            className="py-2 px-5 rounded-3xl  transition-all duration-200 text-gray-800 hover:bg-custom-yellow  "
          >
            Home
          </Link>
          <motion.a
            initial={{ y: 20, opacity: 0, scaleY: 0.8 }}
            animate={{ y: 0, opacity: 1, scaleY: 1 }}
            whileHover={{ y: -5 }}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.1, 0.25, 1], // smooth ease like iOS
            }}
            href="#services"
            className="py-2 px-5 rounded-3xl transition-all duration-1000 text-gray-800 hover:bg-custom-yellow"
          >
            Our services
          </motion.a>

          <a href='#about'
            className="py-2 px-5 rounded-3xl  transition-all duration-200 text-gray-800 hover:bg-custom-yellow  "
          >
            About Us
          </a>

          <a
            href="#contact"
            className="py-2 px-5 rounded-3xl  transition-all duration-200 text-gray-800 hover:bg-custom-yellow  "
          >
            Get in Touch
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
