import localFont from "next/font/local";
import Image from "next/image";
import { motion } from "framer-motion";

const melodrama = localFont({
  src: "../public/fonts/melodrama/Melodrama-Semibold.ttf",
});

const Story = () => {
  return (
    <div className="w-[900px] mx-auto h-full py-12">
      <div className="relative w-fit">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 1 }}
          transition={{ duration: 0.9 }}
          className={`${melodrama.className} md:text-[50px]`}
        >
          Our Story
        </motion.h1>
        <motion.div initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 1 }}
          transition={{ duration: 0.6, delay:0.3 }} className="bg-green-800 h-2 w-12 absolute left-0 bottom-1 -z-2"></motion.div>
      </div>
      <div className="w-full grid grid-cols-2 gap-20 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 1 }}
          transition={{ duration: 0.5,delay:1 }}
          className="lg:h-[370px] relative lg:w-full"
        >
          <Image src="/images/story.webp" alt="image" fill className="" />
        </motion.div>
        <div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 1 }}
            transition={{ duration: 0.9 }}
            className="mb-8 bg-green-800 text-white w-fit px-4 py-1"
          >
            01
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 1 }}
            transition={{ duration: 0.5, delay:0.8 }}
            className={`${melodrama.className} mt-4 md:text-[25px] font-bold`}
          >
            In the Beginning
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, }}
            whileInView={{ opacity: 1, }}
            transition={{ duration: 2, delay:1 }}
            className="text-[14px]  my-8"
          >
            Our founder, a world traveler with a deep appreciation for natural
            beauty and luxury hospitality, was inspired by the breathtaking
            landscapes of Diani to create something truly special. With a vision
            for a sustainable, eco-friendly villa that would offer discerning
            travelers a haven of relaxation and refinement, Silent Palms Villas
            was born. 
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 1 }}
            transition={{ duration: 0.5, delay:1.3 }}
            className="mt-8 text-xs underline "
          >
            The Full Story
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Story;
