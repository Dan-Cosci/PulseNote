import mongoose, { Schema } from "mongoose";


const patientNotesSchema = new Schema({
  userid:{
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  content: {
    type: String,
    required: true,
  },
  visibility: {
    type: String,
    enum: ["public", "private"],
    default: "public",
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  deletedAt: { type: Date, default: null }
});

const PatientNotes = mongoose.model("PatientNotes", patientNotesSchema);
export default PatientNotes;