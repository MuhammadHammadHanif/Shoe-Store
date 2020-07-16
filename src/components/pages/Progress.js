import React from 'react';

import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  aboutContainer: {
    margin: '10px 40px 0px 40px',
    textAlign: 'center',
  },
  heading: {
    fontFamily: 'Montserrat',
    textTransform: 'none',
    fontWeight: 200,
    fontSize: '5rem',
    [theme.breakpoints.down('md')]: {
      fontSize: '3rem',
    },
  },
}));

const Progress = () => {
  const classes = useStyles();
  return (
    <div className={classes.aboutContainer}>
      <Typography className={classes.heading}>In Progress...</Typography>
    </div>
  );
};

export default Progress;
