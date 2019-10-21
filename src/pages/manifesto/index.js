import React from 'react';
import Hero from '../../components/Hero';
import LayoutWrapper from '../../components/LayoutWrapper';
import SiteMetadata from '../../components/SiteMetadata';
import ImageSection from '../../components/ImageSection';
import BaseLayout from '../../components/_layouts/Base';
import pageData from '../../data/pages/manifesto';
import { sharedData } from '../../data/pages';

import fistImage from '../../assets/svg/fist-main.svg';
import problemImage from '../../assets/svg/problem.svg';
import goalImage from '../../assets/svg/goal.svg';
import thesisImage from '../../assets/svg/thesis.svg';

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
        <p className="AcropolisPage__hero-paragraph">{sharedData.rolesDescription}</p>
      </Hero>

      <LayoutWrapper>
        <ImageSection title="Problem" image={problemImage}>
          We believe that art, be it as literature, music, film, games or performance, is a critical tool through which
          societies establish a shared understanding of what is common knowledge among all members. These expressions
          define values and narratives that end up shaping culture, faith and even public policy. It therefore matters
          deeply how it is financed, distributed and paid for.
          <br />
          <br />
          Digital media has become the primary medium through which such expression is distributed, and digital media
          platforms have become the key institutions organizing this activity.
          <br />
          <blockquote>
            Unfortunately, due to network effects, economies of scale, regulations and political interests, we are today
            left with handful of massive institutions which set the terms for how this happens. They are almost entirely
            unaccountable to normal market and political mechanisms.
          </blockquote>
        </ImageSection>

        <ImageSection title="Goal" image={goalImage}>
          We call for an arrangement where media platforms are accountable to the people they impact, which are
          primarily their users, be it as consumers, creatives, third party developer or workers.
          <blockquote>
            It is the absence of such accountability which is the fundamental source of any particular problem at any
            particular time.
          </blockquote>
        </ImageSection>

        <ImageSection title="Thesis" image={thesisImage}>
          Our core thesis is that there are two basic challenges which must be addressed to achieve this goal, and that
          an appropriate application of contemporary distributed systems technology, including blockchains, smart
          contracts and tokens, is the right means to do so.
        </ImageSection>
      </LayoutWrapper>
    </BaseLayout>
  );
};

export { ManifestoPage };
export default ManifestoPage;
