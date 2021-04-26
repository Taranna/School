import "./App.css";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import Student from "./components/showStudents/showStudents";
import CreateStudent from "./components/createStudent/createStudent";
import useStyles from "./styles";

function App() {
  const classes = useStyles();

  return (
    <div className={classes.App} fixed>
      <Container className={classes.cont}>
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography className={classes.heading} variant="h2" align="center">
            Students Details
          </Typography>
        </AppBar>
        <Grow in>
          <Container>
            <Grid container justify="space-between" alignItems="stretch">
              <Grid item xs={12} sm={7}>
                <AppBar
                  className={classes.appBar}
                  position="static"
                  color="inherit"
                >
                  <Student />
                </AppBar>
              </Grid>
              <Grid item xs={12} sm={4}>
                <AppBar
                  className={classes.appBar}
                  position="static"
                  color="inherit"
                >
                  <CreateStudent />
                </AppBar>
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </div>
  );
}

export default App;
