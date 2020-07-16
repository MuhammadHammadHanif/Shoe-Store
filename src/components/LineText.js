import React, { Fragment } from 'react';

import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  lineContainer: {
    margin: '30px 0',
  },
  textStyle: {
    fontFamily: 'Montserrat',
  },
}));

const LineText = ({ text }) => {
  const classes = useStyles();
  return (
    <Fragment>
      <div className={classes.lineContainer}>
        <Typography variant='h5' className='lineText'>
          <span className={classes.textStyle}>{text}</span>
        </Typography>
      </div>
    </Fragment>
  );
};

export default LineText;
