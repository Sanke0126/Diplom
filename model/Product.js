import mongoose from "mongoose";

const { Schema } = mongoose;

const categories = [
  "ALL",
  "MAIN DISH",
  "SALAD",
  "SOUP",
  "MONGOLIAN",
  "GRILLED",
  "HOT DRINK",
  "ADDITIONAL",
  "DESSERT",
  "PIZZA",
  "ALCOHOL",
  "WINE",
  "DRINKS",
];

const ProductSchema = new Schema(
  {
    category: {
      type: String,
      enum: categories,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    
    desc: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    bestSeller: {
      type: Boolean,
      required: true,
    },
    recommended: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);
