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
  { to: '/brand/story', label: 'Brand Story' },
  { to: '/brand/guides', label: 'Brand Guides' },
  { to: '/brand/assets', label: 'Download Assets' },
];

const BrandLayout = ({ children }) => {
  return (
    <ScrollProvider>
      <div>
        <Navbar light links={brandLinks} />
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
