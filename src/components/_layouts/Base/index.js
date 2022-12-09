import React from 'react';
import { node, bool } from 'prop-types';

import Navbar from '../../Navbar';
import Footer from '../../Footer';
import CookiesNotice from '../../CookiesNotice';
import { ScrollProvider } from '../../_enhancers/ScrollContext';
import MainnetBanner from '../../MainnetBanner';

const propTypes = {
  children: node,
  primer: bool,
};

const defaultTypes = {
  children: null,
};

const BaseLayout = ({ children, t, mainnetReminder = false, primer, lightNavbar }) => {
  return (
    <ScrollProvider>
      <div style={{ overflowX: 'hidden' }}>
        {mainnetReminder ? <MainnetBanner /> : null}
        <Navbar t={t} primer={primer} light={lightNavbar} />
        <main>
          {children}
        </main>
        <CookiesNotice t={t}/>
        <Footer t={t} primer={primer}/>
      </div>
    </ScrollProvider>
  );
};

BaseLayout.propTypes = propTypes;
BaseLayout.defaultTypes = defaultTypes;

export default BaseLayout;
