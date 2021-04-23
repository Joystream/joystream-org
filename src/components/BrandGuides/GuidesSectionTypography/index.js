import cn from 'classnames';
import React from 'react';
import guidesData from '../../../data/pages/brand/guides';
import { BlueSection, Heading, Section, SubSection, SubTitle, Text } from '../GuidesSection';
import './style.scss';

const TypographyBlockRow = ({ title, description, children, className }) => {
  return (
    <div className={cn('TypographyBlock__row', className)}>
      <div className="TypographyBlock__row-left">
        <div className="TypographyBlock__row-title">{title}</div>
        <div className="TypographyBlock__row-description">{description}</div>
      </div>
      <div className="TypographyBlock__row-content">{children}</div>
    </div>
  );
};

export default ({ t }) => {
  const section = guidesData.sidebar[5];

  return (
    <Section title={t('brand.guides.general.typography')} id={section.id}>
      <SubSection>
        <SubTitle>{t('brand.guides.typography.overview')}</SubTitle>

        <div className="Typography__font Typography__font--grotesk">
          <div className="Typography__font-title">PX Grotesk</div>
          <div className="Typography__font-text">
            <div>ABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
            <div>abcdefghijklmnopqrstuvwxyz</div>
            <div>1234567890!@£$%^&*()</div>
          </div>
        </div>

        <div className="Typography__font Typography__font--inter">
          <div className="Typography__font-title">Inter UI</div>
          <div className="Typography__font-text">
            <div>ABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
            <div>abcdefghijklmnopqrstuvwxyz</div>
            <div>1234567890!@£$%^&*()</div>
          </div>
        </div>

        <Text>{t('brand.guides.typography.backup')}</Text>

        <BlueSection className="TypographyBlock">
          <Text className="TypographyBlock__text">{t('brand.guides.typography.sample')}</Text>

          <TypographyBlockRow
            title="H1"
            description={
              <>
                PX Grotesk Bold
                <br className="TypographyBlock__desktop-br" />
                /Regular, 54/80
              </>
            }
          >
            <Heading bold variant="h1">
              The spectacle before us was indeed sublime.
            </Heading>
          </TypographyBlockRow>

          <TypographyBlockRow
            title="H2"
            description={
              <>
                PX Grotesk Bold
                <br className="TypographyBlock__desktop-br" />
                /Regular, 40/48
              </>
            }
          >
            <Heading bold variant="h2">
              Question marks and exclamation points.
            </Heading>
          </TypographyBlockRow>

          <TypographyBlockRow
            title="H3"
            description={
              <>
                PX Grotesk Bold
                <br className="TypographyBlock__desktop-br" />
                /Regular, 40/48
              </>
            }
          >
            <Heading bold variant="h3">
              Every introduction to the problems of aesthetics begins by acknowledging the existence and claims of two
              methods of attack.
            </Heading>
          </TypographyBlockRow>

          <TypographyBlockRow
            title="H4"
            description={
              <>
                PX Grotesk Bold
                <br className="TypographyBlock__desktop-br" />
                /Regular, 32/40
              </>
            }
          >
            <Heading bold variant="h4">
              Methodologies of Aesthetics
            </Heading>
          </TypographyBlockRow>

          <TypographyBlockRow title="Paragraph" description="Inter Regular, 14/24">
            <Text className="TypographyBlock__text">
              Users who also want to engage in actually running and guiding how the platform will work, in other words,
              people who want to engage in platform governance and work. This refers to people who enjoy building,
              fostering and participating in nascent communities. They are driven by a sense of purpose, and also the
              motivation to get in early on something that can become big and important. These people are often highly
              social, enjoy working in groups with common purpose, are self directed, digital natives and often
              outsiders in the offine world.
            </Text>
          </TypographyBlockRow>
        </BlueSection>
      </SubSection>
    </Section>
  );
};
