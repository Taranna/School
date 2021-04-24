import mongoose from "mongoose";
const studentSchema = mongoose.Schema({
  RegisterNumber: {
    type: String,
    required: true,
  },
  studname: {
    type: String,
    required: true,
  },
  std: {
    type: String,
    required: true,
  },
  sec: {
    type: String,
    default: "A",
  },
});
const StudentInformation = mongoose.model("student", studentSchema);
export default StudentInformation;
