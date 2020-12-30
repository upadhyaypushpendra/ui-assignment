import * as React from "react";
import { NavLink } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  List,
  Container,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import AppLogo from "./AppLogo";

const useStyles = makeStyles({
  root: {
    backgroundColor: "white",
    color: "black",
    borderBottom: "1px solid #0000003d",
    transition: "all 0.5s",
    "&:hover": {
      borderColor: "#969696",
      boxShadow: "0 0 10px 0px rgba(0,0,0,.5)",
    },
  },
  navBarDisplayFlex: {
    display: "flex",
    justifyContent: "space-between",
  },
  navDisplayFlex: {
    display: "flex",
    justifyContent: "space-between",
  },
  selected: {
    color: "#4ceeeb !important",
    backgroundSize: "100% 100% !important",
  },
  menuWrapper: {
    fontWeight: "bold",
    fontFamily: "'Open Sans',sans-serif",
    textDecoration: "none",
    color: "black",
    margin: "0px 5px",
    paddingBottom: "5px",
    width: "fit-content",
    backgroundImage: "linear-gradient(#5195AE, #5195AE)",
    backgroundPosition: "50% 50%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "0% 100%",
    transition: "background-size .5s, color .5s",
    "&:hover": {
      backgroundSize: "100% 100%",
      color: "#4ceeeb",
    },
  },
  menu: {
    background: "white",
    padding: "5px 15px",
    width: "fit-content",
  },
});

const navLinks = [
  { title: "Home", path: "/home" },
  { title: "About", path: "/about" },
  { title: "Live Classes", path: "/live-classes" },
  { title: "Blog", path: "/blog" },
  { title: "Books", path: "/books" },
  { title: "Careers", path: "/careers" },
];

function Header(props) {
  const classes = useStyles();

  return (
    <AppBar position="static" elevation={0}>
      <Toolbar className={classes.root}>
        <AppLogo />
        <Container className={classes.navBarDisplayFlex}>
          <List
            component="nav"
            aria-labelledby="main-navigation"
            className={classes.navDisplayFlex}
          >
            {navLinks.map(({ title, path }) => (
              <NavLink
                to={path}
                className={classes.menuWrapper}
                activeClassName={classes.selected}
              >
                <div className={classes.menu}>{title}</div>
              </NavLink>
            ))}
          </List>
        </Container>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
