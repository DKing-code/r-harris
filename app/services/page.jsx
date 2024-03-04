'use client'

import Nav from '../components/home/Nav'
import { Accordion, Placeholder } from 'rsuite';
// import { useSearchParams } from 'next/navigation'
import Footer from '../components/Footer';


function Service() {
    // const searchParams = useSearchParams()
    const id =  1  // searchParams.get('id')

  return (
    <div>
      <div className="h-[20vh] bg-gray-300 text-center service-bg">
        <div className="w-full h-full flex justify-center items-center text-white">
          <h3 className="text-6xl">Our Legal Services</h3>
        </div>
      </div>
      <Nav />

      {/* section */}
      <div className="md:container mx-auto md:p-10 p-5">
        
        <Accordion defaultActiveKey={+id} bordered>
          <Accordion.Panel header="Bankruptcy Law" id='data' eventKey={1} >
            <p className='p-2 bg-gray-500 text-white md:text-xl'>Expert guidance and representation for individuals and businesses navigating bankruptcy proceedings, debt restructuring, and financial reorganization.</p>
          </Accordion.Panel>
          <Accordion.Panel header="Banking & Finance" eventKey={2}>
            <p className='p-2 bg-gray-500 text-white md:text-xl'>Comprehensive legal advice on banking regulations, financial transactions, lending, investments, and regulatory compliance in the banking and finance sector.</p>
          </Accordion.Panel>
          <Accordion.Panel header="Family Law" eventKey={3}>
            <p className='p-2 bg-gray-500 text-white md:text-xl'>Compassionate legal support for matters such as divorce, child custody, adoption, domestic violence, and other family-related issues, ensuring the protection of your rights and interests.</p>
          </Accordion.Panel>
          <Accordion.Panel header="Security Assets" eventKey={4}>
            <p className='p-2 bg-gray-500 text-white md:text-xl'>Tailored legal solutions for securing assets, including asset protection strategies, risk management, and enforcement of security interests to safeguard valuable assets.</p>
          </Accordion.Panel>
          <Accordion.Panel header="Foreign Investment" eventKey={5}>
            <p className='p-2 bg-gray-500 text-white md:text-xl'>Strategic counsel and assistance for foreign investors navigating legal complexities, regulatory compliance, and investment protection in the UK market.</p>
          </Accordion.Panel>
          <Accordion.Panel header="Oil & Gas" eventKey={6}>
            <p className='p-2 bg-gray-500 text-white md:text-xl'>Specialized legal advice and representation for matters related to oil and gas exploration, production, licensing, regulatory compliance, and contractual negotiations.</p>
          </Accordion.Panel>
          <Accordion.Panel header="Pollution & Environment" eventKey={7}>
            <p className='p-2 bg-gray-500 text-white md:text-xl'>Legal advocacy and compliance guidance addressing environmental laws, pollution prevention, waste management, and environmental impact assessments to promote sustainable practices.</p>
          </Accordion.Panel>
          <Accordion.Panel header="Real Estate & Property" eventKey={8}>
            <p className='p-2 bg-gray-500 text-white md:text-xl'>Comprehensive legal services covering property transactions, lease agreements, land development, property disputes, and regulatory compliance in the real estate sector.</p>
          </Accordion.Panel>
          <Accordion.Panel header="Intellectual Property" eventKey={9}>
            <p className='p-2 bg-gray-500 text-white md:text-xl'>Protection and enforcement of intellectual property rights, including patents, trademarks, copyrights, and trade secrets, to safeguard innovation and creativity.</p>
          </Accordion.Panel>
          <Accordion.Panel header="Maritime Law" eventKey={10}>
            <p className='p-2 bg-gray-500 text-white md:text-xl'>Experienced legal counsel for maritime matters, including shipping contracts, vessel financing, maritime accidents, marine insurance, and international maritime regulations.</p>
          </Accordion.Panel>
          <Accordion.Panel header="Labor Dispute" eventKey={11}>
            <p className='p-2 bg-gray-500 text-white md:text-xl'>Skilled representation in labor disputes, employment law matters, collective bargaining, wrongful termination claims, workplace discrimination, and employee rights protection.</p>
          </Accordion.Panel>
          <Accordion.Panel header="Mining Law" eventKey={12}>
            <p className='p-2 bg-gray-500 text-white md:text-xl'>Guidance on mining regulations, permitting, land acquisition, mineral rights, environmental compliance, and contractual negotiations for mining operations and projects.</p>
          </Accordion.Panel>
        </Accordion>
      
      </div>
      <Footer/>
    </div>
  )
}

export default Service