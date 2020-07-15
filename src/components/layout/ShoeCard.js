import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import shoeImage from '../../assests/shoes/1.jpg';

const useStyles = makeStyles((theme) => ({
  img: {
    height: '20em',
  },
  centerContent: {
    textAlign: 'center',
    padding: '10px 0px',
  },
  name: {
    fontFamily: 'Montserrat',
    fontSize: '1.2rem',
    fontWeight: 400,
  },
  price: {
    padding: '5px 0px',
    fontFamily: 'Montserrat',
    fontSize: '1rem',
    fontWeight: 300,
  },
  stock: {
    fontFamily: 'Montserrat',
    fontSize: '0.8rem',
    fontWeight: 500,
  },
  button: {
    margin: '5px 0px',
    background: theme.palette.common.black,
    color: theme.palette.common.white,
    '&:hover': {
      background: theme.palette.secondary.light,
    },
  },
  buttonText: {
    padding: '5px 0px',
    fontFamily: 'Montserrat',
    fontSize: '0.8rem',
    fontWeight: 500,
  },
}));

function ShoeCard() {
  const classes = useStyles();

  return (
    <Paper>
      <img src={shoeImage} className={classes.img} />
      <div className={classes.centerContent}>
        <Typography className={classes.name}>NMD_R1 SHOES</Typography>
        <Typography className={classes.price}>$100.00</Typography>
        <Typography className={classes.stock}>In Stock</Typography>
        <Button className={classes.button}>
          <Typography className={classes.buttonText}>Add to Cart</Typography>
        </Button>
      </div>
    </Paper>
  );
}

export default ShoeCard;
