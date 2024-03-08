import React, { useState } from 'react';
import { AiOutlineClose } from "react-icons/ai";
import { FiAlignLeft } from "react-icons/fi";

function Header() {
  const [isOpen, setIsOpen] = useState(true);
  const [clickedItem, setClickedItem] = useState('Dashboard');

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setClickedItem(item);
  };

  return (
    <div className="relative flex justify-start">
      <div className={`bg-white rounded-r-[30px] position-fixed text-white h-[600px] w-48 drop-shadow-xl flex flex-col justify-between ${isOpen ? 'block' : 'hidden'}`}>
        <div className="flex flex-col">
            {/* <button onClick={toggleNavbar} className="text-black w-full flex justify-end  mt-[15px] pr-[15px] pb-[15px] focus:outline-none">
              <AiOutlineClose className='w-6 h-6 p-1 bg-[#ee4d48] rounded-full'/>
            </button> */}
          <div className="flex justify-center w-full mt-[20px] items-center">
            <h1 className="text-3xl w-full font-bold border-b-[1px] pl-2 text-[#FA0000]">STALWARTS</h1>
          </div>
          <ul className="mt-4 w-full">
            <li className={`py-3 text-xl p-6 text-black ${clickedItem === 'Dashboard' ? 'bg-[#FA0000] text-white' : 'text-black'}`} onClick={() => handleItemClick('Dashboard')}>Dashboard</li>
            <li className={`py-3 text-xl p-6 text-black ${clickedItem === 'Income' ? 'bg-[#FA0000] text-white' : 'text-black'}`} onClick={() => handleItemClick('Income')}>Income</li>
            <li className={`py-3 text-xl p-6 text-black ${clickedItem === 'Expenses' ? 'bg-[#FA0000] text-white' : 'text-black'}`} onClick={() => handleItemClick('Expenses')}>Expenses</li>
          </ul>
        </div>
        <div className="p-6 mb-[30px]">
          <p className="text-black py-3 text-xl">Settings</p>
          <p className="text-black py-3 text-xl">Log Out</p>
        </div>
      </div>
      <button onClick={toggleNavbar} className={` left-0 top-0 mt-2 ml-4 text-black focus:outline-none w-[40px] h-[40px] ${isOpen ? 'hidden' : 'block'}`}>
        <FiAlignLeft className='w-[30px] h-[30px]' />
      </button>
    </div>
  );
}

export default Header;

