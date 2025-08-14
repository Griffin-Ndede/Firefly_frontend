import { Facebook, Instagram, Twitter } from 'lucide-react'
import React from 'react'

function Footer() {
  return (
    <footer className="bg-custom-beige mt-10 items-center">
      {/* Main Footer Container */}
      <div className="mx-auto px-10  grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-16 items-center">
        
        {/* Brand & Socials */}
        <div className="md:col-span-1">
          <img
            src="/images/Firefly_logo.png"
            alt="firefly_logo"
            className="h-32 mb-2"
          />
          <p className="text-gray-600 font-light mb-6">
            Join us in preserving Africa&apos;s heritage, empowering the next generation,
            and transforming the global narrative — one story at a time.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 rounded-full hover:bg-gray-100">
              <Instagram strokeWidth={1} className="w-10 h-10 text-custom-yellow hover:text-black transition-colors" />
            </a>
            <a href="#" className="p-2 rounded-full hover:bg-gray-100">
              <Facebook strokeWidth={1} className="w-10 h-10 text-custom-yellow hover:text-black transition-colors" />
            </a>
            <a href="#" className="p-2 rounded-full hover:bg-gray-100">
              <Twitter strokeWidth={1} className="w-10 h-10 text-custom-yellow hover:text-black transition-colors" />
            </a>
          </div>
        </div>

        {/* Links Sections */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-600">
            <li><a href="/" className="hover:text-black transition-colors">Home</a></li>
            <li><a href="/about" className="hover:text-black transition-colors">About us</a></li>
            <li><a href="/contact" className="hover:text-black transition-colors">Get in touch</a></li>
            <li><a href="/team" className="hover:text-black transition-colors">Our team</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-gray-600">
            <li><a href="/" className="hover:text-black transition-colors">Documentation</a></li>
            <li><a href="/" className="hover:text-black transition-colors">Blog</a></li>
            <li><a href="/" className="hover:text-black transition-colors">FAQs</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-gray-600">
            <li><a href="/" className="hover:text-black transition-colors">Help Center</a></li>
            <li><a href="/" className="hover:text-black transition-colors">Privacy Policy</a></li>
            <li><a href="/" className="hover:text-black transition-colors">Terms of Service</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-300 py-4 text-center text-sm font-extralight">
        © {new Date().getFullYear()} Firefly. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
