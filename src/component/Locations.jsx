import React from 'react'
import { Outlet } from 'react-router-dom'

function Locations () {
  return (
    <>
    <div>
      <div className='items-center justify-center'>
        <h1>Where’s the incident?</h1>
        <p>Enter a GPS, address. or pin point on the map. Try to be as accurate as possible, or click:Jurisdiction Wide</p>
        
        <img src="/Frame 1321315990.png" alt="" />
        
      </div>
    </div>
    <Outlet />
    </>
  )
}

export default Locations