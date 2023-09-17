import React from 'react';
import { AiOutlineSearch } from "react-icons/ai";
import { useTheme } from "next-themes";
import { TypeAnimation } from 'react-type-animation';


import { FiSearch } from 'react-icons/fi';
import { Product } from '@/types';




interface SearchInputProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const SearchInput: React.FC<SearchInputProps> = ({ searchTerm, setSearchTerm }) => {
const { theme } = useTheme();  

  const textColor = theme === "dark" ? "text-white" : "text-black";
   // Determine background color based on the theme
   const bgColor = theme === "dark" ? "bg-black" : "bg-white";
  
  return (
    <div className="bg-gradient-to-r from-rose-300 via-teal-300 to-violet-300 
    rounded-lg p-8 flex flex-col items-center justify-center">
     
      <div className="font-bold text-xl 
                          mb-6       text-black dark:text-white bg-secondary/60 p-4 rounded-lg animate-fancy-text-reveal">
               
               <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Please search by name',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Please search by category',
        1000,
        'Please search by names',
        1000,
        'Please search by category',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
                </div>
      <div className="flex flex-row  space-x-5 items-center mb-8">
        <div className="rounded-full hover:scale-110 ease-in duration-300 bg-white p-2 ">
          <AiOutlineSearch className="text-teal-500  animate-bounce" size={38} />
        </div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border-2 ease-in duration-300 hover:scale-110 border-gray-200 
        rounded-md p-2 focus:ring focus:ring-primary focus:outline-none"
      />
    </div>
    </div>
  );
};

export default SearchInput;
