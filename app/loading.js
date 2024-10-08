import React from 'react'
// import Spinner from '../assets/iconss/spinner.svg'
import Spinner from './assets/iconss/spinner.svg'
import Image from 'next/image'

const Loading = () => {
  return (
    <div className="bg-black bg-opacity-50 flex items-center justify-center fixed left-0 right-0 bottom-0 top-0 z-50">
      <div>
    <Image src={Spinner} alt='spinning' className='h-24'/>
      </div>
    </div>
  )
}

export default Loading