import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { TextField } from "@material-ui/core";
import Photo from "../imag1.jpg";
import { Button } from "react-bootstrap";

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "50vh",
    width: "60%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "auto",
    [theme.breakpoints.down("md")]: {
      width: "90%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "95%",
      flexDirection: "column-reverse",
    },
  },
  profile: {
    width: "50%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  infoContainer: {
    Width: "500px",
  },
  name: {
    fontSize: "4rem",
  },
  desc: {
    fontSize: "1.2rem",
  },
  input: {
    width: "500px ",
    marginTop: theme.spacing(4),
  },
  button: {
    marginTop: "5%",
    marginBottom: "5%",
  },
}));
export default function () {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.container}>
        <div className={classes.infoContainer}>
          <h1 className={classes.name}> Name</h1>
          <p className={classes.desc}> Description </p>
        </div>
        <img src={Photo} alt="Photo" className={classes.profile} />
      </div>
      <div className={classes.container}>
        <h1> Contact </h1>
        <div>
          <form action="#conatiner" name="contact" method="post">
            <input type="hidden" name="form-name" value="contact" />
            <div className={classes.input}>
              <TextField
                varient="outlined"
                label="Full Name"
                name="name"
                fullWidth
              />
            </div>
            <div className={classes.input}>
              <TextField
                varient="outlined"
                label="Email"
                name="email"
                fullWidth
              />
            </div>
            <div className={classes.input}>
              <TextField
                varient="outlined"
                label="Message"
                name="message"
                fullWidth
                multiline
                rows={10}
              />
            </div>
            <Button
              className={classes.button}
              varient="contained"
              color="primar"
              type="submit"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
