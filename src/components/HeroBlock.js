import React from 'react';
import makeStyles from '@material-ui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  heroimage: {
    width: '100%',
    height: '100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  heroContainer: {
    height: '600px',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      height: '500px',
    },
    [theme.breakpoints.down('sm')]: {
      height: '400px',
    },
    [theme.breakpoints.down('xs')]: {
      height: '300px',
    },
  },
}));

const HeroBlock = () => {
  const classes = useStyles();
  return (
    <div className={classes.heroContainer}>
      <img
        src='/img/main-image.jpg'
        className={classes.heroimage}
        alt='Hero Block'
      />
    </div>
  );
};

export default HeroBlock;
