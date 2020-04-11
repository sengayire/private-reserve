import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '100%',
    width: '100%',
  },
  sideBar: {
    height: '100%',
    width: '20%',
  },
  items: { width: '80%' },
});
const Container = ({ items, sideBar, header }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.sideBar}>{sideBar}</div>
      <div>
        <div>{header}</div>
        <div className={classes.items}>{items}</div>
      </div>
    </div>
  );
};

export default Container;
