import * as React from "react";
import { NavLink } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  IconButton,
  Container,
  Typography,
  Divider,
  ListItemIcon,
  Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { AccountCircle } from "@material-ui/icons";
import AppLogo from "./AppLogo";

const useStyles = makeStyles({
  root: {
    backgroundColor: "white",
    color: "black",
    borderBottom: "1px solid #0000003d",
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
    textDecoration: "none",
    color: "black",
  },
  selected: {
    color: "#4ceeeb",
  },
});

const navLinks = [
  { id: 1, title: "Daily Schedule", path: "/dailySchedule" },
  { id: 2, title: "Learning Materials", path: "/learningMaterials" },
  { id: 3, title: "Assignments", path: "/assignments" },
];

function Header(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = "primary-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "bottom", horizontal: "left" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        <ListItemIcon>
          <AccountCircle fontSize="small" />
        </ListItemIcon>
        <Typography>Username</Typography>
      </MenuItem>
      <Divider />
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
    </Menu>
  );

  return (
    <AppBar position="static" elevation={0}>
      <Toolbar className={classes.root}>
        <AppLogo/>
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
                <ListItem button>
                  <ListItemText primary={title} />
                </ListItem>
              </NavLink>
            ))}
          </List>
          <Box m={1}>
          <IconButton
            edge="end"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          </Box>
        </Container>
      </Toolbar>
      {renderMenu}
    </AppBar>
  );
}

export default Header;
