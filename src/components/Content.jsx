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
          <Typography variant="p" component="p" className={classes.content}>
            {para}
          </Typography>
        ))}
    </ListItem>
  );
}

export default Content;
