"use client"; 
import React, { useState } from 'react';
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import {createNavLinks } from '../constant';
import Link from 'next/link';
import { useAuthStatus } from '../context/useAuthStatus';
import { useRouter, usePathname } from 'next/navigation'; 
import { FaHamburger } from 'react-icons/fa';
import { RxHamburgerMenu } from 'react-icons/rx';
import { MdClose } from 'react-icons/md';

export const Header = () => {
  const { loggedIn } = useAuthStatus();
  const pathname = usePathname(); // Get the current pathname
  const router = useRouter(); // Get the router object
  const [hamburger, setHamburger] = useState(false);

  const hamburgerBtn = () => {
    setHamburger(!hamburger)
  }

  const navLinks = createNavLinks(loggedIn);
  function pathMatchRoute(route) {
    return route === pathname; // Directly return the comparison result
  }
  return (
    <header className='bg-white border-b shadow-sm sticky top-0 z-40 max-sm:py-2'>
      <div className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
        <div>
          <p onClick={() => router.push('/')} className='text-2xl font-semibold cursor-pointer'>
            <span className='text-red-500'>BUILD</span>GRAIN
          </p>
        </div>
        <div className='hidden md:flex space-x-10'>
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
         <div className='md:hidden'>
            <RxHamburgerMenu size={30} onClick={hamburgerBtn} />
          </div>
              {hamburger ? (<div>
        <div className='absolute top-0 right-0 md:hidden w-[50%]'>
          <div className='bg-white shadow-md p-4 rounded-md'>
            <div className='flex justify-end items-end text-right'>
              <MdClose size={30} onClick={hamburgerBtn} />
              </div>
            <ul className='flex flex-col space-y-4 pt-6'>
              {navLinks.map((item, index) => (
                <li key={index}>
                  <Link href={item.href}>
                  <p className='cursor-pointer py-3 text-sm font-semibold'>{item.label}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          </div>
      </div>) : ''}
      </div>
    </header>
  );
};
