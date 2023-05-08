import Layout from "@/components/Layout";
import { useState } from "react";

import axios from "axios";
import { useRouter } from "next/router";

const AddHouse = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [guests, setGuests] = useState("");
  const [price, setPrice] = useState("");
  const [goToHouses, setGoToHouses] = useState(false);

  async function saveHouse(ev) {
    const router = useRouter();
    ev.preventDefault();
    const data = {
      title,
      description,
      price,
      guests,
    };
  
      //create
      await axios.post("/api/houses", data);
    
    setGoToHouses(true);
  }
  if (goToHouses) {
    router.push("/admin/houses");
  }
  return (

    <div className="w-[500px] mx-auto h-screen flex items-center ">
        <div className="w-full">
   
      <h1 className="px-4 py-3 bg-green-800 text-white w-fit rounded-md">
        Add Product
      </h1>
      <form onSubmit={saveHouse} className=" mt-8 space-y-4">
        <div className="flex flex-col">
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="py-3 px-4 border border-black rounded-lg"
          />
        </div>
        <div className="flex flex-col">
          <label>Description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="py-3 px-4 border border-black rounded-lg"
          />
        </div>
        <div className="flex flex-col">
          <label>Guests</label>
          <input
            type="text"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className="py-3 px-4 border border-black rounded-lg"
          />
        </div>
        <div className="flex flex-col">
          <label>Price</label>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="py-3 px-4 border border-black rounded-lg"
          />
        </div>
        <button type="submit" className="text-white bg-green-800 px-4 py-3 rounded-full w-[200px] uppercase font-bold">
          Submit
        </button>
      </form>
      </div>
      </div>
  
  );
};

export default AddHouse;
