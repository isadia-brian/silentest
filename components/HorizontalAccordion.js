import { useState } from "react";
import Image from "next/image";
import { AiOutlineWifi } from "react-icons/ai";
import { FaSwimmingPool } from "react-icons/fa";
import { MdKitchen } from "react-icons/md";
import { MdKingBed } from "react-icons/md";
import { MdScreenshotMonitor } from "react-icons/md";
import Link from "next/link";
import PersonalModal from "./PersonalModal";

import { Collapse } from "react-collapse";

const HorizontalCard = () => {
  const [open, setIsOpen] = useState(false);
  return (
    <div className="h-full">
      <div className="mt-10 w-full">
        <div className="shadow-2xl px-4 py-4">
        <div className="flex space-x-8  ">
          <div className="relative h-[300px] min-w-[400px]">
            <Image src="/images/img12.webp" alt="" fill />
          </div>
          <div className="flex flex-col justify-between">
            <p className="text-2xl">House 1A</p>
            <p className="text-sm  max-w-[500px]">
              This elegant and classy accommodation features sophisticated
              finishes and the best amenities that make every apartment{" "}
            </p>

            <div className="flex items-center space-x-4 text-2xl ">
              <AiOutlineWifi />
              <FaSwimmingPool />
              <MdKingBed />
              <MdKitchen />
              <MdScreenshotMonitor />
            </div>

            <div className="flex items-center justify-between">
              <p className="text-sm underline">View Room</p>
              <button className="bg-green-800 rounded-full px-5 py-3 font-bold text-sm  text-white" onClick={()=>setIsOpen(true)}>
                BOOK NOW
              </button>
            </div>
          </div>
        </div>
        <div>
        <Collapse isOpened={open}>
        <div className={open?"active":"inactive"}>
        <PersonalModal onClose={() => setIsOpen(false)}/>
        </div>
        </Collapse>
        </div>
       
        
        
        </div>
        
      </div>
  
       
          
        
   
    </div>
  );
};

export default HorizontalCard;
