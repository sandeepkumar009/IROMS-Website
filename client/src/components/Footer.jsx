import React from 'react'

const Footer = ({visitor, hits}) => {
  return (
    <div className='bg-[#64748B] text-white flex flex-col items-center gap-3 py-8 px-5 xl:px-20'>
      <div className='text-justify'>© 2025 - Copyright. Website managed by Indian Institute of Technology Palakkad, Government of India. All Rights Reserved.</div>
      <div className='text-[#FACC15]'>Total Hits: {hits} Total Visitors: {visitor}</div>
    </div>
  )
}

export default Footer