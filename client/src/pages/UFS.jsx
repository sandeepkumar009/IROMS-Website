import React from 'react'

const UFS = () => {
  return (
    <div className='px-80 py-10'>
      <div className='flex flex-col gap-10'>
        <div className="container1 flex justify-between">
          <div >
            <img className='w-[600px]' src="home/img1.png" alt="" />
          </div>
          <div className='w-[600px] border-2'>
            <div className="heading">
              <h1 className='text-3xl font-bold bg-blue-300 py-3 text-center'>About Urban Flooding Simulation</h1>
              <p className='text-xl p-5 '>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores autem consequatur iure itaque suscipit excepturi illum enim esse omnis repellat. Minima, quidem! Sit repellendus voluptates est nihil enim consequuntur quo!
              </p>
            </div>
          </div>
        </div>
        <div className="container1 flex justify-between">
          <div className='w-[600px] h-[400px] border-2'>
          <div className="heading">
              <h1 className='text-3xl font-bold bg-blue-300 py-3 text-center'>Some Examples</h1>
              <ul className='text-2xl flex flex-col gap-1 m-10'>
                <li className='list-decimal'>Lorem, ipsum dolor.</li>
                <li className='list-decimal'>Lorem, ipsum dolor.</li>
                <li className='list-decimal'>Lorem, ipsum dolor.</li>
                <li className='list-decimal'>Lorem, ipsum dolor.</li>
              </ul>
            </div>
          </div>
          <div className='w-[600px] h-[400px] border-2'>
            <div className="heading">
              <h1 className='text-3xl font-bold bg-blue-300 py-3 text-center'>Try Urban Flooding Simulation</h1>
              <p className='text-xl p-5 '>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores autem consequatur iure itaque suscipit excepturi illum enim esse omnis repellat. Minima, quidem! Sit repellendus voluptates est nihil enim consequuntur quo!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UFS
