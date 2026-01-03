import mongoose, { Schema } from "mongoose";

const medicationSchema = new Schema({
  
});

const medication = mongoose.model("medication", medicationSchema);
console.log(medication);
export default medication;