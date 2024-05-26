import mongoose from "mongoose";

const ReservationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  partySize: {
    type: Number,
    required: true,
  },
  occasion: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  message: {
    type: String,
  },
});

export default mongoose.models.Reservation ||
  mongoose.model("Reservation", ReservationSchema);
