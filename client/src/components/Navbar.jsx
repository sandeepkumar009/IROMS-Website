import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='bg-[#0758a1] text-white px-80 py-6 flex justify-between items-center'>
            <div className="flex gap-4">
                <div className="text-5xl">
                    IROMS
                </div>
                <div className="info">
                    <div className="full_form">Integrated River and Ocean Modeling System</div>
                    <div className="text-[#94eaf5]">which is capable of simulating fluvial, pluvial, and coastal floods.</div>
                </div>
            </div>
            <nav>
                <ul className='flex gap-3'>
                    <NavLink to="/"><li className='opacity-70 hover:opacity-100'>Home</li></NavLink>
                    <NavLink to="/developers"><li className='opacity-70 hover:opacity-100'>Developers</li></NavLink>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
