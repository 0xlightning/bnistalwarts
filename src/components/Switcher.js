import React, { useState } from 'react'
import DropEditBtn from './DropEditBtn';
import Dashboard from './Dashboard';


export const Switcher = () => {

    const [activeOption, setActiveOption] = useState(1);

  const handleOptionChange = (option) => {
    setActiveOption(option);
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };


  const data = [
    { id: '01', name: 'Aakash', week1: 1200, week2: 0, week3: 0, week4: 0 },
    { id: '02', name: 'Sanjay', week1: 0, week2: 1600, week3: 1600, week4: 1600 },
    { id: '03', name: 'Sanjay', week1: 1200, week2: 0, week3: 0, week4: 0 },
    { id: '04', name: 'Sanjay', week1: 0, week2: 1600, week3: 1600, week4: 1600 },
    { id: '05', name: 'Sanjay', week1: 1200, week2: 0, week3: 0, week4: 0 },
    { id: '06', name: 'Sanjay', week1: 0, week2: 1600, week3: 1600, week4: 1600 },
    { id: '07', name: 'Sanjay', week1: 1200, week2: 0, week3: 0, week4: 0 },
    { id: '08', name: 'Sanjay', week1: 0, week2: 1600, week3: 1600, week4: 1600 },
    { id: '09', name: 'Sanjay', week1: 1200, week2: 1600, week3: 1600, week4: 1600 },
    { id: '10', name: 'Sanjay', week1: 0, week2: 1600, week3: 1600, week4: 1600 },
    { id: '01', name: 'Aakash', week1: 1200, week2: 0, week3: 0, week4: 0 },
    { id: '02', name: 'Sanjay', week1: 0, week2: 1600, week3: 1600, week4: 1600 },
    { id: '03', name: 'Sanjay', week1: 1200, week2: 0, week3: 0, week4: 0 },
    { id: '04', name: 'Sanjay', week1: 0, week2: 1600, week3: 1600, week4: 1600 },
    { id: '05', name: 'Sanjay', week1: 1200, week2: 0, week3: 0, week4: 0 },
    { id: '06', name: 'Sanjay', week1: 0, week2: 1600, week3: 1600, week4: 1600 },
    { id: '07', name: 'Sanjay', week1: 1200, week2: 0, week3: 0, week4: 0 },
    { id: '08', name: 'Sanjay', week1: 0, week2: 1600, week3: 1600, week4: 1600 },
    { id: '09', name: 'Sanjay', week1: 1200, week2: 1600, week3: 1600, week4: 1600 },
    { id: '10', name: 'Sanjay', week1: 0, week2: 1600, week3: 1600, week4: 1600 },
  ];

  return (
    <div className='w-full '>
    <div className='bg-white rounded-[10px] flex items-center drop-shadow-lg py-[1px] mt-[10px] w-full'>
    <div className='bg-gray-200 rounded-[10px] mt-[10px] mb-[10px] mx-[10px] w-fit'>
    <button 
      className={`mr-2 py-2 px-4 rounded-[10px] ${activeOption === 1 ? 'bg-white drop-shadow-lg' : 'bg-gray-200 text-gray-700'}`}
      onClick={() => handleOptionChange(1)}
    >
      Member Fee
    </button>
    <button 
      className={`mr-2 py-2 px-4 rounded-[10px] ${activeOption === 2 ? 'bg-white drop-shadow-lg' : 'bg-gray-200 text-gray-700'}`}
      onClick={() => handleOptionChange(2)}
    >
      Wrapdoor Prize
    </button>
    <button 
      className={`mr-2 py-2 px-4 rounded-[10px] ${activeOption === 3 ? 'bg-white drop-shadow-lg' : 'bg-gray-200 text-gray-700'}`}
      onClick={() => handleOptionChange(3)}
    >
      Visitor Fee
    </button>
    <button 
      className={`py-2 px-4 rounded-[10px] ${activeOption === 4 ? 'bg-white drop-shadow-lg' : 'bg-gray-200 text-gray-700'}`}
      onClick={() => handleOptionChange(4)}
    >
      Observer Fee
    </button>
    </div>
    <button className='bg-[#FA0000] text-white w-[150px] h-[40px] rounded-[40px]'>Select Date</button>
    </div>
    {/* Render content based on active option */}
    <div className="bg-white drop-shadow-lg rounded-lg mt-[30px] overflow-hidden">
  <div className="text-black font-semibold p-4">Members List</div>
  <div className="overflow-x-auto" style={{ maxHeight: '500px' }}> {/* Set max height to 600px */}
    <table className="w-full table-auto">
      <thead className="sticky top-0 bg-white z-10">
        <tr className="border-b border-gray-200 ">
          <th className="px-4 py-2 font-semibold  border-r border-gray-200 ">S.no</th>
          <th className="px-4 py-2 font-semibold  border-r border-gray-200 ">Name</th>
          <th className="px-4 py-2 font-semibold  border-r border-gray-200 ">1st Week<br/><span className='font-normal'>04-01-2024</span><DropEditBtn/></th>
          <th className="px-4 py-2 font-semibold  border-r border-gray-200 ">2nd Week<br/><span className='font-normal'>11-01-2024</span><DropEditBtn/></th>
          <th className="px-4 py-2 font-semibold  border-r border-gray-200 ">3rd Week<br/><span className='font-normal'>18-01-2024</span><DropEditBtn/></th>
          <th className="px-4 py-2 font-semibold  border-r border-gray-200 ">4th Week<br/><span className='font-normal'>25-01-2024</span><DropEditBtn/></th>
        </tr>
      </thead>
      <tbody style={{ maxHeight: '480px'}}> {/* overflowY: 'auto'  Set max height for tbody and enable vertical scrolling */}
        {data.map((member) => (
          <tr key={member.id} className='' >
            <td className="px-4 py-2 border-r border-gray-200">{member.id}</td>
            <td className="px-4 py-2 border-r border-gray-200">{member.name}</td>
            <td className="px-4 py-2 text-center border-r border-gray-200">{member.week1}</td>
            <td className="px-4 py-2 text-center border-r border-gray-200">{member.week2}</td>
            <td className="px-4 py-2 text-center border-r border-gray-200">{member.week3}</td>
            <td className="px-4 py-2 text-center border-r border-gray-200">{member.week4}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>
  </div>
  )
}
