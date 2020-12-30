import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import maleIcon from "./../assets/Kutu-Wave-Both-Arms.png";
import femaleIcon from "./../assets/Ki-Both-Arms-Wave.png";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      padding: "20px",
      borderBottom: "2px solid black",
      maxWidth: "1140px",
      margin: "20px auto",
    },
    testimonialWrapper: {},
    testimonial: {
      textAlign: "center",
      fontSize: "14px",
      margin: "0 0 20px",
    },
    senderInfoWrapper: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    senderLogoWrapper: {
      position: "relative",
      width: "60px",
      height: "60px",
      padding: "20px",
    },
    senderLogo: {
      position: "relative",
      width: "100%",
      height: "100%",
    },
    name: {
      fontSize: "16px",
    },
    job: {
      fontSize: ".85em",
      color: "inherit",
      display: "block",
    },
  };
});

function Testimonial({ testimonial }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.testimonialWrapper}>
        <p className={classes.testimonial}>{testimonial.content}</p>
      </div>
      <div className={classes.senderInfoWrapper}>
        <div className={classes.senderLogoWrapper}>
          <img
            src={testimonial.gender === "M" ? maleIcon : femaleIcon}
            alt={"Icon"}
            className={classes.senderLogo}
          />
        </div>
        <div className={classes.senderNameWrapper}>
          <div className={classes.name}> {testimonial.name}</div>
          <div className={classes.job}>{testimonial.job}</div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
