import { useState } from "react";

import { useRouter } from "next/router";

import { AiOutlineCloseCircle } from "react-icons/ai";

const PersonalModal = ({ onClose }) => {
  const router = useRouter();
  const [details, setDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    arrival: "",
    address: "",
    nationality: "",
    request: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleValidateForm = () => {
    setIsFormValid(
      details.firstName &&
        details.lastName &&
        details.email &&
        details.phoneNumber &&
        details.nationality
    );
  };

  const handleProceedToPayment = () => {
    router.push({
      pathname: "/client/payment",
      query: { details: JSON.stringify(details) },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    handleProceedToPayment();
  };

  return (
    <div className="border-gray-400 border-t mt-16 pt-9">
      <form onSubmit={handleSubmit}>
        <div className="flex items-center w-full justify-between">
          <p className="font-bold">
            Your Booking Information -{" "}
            <span> 1st May 2022 - 2nd May 2022 </span>
          </p>
          <p
            className="text-3xl bg-red-500 rounded-full text-white cursor-pointer"
            onClick={onClose}
          >
            <AiOutlineCloseCircle />
          </p>
        </div>

        <p className="mt-5">You have selected 2 Adults and 0 kids</p>
        <div>
          <p>Personal Information</p>
          <p>Enter your details below</p>
          <div className="grid grid-cols-3 gap-2 gap-y-10 mt-6">
            <div className="flex flex-col">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                value={details.firstName}
                placeholder="John"
                className="border px-4 outline-none py-2 placeholder:text-[12px]"
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col">
              <label>Last Name</label>
              <input
                type="text"
                placeholder="Doe"
                name="lastName"
                value={details.lastName}
                className="border px-4 outline-none py-2 placeholder:text-[12px]"
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={details.email}
                placeholder="johndoe@gmail.com"
                className="border px-4 outline-none py-2 placeholder:text-[12px]"
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col">
              <label>Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                value={details.phoneNumber}
                placeholder="johndoe@gmail.com"
                className="border px-4 outline-none py-2 placeholder:text-[12px]"
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col">
              <label>Approximate Arrival Time</label>
              <input
                type="clock"
                name="arrival"
                value={details.arrival}
                placeholder="--:--"
                className="border px-4 outline-none py-2 placeholder:text-[12px]"
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col">
              <label>Address</label>
              <input
                type="text"
                name="address"
                value={details.address}
                placeholder="e.g city"
                className="border px-4 outline-none py-2 placeholder:text-[12px]"
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col">
              <label>Nationality</label>
              <input
                type="text"
                name="nationality"
                value={details.nationality}
                placeholder="e.g resident"
                className="border px-4 outline-none py-2 placeholder:text-[12px]"
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col mb-8">
              <label>Special Requests</label>
              <textarea
                type="text"
                name="request"
                value={details.request}
                className="border px-4 outline-none py-2"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="flex items-center space-x-3 mb-4">
            <input type="checkbox" name="" id="" />
            <p>
              I acknowledge that i have read and agree to the terms & Conditions below
            </p>
          </div>
          <button
            type="submit"
            className="px-3 py-3 mb-8 rounded-full bg-green-800 text-white "
          >
            Proceed to payment
          </button>
          <div>
          <h5 className="font-bold text-2xl border-b-2">Terms & Conditions</h5>
          </div>
         
        </div>
      </form>
    </div>
  );
};

export default PersonalModal;
