const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// import express from "express";
// import bodyParser from "body-parser";
// import mongoose from "mongoose";
// import cors from "cors";
// import studentRoutes from "./routes/student.js";
const studentRoutes = require("./routes/student");
const app = express();
app.use("/students", studentRoutes);

// app.use(bodyParser.json({ limit: "20mb", extended: true }));
// app.use(bodyParser.urlencoded({ limit: "20mb", extended: true }));
const dbURI =
  "mongodb+srv://tara:tara123@cluster0.wi13u.mongodb.net/StudentInformation?retryWrites=true&w=majority";
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((result) => app.listen(5001, () => console.log("Listening...")))
  .catch((err) => console.log(err));
// app.use(cors());
// const CONNECTION_URL =
//   "mongodb+srv://tara:tara123@cluster0.wi13u.mongodb.net/StudentInformation?retryWrites=true&w=majority";
// "mongodb+srv://tara:tara123@cluster0.uaehf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// "mongodb+srv://tara:tara123@cluster0.tisfo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// "mongodb+srv://tara:tara1234@cluster0.hvm7a.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
//   "mongodb+srv://tara:1234@cluster0.hvm7a.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// const PORT = process.env.PORT || 5001;
// mongoose
//   .connect(CONNECTION_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() =>
//     app.listen(PORT, () => console.log(`Connection is running on ${PORT}`))
//   )
//   .catch((err) => console.log(err.message));

// mongoose.set("useFindAndModify", false);

// const express = require("express");
// const bodyParser = require("body-parser");
// const mongoose = require("mongoose");
// const userRoutes = require("./routes/users");

// const app = express();

// app.use(bodyParser.json());
// app.use("/users", userRoutes);

// const dbURI = process.env.MONGO_TEST;
// mongoose
//   .connect(dbURI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//   })
//   .then((result) => app.listen(3001, () => console.log("Listening...")))
//   .catch((err) => console.log(err));
