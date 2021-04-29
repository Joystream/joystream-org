import React from 'react';
import { node } from 'prop-types';

import Navbar from '../../Navbar';
import FooterCompact from '../../FooterCompact';
import CookiesNotice from '../../CookiesNotice';
import { ScrollProvider } from '../../_enhancers/ScrollContext';

const propTypes = {
  children: node,
};

const defaultProps = {
  children: null,
};

const brandLinks = [
  { to: '/brand/story', label: 'navbar.brandStory' },
  { to: '/brand/guides', label: 'navbar.brandGuides' },
  { to: '/brand/assets', label: 'navbar.downloadAssets' },
];

const BrandLayout = ({ children, t }) => {
  return (
    <ScrollProvider>
      <div>
        <Navbar t={t} light links={brandLinks} />
        {children}
        <CookiesNotice />
        <FooterCompact />
      </div>
    </ScrollProvider>
  );
};

BrandLayout.propTypes = propTypes;
BrandLayout.defaultProps = defaultProps;

export default BrandLayout;
