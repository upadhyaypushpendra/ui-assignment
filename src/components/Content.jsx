import { ListItem, Typography } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => {
  return {
    title: {
      color: "#e73535",
      fontFamily: "'Open Sans',sans-serif",
      fontSize: "30px",
      fontWeight: "bold",
      margin: "20px",
      lineHeight: 1,
    },
    contentWrapper: {
      display: "flex",
      flexDirection: "column",
      padding: "35px",
    },
    content: {
      margin: "10px",
      padding : "10px 50px"
    },
  };
});

function Content(props) {
  const classes = useStyles();

  return (
    <ListItem className={classes.contentWrapper}>
      <h1 className={classes.title}>{props.title}</h1>
      {props.details &&
        props.details.map((para) => (
          <p className={classes.content}>
            {para}
          </p>
        ))}
    </ListItem>
  );
}

export default Content;
