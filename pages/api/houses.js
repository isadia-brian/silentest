import { House } from "../../models/House";
import { mongooseConnect } from "@/lib/mongoose";
// import {isAdminRequest} from "@/pages/api/auth/[...nextauth]";

export default async function handler(req, res) {
  const { method } = req;
  await mongooseConnect();

  if (method === "GET") {
    if (req.query?.id) {
      res.json(await House.findOne({ _id: req.query.id }));
    } else {
      res.json(await House.find());
    }
  }

  if (method === "POST") {
    const { title, description, price, guests } = req.body;
    const houseDoc = await House.create({
      title,
      description,
      price,
      guests,
    });
    res.json(houseDoc);
  }

  if (method === "PUT") {
    const { title, description, price, guests, _id } = req.body;
    await House.updateOne({ _id }, { title, description, price, guests });
    res.json(true);
  }

  if (method === "DELETE") {
    if (req.query?.id) {
      await House.deleteOne({ _id: req.query?.id });
      res.json(true);
    }
  }
}
