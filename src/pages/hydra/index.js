import React from 'react';
import { Link } from 'gatsby';

import LayoutWrapper from '../../components/LayoutWrapper';
import Hero from '../../components/Hero';
import ImageSection from '../../components/ImageSection';
import TitleWrapper from '../../components/TitleWrapper';
import BaseLayout from '../../components/_layouts/Base';
import './style.scss';

import content from '../../data/pages/hydra';

import { Snippet, Video, Features } from '../../components/HydraPage';

function HydraPage() {
  return (
    <BaseLayout>
      <div className="Hydra__Hero">
        <Hero
          image={content.Hero.image}
          title={content.Hero.title}
          animationStartValue={0}
          animationEndValue={60}
          animationEnd="100vh"
          noOverflow
        >
          {content.Hero.text}
        </Hero>
      </div>

      <LayoutWrapper className="ValueProp">
        <TitleWrapper title={content.ValueProp.title} subtitle={content.ValueProp.subtitle} />
        <div className="ValueProp__Container">
          {content.ValueProp.sections.map((section, idx) => (
            <ImageSection key={section.title} title={section.title} image={section.image}>
              {section.text}
            </ImageSection>
          ))}
        </div>
      </LayoutWrapper>
      <LayoutWrapper className="Snippet">
        <TitleWrapper title={content.Snippet.title} subtitle={content.Snippet.subtitle} />
        <Snippet />
      </LayoutWrapper>
      <LayoutWrapper className="Features">
        <TitleWrapper title={content.Features.title} subtitle={content.Features.subtitle} />
        <Features features={content.Features.features} />
      </LayoutWrapper>
      <LayoutWrapper className="Video">
        <TitleWrapper title={content.Video.title} />
        <Video src={content.Video.video.src} />
      </LayoutWrapper>
      <LayoutWrapper className="GetStarted">
        <TitleWrapper title={content.GetStarted.title} subtitle={content.GetStarted.subtitle} />
        <div className="GetStarted__Container">
          {content.GetStarted.links.map(link => (
            <Link to={link.link.to}>
              <div className="GetStarted__Card">
                <div
                  className={`GetStarted__Card__Icon${
                    link.name === 'Documentation' ? ' GetStarted__Card__IconDoc' : ''
                  }`}
                >
                  {link.icon()}
                </div>
                <div className="GetStarted__Card__Text">
                  <h1>{link.name}</h1>
                  <a href={link.link.to}>{link.link.as}</a>
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
