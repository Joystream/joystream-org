import React from 'react';
import { node, bool } from 'prop-types';

import Navbar from '../../Navbar';
import Footer from '../../Footer';
import CookiesNotice from '../../CookiesNotice';
import { ScrollProvider } from '../../_enhancers/ScrollContext';

const propTypes = {
  children: node,
  primer: bool,
};

const defaultTypes = {
  children: null,
};

const BaseLayout = ({ children, t, mainnetReminder = true, primer, lightNavbar }) => {
  return (
    <ScrollProvider>
      <div>
        <Navbar t={t} primer={primer} light={lightNavbar} />
        <main>{children}</main>
        <CookiesNotice t={t} />
        <Footer t={t} primer={primer} />
      </div>
    </ScrollProvider>
  );
};

BaseLayout.propTypes = propTypes;
BaseLayout.defaultTypes = defaultTypes;

export default BaseLayout;
