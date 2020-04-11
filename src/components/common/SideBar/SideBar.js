import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    height: '700px',
    background: '#0a0a0a',
    color: '#e1e0de',
  },
  header: { height: '15%' },
  listItems: {
    display: 'flex',
    alignItems: 'center',
    height: '30px',
    fontWeight: '8px;',
    color: 'white',
    '&:hover': { background: '#181303' },
  },
});
const SideBar = () => {
  const classes = useStyles();
  const history = useHistory();
  const list = [
    {
      text: 'My Services',
      icon: '',
    },
    {
      text: 'Create Ads',
      icon: '',
    },
    {
      text: ' Premier Services',
      icon: '',
    },

    {
      text: 'Messages',
      icon: '',
    },
    {
      text: 'Pricing',
      icon: '',
    },
    {
      text: 'WatchList',
      icon: '',
    },

    {
      text: 'Credit via Bitcoins',
      icon: '',
    },
    {
      text: 'Link Exchange',
      icon: '',
    },
    {
      text: 'Manage my Cards',
      icon: '',
    },
    {
      text: 'Upload Documents',
      icon: '',
    },
    {
      text: 'Account & Settings',
      icon: '',
    },

    {
      text: 'Contact & Support',
      icon: '',
    },
    {
      text: 'Logout',
      icon: '',
    },
  ];

  return (
    <div>
      <div className={classes.root}>
        <div className={classes.header}>
          <p>Private Reserve</p>
        </div>
        <div>
          {list.map((element, index) => (
            <div>
              <List className={classes.listItems} key={index} hover>
                <ListItem button onClick={() => history.push('/my/profile')}>
                  <ListItemIcon>
                    <SendIcon />
                  </ListItemIcon>
                  <ListItemText>{element.text}</ListItemText>
                </ListItem>
              </List>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
