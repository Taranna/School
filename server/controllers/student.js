const User = require("../models/student");

// import StudentInformation from "../models/student.js";

module.exports.getStudents = async (req, res) => {
  try {
    const allStudents = await StudentInformation.find();
    res.status(200).json(allStudents);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
//traces when client sends request from frontend it comes to backend(through port 5001) it traces back all the way to this function
module.exports.createStudents = async (req, res) => {
  const student = req.body;
  const newStudent = new StudentInformation(student);
  try {
    await newStudent.save();
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports.deleteStudents = async (req, res) => {
  const id = req.params.id;
  try {
    await StudentInformation.findByIdAndRemove(id).exec();
    res.send("successfully  deleted!!");
  } catch (error) {
    console.log(error);
  }
};
