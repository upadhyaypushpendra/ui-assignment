import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => {
  return {
    title: {
      fontFamily: "'Open Sans',sans-serif",
      fontWeight: "700",
      padding: "15px 10px",
      textAlign: "center",
      lineHeight: 1,
    },
  };
});

function Title(props) {
  const classes = useStyles();

  return (
    <h1
      className={classes.title}
      style={{ color: props.color || "black", fontSize: `${props.size}px` }}
    >
      {props.text}
    </h1>
  );
}

export default Title;
