import React, { Suspense } from 'react'
import Hero from './components/home/Hero'
import Nav from './components/home/Nav'
import About from './components/home/About'
import Organization from './components/home/Organization'
import Footer from './components/Footer'
import Services from './components/home/Services'

function page() {
  return (
    <div>
      <Nav/>
      <Hero/>
      <About/>
      <Suspense fallback={<div>Loading...</div>}>
        <Services/>
      </Suspense>
      <Organization/>
      <Footer/>
    </div>
  )
}

export default page