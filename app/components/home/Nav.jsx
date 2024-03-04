import React from 'react'
import Link from 'next/link'

function Nav() {
  return (
    <div className=" bg-white shadow sticky top-0 z-50">
      <div className="md:container md:mx-auto md:text-xl flex md:gap-10 gap-5 justify-center p-6 group">
        <Link href="/" className='hover:text-blue-600'>Home</Link>
        <Link href="/about-us">About</Link>
        <Link href="/services">Service</Link>
        <Link href="/contact-us">Contact</Link>
      </div>
    </div>
  )
}

export default Nav