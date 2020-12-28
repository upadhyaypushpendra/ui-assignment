import React from "react";
import { Button, Divider, List, ListItem } from "@material-ui/core";

import Poster from "../Poster";
import phonicsPoster from "./../../assets/live-english.png";
import mathsPoster from "./../../assets/live-maths.png";

import { makeStyles, withStyles } from "@material-ui/core/styles";
import Content from "../Content";
import { Link } from "react-router-dom";

const liveClasses = [
  {
    title: "Phonics",
    details: [
      "Speaking, Reading and Writing are among the most important fundamental skills a child can acquire.",
      "Mastering Phonics is crucial for your little one to become a better reader, speak fluently and build a strong foundation overall",
    ],
    image: phonicsPoster,
    url: "/live-phonics",
  },
  {
    title: "Maths",
    details: [
      "Building early number sense is extremely critical for young children to become confident learners overall.",
      "Our program is designed to impart the necessary tools for your child to make sense of and organize the world around them.",
    ],
    image: mathsPoster,
    url: "/live-maths",
  },
];

const useStyles = makeStyles((theme) => {
  return {
    root: {
      maxWidth: `inherit`,
      paddingBottom : 0,
    },
    column: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    container: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "20px",
      "& >": {
        flex: "1 1 0",
        margin: "15px",
      },
    },
    buttonLink: {
      textDecoration: "none",
      "& :hover": {
        backgroundColor: "#1b7498",
      },
    },
  };
});

const ColorButton = withStyles((theme) => ({
  root: {
    color: "#fff",
    backgroundColor: "#1b7498",
    "& :hover": {
      backgroundColor: "#1b7498",
    },
  },
}))(Button);

function LiveClasses(props) {
  const classes = useStyles();
  return (
    <List className={classes.root}>
      {liveClasses.map((liveClass) => (
        <>
          <List className={classes.container}>
            <Poster title={liveClass.title} image={liveClass.image} />
            <ListItem className={classes.column}>
              <Content title={liveClass.title} details={liveClass.details} />
              <Link to={liveClass.url} className={classes.buttonLink}>
                <ColorButton variant="contained" color="primary">
                  Learn More
                </ColorButton>
              </Link>
            </ListItem>
          </List>

          <hr
            style={{
              border: "1px solid black",
              background: "black",
              margin: 0,
              marginBlockStart: 0,
              marginBlockEnd: "0",
            }}
          />
        </>
      ))}
    </List>
  );
}

export default LiveClasses;
