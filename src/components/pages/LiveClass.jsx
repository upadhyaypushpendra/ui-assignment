import React from "react";

import { List } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Poster from "./../Poster";
import Title from "../Title";
import Package from "./../screens/Package";
import Program from "./../screens/Program";
import Content from "./../screens/Content";
import Testimonial from "./../screens/Testimonial";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      textAlign: "center",
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
    packages: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      borderBottom: "2px solid black",
      flexWrap: "row",
    },
    packageHeaderWrapper: {
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

function LivePhonics({ liveClass }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List className={classes.container}>
        <Content
          title={liveClass.title}
          titleColor={"rgb(231, 53, 53)"}
          details={liveClass.details}
        />
        <Poster title={liveClass.title} image={liveClass.image} />
      </List>
      <Program program={liveClass.program} />
      <div className={classes.packageHeaderWrapper}>
        <Title text={"Packages"} size={26} />
        <p>We offer 3 packages tailor made to suit different learning levels</p>
      </div>
      <div className={classes.packages}>
        {liveClass.packages.map((p) => (
          <Package packageDetail={p} />
        ))}
      </div>
      <div>
        {liveClass.testimonials.map((testimonial) => (
          <Testimonial testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
}

export default LivePhonics;
