import React, { useEffect, useState } from 'react';
import { node, bool } from 'prop-types';

import Navbar from '../../Navbar';
import Footer from '../../Footer';
import CookiesNotice from '../../CookiesNotice';
import OneKeyBanner from '../../OneKeyBanner';
import { ScrollProvider } from '../../_enhancers/ScrollContext';

const propTypes = {
  children: node,
  primer: bool,
};

const defaultTypes = {
  children: null,
};

const ONE_KEY_LOCAL_STORAGE_KEY = 'JOYSTREAM::showOneKeyBanner';

const shouldBannerBeClosed = () => {
  return typeof window !== 'undefined' && window.localStorage.getItem(ONE_KEY_LOCAL_STORAGE_KEY) === 'false';
};

const BaseLayout = ({ children, t, mainnetReminder = true, primer, lightNavbar }) => {
  const [showOneKeyBanner, setShowOneKeyBanner] = useState(false);

  useEffect(() => {
    if (!shouldBannerBeClosed()) {
      setShowOneKeyBanner(true);
    }
  }, []);

  const setShouldShow = () => {
    setShowOneKeyBanner(false);
    typeof window !== 'undefined' && window.localStorage.setItem(ONE_KEY_LOCAL_STORAGE_KEY, 'false');
  };

  return (
    <ScrollProvider>
      <div style={{ overflowX: 'clip' }}>
        <Navbar t={t} primer={primer} light={lightNavbar} />
        <OneKeyBanner shouldShow={showOneKeyBanner} setShouldShow={setShouldShow} />
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
