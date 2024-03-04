'use client'
import React, { useState } from 'react'
import Nav from '../components/home/Nav'
import Footer from '../components/Footer'



function Contact() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [msg, setMsg] = useState('')


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, name, msg);
    const response = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        email,
        name,
        msg
      })
    })
    setEmail('')
    setMsg('')
    setName('')
    let data = await response.json()
    alert(data.message)
  };




  return (
    <div>
      <div className="h-[20vh] bg-gray-300 text-center service-bg">
        <div className="w-full h-full flex justify-center items-center text-white">
          <h3 className="text-6xl">Contact Us</h3>
        </div>
      </div>
      <Nav />

      {/* section */}
      <div className="md:container mx-auto md:p-10 p-5">
        <div className="md:flex ">
          <div className="flex-1">
            <div className="md:my- my-5">
              <h2 className="md:text-6xl font-normal text-2xl text-blue-500 leading-snug">Location</h2>
              <p className="font-light md:text-lg text-slate-400">
                Address : 2 Warner Pl, London E8 7DA,
              </p>
            </div>

            <div className="md:my-10 my-5">
              <h2 className="md:text-6xl font-normal text-2xl text-blue-500 leading-snug">Contact Info</h2>
              <div>
                <p className="font-light md:text-lg text-slate-400">Mail: lawrichardharris@gmail.com</p>
                <p className="font-light md:text-lg text-slate-400">Phone: (917) 793 0837
                </p>

              </div>
            </div>

            <div className="md:my-10 my-5">
              <h2 className="md:text-6xl font-normal text-2xl text-blue-500 leading-snug">Working Days</h2>
              <p className="font-light md:text-lg text-slate-400 my-2">
                Mon - Fri: 08:00 - 17:00 (GMT+7)
              </p>
            </div>
          </div>
          <div className="flex-1 md:p-5 p-2 bg-slate-100">
            <div>
              <p className="text-xl text-gray-500">Send Us A Message</p>
              <form onSubmit={handleSubmit}>
                <div className="my-3">
                  <input type="email" placeholder="Enter your email" className="px-4 w-full py-2 rounded-sm border border-gray-200 outline-0" onChange={e => setEmail(e.target.value)} />
                </div>
                <div className="my-3">
                  <input type="text" placeholder="Enter your Full name" className="px-4 w-full py-2 rounded-sm border border-gray-200 outline-0" onChange={e => setName(e.target.value)} />
                </div>
                <textarea name="" id="" cols="30" rows="10" className="w-full border border-gray-20 rounded-md outline-0 p-4" onChange={e => setMsg(e.target.value)} ></textarea>
                <div className="text-end my-5">
                  <button className="bg-blue-600 px-4 py-2 rounded-md text-white">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        
      </div>
      <Footer />

    </div>
  )
}

export default Contact