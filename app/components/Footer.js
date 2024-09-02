import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 px-4">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
    {/* Company Info */}
    <div>
      <h2 className="text-lg font-semibold mb-4">BuildGrain</h2>
      <p className="text-gray-400">
        BuildGrain is your trusted partner in finding your dream home. With a comprehensive listing of properties for sale and rent, we make it easy to find a place you can call home.
      </p>
      <p className="mt-4 text-gray-400">&copy; 2024 BuildGrain. All rights reserved.</p>
    </div>

    {/* Quick Links */}
    <div>
      <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
      <ul className="space-y-2 text-gray-400">
        <li>
          <Link href="/about">About Us</Link>
        </li>
        <li>
          <Link href="/category/sale">Buy a Home</Link>
        </li>
        <li>
          <Link href="/category/rent">Rent a Home</Link>
        </li>
        <li>
          <Link href="/contact">Contact Us</Link>
        </li>
        <li>
          <Link href="/privacy-policy">Privacy Policy</Link>
        </li>
      </ul>
    </div>

    {/* Contact Info */}
    <div>
      <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
      <ul className="space-y-2 text-gray-400">
        <li>123 Real Estate St, Suite 100</li>
        <li>City, State, ZIP Code</li>
        <li>Email: contact@buildgrain.com</li>
        <li>Phone: +1 (555) 123-4567</li>
      </ul>
    </div>

    {/* Social Media Links */}
    <div>
      <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
      <div className="flex space-x-4">
        <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white">
          <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.325v21.351C0 23.4.6 24 1.325 24h11.494v-9.294H9.688v-3.622h3.131V8.413c0-3.1 1.894-4.785 4.659-4.785 1.325 0 2.464.098 2.795.143v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.763v2.312h3.587l-.468 3.622h-3.119V24h6.116C23.4 24 24 23.4 24 22.675V1.325C24 .6 23.4 0 22.675 0z"/>
          </svg>
        </a>
        <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white">
          <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M23.954 4.569c-.885.392-1.833.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.555-2.005.959-3.127 1.184-.897-.959-2.178-1.56-3.594-1.56-2.717 0-4.917 2.201-4.917 4.917 0 .39.045.765.127 1.124-4.084-.205-7.699-2.162-10.123-5.138-.423.722-.666 1.562-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.062c0 2.386 1.697 4.374 3.946 4.827-.413.111-.848.171-1.296.171-.316 0-.623-.031-.922-.088.624 1.951 2.438 3.374 4.584 3.415-1.68 1.317-3.809 2.103-6.114 2.103-.397 0-.788-.023-1.175-.068 2.179 1.397 4.768 2.213 7.548 2.213 9.057 0 14.009-7.504 14.009-14.009 0-.213-.005-.426-.014-.637.961-.694 1.8-1.562 2.462-2.549z"/>
          </svg>
        </a>
        <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white">
          <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.312 3.608 1.287.975.975 1.225 2.242 1.287 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.312 2.633-1.287 3.608-.975.975-2.242 1.225-3.608 1.287-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.312-3.608-1.287-.975-.975-1.225-2.242-1.287-3.608-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.062-1.366.312-2.633 1.287-3.608.975-.975 2.242-1.225 3.608-1.287 1.265-.058 1.645-.07 4.849-.07m0-2.163c-3.259 0-3.67.014-4.947.072-1.491.065-2.758.36-3.797 1.398-1.039 1.039-1.333 2.306-1.398 3.797-.058 1.277-.072 1.688-.072 4.947s.014 3.67.072 4.947c.065 1.491.36 2.758 1.398 3.797 1.039 1.039 2.306 1.333 3.797 1.398 1.277.058 1.688.072 4.947.072s3.67-.014 4.947-.072c1.491-.065 2.758-.36 3.797-1.398 1.039-1.039 1.333-2.306 1.398-3.797.058-1.277.072-1.688.072-4.947s-.014-3.67-.072-4.947c-.065-1.491-.36-2.758-1.398-3.797-1.039-1.039-2.306-1.333-3.797-1.398-1.277-.058-1.688-.072-4.947-.072zM12 5.838a6.162 6.162 0 0 0-6.162 6.162A6.162 6.162 0 0 0 12 18.162 6.162 6.162 0 0 0 18.162 12 6.162 6.162 0 0 0 12 5.838zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"/>
          </svg>
        </a>
        <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white">
          <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.77 24 1.77 24h20.46c.96 0 1.77-.77 1.77-1.72V1.72C24 .77 23.23 0 22.23 0zM7.09 20.45H3.56V9h3.53v11.45zM5.32 7.66c-1.13 0-2.05-.92-2.05-2.05s.92-2.05 2.05-2.05 2.05.92 2.05 2.05-.92 2.05-2.05 2.05zm15.13 12.79h-3.53V14.8c0-1.35-.03-3.1-1.89-3.1-1.89 0-2.18 1.48-2.18 3v5.75h-3.54V9h3.4v1.56h.05c.47-.89 1.61-1.82 3.31-1.82 3.54 0 4.19 2.33 4.19 5.36v6.35z"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
</footer>
  )
}

export default Footer