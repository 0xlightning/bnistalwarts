import React, { useState } from 'react'

export default function DropEditBtn() {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("ITC"); 

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleOptionClick = (optionName) => {
    setSelectedOption(optionName);
    setIsDropdownOpen(false); // Close dropdown after selecting an option
  };
  
  return (
    <div className="flex items-center mt-[10px] space-x-4">
      <div className="relative">
      <button
        className="bg-red-500 text-white px-2 text-[0.8rem] py-[3px] rounded-md flex items-center"
        onClick={toggleDropdown}
      >
        {selectedOption}
        <svg
          className={`ml-2 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          width="16"
          height="16"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isDropdownOpen && (
        <div className="absolute z-10 mt-2 bg-white rounded-md shadow-lg">
          <div className="py-1">
            <button
              onClick={() => handleOptionClick("ITC")}
              className="block px-4 py-2 text-[0.7rem] text-gray-700 hover:bg-gray-100"
            >
              ITC
            </button>
            <button
              onClick={() => handleOptionClick("Mario")}
              className="block px-4 py-2 text-[0.7rem] text-gray-700 hover:bg-gray-100"
            >
              Mario
            </button>
          </div>
        </div>
      )}
    </div>
      <button className="border border-black text-gray-700 px-4 py-[2px] text-[0.8rem]  rounded-md">
        Edit
      </button>
    </div>
  )
}
