import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { TextField } from "@material-ui/core";
import { Button } from "react-bootstrap";
import linkedin from "../linkedin.png";
import github from "../git1.png";
import download from "../download.jpg";

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "10vh",
    width: "60%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "auto",
    [theme.breakpoints.down("md")]: {
      width: "90%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "70%",
      flexDirection: "column",
    },
  },
  infoContainer: {
    Width: "100%",
  },
  name: {
    fontSize: "4rem",
    fontFamily: "Courier New, monospace",
    color: "#008000",
    textAlign: "center",
  },
  desc: {
    fontSize: "1.2rem",
    color: "#7d7b7a",
  },
  input: {
    [theme.breakpoints.down("md")]: {
      width: "80vw",
    },
    [theme.breakpoints.down("sm")]: {
      width: "70vw",
    },
    width: "50vw",

    marginTop: theme.spacing(4),
  },
  formDecor: {
    background: "rgba(255,255,255,0.15)",
    padding: "2%",
    borderRadius: "1em",
  },
  textinput: {
    borderRadius: "2%",
    padding: "2%",
  },
  button: {
    marginTop: "5%",
    marginBottom: "5%",
  },
}));
export default function () {
  const classes = useStyles();
  return (
    <div id="mainContact" className="mainContact">
      <div className={classes.container}>
        <div className={classes.infoContainer}>
          <h1 className={classes.name}>
            <br /> <br />
            CONTACT
          </h1>
          <p className={classes.desc}>
            <br />
            Want to get in touch ? I'd love to hear from you. Here's how you can
            reach me...
          </p>
        </div>
        <div className="social">
          <p className="para ">GitHub</p>
          <a
            href="https://github.com/silambuas"
            rel="noreferrer"
            target="_blank"
          >
            <div className="text-hover">
              <img
                className="github"
                src={github}
                rel="noreferrer"
                alt="Github...."
              />
            </div>
          </a>
          <p className="para">LinkedIn</p>
          <a
            href="https://www.linkedin.com/in/silambarasu-a/"
            rel="noreferrer"
            target="_blank"
          >
            <div className="text-hover">
              <img className="linkedin" src={linkedin} alt="Linkedin...." />
            </div>
          </a>
          <p className="para">Resume</p>
          <a
            href="https://drive.google.com/file/d/1cJbNRm8tNQIdJSO5Dh-8HYC0JHt30jpi/view?usp=sharing"
            rel="noreferrer"
            target="_blank"
          >
            <div className="text-hover">
              <img className="resume" src={download} alt="Resume...." />
            </div>
          </a>
        </div>
      </div>
      <div className={classes.container}>
        <h1 style={{ color: "#7d7b7a" }}>
          {" "}
          <br /> <br /> Need a Hand !{" "}
        </h1>
        <div className={classes.formDecor}>
          <form action="#conatiner" name="contact" method="post">
            <input type="hidden" name="form-name" value="contact" />
            <div className={classes.input}>
              <TextField
                className={classes.textinput}
                varient="outlined"
                label="Name"
                name="name"
                fullWidth
              />
            </div>
            <div className={classes.input}>
              <TextField
                className={classes.textinput}
                varient="outlined"
                label="Email"
                name="email"
                fullWidth
              />
            </div>
            <div className={classes.input}>
              <TextField
                className={classes.textinput}
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
