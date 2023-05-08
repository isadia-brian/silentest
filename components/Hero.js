import localFont from "next/font/local";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
const melodrama = localFont({
  src: "../public/fonts/melodrama/Melodrama-Semibold.ttf",
});

const Hero = () => {
  return (
    <div className="w-full mr-auto h-[80vh] pl-12 items-center flex ">
      <div className="">
        <h3 className="font-bold text-[80px] max-w-[600px]">
          Silent Palms Villas 
        </h3>
      </div>

      <div className="relative h-full w-2/3">
        <Image src="/images/hero.webp" alt="heroImg" fill />
      </div>
    </div>
  );
};

export default Hero;
