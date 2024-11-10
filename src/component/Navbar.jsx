import React from 'react'
import { FaBell } from "react-icons/fa6";
import {NavLink, Outlet} from 'react-router-dom';

import Nav2 from './Nav2';


// import { LuBellRing} from "react-icons/f

function Navbar() {
  return (
   <>
<nav className='fixed w-full top-0 left-0 right-0 bg-white shadow'>
    <ul className='max-w-[90vw] flex flex-wrap justify-between items-center mx-auto px-2 sm:px-5 py-2 sm:py-3.5 xl:py-5 text-sm xl:text-base'>
        <div className='flex items-center'>
            <img className='mr-5 sm:mr-10' src="img/logo.png" alt="Logo" />
            <a href="/dashboard" className='font-semibold text-2xl font-Onest'>Dashboard</a>
        </div>

        <div className='flex flex-wrap justify-center sm:justify-start'>
            
            <li className='text-[#A1A1AA] pl-7'>
                <NavLink to="/newincident">Incidents</NavLink> 
            </li>
          
            <li className='text-[#A1A1AA] pl-7'>
                <NavLink to="/Locations">Locations</NavLink>
            </li>
            <li className='text-[#A1A1AA] pl-7'>
                <NavLink to="/Activities">Activities</NavLink>
            </li>
            <li className='text-[#A1A1AA] pl-7'>
                <NavLink to="/Documents">Documents</NavLink>
            </li>
            <li className='text-[#A1A1AA] pl-7'>
                <NavLink to="/Cypher AI">Cypher AI</NavLink>
            </li>
        </div>

        <div className="flex items-center">
            <a href="#" className="flex items-center gap-2">
                <FaBell />
                <img className="flex" src="img/Rectangle 5412.png" alt="User Profile" />
            </a>
            <p className="text-[#A1A1AA] ml-2 hidden sm:block">
                Usman Zafar<br />
                usmanzafar@gmail.com
            </p>
        </div>
    </ul>
</nav>

   
    <Outlet/>
   
   
   </>
  )
}

export default Navbar;