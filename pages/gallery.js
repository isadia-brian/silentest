import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
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

const Gallery = () => {
  return (
    <div className={`${poppins.className}`}>
        <Navbar/>
    <div className="h-[70vh] md:h-fit mt-[0px] px-20 py-10  w-full">
    <motion.h1
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 1 }}
            transition={{ duration: 0.9 }}
            className={`${melodrama.className} md:text-[50px] `}
          >
            Gallery
          </motion.h1>
      <div className="grid grid-cols-3 gap-2">
        <div className="relative h-[300px] w-full">
          <Image src="/images/hero.webp" alt="image" fill />
        </div>
        <div className="relative h-[300px] w-full">
          <Image src="/images/img1.webp" alt="image" fill />
        </div>
        <div className="relative h-[300px] w-full">
          <Image src="/images/img2.webp" alt="image" fill />
        </div>
        <div className="relative h-[300px] w-full">
          <Image src="/images/img3.webp" alt="image" fill />
        </div>
        <div className="relative h-[300px] w-full">
          <Image src="/images/img4.webp" alt="image" fill />
        </div>
        <div className="relative h-[300px] w-full">
          <Image src="/images/img5.webp" alt="image" fill />
        </div>
        <div className="relative h-[300px] w-full">
          <Image src="/images/img6.webp" alt="image" fill />
        </div>
        <div className="relative h-[300px] w-full">
          <Image src="/images/img7.webp" alt="image" fill />
        </div>
        <div className="relative h-[300px] w-full">
          <Image src="/images/img8.webp" alt="image" fill />
        </div>
        <div className="relative h-[300px] w-full">
          <Image src="/images/img9.webp" alt="image" fill />
        </div>
        <div className="relative h-[300px] w-full">
          <Image src="/images/img10.webp" alt="image" fill />
        </div>
        <div className="relative h-[300px] w-full">
          <Image src="/images/img11.webp" alt="image" fill />
        </div>
        <div className="relative h-[300px] w-full">
          <Image src="/images/img12.webp" alt="image" fill />
        </div>
      </div>
    </div>
  <Footer/>
    </div>
  );
};

export default Gallery;
