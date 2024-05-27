import mongoose from "mongoose";
import { Schema } from "mongoose";
const FeedbackSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  stars: {
    type: Number,
    required: true,
  },
  testimonial: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Feedback ||
  mongoose.model("Feedback", FeedbackSchema);
