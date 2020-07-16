import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    maxWidth: '300px',
    margin: '5px',
    overflow: 'hidden',
  },
  img: {
    height: '15em',
    [theme.breakpoints.down('md')]: {
      height: '13em',
    },
  },
  centerContent: {
    textAlign: 'center',
    padding: '10px 0',
  },
  name: {
    fontFamily: 'Montserrat',
    fontSize: '1rem',
    fontWeight: 400,
    [theme.breakpoints.down('md')]: {
      fontSize: '0.9rem',
    },
  },
  price: {
    padding: '5px 0px',
    fontFamily: 'Montserrat',
    fontSize: '0.9rem',
    fontWeight: 400,
  },
  stock: {
    fontFamily: 'Montserrat',
    fontSize: '0.7rem',
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
    fontSize: '0.7rem',
    fontWeight: 500,
  },
}));

const ShoeCard = ({ img, name, price, stock }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.cardContainer}>
      <img src={img} className={classes.img} alt='Shoe' />
      <div className={classes.centerContent}>
        <Typography className={classes.name}>{name}</Typography>
        <Typography className={classes.price}>{price}</Typography>
        <Typography className={classes.stock}>{stock}</Typography>
        <Button className={classes.button}>
          <Typography className={classes.buttonText}>Add to Cart</Typography>
        </Button>
      </div>
    </Paper>
  );
};

export default ShoeCard;
