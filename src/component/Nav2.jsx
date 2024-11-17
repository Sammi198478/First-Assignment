import React from 'react'

import { FaSearchDollar } from "react-icons/fa";
import { Outlet, useLocation, useNavigate } from 'react-router-dom';



function Nav2() {
  const location = useLocation();
  const navigate = useNavigate();

  if(location.pathname === "/newincident/new" || location.pathname === "/newincident/new/item" || location.pathname === "/newincident/new/item/getstart" ){return <Outlet/>}
  

  return (
    <>
    <div className='pt-40 flex justify-between border border-t border-gray-300'>
      <p className='text-[#A1A1AA]'>
        Welcome back<br />
        <span className='font-semibold text-2xl font-Onest text-[#09090B]'>Dashboard</span>
      </p>
      <div className="flex gap-10">
        <button className='flex items-center py-2 px-4 transition-all duration-300 rounded-md border border-gray-300 text-[#A1A1AA]'>
          <FaSearchDollar /> Search incident
        </button>
        <button className='py-2 px-4 transition-all duration-300 rounded-md border border-gray-300 text-[#A1A1AA]'>
          Sort By: Date modified
        </button>
        {
          location.pathname === "/newincident" ? (
            <button onClick={() => navigate("/newincident/new")} className='bg-[#F26922] hover:bg-blue-600 py-2 px-4 transition-all duration-300 rounded-md border border-gray-300 text-[#A1A1AA]'>
              New Incident
            </button>
          ) : (
            <button className='bg-[#F26922] hover:bg-blue-600 py-2 px-4 transition-all duration-300 rounded-md border border-gray-300 text-[#A1A1AA]'>
              Cypher AI
            </button>
          )
        }
      </div>
    </div>
 <Outlet/>
    
    </>
  );
};

export default Nav2;