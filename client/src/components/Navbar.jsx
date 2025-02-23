import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='bg-[#1E3A8A] text-[#FFFFFF] py-6'>
            <div className='flex justify-between items-center px-5 xl:px-20'>
                <div className="md:flex gap-4">
                    <div className="logo text-5xl">
                        IROMS
                    </div>
                    <div className="full_form hidden xl:block">Integrated River and Ocean Modeling System</div>
                </div>
                <nav className=''>
                    <ul className='flex gap-3'>
                        <NavLink to="/"><li className='opacity-70 hover:opacity-100'>Home</li></NavLink>
                        <NavLink to="/developers"><li className='opacity-70 hover:opacity-100'>Developers</li></NavLink>
                    </ul>
                </nav>
                {/* <div className='md:hidden invert'><img className='w-8' src="svgs/menu.svg" alt="" /></div> */}
            </div>
        </div>
    )
}

export default Navbar
