import React from 'react';

import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/styles/makeStyles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Hidden from '@material-ui/core/Hidden';

import { secondaryMenu, primaryMenu } from '../utils/MenuLinks';

const useStyles = makeStyles((theme) => ({
  footerContainer: {
    marginTop: '50px',
    padding: '20px 0 0 0',
    borderTop: '1px solid #e5e5e5',
  },
  logo: {
    ...theme.typography.logo,
    marginBottom: '15px',
  },
  logoText: {
    ...theme.typography.logoText,
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.5rem',
    },
  },
  secondaryLogoText: {
    ...theme.typography.secondaryLogoText,
  },
  copyRightText: {
    fontFamily: 'Montserrat',
    fontWeight: '400',
    fontSize: '0.8rem',
    color: theme.palette.common.white,
  },
  copyRightContainer: {
    height: '2rem',
    width: '100%',
    background: 'black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5px 0',
  },
  gridItem: {
    margin: '3rem',
  },
  link: {
    ...theme.typography.secondaryTab,
    margin: '1rem 15rem 1rem auto',
    [theme.breakpoints.down('md')]: {
      margin: '1rem 12rem 1rem auto',
    },
  },
  searchFieldContainer: {
    ...theme.typography.searchFieldContainer,
    marginTop: '0.5rem',
    width: '20em',
    [theme.breakpoints.down('md')]: {
      width: '19rem',
    },
  },
  searchFieldInput: {
    ...theme.typography.searchFieldInput,
  },
  searchHeading: {
    marginTop: '1rem',
    fontFamily: 'Montserrat',
    fontWeight: 500,
    fontSize: '1rem',
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.footerContainer}>
      <Grid container direction='column' alignItems='center'>
        <Grid item>
          <Button variant='outlined' className={classes.logo} disableRipple>
            <Typography className={classes.logoText}>
              Shoes <span className={classes.secondaryLogoText}>Wear's</span>
            </Typography>
          </Button>
        </Grid>
        <Hidden smDown>
          <Grid item>
            <Grid container direction='row'>
              <Grid item direction='column'>
                {secondaryMenu.map((menu, i) => (
                  <Grid item key={i} className={classes.link}>
                    {menu.name}
                  </Grid>
                ))}
              </Grid>
              <Grid item direction='column'>
                {primaryMenu.map((menu, i) => (
                  <Grid item key={i} className={classes.link}>
                    {menu.name}
                  </Grid>
                ))}
              </Grid>
              <Grid item direction='column'>
                <Grid item>
                  <Typography className={classes.searchHeading}>
                    SEARCH SHOES
                  </Typography>
                  <div className={classes.searchFieldContainer}>
                    <InputBase
                      className={classes.searchFieldInput}
                      placeholder='SEARCH'
                    />
                    <SearchIcon />
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Hidden>
      </Grid>
      <div className={classes.copyRightContainer}>
        <Typography className={classes.copyRightText}>
          Copyright © 2020 Muhammad Hammad Hanif
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
