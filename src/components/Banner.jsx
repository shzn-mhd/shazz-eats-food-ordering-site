import React from 'react'

const Banner = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
      <div className='max-h-[500px] relative'>
        {/* Overlay */}
        <div>
            <h1>The <span> Best</span></h1>
            <h1>Foods <span> Delivery</span></h1>
        </div>
        <img src="https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
      </div>
    </div>
  )
}

export default Banner
