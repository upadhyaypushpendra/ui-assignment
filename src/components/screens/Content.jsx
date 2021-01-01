import { ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Title from "../Title";

const useStyles = makeStyles((theme) => {
  return {
    contentWrapper: {
      display: "flex",
      flexDirection: "column",
      padding: "35px",
    },
    content: {
      margin: "10px",
      padding: "10px 50px",
    },
  };
});

function Content(props) {
  const classes = useStyles();

  return (
    <ListItem className={classes.contentWrapper}>
      <Title text={props.title} color={props.titleColor} size={30} />
      {props.details &&
        props.details.map((para) => <p className={classes.content}>{para}</p>)}
    </ListItem>
  );
}

export default Content;
