import { Box, List, ListItem, Typography } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import Title from "./Title";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: "flex",
      flexDirection: "column",
      width: "33%",
      alignItems: "center",
    },

    imageWrapper: {
      padding: "25px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    image: {
      width: "150px",
      height: "150px",
    },
    title: {
      fontSize: "20px",
      fontWeight: "700",
      color: "black",
      padding: "20px 10px",
    },
    audience: {
      padding: "20px",
      fontSize: "13px",
    },
    topicsWrapper: {
        textAlign : "left",
    },
    topics: {
      listStyle: "none",
    },
    topic: {
      fontSize: "12px",
      padding: "5px 0",
      "&:before": {
        content: '""',
        width: "1.25em",
        fontFamily: "Font Awesome 5 Free",
        fontWeight: 900,
      },
    },
    boldSmall: {
      fontSize: "14px",
      fontWeight: "700",
      paddingTop: "25px",
    },
    small: {
      fontSize: "14px",
      paddingTop: "25px",
    },
    notesWrapper: {
      padding: "24px 10px",
      fontSize: "14px",
    },
    alert: {
      fontWeight: 700,
      color: "red",
      animation: "$blinker 1s linear infinite",
      padding: "30px",
    },
    "@keyframes blinker": {
      "0%": {
        opacity: 1,
      },
      "30%": {
        opacity: 0,
      },
      "60%": {
        opacity: 1,
      },
    },
  };
});

function Package({ packageDetail }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.imageWrapper}>
        <img
          className={classes.image}
          src={packageDetail.image}
          alt={packageDetail.name}
        />
      </div>
      <Title text={packageDetail.name} size={20} color={packageDetail.nameColor} />
      <div className={classes.audience}>{packageDetail.audience}</div>
      <div className={classes.topicsWrapper}>
        <ul className={classes.topics}>
          {packageDetail.topics.map((topic) => (
            <li className={classes.topic}>✓{topic}</li>
          ))}
        </ul>
      </div>
      <div className={classes.boldSmall}>
        {packageDetail.numberOfClasses} Classes
      </div>
      <div className={classes.boldSmall}>Group Classes (Up to 4 per group)</div>
      <div className={classes.small}>
        Package Cost - Rs. {packageDetail.cost}
      </div>
      <div className={classes.small}>
        Rs.{packageDetail.costPerClass}/ class
      </div>
      <div className={classes.notesWrapper}>
        {packageDetail.notes.map((note) => (
          <p>*-{note}</p>
        ))}
      </div>
      <div className={classes.alert}>Filling Fast!</div>
    </div>
  );
}

export default Package;
