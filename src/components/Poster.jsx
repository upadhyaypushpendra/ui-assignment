import { ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => {
  return {
    imageWrapper: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    image: {
      maxWidth: "550px",
      maxHeight: "550px",
      minWidth: "350px",
      minHeight: "350px",
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
