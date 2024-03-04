import React from 'react'
import Link from 'next/link';


function Item({img,text,id}) {
  return (
    <div className=" bg-orange-500 relative overflow-hidden group">
      <Link href={`/services?id=${id}`}>
        <img src={img} alt="img" className="w-full group-hover:scale-150 transition ease-in-out delay-150" />
        <div className="bg-blue-900/80 absolute top-0 w-full h-full flex justify-center items-center text-white ">
          <p className="lg:text-xl font-bold">{text}</p>
        </div>
      </Link>
    </div>
  )
}

function Services() {
  return (
    <div className="md:p-10">
      <div className="container mx-auto md:p-5">
        <h2 className='md:text-6xl text-2xl mb-5 text-center text-orange-400'>Our Services</h2>
        <p className="text-slate-500 font-light text-center">Richard Harris has a wide array of talents that are experienced in various fields of legal expertise. Here are some of the fields we specialize in:</p>


        {/* LIST OF SERVICES RENDERED */}
        <section className="my-5 p-2 bg-white shadow grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
          <Item img='/images/s-bankruptcy.png' text='Bankruptcy Law' id={1}/>
          <Item img='/images/s-banking.png' text='Banking & Finance' id={2}/>
          <Item img='/images/s-family.png' text='Family Law' id={3}/>
          <Item img='/images/s-securities.png' text='Security Assets' id={4}/>
          <Item img='/images/s-investment.png' text='Foreign Investment' id={5}/>
          <Item img='/images/s-oil.png' text='Oil & Gas' id={6}/>
          <Item img='/images/s-pollution.png' text='Pollution & Environment' id={7}/>
          <Item img='/images/s-realestate.png' text='Real Estate & Property' id={8}/>
          <Item img='/images/s-intellectual.png' text='Intellectual Property' id={9}/>
          <Item img='/images/s-maritime.png' text='Maritime Law' id={10}/>
          <Item img='/images/s-labor.png' text='Labor Dispute' id={11}/>
          <Item img='/images/s-mining.png' text='Mining Law' id={12}/>
        </section>
      </div>
    </div>
  )
}

export default Services