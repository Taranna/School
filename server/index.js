//step1

import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import studentRoutes from "./routes/student.js";
import path from "path"; //step 4
import dotenv from "dotenv";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000; //step1
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

//step2
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })

  .then(
    (result) => app.listen(PORT, () => console.log("Listening...")) //step1
  )
  .catch((err) => console.log(err));

app.use("/students", studentRoutes); 
app.get("/",(req,res)=>{
 res.send( "Hello to School API")
});

//main route .. http://localhost:5001/students
//step 3 make sure it is after app.use(routes)

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
//   app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "client", "build", "index.html")); //step 4 ,relative path
//   });
// }

// import dotenv from "../config.env";

// require("dotenv").config({ path: "./config.env" });
