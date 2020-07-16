import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/styles/makeStyles';
import Button from '@material-ui/core/Button';

import { GlobalContext } from '../../context/GlobalState';

const useStyles = makeStyles((theme) => ({
  primaryMenu: {
    marginTop: '1em',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '1em',
    },
  },
  descrptionContainer: {
    [theme.breakpoints.down('sm')]: {
      padding: '10px 20px 0px 20px',
    },
  },
  image: {
    [theme.breakpoints.down('sm')]: {
      height: '20em',
      marginTop: '10px',
    },
  },
  productName: {
    fontFamily: 'Montserrat',
    textTransform: 'none',
    fontWeight: 600,
    fontSize: '2rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.5rem',
    },
  },
  productPrice: {
    fontFamily: 'Montserrat',
    textTransform: 'none',
    fontWeight: 600,
    fontSize: '1.2rem',
    marginTop: '8px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
    },
  },
  price: {
    fontFamily: 'Montserrat',
    textTransform: 'none',
    fontWeight: 300,
    fontSize: '1.2rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
    },
  },
  stockText: {
    fontFamily: 'Montserrat',
    textTransform: 'none',
    fontWeight: 600,
    fontSize: '1rem',
    marginTop: '8px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.9rem',
    },
  },
  stockPrice: {
    fontFamily: 'Montserrat',
    textTransform: 'none',
    fontWeight: 300,
    fontSize: '0.8rem',
  },
  button: {
    margin: '10px 0px',
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
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.6rem',
    },
  },
}));

const Product = () => {
  const classes = useStyles();
  const { products } = useContext(GlobalContext);
  const { slug } = useParams();
  const getProduct = products.filter((product) => product.p_name === slug)[0];
  console.log(getProduct);

  return (
    <Grid container>
      <Grid item lg={2} md={1} sm={0} />
      <Grid item lg={4} md={5} sm={12} xs={12} align='center'>
        <img src={getProduct.p_image} alt='Product' className={classes.image} />
      </Grid>
      <Grid item lg={4} md={6} sm={12} xs={12}>
        <div className={classes.descrptionContainer}>
          <Typography className={classes.productName}>{slug}</Typography>
          <Typography className={classes.productPrice}>
            On Sale <span className={classes.price}>{getProduct.p_price}</span>
          </Typography>
          <Typography className={classes.stockText}>
            Availability
            <span className={classes.stockPrice}> {getProduct.p_stock}</span>
          </Typography>
          <Typography className={classes.stockText}>Description</Typography>
          <Typography className={classes.stockPrice}>
            The quintessential tennis shoe Adidas Stan Smith gets a new attire
            with the drop of Pharrell Williams’ Tennis Hu. Replaced with a
            one-piece ultra-soft mesh textile upper, this shoe is guaranteed to
            be extremely lightweight.
          </Typography>
          <Button className={classes.button}>
            <Typography className={classes.buttonText}>Add to Cart</Typography>
          </Button>
        </div>
      </Grid>
    </Grid>
  );
};

export default Product;
