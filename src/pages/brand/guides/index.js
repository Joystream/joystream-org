import React from 'react';
import BrandLayout from '../../../components/_layouts/Brand';
import './index.scss';

import { useState, createRef, useMemo } from 'react';
import ReactDOM from 'react-dom';
import { InView } from 'react-intersection-observer';

import BrandLayoutWrapper from '../../../components/BrandLayoutWrapper';
import BrandSidebar from '../../../components/BrandSidebar';
import Button from '../../../components/Button';
import SiteMetadata from '../../../components/SiteMetadata';

import { sharedData } from '../../../data/pages';
import guidesData from '../../../data/pages/brand/guides';
import { rolesData } from '../../../data/pages/roles';
import logoDevelopmentImg from '../../../assets/images/logo-development.png';
import logoConstructionImg from '../../../assets/images/logomark-construction.png';
import logoExclusionImg from '../../../assets/images/logomark-exclusion.png';
import downloadImg from '../../../assets/svg/download.svg';
import { Section, SubSection, Text, SubTitle, Image } from '../../../components/BrandGuides/GuidesSection';

const GuidesPage = () => {
  return (
    <BrandLayout>
      <SiteMetadata
        title="Joystream Platform Roles"
        description="Read more about current and future roles on the Joystream Platform."
      />

      <BrandLayoutWrapper className="GuidesPage">
        {/* <BrandSidebar onElementChange={scrollToElement} currentElement={elementInViewport} data={guidesData.sections} /> */}
        <div className="GuidesPage__wrapper">
          <Section title="Logo">
            <SubSection>
              <SubTitle>
                "...Our brand should carry this feeling of experimentation, excitement and building something ethical
                and dynamic."
              </SubTitle>
              <Image src={logoDevelopmentImg} alt="" />
              <Text>
                Before we agreed on a final logo concept we went through multiple iterations of various concepts. We
                have explored various ideas in depth...
              </Text>

              <Button href={logoDevelopmentImg} download="logo">
                <img src={downloadImg} alt="" />
                Download logo
              </Button>
            </SubSection>

            <SubSection title="01. Logomark Construction">
              <Text>
                Finally we came up with a logomark that combines several simple principles which translate well to the
                voice of the brand.
              </Text>
              <Image src={logoConstructionImg} alt="" />
              <Text>
                Logomark is a combination of letter J (acronym of the name Joystream) and three parallel stripes that
                are representation of the stream, flow of information and technology.
              </Text>
              <Image
                description="Logomarks exclusion zone is equal to the blue square height (marked as 5a in the diagram)."
                src={logoExclusionImg}
                alt=""
              />
            </SubSection>

            <SubSection title="02. Logo Construction">
              <Text>
                Joystream Logo is a combination of the logomark and dedicated typography that was designed to be the
                best link between logomark and what Joystream stands for. It is firm and technical but shows plasticity
                and sense of a structure.
              </Text>
              <Image src={logoConstructionImg} alt="" />
              <Text>
                Logomark is a combination of letter J (acronym of the name Joystream) and three parallel stripes that
                are representation of the stream, flow of information and technology.
              </Text>
            </SubSection>
          </Section>
        </div>
      </BrandLayoutWrapper>
    </BrandLayout>
  );
};

export default GuidesPage;
