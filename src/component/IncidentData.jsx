import Nav3 from './Nav3'
import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';



const DataItem = [
  {
    image: "/Group.png",
    name: "Avalanche",
  },
  {
    image: "/fi_9502782.png",
    name: "Biological",
  },
  {
    image: "/Line.png",
    name: "Blizzard",
  },
  {
    image: "/Group (1).png",
    name: "Cold/Freezing",
  },
  {
    image: "/fi_533057.png",
    name: "Drought",
  },
  {
    img: "/Vector (1).png",
    name: "Earthquake",
  },
  {
    image: "/fi_106063.png",
    name: "Flooding",
  },
  {
    image: "/fi_66275.png",
    name: "Heat Wave",
  },
  {
    image: "/Icon.png",
    name: "Hail",
  },
  {
    image: "/fi_9502782.png",
    name: "Lightning",
  },
  {
    image: "/Vector (2).png",
    name: "Man Made",
  },
  {
    image: "/fi_3496215.png",
    name: "Mudslide",
  },
  {
    image: "/Vector (3).png",
    name: "Severe Storm",
  },
  {
    image: "/Vector (3).png",
    name: "Strong Wind",
  },
  {
    image: "/fi_3682921.png",
    name: "Tornado",
  },
  {
    image: "/fi_533077.png",
    name: "Tsunami",
  },
  {
    image: "/fi_10567288.png",
    name: "Volcanic Eruption",
  },
  {
    image: "/fi_3661746.png",
    name: "Wildfire",
  },
 
];




function IncidentData() {

  const [data, setData] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    if (DataItem && DataItem.length > 0) {
      setData(DataItem);
      setUser([...new Set(DataItem.map((item) => item.DataTransferItemList))]);
    }
  }, []);

  const gallery_filter = (itemData) => {
    const filterData = DataItem.filter((item) => item.DataTransferItemList === itemData);
    setData(filterData);
  };

  return (
    <>
      <Nav3  />
      <div className="App mt-10 sm:mt-16 lg:mt-24 px-4">
        <div className="text-center mb-6">
          <h1 className='text-2xl font-semibold mt-2 mb-4'>Which of these best describes the incident?</h1>
        </div>
        
        <div className="grid grid-cols-4 sm:grid-cols-1 lg:grid-cols-3 gap-4">
          {data.map((item) => (
            <div key={item.id} className="border rounded-lg p-4 flex flex-col items-center text-center shadow hover:shadow-lg transition-shadow duration-300">
              <img src={item.image} alt="" className="mb-2" />
              <h2 className="font-semibold text-sm mb-2">{item.name}</h2>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <ul className="flex flex-wrap gap-2 justify-center">
            <li>
              <button onClick={() => setData(DataItem)} ></button>
            </li>
            {user.map((item, index) => (
              <li key={index}>
                <button onClick={() => gallery_filter(item)} className="bg-gray-200 text-gray-800 py-2 px-4 rounded-md transition duration-200 hover:bg-gray-300">{item}</button>
              </li>
            ))}
          </ul>
      
        </div>
        <Outlet/>
      </div>
    </>
  );
}



    
  
  


export default IncidentData;