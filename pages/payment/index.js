import { useRouter } from "next/router";
import Image from "next/image";
import ClientLayout from "@/components/ClientLayout";
import localFont from "next/font/local";

const melodrama = localFont({
  src: "../../../public/fonts/melodrama/Melodrama-Semibold.ttf",
});
const Checkout = () => {
  const router = useRouter();

  const details = JSON.parse(router.query.details);

  return (
    <ClientLayout>
      <div className="h-fit md:h-fit mt-[5px]  py-10  w-full  space-x-5">
        <h1 className={`${melodrama.className} pl-6 text-6xl`}>Checkout</h1>

        <div className="flex space-x-4">
          <div className="w-[500px] border bg-green-300 ">
            <div className="relative h-56 w-full">
              <Image src="/images/img12.webp" alt="image" fill />
            </div>
            <p className="text-center my-4 text-sm">Your Reservation</p>
            <div className="grid grid-cols-2 gap-2 px-2 pb-2 ">
              <div className="bg-green-500 flex flex-col  px-2 py-2 items-center text-white">
                <p className="text-xs">CHECK IN</p>
                <p className="text-[50px]">26</p>
                <p className="text-xs">June, 2017</p>
                <p className="text-xs">Monday</p>
              </div>
              <div className="bg-green-500 flex flex-col  px-2 py-2 items-center text-white">
                <p className="text-xs">CHECK OUT</p>
                <p className="text-[50px]">27</p>
                <p className="text-xs">June, 2017</p>
                <p className="text-xs">Monday</p>
              </div>
              <div className="bg-green-500 flex flex-col  px-2 py-2 items-center text-white">
                <p className="text-3xl">2</p>
                <p className="text-sm">Guests</p>
              </div>
              <div className="bg-green-500 flex flex-col  px-2 py-2 items-center text-white">
                <p className="text-3xl">4</p>
                <p className="text-sm">Nights</p>
              </div>
            </div>
            <div className="flex items-center flex-col mt-4">
              <p className="text-4xl">3400</p>
              <p>KES</p>
              <p>/Total</p>
            </div>
          </div>
          <div>
            <div>
              <p className="text-sm">
                Confirm your Information and proceed to pay
              </p>
              <p className="text-2xl my-4 font-semibold">Your Information</p>
              <div className="border-b-[0.8px] pb-8">
                <div className="grid grid-cols-3">
                  <p className="text font-bold">
                    Full Name:
                    <span className="ml-4 text-sm text-gray-500">
                      {`${details.firstName}  ${details.lastName}`}
                    </span>
                  </p>

                  <p className="text font-bold">
                    Email:
                    <span className="ml-4 text-sm text-gray-500">
                      {details.email}
                    </span>
                  </p>
                  <p className="text font-bold">
                    Phone:
                    <span className="ml-4 text-sm text-gray-500">
                      {details.phoneNumber}
                    </span>
                  </p>
                  <p className="text font-bold">
                    Address:
                    <span className="ml-4 text-sm text-gray-500">
                      {details.address}
                    </span>
                  </p>
                  <p className="text font-bold">
                    Arrival:
                    <span className="ml-4 text-sm text-gray-500">
                      {details.arrival}
                    </span>
                  </p>
                  <p className="text font-bold">
                    Nationality:
                    <span className="ml-4 text-sm text-gray-500">
                      {details.nationality}
                    </span>
                  </p>
                </div>
                <h5 className="mt-4">Requests</h5>
                {details.request && <p>{details.request}</p>}
              </div>

              <div className="mt-4">
                <h5 className="mb-4 text-2xl">Payment Options</h5>
                <p className="text-sm mb-2">
                  We currently only accept Payments from MPESA. Enter your phone
                  number and click Lipa na mpesa. You will receive a prompt on
                  your mobile device to pay the amount{" "}
                </p>
                <div className="flex flex-col max-w-[350px] space-y-4">
                  <input
                    type="text"
                    placeholder="Enter phone number "
                    className="border border-gray-500 px-2 py-3 outline-none"
                  />
                  <input
                    type="button"
                    value="Lipa na Mpesa"
                    className="bg-green-900 outline-none px-2 py-3 text-white"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ClientLayout>
  );
};

export default Checkout;
