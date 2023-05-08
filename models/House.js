import mongoose, { model, Schema, models } from "mongoose";

const HouseSchema = new Schema(
  {
    title: { type: String, required: true },
    description: String,
    price: { type: Number, required: true },
    guests: { type: String },
  },
  {
    timestamps: true,
  }
);

export const House = models.House || model("House", HouseSchema);
