import mongoose, { Schema } from "mongoose";

const conditionSchema = new Schema({
  userid:{
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  symtoms: {
    type: String,
    default: "none",
    required: true,
  },
  bloodpressure: {
    type: String,
    default: "none",
    required: true,
  },
  heartRate: {
    type: String,
    default: "none",
    required: true,
  },
  glucose:{
    type: Number,
    default: 0,
    required: true
  },
  temperature:{
    type: Number,
    default: 0,
    required: true
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  deletedAt: { type: Date, default: null }

});

const condition = mongoose.model("condition", conditionSchema);
export default condition;