import mongoose, { Schema } from "mongoose";

const intakeLogSchema = new Schema({
  userid:{
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  medicationid:{
    type: Schema.Types.ObjectId,
    ref: "Medication",
    required: true
  },
  taken_at: {
    type: Date,
    default: Date.now,
  }
});

const IntakeLog = mongoose.model("intakeLog", intakeLogSchema);
export default IntakeLog;