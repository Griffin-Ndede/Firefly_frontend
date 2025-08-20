import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-50 bg-white/40 backdrop-blur-md shadow-md">
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
          className={`${
            isOpen ? 'flex items-end w-fit float-end' : 'hidden'
          } absolute top-full right-0 w-fit  bg-white  md:static md:flex md:w-auto md:bg-transparent md:items-center gap-3 md:gap-8  md:mt-0 px-6 py-4 md:p-0 flex-col md:flex-row  md:rounded-none md:shadow-none rounded-3xl`}
        >
          <Link
            to="/"
            className="py-2 px-5 rounded-3xl shadow-lg transition-all duration-200 text-gray-800 hover:bg-custom-yellow hover:text-white "
          >
            Home
          </Link>
          <a
            href="#services"
            className="py-2 px-5 rounded-3xl shadow-lg transition-all duration-200 text-gray-800 hover:bg-custom-yellow hover:text-white "
          >
            Our services
          </a>
          <a href='#about'
            className="py-2 px-5 rounded-3xl shadow-lg transition-all duration-200 text-gray-800 hover:bg-custom-yellow hover:text-white "
          >
            About Us
          </a>
          
          <Link
            to="/contact"
            className="py-2 px-5 rounded-3xl shadow-lg transition-all duration-200 text-gray-800 hover:bg-custom-yellow hover:text-white "
          >
            Get in Touch
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
