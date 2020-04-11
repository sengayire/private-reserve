import React from 'react';
import { useHistory } from 'react-router-dom';
import { Card, CardHeader, CardContent, CardActions, Button, Link } from '@material-ui/core';
import { Check } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
    backgroundColor: '#0a0a0a',
    height: '100%',
  },
  cardContainer: { backgroundColor: '#0a0a0a', borderRadius: '16px', color: 'white' },
  cardHeader: { background: 'rgba(239,190,0,.5)', color: 'white' },
  cardTitle: { display: 'flex', justifyContent: 'center' },
  headerTitle: {
    fontSize: 36,
    fontWeight: 800,
    fontFamily: ['Nunito', 'sans-serif'],
  },
  regularAdBtn: {
    height: 50,
    borderColor: '#efbe00 !important',
    width: 300,
    borderWidth: '2px',
    color: '#efbe00',
  },
  cardContent: { display: 'flex', alignItems: 'center', flexDirection: 'column' },
  adDuration: {
    display: 'flex',
    alignItems: 'center',
    color: '#efbe00',
    justifyContent: 'spaceBetween',
  },
  adDurationDays: { fontSize: 50 },
  bottomP: { fontSize: 12 },
  adDescription: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'spaceBetween',
  },
  adDescriptionOption: {
    display: 'flex',
    alignItems: 'center',
  },
});

const CreateAd = () => {
  const classes = useStyles();
  const descriptionOptions = ['8Photos', 'VIP Option', 'Enhance Your Ad', 'Bio'];
  const HeaderTitle = () => (
    <div className={classes.cardTitle}>
      <h1 className={classes.headerTitle}>REGULAR AD</h1>
    </div>
  );

  const CreateAdCard = () => {
    const history = useHistory();
    return (
      <div className={classes.root}>
        <Card className={classes.cardContainer} borderRadius={16}>
          <CardHeader className={classes.cardHeader} title={<HeaderTitle />} />

          <CardContent className=''>
            <div className={classes.cardContent}>
              <h4>Ad will be online after</h4>
              <div className={classes.adDuration}>
                <div>
                  <h1 className={classes.adDurationDays}>24</h1>
                </div>
                <div>Business Hours</div>
              </div>
              <div className={classes.adDescription}>
                {descriptionOptions.map(element => (
                  <div className={classes.adDescriptionOption}>
                    <span style={{ marginTop: '4px', marginRight: '10px', color: '#efbe00' }}>
                      <Check />
                    </span>
                    <span>
                      <p>{element}</p>
                    </span>
                  </div>
                ))}
              </div>
              <CardActions>
                <Button
                  className={classes.regularAdBtn}
                  variant='outlined'
                  onClick={() => history.push('/builder/selectProfile')}
                >
                  Create Regular Ad
                </Button>
              </CardActions>
              {''}
              <div>
                <p className={classes.bottomP}>
                  <span style={{ color: '#efbe00', alignItems: 'center' }}>* </span>
                  If the content of the ad meets our Publishing Standarts
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', width: '90%', float: 'right' }}>
      <CreateAdCard />
      <CreateAdCard />
    </div>
  );
};

export default CreateAd;
