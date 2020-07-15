import React, { Fragment } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import makeStyles from '@material-ui/styles/makeStyles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  primaryMenu: {
    paddingTop: '1em',
  },
  primaryMenuContainer: {
    margin: 'auto',
  },
  primaryTab: {
    fontFamily: 'Montserrat',
    color: '#000',
    textTransform: 'none',
    fontWeight: 400,
    fontSize: '1rem',
    minWidth: 10,
    '&:hover': {
      borderBottom: `1px solid ${theme.palette.secondary.light}`,
    },
  },
  logoText: {
    fontFamily: 'Montserrat',
    fontWeight: '300',
    fontSize: '2rem',
  },
  searchFieldContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 'auto',
    borderBottom: '1px solid #e5e5e5',
    borderTop: '1px solid #e5e5e5',
    width: '20%',
  },
  searchFieldInput: {
    padding: '5px 0px',
    fontFamily: 'Montserrat',
    fontSize: '0.8rem',
  },
  secondaryLogoText: {
    fontWeight: '500',
  },
  secondaryMenu: {
    minHeight: 30,
    borderBottom: '1px solid #e5e5e5',
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '1rem',
    [theme.breakpoints.down('md')]: {
      marginBottom: '10rem',
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: '1.25rem',
    },
  },
  secondaryMenuContainer: {
    display: 'flex',
    alignItems: 'center',
  },

  secondaryMenutab: {
    ...theme.typography.secondaryTab,
    borderRight: `1px solid ${theme.palette.secondary.light}`,
    '&:last-child ': {
      borderRight: 0,
    },
  },
  cartContainer: {
    marginLeft: 'auto',
    display: 'flex',
    alignItems: 'center',
  },
  carttab: {
    ...theme.typography.secondaryTab,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <AppBar elevation={0} position='static'>
        <Toolbar className={classes.secondaryMenu}>
          <Tabs
            value={0}
            indicatorColor='primary'
            className={classes.secondaryMenuContainer}
          >
            <Tab
              key={0}
              label='Home'
              className={classes.secondaryMenutab}
              disableRipple
            />
            <Tab
              disableRipple
              key={1}
              label='About Us'
              className={classes.secondaryMenutab}
            />
            <Tab
              disableRipple
              key={2}
              label='My Account'
              className={classes.secondaryMenutab}
            />
            <Tab
              disableRipple
              key={3}
              label='Contact Us'
              className={classes.secondaryMenutab}
            />
          </Tabs>
          <Tabs
            value={0}
            indicatorColor='primary'
            className={classes.cartContainer}
          >
            <Tab
              key={0}
              label='Shopping Cart'
              className={classes.carttab}
              disableRipple
            />
            <ShoppingCartIcon fontSize='small' />
          </Tabs>
        </Toolbar>
        <Toolbar className={classes.primaryMenu}>
          <Button variant='outlined'>
            <Typography className={classes.logoText}>
              Shoes <span className={classes.secondaryLogoText}>Wear's</span>
            </Typography>
          </Button>
          <div className={classes.searchFieldContainer}>
            <InputBase
              className={classes.searchFieldInput}
              placeholder='SEARCH'
            />
            <SearchIcon />
          </div>
        </Toolbar>
        <Toolbar className={classes.primaryMenu}>
          <Tabs
            value={0}
            indicatorColor='primary'
            className={classes.primaryMenuContainer}
          >
            <Tab
              key={0}
              label='HOME'
              className={classes.primaryTab}
              disableRipple
            />
            <Tab
              key={1}
              label='BEST SELLERS'
              className={classes.primaryTab}
              disableRipple
            />
            <Tab
              key={2}
              label='SHOES'
              className={classes.primaryTab}
              disableRipple
            />
            <Tab
              key={3}
              label='COLLECTION'
              className={classes.primaryTab}
              disableRipple
            />
            <Tab
              key={4}
              label='WHATS NEW'
              className={classes.primaryTab}
              disableRipple
            />
          </Tabs>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default Header;
