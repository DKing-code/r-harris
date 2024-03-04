import React from 'react'
import Nav from '../components/home/Nav'
import Footer from '../components/Footer'

function About() {
  return (
    <div>
      <div className="h-[20vh] bg-gray-300 text-center service-bg">
        <div className="w-full h-full flex justify-center items-center text-white">
          <h3 className="text-6xl">About Us</h3>
        </div>
      </div>
      <Nav />

      {/* section */}
      <div className='md:container md:mx-auto md:p-10'>

        <div className='lg:flex gap-5'>
          <div className="md:h-[600px] h-[400px] overflow-hidden">
            <img src={'/images/person2.jpg'} alt='person' style={{ objectFit: "cover" }} />
          </div>
          <div className="p-2 flex-1">
            <h2 className='md:text-6xl text-xl mb-5 text-orange-400'>About Our Firm</h2>
            <div>
              <p className="text-xl leading-loose text-gray-500">Richard Harris
                 Advocates & Legal Consultants was established in 1978
                by Richard Harris, in order to provide quality solutions for commercial and corporate legal issues. The firm since has expanded to legal experts from various fields of legal expertise such as bankruptcy law, security asset, litigation & dispute resolution, maritime law, real estate & property law, foreign invesment assistance, banking & financial law and intellectual property law. Richard Harris has since became a leading legal firm globally in handling corporate and commercial cases.</p>
                <br />
                <p className="text-xl leading-loose text-gray-500">
                The firm maintains its commitment to provide the best legal advice and representation for its clients, utilising nearly 46 years of legal expertise and experience to offer the most efficient solutions to legal and bureaucratic obstacles to foreign investors and local businesses alike.
                </p><br />
                <p className="text-xl leading-loose text-gray-500">
                As an established firm in United Kingdom legal world, Richard Harris cooperates with numerous legal organizations and associations around the world. Ensuring that our firm is always up-to-date with the latest reports regarding government policy, amendments to existing regulations, and the global judicial system.
                </p>
                <p className="text-xl leading-loose text-gray-500">
                Sometimes those steps lead to administrative proceedings or litigation, and as a member of the firm’s litigation practice, he is well equipped to represent clients when a matter gets there. He has handled every stage of civil litigation across a wide range of subject matters and has tried multiple cases to verdict before judges and juries.
                </p>
            </div>
          </div>
        </div>

        <div>
          {/* <marquee>1111111111111</marquee> */}
        </div>
      </div>
      
      <Footer/>
    </div>
  )
}

export default About