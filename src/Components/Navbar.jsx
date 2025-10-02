import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router'
import { motion } from "motion/react"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  // Shared animation props for nav items
  const navMotion = {
    initial: { y: 0 },
    whileHover: { y: [0, -10, 0] },
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  }

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
          className={`${isOpen ? 'flex' : 'hidden'}
            absolute top-full right-0 w-fit bg-white 
            md:static md:flex md:w-auto md:bg-transparent md:items-center 
            gap-3 md:gap-8 px-6 py-4 md:p-0 
            flex-col md:flex-row rounded-3xl md:rounded-none shadow-md md:shadow-none`}
        >
          <ul className="flex flex-col md:flex-row gap-3 md:gap-8 items-center">
            <motion.li {...navMotion}>
              <Link
                to="/"
                className="py-2 px-5 rounded-3xl text-gray-800 hover:bg-custom-yellow"
              >
                Home
              </Link>
            </motion.li>

            <motion.li {...navMotion}>
              <a
                href="#services"
                className="py-2 px-5 rounded-3xl text-gray-800 hover:bg-custom-yellow"
              >
                Our Services
              </a>
            </motion.li>

            <motion.li {...navMotion}>
              <a
                href="#about"
                className="py-2 px-5 rounded-3xl text-gray-800 hover:bg-custom-yellow"
              >
                About Us
              </a>
            </motion.li>

            <motion.li {...navMotion}>
              <a
                href="#contact"
                className="py-2 px-5 rounded-3xl text-gray-800 hover:bg-custom-yellow"
              >
                Get in Touch
              </a>
            </motion.li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
