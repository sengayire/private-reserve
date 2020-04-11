import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '../Container/Container';
import CreateAd from '../common/Card/CreateAd';
import SideBar from '../common/SideBar/SideBar';

const useStyes = makeStyles({ root: { height: '100%', width: '100%', display: 'flex' } });
const MyProfileAd = () => {
  const classes = useStyes();
  return (
    <div className={classes.root}>
      <Container sideBar={<SideBar />} items={<CreateAd />} />
    </div>
  );
};

export default MyProfileAd;
