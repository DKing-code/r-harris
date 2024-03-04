import React from 'react'

function Organization() {
  return (
    <div className="bg-slate-200 md:h-[30vh]">
      <div className="md:container mx-auto p-10">
        <h3 className="md:text-4xl text-xl text-center leading-loose">The Esteemed Legal Practise That Directs TheFuture</h3>

        <div className="flex flex-wrap gap-5 justify-between mt-10">
          <div className="text-center">
            <p className=" text-center text-5xl font-bold italic text-gray-700">150+</p>
            <p className="font-semibold">Satisfied Clients</p>
          </div>
          <div className="text-center">
            <p className=" text-center text-5xl font-bold italic text-gray-700">120+</p>
            <p className="font-semibold">Total Cases Won</p>
          </div>
          <div className="text-center">
            <p className=" text-center text-5xl font-bold italic text-gray-700">32+</p>
            <p className="font-semibold">Specialized Lawyers</p>
          </div>
          <div className="text-center">
            <p className=" text-center text-5xl font-bold italic text-gray-700">46</p>
            <p className="font-semibold">Years of Experience</p>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Organization