import Image from "next/image";
import { Poppins } from "next/font/google";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400"],
});

export default function ClientLayout({ children }) {
  return (
    <div className={`${poppins.className}`}>
      <Navbar />

      <div>{children}</div>

      <Footer />
    </div>
  );
}
