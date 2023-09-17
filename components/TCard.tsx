'use client'

import React, { useState } from "react";
import { Product } from "@/types";
import { Button } from "./ui/button";

import Image from "next/image";
import { useTheme } from "next-themes";
import Link from "next/link";

interface TcardProps {
    data: Product ;
}

const Tcard: React.FC<TcardProps> = ({ data }) => {
  const [showDetails, setShowDetails] = useState(false);
  const { theme } = useTheme();

  const handleToggleDetails = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // Prevent the default button behavior (page refresh)
    setShowDetails(!showDetails);
  };
  // Determine text color based on the theme
  const textColor = theme === "dark" ? "text-white" : "text-black";
   // Determine background color based on the theme
   const bgColor = theme === "dark" ? "bg-black" : "bg-white";

  return (
    <Link href="/" className='outline-0 focus:ring-2 hover:ring-2 ring-primary transition
    duration-300 rounded-lg'>
    <div className={`align-top flex flex-wrap transition ease-in duration-300 justify-center w-30  
    max-w-sm rounded overflow-hidden shadow-lg  hover:scale-90  ${bgColor}`}>
        <div className="pt-4">

      <Image className="aspect-square
                                object-cover rounded-lg transition-all
                                duration-300 hover:scale-110" 
                                width={300}
                                height={200}
                                src={data.images} 
                                alt={data.name} />
      </div>
      <div className="px-6 py-4">
        <div className={`font-bold text-xl mb-2 ${textColor}`}>
          {data.name}
        </div>

        <p className={`text-gray-700 text-base ${textColor}`}>
          Category: {data.category}
        </p>

        <p className={`text-md font-bold ${textColor}`}>
          Price :<span>{data.price}</span>
        </p>
        <p className={`text-md ${textColor}`}>
          ASB :<span>56</span>
        </p>

        {showDetails && (
          <div className="mt-4 bg-gradient-to-r from-teal-500 to-teal-400 p-4 rounded-lg">
            <p className="text-white text-md mb-2">
              name:
               {/* {data.className} */}
            </p>
            <p className="text-white text-md mb-2">ASBWN: {data.name}</p>
            <p className="text-white text-md mb-2">CPW: {data.name}</p>
            <p className="text-white text-md mb-2">CPN: {data.name}</p>
            <p className="text-white text-md mb-2">
              Last address: {data.category}
            </p>
          </div>
        )}
      </div>
      <div className="px-6 pt-4 pb-2">
        <Button
          className="bg-teal-900 hover:bg-teal-300 text-white font-bold py-2 px-4 rounded"
          onClick={handleToggleDetails}
        >
          {showDetails ? "Hide details" : "CPO Eyes ONLY"}
        </Button>
      </div>
    </div>
    </Link>
  );
};

export default Tcard;
