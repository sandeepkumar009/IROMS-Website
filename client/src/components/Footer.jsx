import React from 'react'

const Footer = ({visitor, hits}) => {
  return (
    <div className='bg-[#0758a1] text-white px-80 flex flex-col items-center gap-3 py-8'>
      <div className='flex gap-5 items-center'>
        <div><img className='h-35 w-35' src="/iitpkd.png" alt="" /></div>
        <div>
          indian institute of technology palakkad
        </div>
        <div><img className='h-35 w-35' src="/iroms.png" alt="" /></div>
      </div>
      <div>This project is jointly funded by Ministry of Jal Shakti and the World Bank under the National Hydrology Project (NHP).</div>
      <div>For assistance with account settings and system errors, please contact humid_nhp@wmail.iitm.ac.in.</div>
      <div className='text-[#FFFF00]'>Total Hits: {hits} Total Visitors: {visitor}</div>
    </div>
  )
}

export default Footer