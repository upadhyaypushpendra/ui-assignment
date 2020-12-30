import React from "react";
import { Link } from "react-router-dom";

import { Button } from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/core/styles";

const ColorButton = withStyles((theme) => ({
  root: {
    color: "#fff",
    backgroundColor: "#1b7498",
    "& :hover": {
      backgroundColor: "#1b7498",
    },
  },
}))(Button);

const useStyles = makeStyles((theme) => {
  return {
    buttonLink: {
      textDecoration: "none",
      "& :hover": {
        backgroundColor: "#398b00",
      },
    },
    button: {
      margin: "20px 0px",
      backgroundColor: "#398b00",
    },
  };
});

function ButtonLink(props) {
  const classes = useStyles();

  return (
    <Link to={props.href} className={classes.buttonLink}>
      <ColorButton variant="contained" className={classes.button}>
        {props.children}
      </ColorButton>
    </Link>
  );
}

export default ButtonLink;
