import React from 'react';
import { node } from 'prop-types';

import Navbar from '../../Navbar';
import Footer from '../../Footer';
import CookiesNotice from '../../CookiesNotice';
import { ScrollProvider } from '../../_enhancers/ScrollContext';
import MainnetBanner from '../../MainnetBanner';

const propTypes = {
  children: node,
};

const defaultTypes = {
  children: null,
};

const BaseLayout = ({ children, t, mainnetReminder }) => {
  return (
    <ScrollProvider>
      <div>
        {mainnetReminder ? <MainnetBanner /> : null}
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
