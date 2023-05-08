import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import { motion } from "framer-motion";

const melodrama = localFont({
  src: "../public/fonts/melodrama/Melodrama-Semibold.ttf",
});
const poppins = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400"],
  });

const Rooms = () => {
  return (
    <div className={`${poppins.className}`}>
        <Navbar/>
    <section className="w-full h-screen border-b-[0.8px] md:pl-28 px-6 md:pr-20 py-10 ">
      <div className="mb-8">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 1 }}
          transition={{ duration: 0.9 }}
          className={`${melodrama.className} md:text-[50px] underline`}
        >
          Accomodations
        </motion.h1>
      </div>
      <div className="grid md:grid-cols-3 gap-5">
        <div className="flex flex-col space-y-5">
          <h5
            className={`${poppins.className} font-extrabold border-green-800  border-b-2 max-w-fit`}
          >
            2 bedroom Villa Executive
          </h5>
          <div className="relative h-80 w-full">
            <Image src="/images/img16.webp" alt="room" fill />
          </div>
          <div className="text-xs">6 guests</div>
          <p className="text-sm max-w-[] pr-2 line-clamp-4">
          This luxury accommodation features excellent finishes, including toilets and amenities. It boasts two fully ensuite bedrooms, each with its own toilet. The villa also includes an expansive lounge with an additional cloakroom, a coffee table, and a television. Furthermore, the villa boasts a luxurious open-plan kitchen positioned to supply a view of the ocean and add more comfort to your living room. The kitchen has a dining table that accommodates 4 people. Finally, the villa offers an expansive terrace with fantastic views of the natural, expansive gardens and the pool.
          </p>
         
          <button className="px-2 py-2 border border-green-800 max-w-[130px] text-sm">
            View House
          </button>
        </div>
        <div className="flex flex-col space-y-5">
          <h5
            className={`${poppins.className} font-extrabold border-green-800  border-b-2 max-w-fit`}
          >
            2 bedroom Villa Standard
          </h5>
          <div className="relative h-80 w-full">
            <Image src="/images/img14.webp" alt="room" fill />
          </div>
          <div className="text-xs">5 guests</div>
          <p className="text-sm max-w-[] pr-2 line-clamp-4">
          This luxurious studio apartment boasts an open-plan living room featuring a cozy lounge area, an open kitchen, and a dining area in a compact and stylish design. The open-plan concept creates a spacious and airy feel, perfect for those who prefer a more modern and minimalistic living space. The kitchen is fully equipped with all the necessary appliances and utensils for cooking and dining. There is however no additional cloak room and guests miss the opportunity of engaging the northwind
          </p>
          
          <button className="px-2 py-2 border border-green-800 max-w-[130px] text-sm">
            View House
          </button>
        </div>
        <div className="flex flex-col space-y-5">
          <h5
            className={`${poppins.className} font-extrabold border-green-800  border-b-2 max-w-fit`}
          >
            1 bedroom Villa
          </h5>
          <div className="relative h-80 w-full">
            <Image src="/images/img10.webp" alt="room" fill />
          </div>
          <div className="text-xs">4 guests</div>
          <p className="text-sm max-w-[] pr-2 line-clamp-4">
          This villa comprises of elegant finishes with the following amenities, executive lounge with a coffee table and a TV, WIFI with high-speed internet connection. There is also an open plan kitchen fully equipped with kitchen amenities that include a cooker with gas, fridge, microwave and coffee maker and a wooden dining that accommodates 4 pax. There is a fully en-suite toilet with amenities. The villa has an expansive private terrace that compliments major and cozy view to the garden and swimming pool. This terrace can be converted into an open dining or exquisite lounge
          </p>
          
          <button className="px-2 py-2 border border-green-800 max-w-[130px] text-sm">
            View House
          </button>
        </div>
      </div>
    
    </section>
    <Footer/>
    </div>
  );
};

export default Rooms;
