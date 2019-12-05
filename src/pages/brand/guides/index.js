import React from 'react';
import { Heading, Section, SubSection, SubTitle, Text } from '../../../components/BrandGuides/GuidesSection';
import GuidesSectionLogo from '../../../components/BrandGuides/GuidesSectionLogo';
import GuidesSectionIllustrations from '../../../components/BrandGuides/GuidesSectionIllustrations';
import BrandLayoutWrapper from '../../../components/BrandLayoutWrapper';
import BrandSidebar, { SidebarProvider } from '../../../components/BrandSidebar';
import SiteMetadata from '../../../components/SiteMetadata';
import BrandLayout from '../../../components/_layouts/Brand';
import guidesData from '../../../data/pages/brand/guides';
import './index.scss';

const GuidesPage = () => {
  const { sidebar } = guidesData;

  return (
    <BrandLayout>
      <SiteMetadata title="Joystream Brand Guide" />

      <BrandLayoutWrapper className="GuidesPage">
        <SidebarProvider>
          <BrandSidebar data={guidesData.sidebar} />
          <div className="GuidesPage__wrapper">
            <GuidesSectionLogo />

            <Section title="Branding Colour Palette" id={sidebar[1].id}>
              <SubSection>
                <SubTitle>
                  Our brand colours combine three primary colours, Black, White and Blue. They define the mood and
                  present values such as:
                </SubTitle>

                <Text>Stability, Trust, Freedom, Responsibility, Loyalty, Wisdom, Confidence, Intelligence</Text>
              </SubSection>

              <SubSection title="01. Primary Colours">
                <Text>
                  Primarly used colors are black, Joystream blue which is a distinctive colour that helps to put focus
                  and draw attention. Colour white to calm, provide clarity and good readability.
                </Text>
                <Text>
                  One additional colour to combine with the three primary colours is blue tinted grey, its purpose is
                  similar to white but gives a good amount of contrast to the white elements when necessary.
                </Text>
              </SubSection>

              <SubSection title="02. Supportive Colour Palette">
                <Text>
                  Supportive palette serves a purpose of convenience and usability. They provide a comprehensive range
                  of different shades of primary colours and can be utilised in many different ways depending on a need.
                </Text>
              </SubSection>

              <SubSection title="03. Secondary Colour Palette">
                <Text>
                  These are colours that can represent certain states of the network, they can stand for an error,
                  success, warning and more.
                </Text>
              </SubSection>
            </Section>

            <Section title="Iconography" id={sidebar[2].id}>
              <SubSection>
                <SubTitle>
                  Icons can be devided into two groups with different purpose. Descriptive icons are form of a
                  substitute for illustrations and system icons are purely functional part of the interface.
                </SubTitle>
              </SubSection>

              <SubSection title="01. Descriptive Icons">
                <Text>
                  Joystream iconography is a custom, comprehensive icon style that helps explaining certain complex
                  topics in a simple, digestable manner.
                </Text>

                <Text>
                  They are not always very direct and often carry a symbolic meaning but they help visualising and
                  estinguish important elements.
                </Text>
              </SubSection>

              <SubSection title="02. System Icons">
                <Text>
                  System icons in their basic style combine two colours: Black and Joystream Blue. Their purpose is to
                  represent certain actions on the website or platform. They are readable even in small sizes down to
                  18x18px.
                </Text>

                <Text>
                  They are not always very direct and often carry a symbolic meaning but they help visualising and
                  estinguish important elements.
                </Text>

                <Heading variant="h2">Types of system icons</Heading>
                <Text>
                  We destinguish four types of system icons and they should be used preferably in their basic style but
                  can be used interchangeably when neccessary.
                </Text>
              </SubSection>
            </Section>

            <GuidesSectionIllustrations />
          </div>
        </SidebarProvider>
      </BrandLayoutWrapper>
    </BrandLayout>
  );
};

export default GuidesPage;
