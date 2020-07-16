import React, { Fragment, useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

import LineText from './LineText';
import Card from '../components/layout/ShoeCard';
import { GlobalContext } from '../context/GlobalState';

const CategoryCollection = ({ title, start = 0, end = 3 }) => {
  const { products } = useContext(GlobalContext);
  return (
    <Fragment>
      <LineText text={title} />
      <Grid container direction='row' justify='center'>
        {products.slice(start, end).map((product, i) => (
          <Grid
            key={i}
            container
            item
            lg={2}
            md={3}
            sm={4}
            justify='center'
            component={Link}
            to={`/product/${product.p_name}`}
            style={{ textDecoration: 'none' }}
          >
            <Card
              name={product.p_name}
              img={product.p_image}
              stock={product.p_stock}
              price={product.p_price}
            />
          </Grid>
        ))}
      </Grid>
    </Fragment>
  );
};

export default CategoryCollection;
