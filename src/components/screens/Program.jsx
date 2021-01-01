import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Highlight from "./Highlight";
import Title from "./../Title";

const useStyles = makeStyles((theme) => {
  return {
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
  };
});

function Program({ program }) {
  const classes = useStyles();
  return (
    <div>
      <Title text={program.title} size={27} color={"#2f63ba"} />
      <p>{program.description}</p>
      <div className={classes.row}>
        <div className={classes.marginPadding}>
          <List>
            {program.features.map((feature) => (
              <ListItem>{feature}</ListItem>
            ))}
          </List>
        </div>
        <div className={classes.marginPadding}>
          <img src={program.bookTestimonial} alt="BookTestimonial" />
        </div>
      </div>
      <div className={classes.row}>
        {program.highlights.map((highlight) => (
          <Highlight
            title={highlight.title}
            image={highlight.image}
            detail={highlight.detail}
          />
        ))}
      </div>
    </div>
  );
}

export default Program;
