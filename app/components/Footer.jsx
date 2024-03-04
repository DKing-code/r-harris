import React from 'react'

function Footer() {
  return (
    <div className="bg-gray-900 md:p-10 py-10 px-5 text-white">
      <div className="container mx-auto md:w-[60%]">
        {/* contacts and emails */}
        <div className='md:flex justify-between md:text-xl text-lg text-center'>
          <div>
            <p className=''>Phone : (917) 793 0837</p>
          </div>
          <div>
            <p>Email : lawrichardharris@gmail.com</p>
          </div>
          <div>
            <p>Website : r-harris.com</p>
          </div>
        </div>
        <div className='text-lg text-center my-2'>
          <hr />
          <p>Address : 2 Warner Pl, London E8 7DA</p>
        </div>
        {/* address */}
        <div>

        </div>
        <p className='text-center font-light italic'>© Law Firm, Richard Harris Advocates & Legal Consultants 2004 - 2024</p>
      </div>

    </div>
  )
}

export default Footer