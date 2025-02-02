import React from 'react'

const Home = () => {
  return (
    <div className='text-justify'>
      <div className="bg-[#0758a1] text-white px-80 pt-4 pb-12 text-xl">
        IROMS is an advanced hydrodynamic modeling system developed by Dr. B. Sridharan for simulating fluvial, pluvial, and coastal floods. The IROMS-Fluvial-Pluvial model is ten times more efficient than existing models, enabling real-time flood forecasting for Chennai. The IROMS-surge model accurately predicts coastal flooding along the Indian coast. It has been applied in stormwater modeling, drainage network performance analysis, and hydraulic assessments, including studies at Chennai Airport and Kerala’s Kuttanad region to improve flood mitigation strategies.
      </div>

      <div className='px-80 py-10'>
        <div className='flex gap-8 pb-8'>
          <div className='w-full flex flex-col gap-5'>
            <div>
              HUMID users can select from four hydrologic unit scales; sub-basin (4000-10000 km2), watershed (200-1000 km2), sub-watershed (50-100 km2) and gridded (5 x 5 km2). The choice of scale depends on the end use of the model outputs. For example, simulation using sub-basin scale datasets can be used in reservoir operations planning, whereas 5 km grid scale datasets can be used for applications like planning water harvesting structures.
            </div>
            <div>
              HUMID saves the effort and time for preparation of input datasets which is required in desktop SWAT environment. HUMID eludes the requirement of computing resources for execution of the model. Users can simulate the effects of management practices based on an extensive array of crops, soils, natural vegetation types, land uses, and other scenarios for hydrology. The generated hydrological outputs can be visualized as tables and charts. The water balance components computed include,
            </div>
            <ul className='ml-10'>
              <li className='list-disc'>Runoff</li>
              <li className='list-disc'>Evapotranspiration</li>
              <li className='list-disc'>Soil water content</li>
              <li className='list-disc'>Percolation</li>
              <li className='list-disc'>Baseflow</li>
            </ul>
            <div className='my-4'><button className='bg-[#0068c1] text-white p-2 rounded-md'>How does IROMS work?</button></div>
          </div>
          <div>
            <img className='w-full' src="/india.gif" alt="" />
          </div>
        </div>

        <div className='flex gap-8'>
          <div>
            <img className='w-full' src="/utilities.png" alt="" />
          </div>
          <div className='w-full flex flex-col gap-5'>
            <div>
              HUMID version 1.0 has un-calibrated input datasets at gridded (5 x 5 km2) scale for all the Indian river basins except trans-boundary river basins. However for Narmada basin datasets are available at all four scales. This version of HUMID facilitates customizations of General watershed inputs and databases, Sub basin inputs, Weather data and Agriculture management/Best Management Practices /Conservation practices.
            </div>
            <div>
              The next version will have calibrated datasets at all the four scales for all the Indian river basins except trans-boundary river basins. Additional customized tools will be made available for analysis of HUMID outputs.
            </div>
            <div>
              National Remote Sensing Centre (NRSC - ISRO) and Indian Institute of Technology Madras (IIT-M) have jointly developed the system design, modelling, and application with technical guidance from experts of Texas A&M University.
            </div>
            <div className='my-4'><button className='bg-[#0068c1] text-white p-2 rounded-md'>Get started with IROMS</button></div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home
