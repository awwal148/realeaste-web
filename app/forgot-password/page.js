"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import houseKeys from '../assets/images/house-keys.jpg'

const SignUp = () => {
   const [email, setEmail] = useState("");

  function onChange(e) {
    setEmail(e.target.value);
  }

  async function onSubmit(e) {
    e.preventDefault();
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      console.log("success")
      // toast.success("Email was sent");
    } catch (error) {
      console.log(error)
      // toast.error("Could not send reset password");
    }
  }
  return (
     <section>
      <h1 className="text-3xl text-center mt-6 font-bold">Forgotten Password</h1>
      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <Image
            src={houseKeys}
            alt="key"
            
            height={100} 
            quality={100} // Set quality to 100 for maximum quality
            className="w-full rounded-2xl"
          />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form onSubmit={onSubmit} >
            <input
              type="email"
              id="email"
              onChange={onChange}
              placeholder="Email address"
              className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
            />
            <button
              className="w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800"
              type="submit"
            >
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default SignUp