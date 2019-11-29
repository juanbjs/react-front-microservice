import React from "react";
import { NavLink } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: '#fff'
  },
  navLink: {
    textDecoration: 'none',
    marginRight: '10px'
  },
  toolbar: {
    margin: 'auto'
  }
}));

export function AppHeader() {

  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar className = {classes.toolbar}>
        <NavLink to="/" className = {classes.navLink}>
          <Typography variant="h6" className={classes.title}>
            {"Home"}
          </Typography>
        </NavLink>
        <NavLink to="/page1" className = {classes.navLink}>
          <Typography variant="h6" className={classes.title}>
            {"Page 1"}
          </Typography>
        </NavLink>
        <NavLink to="/page2" className = {classes.navLink}>
          <Typography variant="h6" className={classes.title}>
            {"Page 2"}
          </Typography>
        </NavLink>
        <NavLink to="/page3" className = {classes.navLink}>
          <Typography variant="h6" className={classes.title}>
            {"Page 3"}
          </Typography>
        </NavLink>
      </Toolbar>
    </AppBar>
  )
}