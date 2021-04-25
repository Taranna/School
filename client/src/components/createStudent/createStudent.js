import React, { useState } from "react";
import { hslToRgb, makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { cyan, red, purple, white } from "material-ui/colors";

const useStyles = makeStyles((theme) => ({
  h2: {
    color: "purple",
    backgroundColor: "pink",
  },

  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function CreateStudent() {
  const classes = useStyles();
  const [student, setStu] = useState({
    RegisterNumber: 0,
    studname: "",
    std: "",
    sec: "",
  });
  const createStudent = () => {
    axios.post("http://localhost:5001/students", student).then(() => {
      window.location.reload(false);
    });
  };
  return (
    <>
      <h2 className={classes.h2}> Insert Student Details</h2>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="Register Number"
          variant="outlined"
          value={student.RegisterNumber}
          onChange={(event) => {
            setStu({ ...student, RegisterNumber: event.target.value });
          }}
        />
        <TextField
          id="outlined-basic"
          label="Student Name"
          variant="outlined"
          value={student.studname}
          onChange={(event) => {
            setStu({ ...student, studname: event.target.value });
          }}
        />
        <TextField
          id="outlined-basic"
          label="  Class Standard"
          variant="outlined"
          value={student.std}
          onChange={(event) => {
            setStu({ ...student, std: event.target.value });
          }}
        />
        <TextField
          id="outlined-basic"
          label="Class Section"
          variant="outlined"
          value={student.sec}
          onChange={(event) => {
            setStu({ ...student, sec: event.target.value });
          }}
        />
        <Button variant="contained" color="secondary" onClick={createStudent}>
          Create
        </Button>
      </form>
    </>
  );
}
