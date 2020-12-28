import { Box, List, Typography } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import whatsAppLogo from "./../assets/whatsapp-logo.png";

const useStyles = makeStyles((theme) => {
  return {
    contactInfo: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      paddingTop: "10px",
      "& > *": {
        paddingTop: "20px",
        paddingBottom: "20px",
      },
    },
    privacyInfo: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: "#24424d",
      color: "#fff",
      paddingTop: "20px",
      "& > *": {
        paddingBottom: "10px",
      },
    },
    link : {
        color: "#fff",
        textDecoration : "none",
        padding : "10px 20px",
        fontSize : "0.9em"
    },
  };
});
function Footer(params) {
  const classes = useStyles();

  return (
    <>
      <hr
        style={{
          border: "1px solid black",
          background: "black",
          margin: 0,
          marginBlockStart: 0,
          marginBlockEnd: "0",
        }}
      />
      <Box className={classes.contactInfo}>
        <Typography component="p" variant="p">
          WhatsApp us to learn more
        </Typography>
        <Link to="#">
          <img alt="WhatsApp" src={whatsAppLogo} />
        </Link>
      </Box>
      <Box className={classes.privacyInfo}>
        <Box display="flex" flexDirection="row" justifyItems="space-between">
        <Link to="#" className={classes.link}>
          <Typography component="p" variant="span">
            Privary Policy
          </Typography>
          </Link>
          <Link to="#" className={classes.link}>
          <Typography component="p" variant="span">
            Terms of Use
          </Typography>
          </Link>
        </Box>
        <Typography component="p" variant="span" style={{fontSize:"smallest",padding:"20px"}} >
                Copyright @2020 | Soniqmantra Private Limited
        </Typography>
      </Box>
    </>
  );
}

export default Footer;
