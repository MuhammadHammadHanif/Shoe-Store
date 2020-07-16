import React, { Fragment } from 'react';

import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  lineContainer: {
    margin: '20px 0',
    [theme.breakpoints.down('sm')]: {
      margin: '10px 0',
    },
  },
  textStyle: {
    fontFamily: 'Montserrat',
    fontWeight: 300,
    fontSize: '1.5rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
    },
  },
}));

const LineText = ({ text }) => {
  const classes = useStyles();
  return (
    <Fragment>
      <div className={classes.lineContainer}>
        <Typography className='lineText'>
          <span className={classes.textStyle}>{text}</span>
        </Typography>
      </div>
    </Fragment>
  );
};

export default LineText;
