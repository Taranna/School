import { makeStyles } from "@material-ui/core/styles";
// import { cyan, red, purple, white } from "material-ui/colors";
import Image from "./videos/Radiant-Gradient.svg";

export default makeStyles(() => ({
  App: {
    // display: "flex",
    // flexDirection: "column",
    // justifyContent: "center",
    // alignContent: "center",
  },
  cont: {
    backgroundImage: `url(${Image})`,
    maxWidth: "lg",
  },
  heading: {
    color: "purple",
    backgroundColor: "pink",
  },
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));
