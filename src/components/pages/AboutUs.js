import React from 'react';

import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  aboutContainer: {
    margin: '10px 40px 0px 40px',
  },
  image: {
    [theme.breakpoints.down('sm')]: {
      height: '20em',
      marginTop: '10px',
    },
  },
  heading: {
    fontFamily: 'Montserrat',
    textTransform: 'none',
    fontWeight: 400,
    fontSize: '2rem',
    borderBottom: '1px solid #e5e5e5',
  },
  description: {
    margin: '10px 0px',
    fontFamily: 'Montserrat',
    textTransform: 'none',
    fontWeight: 300,
    fontSize: '0.9rem',
    lineHeight: 1.5,
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

const AboutUs = () => {
  const classes = useStyles();
  return (
    <div className={classes.aboutContainer}>
      <Typography className={classes.heading}>About Us</Typography>
      <Typography className={classes.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium rem
        sit rerum accusantium. Quasi, quo eius. Minus distinctio blanditiis
        dolores neque quo officia ipsum voluptates esse mollitia? Excepturi
        alias qui ut repellat ex quis quas, cumque nulla praesentium voluptatum
        laboriosam ratione suscipit? Cupiditate aliquid quas repudiandae earum
        provident beatae id, vitae temporibus. Illo mollitia aperiam repudiandae
        beatae suscipit accusamus ullam ea molestiae laborum, ducimus
        consequatur, et cumque est error numquam, impedit fuga ab quo quas
        assumenda? Repellat optio excepturi placeat, laborum architecto
        doloribus qui cupiditate aspernatur consequuntur laudantium eligendi
        incidunt obcaecati alias tempora nihil. Ab alias odit perferendis
        repudiandae vero?
      </Typography>
    </div>
  );
};

export default AboutUs;
