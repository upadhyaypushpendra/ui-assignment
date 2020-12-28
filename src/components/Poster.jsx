import { Box, List, ListItem, Typography } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => {
  return {
    imageWrapper: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    image: {
      maxWidth: "300px",
      maxHeight: "300px",
    },
  };
});
function Poster(props) {
  const classes = useStyles();

  return (
    <ListItem className={classes.imageWrapper}>
      <img src={props.image} alt={props.title} className={classes.image} />
    </ListItem>
  );
}

export default Poster;
