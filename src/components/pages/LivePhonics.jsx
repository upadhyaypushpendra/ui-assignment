import React from "react";
import { List } from "@material-ui/core";

import Poster from "../Poster";

import { makeStyles } from "@material-ui/core/styles";

import Content from "../Content";
import Package from "../Package";
import Testimonial from "../Testimonial";
import Program from "../Program";

import {phonicsClass} from "./../../classData";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      maxWidth: `inherit`,
      paddingBottom: 0,
    },
    marginPadding: {
      margin: "10px",
      padding: "20px",
    },
    column: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      width: "100%",
    },
    row: {
      display: "flex",
      flexDirection: "row",
      width: "100%",
      justifyContent: "center",
    },
    packageHeaderWrapper : {
      backgroundColor: "#d9fffd",
      padding: "20px",
      width: "96%",
      borderTop: "2px solid  #6ec1e4",
    },
    container: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      borderBottom: "2px solid black",
      padding: "20px",
      "& >": {
        flex: "1 1 0",
        margin: "15px",
      },
    },
  };
});

function LivePhonics(props) {
  const classes = useStyles();
  return (
    <div className={classes.column}>
      <List className={classes.container}>
        <Content title={phonicsClass.title} titleColor={"rgb(231, 53, 53)"} details={phonicsClass.details} />
        <Poster title={phonicsClass.title} image={phonicsClass.image} />
      </List>
      <Program program={phonicsClass.program}/>
      <div className={classes.packageHeaderWrapper} >
        <h1>Packages</h1>
        <p>We offer 3 packages tailor made to suit different learning levels</p>
      </div>
      <div className={classes.row}>
        {phonicsClass.packages.map((p) => (
          <Package packageDetail={p} />
        ))}
      </div>
      <div>
        {phonicsClass.testimonials.map((testimonial) => (
          <Testimonial testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
}

export default LivePhonics;