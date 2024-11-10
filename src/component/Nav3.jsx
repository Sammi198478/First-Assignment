import React from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

function Nav3() {
    const location = useLocation();
    const navigate = useNavigate();
  return (
    <>
    <div className='pt-40 flex justify-between border border-t border-gray-300'>
      <p className='text-[#A1A1AA]'>
      Home - Incidents - New Incident<br />
        <span className='font-semibold text-2xl font-Onest text-[#09090B]'>New Incident</span>
      </p>
      {
          location.pathname === "/newincident/new/data" ? (
            <button onClick={() => navigate("/newincident/new")} className='py-2 px-4 transition-all duration-300 rounded-md border border-gray-300 text-[#A1A1AA]'>
              Back
            </button>
          ) : (
            <button className='bg-[#F26922] hover:bg-blue-600 py-2 px-4 transition-all duration-300 rounded-md border border-gray-300 text-[#A1A1AA]'>
             Next step
            </button>
          )
        }
      </div>
      <Outlet/>
    </>
  );
};

export default  Nav3;