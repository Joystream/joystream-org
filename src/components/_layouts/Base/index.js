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

const BaseLayout = ({ children, t }) => {
  return (
    <ScrollProvider>
      <div>
        <Navbar t={t}/>
        {children}
        <CookiesNotice t={t}/>
        <Footer t={t}/>
      </div>
    </ScrollProvider>
  );
};

BaseLayout.propTypes = propTypes;
BaseLayout.defaultTypes = defaultTypes;

export default BaseLayout;
