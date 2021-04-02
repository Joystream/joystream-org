import React from 'react';
import { node } from 'prop-types';

import Navbar from '../../Navbar';
import Footer from '../../Footer';
import CookiesNotice from '../../CookiesNotice';
import Banner from '../../Banner';
import { ScrollProvider } from '../../_enhancers/ScrollContext';

const propTypes = {
  children: node,
};

const defaultTypes = {
  children: null,
};

const BaseLayout = ({ children }) => {
  return (
    <ScrollProvider>
      <div>
        <Banner error />
        <Navbar />
        {children}
        <CookiesNotice />
        <Footer />
      </div>
    </ScrollProvider>
  );
};

BaseLayout.propTypes = propTypes;
BaseLayout.defaultTypes = defaultTypes;

export default BaseLayout;
