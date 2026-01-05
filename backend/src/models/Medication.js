import mongoose, { Schema } from "mongoose";

const medicationSchema = new Schema({
  userid:{
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  medicine: {
    type: String,
    required: true,
  },
  dosage:{
    type: String,
    required: true,
  },
  frequency:{
    type: String,
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
  endAt: { type: Date, default: null },
  updatedAt: { type: Date, default: Date.now },
  deletedAt: { type: Date, default: null }
});

const medication = mongoose.model("medication", medicationSchema);
export default medication;