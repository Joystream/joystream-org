import React from 'react';
import { node } from 'prop-types';

import Navbar from '../../Navbar';
import Footer from '../../Footer';

const propTypes = {
  children: node,
};

const defaultTypes = {
  children: null,
};

const BaseLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

BaseLayout.propTypes = propTypes;
BaseLayout.defaultTypes = defaultTypes;

export default BaseLayout;
