import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div className='text-justify px-80'>
      <div className="about pt-4 pb-12 text-xl">
        IROMS is an advanced hydrodynamic modeling system developed by Dr. B. Sridharan for simulating fluvial, pluvial, and coastal floods. The IROMS-Fluvial-Pluvial model is ten times more efficient than existing models, enabling real-time flood forecasting for Chennai. The IROMS-surge model accurately predicts coastal flooding along the Indian coast. It has been applied in stormwater modeling, drainage network performance analysis, and hydraulic assessments, including studies at Chennai Airport and Kerala’s Kuttanad region to improve flood mitigation strategies.
      </div>

      <div className='flex flex-col gap-10 pb-10'>
        <div className='flex justify-between'>
          <div className="first flex justify-around items-center">
            <img src="home/img5.png" alt="" />
          </div>
          <div className="second">
            <img src="home/img4.png" alt="" />
          </div>
          <div className="third flex justify-around items-center">
            <img src="home/img6.png" alt="" />
          </div>
        </div>
        <div className='flex justify-between'>
          <div className="first hover:shadow-sm shadow-black">
            <NavLink to="/UrbanFloodingSimulation"><span ><img src="home/img1.png" alt="" /></span></NavLink>
          </div>
          <div className="second hover:shadow-sm shadow-black">
            <NavLink to="/StormSurgSimulation"><span ><img src="home/img2.png" alt="" /></span></NavLink>
          </div>
          <div className="third hover:shadow-sm shadow-black">
            <NavLink to="/CompoundFlowSimulation"><span ><img src="home/img3.png" alt="" /></span></NavLink>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home
