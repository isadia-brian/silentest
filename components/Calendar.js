import { useEffect, useState } from "react";

import { DateRangePicker } from "react-date-range";
import format from "date-fns/format";
import { addDays } from "date-fns";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

import { AiOutlineCalendar, AiOutlineUser } from "react-icons/ai";

const Calendar = () => {
  //toggle open and close for the calendar
  const [open, setOpen] = useState(false);

  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 0),
      key: "selection",
    },
  ]);

  const [adults, setAdults] = useState(1);
  const [child, setChild] = useState(0);

  const [guests, setGuests] = useState(false);

  return (
    <div className="h-full w-[1000px] mx-auto relative">
      <div className="relative  h-fit w-full">
        <form className="w-full space-x-2 bg-white h-full px-6 py-4 rounded-full flex shadow-lg relative">
          <div className="flex items-center space-x-4 flex-grow">
            <div
              className="flex items-center space-x-4 "
              onClick={() => setOpen(!open)}
            >
              <div className="flex flex-col border-b-[0.8px]  border-black max-w-[200px]">
                <div className="flex items-center justify-between">
                  <label className="text-[12px] text-green-800">CHECK IN</label>
                  <AiOutlineCalendar />
                </div>

                <input
                  type="text"
                  className="text-sm mt-2"
                  readOnly
                  value={`${format(range[0].startDate, "MM/dd/yyyy")}`}
                />
              </div>
              <div className="flex flex-col border-b-[0.8px] border-black max-w-[200px]">
                <div className="flex items-center justify-between">
                  <label className="text-[12px] font-bold text-green-800">
                    CHECK OUT
                  </label>
                  <AiOutlineCalendar />
                </div>

                <input
                  type="text"
                  className="text-sm mt-2"
                  readOnly
                  value={`${format(range[0].endDate, "MM/dd/yyyy")}`}
                />
              </div>
            </div>
            <div className="flex items-center space-x-2" onClick={()=>setGuests(!guests)}>
              <div className="flex flex-col border-b-[0.8px] border-black max-w-[170px]">
                <div className="flex items-center justify-between">
                  <label className="text-[12px] font-bold text-green-800">
                    ADULTS
                  </label>
                  <AiOutlineUser />
                </div>

                <input type="number" value={adults} />
              </div>
              <div className="flex flex-col border-b-[0.8px] border-black max-w-[160px]">
                <div className="flex items-center justify-between">
                  <label className="text-[12px] font-bold text-green-800">
                    KIDS
                  </label>
                  <AiOutlineUser />
                </div>
                <input type="number" value={child} />
              </div>
            </div>
          </div>

          <button className="text-sm bg-green-800 text-white font-bold rounded-full px-4">
            CHECK AVAILABILITY
          </button>
        </form>
      </div>

      <div className=" mt-4 w-full ">
        {open && (
          <DateRangePicker
            onChange={(item) => setRange([item.selection])}
            showSelectionPreview={true}
            moveRangeOnFirstSelection={false}
            months={2}
            ranges={range}
            direction="horizontal"
          />
        )}
      </div>

      {
        guests && (
<div className="mt-4 absolute right-[250px]">
        <div className="bg-white p-6 w-fit rounded-lg shadow flex flex-col space-y-6">
          <div className="flex items-center space-x-8">
            <p className="font-extrabold text-2xl w-[80px]">Adults</p>
            <div className="flex items-center space-x-8 ">
              <button
                onClick={() => setAdults(adults - 1)}
                className={
                  adults <= 1
                    ? "bg-gray-300 px-4 py-3 text-white rounded-lg font-bold text-2xl"
                    : "bg-black px-4 py-3 text-white rounded-lg font-bold text-2xl"
                }
              >
                -
              </button>
              <p className="font-bold text-3xl ">{adults}</p>
              <button
                onClick={() => setAdults(adults + 1)}
                className={
                  adults > 6
                    ? "bg-gray-300 px-4 py-3 text-white rounded-lg font-bold text-2xl"
                    : "bg-green-600 px-4 py-3 text-white rounded-lg font-bold text-2xl"
                }
              >
                +
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-8">
            <p className="font-extrabold text-2xl w-[80px]">Child</p>
            <div className="flex items-center space-x-8 ">
              <button
                onClick={() => setChild(child - 1)}
                className={
                  adults <= 1
                    ? "bg-gray-300 px-4 py-3 text-white rounded-lg font-bold text-2xl"
                    : "bg-black px-4 py-3 text-white rounded-lg font-bold text-2xl"
                }
              >
                -
              </button>
              <p className="font-bold text-3xl ">{child}</p>
              <button
                onClick={() => setChild(child + 1)}
                className={
                  child < 6
                    ? "bg-gray-300 px-4 py-3 text-white rounded-lg font-bold text-2xl"
                    : "bg-green-600 px-4 py-3 text-white rounded-lg font-bold text-2xl"
                }
              >
                +
              </button>
            </div>
          </div>
          <button>Confirm</button>
        </div>
      </div>
        )
      }

      
    </div>
  );
};

export default Calendar;
