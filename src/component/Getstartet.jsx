import React from 'react'
import Nav3 from './Nav3'

function Getstartet() {
  
  return (
    <>
    <Nav3/>
    <div>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='lg:text-2xl font-bold md:text-3xl '>Let’s give the incident a title?</h1>
        <p className='text-[#71717A] mt-2'>Make a title that will easily identify the incidents</p>
        <button className='text-[#71717A] mt-2 text-start'>Add title here</button>
      </div>
     
      <div className='flex flex-col items-center justify-center mt-10'>
        <h1 className='lg:text-2xl font-bold md:text-3xl '>Describe what happened during the incident?</h1>
        <p className='text-[#71717A] mt-2'>Share some information about the incident. The when, where, how. </p>
        <button className='text-[#71717A] mt-2 text-start'>Type here</button>
      </div>

     
    </div>
    </>
  )
}

export default Getstartet;