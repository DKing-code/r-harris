import React from 'react'
import Image from 'next/image'

function About() {
  return (
    <div className="md:p-10 p-2">
      <div className='md:container md:mx-auto md:p-10'>
        <div className='lg:flex gap-5'>
          <div className="p-2 flex-1">
            <h2 className='md:text-6xl text-2xl mb-5 text-orange-400 text-center'>About Our Firm</h2>
            <div>
              <p className="md:text-xl text-lg leading-loose text-gray-500">Richard Harris
                Advocates & Legal Consultants
                was established in 1978
                by Richard Harris, in order to provide quality solutions for commercial and corporate legal issues. The firm since has expanded to legal experts from various fields of legal expertise such as bankruptcy law,security asset, litigation & dispute resolution, maritime law, real estate & property law, foreign invesment assistance, banking & financial law and intellectual property law. Richard Harris has since became a leading legal firm globally in handling corporate and commercial cases.</p>
                <br />
                <p className="md:text-xl text-lg leading-loose text-gray-500">
                The firm maintains its commitment to provide the best legal advice and representation for its clients, utilising nearly 46 years of legal expertise and experience to offer the most efficient solutions to legal and bureaucratic obstacles to foreign investors and local businesses alike.........................
                </p>
                <a href="/about-us" className="text-blue-800">Read more</a>
            </div>
          </div>
          <div className="md:h-[600px] h-[400px] overflow-hidden my-5 md:my-0">
            <img src={'/images/person3.jpg'} alt='person'   style={{objectFit: "cover"}}  />
          </div>

        </div>
      </div>
    </div>
  )
}

export default About