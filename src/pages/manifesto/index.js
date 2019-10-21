import React from 'react';
import fistImage from '../../assets/svg/fist-main.svg';
import Hero from '../../components/Hero';
import LayoutWrapper from '../../components/LayoutWrapper';
import SiteMetadata from '../../components/SiteMetadata';
import BaseLayout from '../../components/_layouts/Base';
import pageData from '../../data/pages/manifesto';
import { pagePropTypes } from '../../propTypes';
import './style.scss';

const ManifestoPage = () => {
  return (
    <BaseLayout className="ManifestoPage">
      <SiteMetadata title="Joystream: A user governed video platform" description="Manifesto" />

      <Hero
        image={fistImage}
        title={pageData.header.title}
        animationStartValue={10}
        animationEndValue={100}
        indent
        theme="blue"
        noOverflow
      >
        <p className="AcropolisPage__hero-paragraph">
          Explore available roles and pick the one that suits you the most. Influence platforms development earning
          Monero in the process.
        </p>
      </Hero>

      <LayoutWrapper>Content</LayoutWrapper>
    </BaseLayout>
  );
};

export { ManifestoPage };
export default ManifestoPage;
