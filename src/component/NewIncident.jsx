import React, { useEffect, useState } from 'react';
import {  Outlet, useLocation, useNavigate } from 'react-router-dom';

const NewIncidentItem = [
  {
    source : "/Frame.png",
    name: "What type of incident?",
    para: "Choose the category that best describes the incident.",
  },
  {
    source: "/Frame1.png",
    name: "Tell us about the incident?",
    para: "Let’s connect the dots and see where to start.",
  },
  {
    source: "/Frame2.png",
    name: "Where did the incident occur?",
    para: "Lorem ipsum dolor sit general sac mascho werho",
  },
];

function NewIncident() {
  const location = useLocation();
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setData(NewIncidentItem);
    setItems([...new Set(NewIncidentItem.map((item,index) =>  item.DataTransferItemList))]);
  }, []);

  const gallery_filter = (itemData) => {
    const filterData = NewIncidentItem.filter((item) => item.name === itemData);
    setData(filterData);
  };

  

  return (
    <>
    <div className="App mt-24 sm:mt-16 lg:mt-24 px-4">
      <div className="text-center mb-6">
        <h1 className='text-2xl font-semibold mt-2 mb-4'>Let’s get started</h1>
        <p className='text-sm text-gray-600'>Lorem ipsum dolor sit general sac mascho werho Lorem ipsum dolor sit general sac mascho werho.</p>
      </div>
      
      <div className="grid grid-cols-3 sm:grid-cols-1 lg:grid-cols-3 gap-4 mt-10">
        {data.map((item,index) => (
          <div key={index} className="galleryItem flex flex-col items-center border p-2 rounded-lg">
            <img src={item. source} alt="" className="mb-2" />
            <div className="text-center">
              <p className="font-semibold text-2xl mb-2">{item.name}</p>
              <p>{item.para}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <ul className="flex flex-wrap gap-2 justify-center">
         
          {items.map((item,index) => (
            <li key={index}>
              <button onClick={() => gallery_filter(item)} className="bg-gray-200 text-gray-800 py-2 px-4 rounded-md transition duration-200 hover:bg-gray-300">{item}</button>
            </li>
          ))}
          {location.pathname === "/newincident/new" ? (
            <button 
              onClick={() => navigate("/newincident/new/item")} 
              className='bg-[#F26922] hover:bg-blue-600 py-4 px-4 transition-all duration-300 rounded-md border border-gray-300 text-[#A1A1AA]'>
              Get started
            </button>
          ) : (
            <button className='py-2 px-4 transition-all duration-300 rounded-md border border-gray-300 text-[#A1A1AA]'>
             
            </button>
        )}
        </ul>
      </div>
      <Outlet />
    </div>

    
    </>
   
  );
}

export default NewIncident;
