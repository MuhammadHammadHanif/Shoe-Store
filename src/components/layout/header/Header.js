import React, { Fragment, useState } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import makeStyles from '@material-ui/styles/makeStyles';
// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import useTheme from '@material-ui/styles/useTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Hidden from '@material-ui/core/Hidden';
import { Link } from 'react-router-dom';

import { secondaryMenu, primaryMenu } from '../../utils/MenuLinks';

const useStyles = makeStyles((theme) => ({
  primaryMenu: {
    marginTop: '1em',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '1em',
    },
  },
  mobileMenu: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  primaryMenuIcon: {
    marginLeft: '0.5em',
    '&:hover': {
      background: 'transparent',
    },
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
  searchFieldContainer: {
    ...theme.typography.searchFieldContainer,
    width: '20em',
    [theme.breakpoints.down('sm')]: {
      width: '12em',
    },
  },
  searchFieldInput: {
    ...theme.typography.searchFieldInput,
  },
  logo: {
    ...theme.typography.logo,
  },
  logoText: {
    ...theme.typography.logoText,
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.5rem',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '1rem',
    },
  },
  secondaryLogoText: {
    ...theme.typography.secondaryLogoText,
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
  drawerItem: {
    ...theme.typography.secondaryTab,
    padding: '0px 0px',
    cursor: 'pointer',
  },
  drawer: {
    width: '60%',
    padding: '20px 20px',
  },
  drawerHeading: {
    fontFamily: 'Montserrat',
    color: '#000',
    textTransform: 'none',
    fontWeight: 600,
    fontSize: '1rem',
    padding: '15px 0px 0px 0px',
  },
}));

const Header = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesExtraSmall = useMediaQuery(theme.breakpoints.down('xs'));
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const [openDrawer, setOpenDrawer] = useState(false);

  const drawer = (
    <Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <Button variant='outlined' className={classes.logo} disableRipple>
          <Typography className={classes.logoText}>
            Shoes <span className={classes.secondaryLogoText}>Wear's</span>
          </Typography>
        </Button>
        <Hidden smUp>
          <Typography className={classes.drawerHeading}>Menu Links</Typography>
          {secondaryMenu.map((menu, i) => (
            <List key={i}>
              <ListItem
                disableGutters
                onClick={() => {
                  setOpenDrawer(false);
                }}
                divider
              >
                <ListItemText className={classes.drawerItem} disableTypography>
                  {menu.name}
                </ListItemText>
              </ListItem>
            </List>
          ))}
        </Hidden>

        <Typography className={classes.drawerHeading}>Categories</Typography>
        {primaryMenu.map((menu, i) => (
          <List key={i}>
            <ListItem
              disableGutters
              onClick={() => {
                setOpenDrawer(false);
              }}
              divider
            >
              <ListItemText className={classes.drawerItem} disableTypography>
                {menu.name}
              </ListItemText>
            </ListItem>
          </List>
        ))}
      </SwipeableDrawer>
    </Fragment>
  );
  return (
    <Fragment>
      <AppBar elevation={0} position='static'>
        {/* Secondary Menu */}
        {matchesExtraSmall ? undefined : (
          <Toolbar className={classes.secondaryMenu}>
            <Tabs
              value={0}
              indicatorColor='primary'
              className={classes.secondaryMenuContainer}
            >
              {secondaryMenu.map((menu, i) => (
                <Tab
                  key={i}
                  label={menu.name}
                  className={classes.secondaryMenutab}
                  disableRipple
                  to={menu.link}
                  component={Link}
                />
              ))}
            </Tabs>
            <Tabs
              value={0}
              indicatorColor='primary'
              className={classes.cartContainer}
            >
              <Tab
                key={0}
                label='My Account'
                className={classes.carttab}
                disableRipple
              />
            </Tabs>
          </Toolbar>
        )}
        {/* Logo Menu */}
        {matchesExtraSmall ? undefined : (
          <Toolbar className={classes.primaryMenu}>
            <Button
              variant='outlined'
              className={classes.logo}
              disableRipple
              component={Link}
              to='/'
            >
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
            {matchesSmall ? (
              <IconButton
                edge='start'
                className={classes.primaryMenuIcon}
                color='inherit'
                aria-label='menu'
                onClick={() => setOpenDrawer(true)}
                disableRipple
              >
                <MenuIcon fontSize='large' />
              </IconButton>
            ) : undefined}
          </Toolbar>
        )}
        {/* Drawer Menu and Primary Menu */}
        {matchesSmall ? (
          drawer
        ) : (
          <Toolbar className={classes.primaryMenu}>
            <Tabs
              value={0}
              indicatorColor='primary'
              className={classes.primaryMenuContainer}
            >
              {primaryMenu.map((menu, i) => (
                <Tab
                  key={i}
                  label={menu.name.toUpperCase()}
                  className={classes.primaryTab}
                  disableRipple
                  component={Link}
                  to={menu.link}
                />
              ))}
            </Tabs>
          </Toolbar>
        )}
        {/* Mobile Menu */}
        {matchesExtraSmall ? (
          <Toolbar className={classes.mobileMenu}>
            <Button variant='outlined' className={classes.logo} disableRipple>
              <Typography className={classes.logoText}>
                Shoes <span className={classes.secondaryLogoText}>Wear's</span>
              </Typography>
            </Button>
            <IconButton
              edge='start'
              className={classes.primaryMenuIcon}
              color='inherit'
              aria-label='menu'
              onClick={() => setOpenDrawer(true)}
              disableRipple
            >
              <MenuIcon fontSize='large' />
            </IconButton>
          </Toolbar>
        ) : undefined}
      </AppBar>
    </Fragment>
  );
};

export default Header;
