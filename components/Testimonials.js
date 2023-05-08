import localFont from "next/font/local";
import Image from "next/image";
import { motion } from "framer-motion";
import {FaQuoteLeft} from 'react-icons/fa'
const melodrama = localFont({
  src: "../public/fonts/melodrama/Melodrama-Semibold.ttf",
});



const Testimonials = () => {
  return <div className="w-[900px] mx-auto py-12 h-full mb-12">
    <div className="relative">
      <h1 className={`${melodrama.className} md:text-[50px]`}>
        Testimonials
      </h1>
      <div className="bg-green-800 h-2 w-12 absolute left-0 bottom-1 -z-2"></div>
      </div>
    <div className="mt-16 flex gap-12 bg-green-50 p-4 ">
        <div className="bg-green-800 h-[400px] min-w-[300px]"></div>
        <div className=" w-full flex flex-col items-center justify-between">
        <p className={`${melodrama.className}flex justify-between w-full text-4xl`}>
            <FaQuoteLeft/>
        </p>
        <p className="text-sm max-w-[600px] pr-12 ">we had a wonderful stay everything was superb 👌 Many thanks to Mr mwarabu and miss faith who made sure we were comfortable and we had Activities to do during our stay. We will definitely come back..</p>
        <div className="w-full flex justify-between">
            <p className="font-bold">Grace</p>
        </div>
        </div>
       
    </div>
  </div>;
};

export default Testimonials;
