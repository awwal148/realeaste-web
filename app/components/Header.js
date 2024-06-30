"use client"; 
import React from 'react';
import { navLinks } from '../constant';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation'; 

export const Header = () => {
  const pathname = usePathname(); // Get the current pathname
  const router = useRouter(); // Get the router object
  function pathMatchRoute(route) {
    return route === pathname; // Directly return the comparison result
  }
  return (
    <header className='bg-white border-b shadow-sm sticky top-0 z-40'>
      <div className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
        <div>
          <p onClick={() => router.push('/')} className='text-2xl font-semibold cursor-pointer'>
            <span className='text-red-500'>AKIN</span>DELE
          </p>
        </div>
        <div className='flex space-x-10'>
          <ul className='flex space-x-10'>
            {navLinks.map((item, index) => (
              <li key={index} className='list-none'>
                <Link href={item.href}>
                  <p
                    className={`cursor-pointer py-3 text-sm font-semibold border-b-[3px]  ${
                      pathMatchRoute(item.href) ? 'text-black border-b-red-500' : 'text-gray-400 border-b-transparent'
                    }`}
                  >
                    {item.label}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};
