import * as React from "react";
import { NavLink } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  List,
  ListItem,
  ListItemText,
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
  linkText: {
    fontWeight: "bold",
    fontFamily: "'Open Sans',sans-serif",
    textDecoration: "none",
    borderBottom: "5px solid transparent",
    color: "black",
    transformOrigin: "left",
    transition: "border 0.5s ease-in",
    "&:hover": {
      borderBottom: "5px solid #5195ae",
    },
  },
  selected: {
    color: "#4ceeeb",
    borderBottom: "5px solid #5195ae",
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
                className={classes.linkText}
                activeClassName={classes.selected}
              >
                <ListItem>
                  <ListItemText primary={title} />
                </ListItem>
              </NavLink>
            ))}
          </List>
        </Container>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
