import React from 'react';
import { node } from 'prop-types';

import Navbar from '../../Navbar';
import Footer from '../../Footer';
import CookiesNotice from '../../CookiesNotice';
import { ScrollProvider } from '../../_enhancers/ScrollContext';

const propTypes = {
  children: node,
};

const defaultTypes = {
  children: null,
};

const BaseLayout = ({ children, secondary }) => {
  return (
    <ScrollProvider>
      <div>
        <Navbar />
        {children}
        <CookiesNotice />
        <Footer secondary={secondary}/>
      </div>
    </ScrollProvider>
  );
};

BaseLayout.propTypes = propTypes;
BaseLayout.defaultTypes = defaultTypes;

export default BaseLayout;
