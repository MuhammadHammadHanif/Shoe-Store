import React, { Fragment } from 'react';

import HeroBlock from '../HeroBlock';
import CategoryCollection from '../CategoryCollection';

const Home = () => {
  return (
    <Fragment>
      <HeroBlock />
      <CategoryCollection title='WHAT TRENDING' start={0} end={4} />
      <CategoryCollection title='NEW COLLECTION' start={0} end={4} />
    </Fragment>
  );
};

export default Home;
