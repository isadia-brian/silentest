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

const Contact = () => {
  return (
    <div className={`${poppins.className}`}>
      <Navbar />
      <div className="h-[70vh] md:h-fit mt-[] px-20 py-10  w-full flex  space-x-5 justify-center items-center">
        <form action="" className="">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 1 }}
            transition={{ duration: 0.5  }}
            className={`${melodrama.className} md:text-[50px] text-center mb-6 underline `}
          >
            Contact Us
          </motion.h1>
          <motion.p
           initial={{ opacity: 0, y: 100 }}
           animate={{ opacity: 1, y: 1 }}
           transition={{ duration: 0.5,delay:0.2 }}
          className="text-center my-4">
            Our Lovely team would love to hear from you
          </motion.p>
          <motion.div
           initial={{ opacity: 0, y: 100 }}
           animate={{ opacity: 1, y: 1 }}
           transition={{ duration: 0.5,delay:0.5 }}>
          <div className="flex items-center space-x-4">
            <div className="flex flex-col my-1">
              <label>First Name</label>
              <input
                type="text"
                placeholder=""
                className="border border-gray-300  outline-none px-4 py-2"
              />
            </div>
            <div className="flex flex-col my-1">
              <label>Last Name</label>
              <input
                type="text"
                placeholder=""
                className="border border-gray-300 outline-none px-4 py-2"
              />
            </div>
          </div>
          <div className="flex flex-col my-1">
            <label>Email</label>
            <input
              type="text"
              placeholder=""
              className="border border-gray-300 outline-none px-4 py-2"
            />
          </div>
          <div className="flex flex-col my-1">
            <label>First Name</label>
            <input
              type="text"
              placeholder=""
              className="border border-gray-300  outline-none px-4 py-2"
            />
          </div>
          <div className="flex flex-col my-1">
            <label>Phone Number</label>
            <input
              type="text"
              placeholder=""
              className="border border-gray-300 outline-none px-4 py-2"
            />
          </div>
          <div className="flex flex-col my-1">
            <label>Message</label>
            <textarea
              type="text"
              placeholder=""
              className="border border-gray-300  outline-none px-4 py-2"
            />
          </div>
          <input
            type="button"
            value="Send Message"
            className="bg-green-800 outline-none w-full mt-4 py-3 text-white"
          />
          </motion.div>
          
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
