import React from 'react';
import { Link } from 'gatsby';
import { graphql } from 'gatsby';
import { useTranslation, useI18next } from 'gatsby-plugin-react-i18next';

import LayoutWrapper from '../../components/LayoutWrapper';
import Hero from '../../components/Hero';
import ImageSection from '../../components/ImageSection';
import TitleWrapper from '../../components/TitleWrapper';
import BaseLayout from '../../components/_layouts/Base';
import SiteMetadata from '../../components/SiteMetadata';
import './style.scss';

import content from '../../data/pages/hydra';

import { Snippet, Video, Features } from '../../components/HydraPage';

function HydraPage() {
  const { t } = useTranslation();
  const { language } = useI18next();

  return (
    <BaseLayout t={t}>
      <SiteMetadata
        lang={language}
        title={t('hydra.siteMetadata.title')}
        description={t('hydra.siteMetadata.description')}
      />
      <div className="Hydra__Hero">
        <Hero
          image={content.Hero.image}
          title={t('hydra.hero.title')}
          animationStartValue={0}
          animationEndValue={60}
          animationEnd="100vh"
          noOverflow
        >
          <p className="Hero__Paragraph">{t('hydra.hero.text')}</p>
        </Hero>
      </div>

      <LayoutWrapper className="ValueProp">
        <TitleWrapper title={t('hydra.value.title')} subtitle={t('hydra.value.subtitle')} />
        <div className="ValueProp__Container">
          {content.ValueProp.sections.map(section => (
            <ImageSection key={t(`${section.key}.title`)} image={section.image}>
              <h1>{t(`${section.key}.title`)}</h1>
              <p>{t(`${section.key}.text`)}</p>
            </ImageSection>
          ))}
        </div>
      </LayoutWrapper>
      <LayoutWrapper className="Snippet">
        <TitleWrapper title={t("hydra.snippet.title")} subtitle={t("hydra.snippet.subtitle")} />
        <Snippet />
      </LayoutWrapper>
      <LayoutWrapper className="Features">
        <TitleWrapper title={t("hydra.features.title")}/>
        <Features features={content.Features.features} t={t}/>
      </LayoutWrapper>
      <LayoutWrapper className="Video">
        <TitleWrapper title={t("hydra.video.title")} />
        <Video src={content.Video.video.src} subtitle={t("hydra.video.subtitle")} />
      </LayoutWrapper>
      <LayoutWrapper className="GetStarted">
        <TitleWrapper title={t("hydra.getStarted.title")} subtitle={<p>{t("hydra.getStarted.subtitle")}</p>} />
        <div className="GetStarted__Container">
          {content.GetStarted.links.map(link => (
            <Link key={t(`${link.name}`)} to={link.link.to}>
              <div className="GetStarted__Card">
                <div
                  className={`GetStarted__Card__Icon${
                    t(`${link.name}`) === 'Documentation' ? ' GetStarted__Card__IconDoc' : ''
                  }`}
                >
                  {link.icon()}
                </div>
                <div className="GetStarted__Card__Text">
                  <h1>{t(`${link.name}`)}</h1>
                  <a href={link.link.to}>{t(`${link.link.as}`)}</a>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </LayoutWrapper>
    </BaseLayout>
  );
}

export default HydraPage;

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      ...LanguageQueryFields
    }
  }
`;
