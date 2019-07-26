import React from 'react';
import { node } from 'prop-types';

import Navbar from '../../Navbar';
import Footer from '../../Footer';
import CookiesNotice from '../../CookiesNotice';
import withScrollHandle from '../../_enhancers/withScrollHandle';

const propTypes = {
  children: node,
};

const defaultTypes = {
  children: null,
};

const BaseLayout = ({ children, isScrollUp }) => {
  return (
    <div>
      <Navbar isVisible={isScrollUp} />
      {children}
      <CookiesNotice />
      <Footer />
    </div>
  );
};

BaseLayout.propTypes = propTypes;
BaseLayout.defaultTypes = defaultTypes;

export { BaseLayout };
export default withScrollHandle(BaseLayout);
