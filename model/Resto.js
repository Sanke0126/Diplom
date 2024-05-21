import mongoose from "mongoose";

const { Schema } = mongoose;

const RestoSchema = new Schema(
  {
    isReceivingOrder: { type: Boolean, required: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Resto || mongoose.model("Resto", RestoSchema);
