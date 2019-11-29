import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '10px',
  },
}));

export function Section(props) {
  const classes = useStyles();
  const {children} = props;
  
  return (
    <section className = {classes.root}>
      {
        children
      }
    </section>
  )
}