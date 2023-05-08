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

const Rates = () => {
  return (
    <div className={`${poppins.className}`}>
      <Navbar />
      <div className="h-fit md:h-fit  px-20 py-10  w-full">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 1 }}
          transition={{ duration: 0.9 }}
          className={`${melodrama.className} md:text-[50px] mb-8 underline`}
        >
          Our Rates
        </motion.h1>
        <div className="flex items-center space-x-5 mb-24 w-full">
          <table className="table-auto border-collapse border border-slate-400">
            <thead>
              <tr>
                <th className="border border-slate-300 py-4 px-6 bg-green-500 text-white font-bold"></th>

                <th className="border border-slate-300 py-4 px-6 bg-green-500 text-white font-bold">
                  Low Season
                </th>
                <th className="border border-slate-300 py-4 px-6 bg-green-500 text-white font-bold">
                  Summer
                </th>
                <th className="border border-slate-300 py-4 px-6 bg-green-500 text-white font-bold">
                  High Season
                </th>
                <th className="border border-slate-300 py-4 px-6 bg-green-500 text-white font-bold">
                  Christmas / New Yr
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-300 px-6 py-4">
                  Apartment type
                </td>
                <td className="border border-slate-300 px-6 py-4">
                  4th Jan - 30th June
                </td>
                <td className="border border-slate-300 px-6 py-4">
                  1st July - 30th Nov
                </td>
                <td className="border border-slate-300 px-6 py-4">
                  1st Dec - 20th Dec{" "}
                </td>
                <td className="border border-slate-300 px-6 py-4">
                  21st Dec - 6th Jan
                </td>
              </tr>
              <tr>
                <td className="border border-slate-300 px-6 py-4">1 BEDROOM</td>
                <td className="border border-slate-300 px-6 py-4">KES 5,000</td>
                <td className="border border-slate-300 px-6 py-4">KES 6,500</td>
                <td className="border border-slate-300 px-6 py-4">KES 8,500</td>
                <td className="border border-slate-300 px-6 py-4">
                  KES 10,000
                </td>
              </tr>
              <tr>
                <td className="border border-slate-300 px-6 py-4">2 BEDROOM</td>
                <td className="border border-slate-300 px-6 py-4">KES 8,000</td>
                <td className="border border-slate-300 px-6 py-4">
                  KES 10,000
                </td>
                <td className="border border-slate-300 px-6 py-4">
                  KES 12,000
                </td>
                <td className="border border-slate-300 px-6 py-4">
                  KES 15,000
                </td>
              </tr>
            </tbody>
          </table>
          <div>
            <p>
              Rates include: Accommodation, daily housekeeping, electricity, gas
              & free WIFI
            </p>
            <p>Note: Infants and babies of up to 3 years are not charged</p>
            <p>Check-In Time: 2pm – 8pm (14:00 – 20:00)</p>
            <p>Check-Out Time: 6am – 10am (06:00 – 10:00)</p>
            <p>Late checkout upon request and AVAILABILITY till 12:00 noon.</p>
            <p>After 12:00 noon, an additional 50% day rate will be charged.</p>
          </div>
        </div>

        <div className="">
          <h5 className={`text-xl font-semibold`}>
            Payment Terms & Conditions
          </h5>
          <ol className="flex flex-col space-y-4 max-w-[900px]">
            <li className="shadow px-2 py-4">
              <span className="font-bold">Payment Methods:</span> <br /> We
              accept payment by bank deposit and MPESA We do not accept cash and
              personal checks.
            </li>
            <li className="shadow px-2 py-4">
              <span className="font-bold">Deposit:</span> <br /> A deposit of
              50% of the total booking cost is required at the time of booking
              to secure your reservation.
            </li>
            <li className="shadow px-2 py-4">
              <span className="font-bold">Remaining Balance:</span> <br /> The
              remaining balance of your booking must be paid upon arrival at the
              hotel.
            </li>
            <li className="shadow px-2 py-4">
              <span className="font-bold">Cancellation Policy:</span> <br /> If
              you need to cancel your reservation, please do so at least 48
              hours before your scheduled arrival time to receive a full refund.
              If you cancel within 48 hours of your scheduled arrival time, your
              deposit will not be refunded.
            </li>
            <li className="shadow px-2 py-4">
              <span className="font-bold">No-shows:</span>
              <br /> If you do not show up for your reservation and do not
              notify us of a cancellation, you will be charged for the full
              amount of the booking.
            </li>
            <li className="shadow px-2 py-4">
              <span className="font-bold">Additional Charges:</span>
              <br />
              Please note that additional charges may apply for any extra
              services or amenities requested during your stay.
            </li>
            <li className="shadow px-2 py-4">
              <span className="font-bold">Currency:</span>
              <br /> All rates are quoted and charged in the local currency, and
              currency exchange rates may apply if paying with a foreign
              currency.
            </li>
            <li className="shadow px-2 py-4">
              <span className="font-bold">Taxes:</span>
              <br /> Local taxes may be applied to your booking and will be
              included in the total price.
            </li>
          </ol>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Rates;
