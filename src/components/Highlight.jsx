import { Box, Typography } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: "flex",
      flexDirection: "column",
      width: "25%",
      alignItems: "center",
    },
    title: {
      fontWeight: "bold",
      fontSize: "16px",
    },
    detail: {
      fontSize: "14px",
      letterSpacing: "-0.24px",
      textAlign: "center",
      whiteSpace: "pre-wrap",
      padding : "0 30px"
    },
    imageWrapper: {
      height: "200px",
      width: "300px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  };
});

function Highlight(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.imageWrapper}>
        <img alt="widgetIcon" src={props.image} />
      </div>
      <h3 className={classes.title}>{props.title}</h3>
      <p className={classes.detail}>{props.detail}</p>
    </div>
  );
}

export default Highlight;