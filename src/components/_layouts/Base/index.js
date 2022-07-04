import React from 'react';
import { node, bool } from 'prop-types';

import Navbar from '../../Navbar';
import Footer from '../../Footer';
import CookiesNotice from '../../CookiesNotice';
import { ScrollProvider } from '../../_enhancers/ScrollContext';

const propTypes = {
  children: node,
  onlyNewsletter: bool
};

const defaultTypes = {
  children: null,
};

const BaseLayout = ({ children, t, onlyNewsletter }) => {
  return (
    <ScrollProvider>
      <div>
        <Navbar t={t}/>
        {children}
        <CookiesNotice t={t}/>
        <Footer t={t} onlyNewsletter={onlyNewsletter}/>
      </div>
    </ScrollProvider>
  );
};

BaseLayout.propTypes = propTypes;
BaseLayout.defaultTypes = defaultTypes;

export default BaseLayout;
