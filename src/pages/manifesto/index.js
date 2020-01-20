import React from 'react';
import Hero from '../../components/Hero';
import LayoutWrapper from '../../components/LayoutWrapper';
import SiteMetadata from '../../components/SiteMetadata';
import ImageSection from '../../components/ImageSection';
import BaseLayout from '../../components/_layouts/Base';
import pageData from '../../data/pages/manifesto';
import { sharedData } from '../../data/pages';

import fistImage from '../../assets/svg/fist-main.svg';

import './style.scss';

const ManifestoPage = () => {
  const { sections, groupSections } = pageData;

  return (
    <BaseLayout className="ManifestoPage">
      <SiteMetadata title="Joystream: The video platform DAO" description="Read the Joystream Manifesto" />

      <Hero
        image={fistImage}
        title={pageData.header}
        animationStartValue={10}
        animationEndValue={120}
        animationEnd="100vh"
        indent
        theme="blue"
        noOverflow
      >
        <p className="AcropolisPage__hero-paragraph">{sharedData.rolesDescription}</p>
      </Hero>

      <LayoutWrapper>
        <ImageSection title={sections.problem.title} image={sections.problem.image} imageOffset={50}>
          {sections.problem.text}
        </ImageSection>

        <ImageSection title={sections.goal.title} image={sections.goal.image}>
          {sections.goal.text}
        </ImageSection>

        <ImageSection title={sections.thesis.title} image={sections.thesis.image}>
          {sections.thesis.text}
        </ImageSection>

        <div className="ManifestoPage__grouped-sections">
          <ImageSection title={groupSections.wedge.title} image={groupSections.wedge.image} grouped imageOffset={200}>
            {groupSections.wedge.text}
          </ImageSection>

          <ImageSection title={groupSections.accountability.title} image={groupSections.accountability.image} grouped>
            {groupSections.accountability.text}
          </ImageSection>

          <ImageSection title={groupSections.voice.title} image={groupSections.voice.image} grouped imageOffset={200}>
            {groupSections.voice.text}
          </ImageSection>

          <ImageSection title={groupSections.exit.title} image={groupSections.exit.image} grouped imageOffset={200}>
            {groupSections.exit.text}
          </ImageSection>
        </div>

        <h3 className="ManifestoPage__cta">{pageData.callToAction}</h3>

        <section className="ManifestoPage__references">
          <h2 className="ManifestoPage__references-title">{pageData.references.header}</h2>
          {pageData.references.text}
        </section>
      </LayoutWrapper>
    </BaseLayout>
  );
};

export { ManifestoPage };
export default ManifestoPage;
