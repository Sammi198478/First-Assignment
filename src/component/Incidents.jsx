import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const IncidentsItems = [
  { id: 1, img: "img/Rectangle 42010.png", name: "Whitechapel Rd.", aria: "Tulare County, Los Angeles, CA 23415", price: "$1,456,654.00" },
  { id: 2, img: "img/Rectangle 42010 (1).png", name: "Whitechapel Rd.", aria: "Tulare County, Los Angeles, CA 23415", price: "$1,456,654.00" },
  { id: 3, img: "img/Group 1171276280.png", name: "Whitechapel Rd.", aria: "Tulare County, Los Angeles, CA 23415", price: "$1,456,654.00" },
  { id: 4, img: "img/Rectangle 42010 (2).png", name: "Whitechapel Rd.", aria: "Tulare County, Los Angeles, CA 23415", price: "$1,456,654.00" },
  { id: 5, img: "img/Rectangle 42010 (3).png", name: "Whitechapel Rd.", aria: "Tulare County, Los Angeles, CA 23415", price: "$1,456,654.00" },
  { id: 6, img: "img/Rectangle 42010 (4).png", name: "Whitechapel Rd.", aria: "Tulare County, Los Angeles, CA 23415", price: "$1,456,654.00" },
];

function Incidents() {

  const [data, setData] = useState([]);
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    setData(IncidentsItems);
    setCollection([...new Set(IncidentsItems.map((item) => item.DataTransferItemList))]);
  }, []);

  const gallery_filter = (itemData) => {
    const filterData = IncidentsItems.filter((item) => item.name === itemData);
    setData(filterData);
  };

  return (
   <div className="App mt-16 sm:mt-20 lg:mt-24 mb-10">
  <div className="galleryWrapper flex flex-col lg:flex-row">
    <div className="filterItem mb-4 lg:mb-0 lg:mr-6">
      <ul className="flex flex-wrap gap-2">
        <li>
          <button onClick={() => setData(IncidentsItems)} className="filter-button">
            
          </button>
        </li>
        {collection.map((item) => (
          <li key={item}>
            <button onClick={() => gallery_filter(item)} className="filter-button">
              {item}
            </button>
          </li>
        ))}
      </ul>
    </div>

    <div className="galleryContainer grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-4">
      {data.map((item) => (
        <div key={item.id} className="galleryItem flex flex-col items-center border p-2 rounded-lg">
          <img src={item.img} alt={item.name} className="mb-2 w-full h-auto rounded" />
          <div className="text-center">
            <p className="font-semibold">{item.name}</p>
            <p>{item.aria}</p>
            <p className="font-bold">{item.price}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

  );
};

export default Incidents;
