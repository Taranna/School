import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

// import { cyan, red, purple, white } from "material-ui/colors";

const useStyles = makeStyles({
  h2: {
    color: "purple",
    // backgroundColor:"cyan" ,
  },
  table: {
    minWidth: 650,
    backgroundColor: "pink",
  },
});

export default function ShowStudent() {
  const classes = useStyles();
  const [studentsList, setStudentList] = useState([]);
  const deleteStudent = (id) => {
    axios
      .delete(`https://school-app-tara.herokuapp.com/students/${id}`)
      .then(() => {
        window.location.reload(false);
      });
  };
  useEffect(() => {
    axios
      .get("https://school-app-tara.herokuapp.com/students")
      .then((allStudents) => {
        setStudentList(allStudents.data);
      });
  }, []);

  return (
    <>
      <h2 className={classes.h2}> Students Details</h2>
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Registration Number</TableCell>
              <TableCell align="right">Standard</TableCell>
              <TableCell align="right">Class Section</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {studentsList.map((student, key) => (
              <TableRow key={key}>
                <TableCell component="th" scope="row">
                  {student.studname}
                </TableCell>
                <TableCell align="right">{student.RegisterNumber}</TableCell>
                <TableCell align="right">{student.std}</TableCell>
                <TableCell align="right">{student.sec}</TableCell>
                <TableCell align="right">
                  <IconButton
                    aria-label="delete"
                    className={classes.margin}
                    onClick={() => deleteStudent(student._id)}
                  >
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
