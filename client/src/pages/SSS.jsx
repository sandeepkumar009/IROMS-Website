import React from 'react'
import InputOutput from '../components/Input_Output'

const SSS = () => {
  return (
    <div className='py-10 px-5 xl:px-20 bg-[#F0F4F8]'>
    
          <div className='flex flex-col md:flex-row flex-wrap justify-between gap-10'>
    
            <div className='pb-10'>
              <img className='w-[100%] md:w-[30vw] rounded-2xl' src="home/img2.png" alt="" />
            </div>
    
            <div className='w-[100%] md:w-[55vw]'>
              <div className="heading">
                <p className='text-xl p-1 md:p-5 text-justify'>
                  IROMS is an advanced hydrodynamic modeling system developed by Dr. B. Sridharan for simulating fluvial, pluvial, and coastal floods. The IROMS-Fluvial-Pluvial model is ten times more efficient than existing models, enabling real-time flood forecasting for Chennai. The IROMS-surge model accurately predicts coastal flooding along the Indian coast. It has been applied in stormwater modeling, drainage network performance analysis, and hydraulic assessments, including studies at Chennai Airport and Kerala’s Kuttanad region to improve flood mitigation strategies.
                </p>
              </div>
            </div>
    
            <div className='w-[100%] md:w-[40vw] rounded-2xl bg-white'>
              <div className="heading">
                <h3 className="text-xl font-semibold p-2">Example Inputs</h3>
                <div className="p-4 rounded">
                  <ul className="list-disc pl-5 text-md">
                    <li>Simulation Type: Fluvial Flood, Location: Chennai, Rainfall: 120 mm/hr, Water Level: 2.5 m, Drainage Capacity: 50 m³/s</li>
                    <li>Simulation Type: Storm Surge, Location: Kerala, Rainfall: 90 mm/hr, Water Level: 3.0 m, Drainage Capacity: 40 m³/s</li>
                    <li>Simulation Type: Pluvial Flood, Location: Mumbai, Rainfall: 150 mm/hr, Water Level: 1.8 m, Drainage Capacity: 55 m³/s</li>
                  </ul>
                </div>
              </div>
            </div>
    
            <div className='w-[100%] md:w-[40vw] rounded-2xl'>
              <InputOutput />
            </div>
            
          </div>
        </div>
  )
}

export default SSS
