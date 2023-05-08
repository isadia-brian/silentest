import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const melodrama = localFont({
  src: "../public/fonts/melodrama/Melodrama-Semibold.ttf",
});

const Featured = () => {
  return (
    <div className="w-[900px] mx-auto h-full py-12">
      <div className="relative">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 1 }}
          transition={{ duration: 0.9 }}
          className={`${melodrama.className} md:text-[50px]`}
        >
          Featured Villa
        </motion.h1>
        <div className="bg-green-800 h-2 w-12 absolute left-0 bottom-1 -z-2"></div>
      </div>
      <div className="w-full grid grid-cols-2 mt-16">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 1 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className={`${melodrama.className} md:text-[25px]`}
          >
            2 Bedroom Executive Accomodation{" "}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, }}
            whileInView={{ opacity: [0.2,0.3,0.4,0.6,0.8,1] }}
            transition={{ duration: 2, delay:1 }}
            className="text-[16px] max-w-[350px] my-8"
          >
            This Luxury Accomodation features an excellent finish with toilet
            and ammenities. It features two bedrooms fully ensuite each with a
            toilet. The villa has an expansive lounge with an additional cloak
            room and a television
          </motion.p>
          <p className="text-[12px] max-w-[350px] my-8">Max - 6 Guests</p>

          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 1 }}
            transition={{ duration: 0.9 }} className={`${melodrama.className} md:text-[50px]`}>
            KES 8,000 <span className="text-[16px]">/per night</span>
          </motion.p>

          <Link href="/reservation" className="mt-8 text-sm">
            Check Availability
          </Link>
        </div>
        <div className="lg:h-[370px] relative lg:w-full">
          <Image src="/images/img9.webp" alt="image" fill />
        </div>
      </div>
    </div>
  );
};

export default Featured;
