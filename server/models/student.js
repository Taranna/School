import mongoose from "mongoose";
const studentSchema = mongoose.Schema({
  RegisterNumber: {
    type: Number,
    required: true,
  },
  studname: {
    type: String,
    required: true,
  },
  std: {
    type: Number,
    required: true,
  },
  sec: {
    type: String,
    required: true,
  },
});
const StudentInformation = mongoose.model("student", studentSchema);
/*studentt is mongodb studentts ..adds s ..and its collection name */
export default StudentInformation;
