import React from 'react';

import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/styles/makeStyles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  footerContainer: {
    margin: '50px 30px 0px 30px',
    borderTop: '1px solid #e5e5e5',
    height: '10em',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoText: {
    fontFamily: 'Montserrat',
    fontWeight: '300',
    fontSize: '2rem',
  },
  secondaryLogoText: {
    fontWeight: '500',
  },
  footerText: {
    fontFamily: 'Montserrat',
    fontWeight: '400',
    fontSize: '0.8rem',
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.footerContainer}>
      <Button variant='outlined'>
        <Typography className={classes.logoText}>
          Shoes <span className={classes.secondaryLogoText}>Wear's</span>
        </Typography>
      </Button>

      <Typography className={classes.footerText}>
        Copyright 2020 Muhammad Hammad Hanif
      </Typography>
    </div>
  );
};

export default Footer;
