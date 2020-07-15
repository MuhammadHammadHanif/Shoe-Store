import React, { Fragment } from 'react';

import Grid from '@material-ui/core/Grid';

import HeroBlock from '../HeroBlock';
import LineText from '../LineText';
import Card from '../layout/ShoeCard';

const Home = () => {
  return (
    <Fragment>
      <HeroBlock />
      <LineText text='WHAT TRENDING' />
      <Grid container direction='column'>
        <Grid item xs={12}>
          <Grid container justify='center' spacing={5}>
            <Grid item>
              <Card />
            </Grid>
            <Grid item>
              <Card />
            </Grid>
            <Grid item>
              <Card />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <LineText text='NEW ARRIVAL' />
      <Grid container direction='column'>
        <Grid item xs={12}>
          <Grid container justify='center' spacing={5}>
            <Grid item>
              <Card />
            </Grid>
            <Grid item>
              <Card />
            </Grid>
            <Grid item>
              <Card />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Home;
