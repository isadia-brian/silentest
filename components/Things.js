import localFont from "next/font/local";
import Image from "next/image";
import { motion } from "framer-motion";
const melodrama = localFont({
  src: "../public/fonts/melodrama/Melodrama-Semibold.ttf",
});

function Things() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="w-[900px] mx-auto h-full py-12"
    >
      <div className="relative">
      <h1 className={`${melodrama.className} md:text-[50px]`}>
        Things to do while at Diani
      </h1>
      <div className="bg-green-800 h-2 w-12 absolute left-0 bottom-1 -z-2"></div>
      </div>
  
      <div className="w-full grid grid-cols-2 mt-16">
        <div className="lg:h-[370px] relative lg:w-[370px]">
          <Image src="/images/snorkelling.webp" alt="image" fill />
        </div>
        <div className="">
          <div className="mb-10">
            <p className="text-[12px] max-w-[200px] text-gray-700">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga,
              nemo.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="relative h-[220px]">
              <Image src="/images/kayaking.webp" alt="image" fill />
            </div>
            <div className="relative h-[220px]">
              <Image src="/images/jetsking.webp" alt="image" fill />
            </div>
          </div>
          <div className="mt-8">
            <p className="text-xs text-gray-700">See all Activities</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Things;
