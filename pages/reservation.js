import Calendar from "@/components/Calendar";
import ClientLayout from "@/components/ClientLayout";

import HorizontalAccordion from "@/components/HorizontalAccordion";

const Reservation = () => {
  return (
    <ClientLayout>
      <div className="bg-gray-100  h-fit py-12">
        <Calendar />

        <div className="w-[1000px] mx-auto my-8">
          <p className="text-[12px] text-black">Showing available accomodations</p>
          <HorizontalAccordion />
          <HorizontalAccordion />
        </div>
      </div>
    </ClientLayout>
  );
};

export default Reservation;
