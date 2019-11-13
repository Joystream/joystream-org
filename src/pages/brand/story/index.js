import React from 'react';
import Link from '../../../components/Link';
import BrandLayout from '../../../components/_layouts/Brand';
import BrandLayoutWrapper from '../../../components/BrandLayoutWrapper';
import Button from '../../../components/Button';
import ActionButton from '../../../components/ActionButton';
import brandExplanationImg from '../../../assets/images/square-face.png';
import laptopImg from '../../../assets/images/laptop-website.png';
import sketchImg from '../../../assets/images/logo-sketches.png';
import wavesImg from '../../../assets/svg/waves.svg';
import logoImg from '../../../assets/svg/logo-mark.svg';
import { ReactComponent as Logotype } from '../../../assets/svg/logo-white.svg';
import logoBackground from '../../../assets/svg/bg-brand-logo-top.svg';
import blueprintImg from '../../../assets/svg/logo-blueprint.svg';
import ColumnsLayout from '../../../components/ColumnsLayout';
import './index.scss';

const StoryPage = () => {
  return (
    <BrandLayout>
      <div className="Story__multi-section">
        <BrandLayoutWrapper className="StoryHeader">
          <div className="StoryHeader__container">
            <div className="StoryHeader__content">
              <h2 className="StoryHeader__title">What Joystream project is all about</h2>
              <div className="StoryHeader__description">
                <p>
                  Joystream offers a modern, experimental solution to the problem of governance system in digital media.{' '}
                  <strong>
                    Our objective is to build a user governed video platform with a strong sense of community and
                    freedom.
                  </strong>{' '}
                  Find out more about the foundations in our Manifesto.
                </p>
              </div>
              <Button large>Manifesto</Button>
            </div>
            <div className="StoryHeader__image-wrapper">
              <img className="StoryHeader__image" src={logoImg} alt="" />
            </div>
          </div>
          <ActionButton className="StoryHeader__action" />
        </BrandLayoutWrapper>

        <BrandLayoutWrapper className="StoryWebsite">
          <h3 className="StoryWebsite__title">The Website</h3>
          <div className="StoryWebsite__row">
            <div className="StoryWebsite__container-dark">
              <img src={wavesImg} alt="" />
            </div>
            <div className="StoryWebsite__container-blue">
              <Link to="/" className="StoryWebsite__page-link">
                Visit the website
              </Link>
            </div>
            <div className="StoryWebsite__image-container">
              <img src={laptopImg} className="StoryWebsite__image" alt="" />
            </div>
          </div>
        </BrandLayoutWrapper>

        <BrandLayoutWrapper className="StoryDescription">
          <p className="StoryDescription__header">
            Our brand identity consists of few key visual elements: logo, typeface, illustrations, patter, colour
            palette and iconography.
          </p>
          <ColumnsLayout className="StoryDescription__text">
            <div>
              <div className="StoryDescription__text-col">
                <p>
                  Each of them has a meaningful role in brand identity as established in the guidelines. But combining
                  all of these elements builds much more than just a visual experience.
                </p>
                <p>
                  Joystream branding is a powerful tool of communication with all of its users throughout the whole
                  experience.
                </p>
                <p>
                  Fundamentally, our effort is an experimental one; we do not have all the answers, and we want to be
                  honest about that in our communication.
                </p>
              </div>
            </div>
            <div>
              <div className="StoryDescription__text-col">
                <p>
                  We are not promising cheaper, faster or nicer, like one typically would when selling a consumer widget
                  or service. Instead we have hope that we can build something more empowering and accountable through
                  this experimentation.{' '}
                </p>
                <p>
                  Lastly, at the core of our vision is governance, so what we are building is never finished; we are
                  only constructing the first piece. It is a dynamic effort we hope communities will carry forward in
                  amazing ways, we are just providing the first set of tools.
                </p>
              </div>
            </div>
          </ColumnsLayout>
          <p className="StoryDescription__footer">
            So our brand should carry this feeling of experimentation, excitement and building something ethical and
            dynamic.
          </p>
        </BrandLayoutWrapper>
      </div>

      <BrandLayoutWrapper blue className="StoryLogo">
        <div className="StoryLogo__logos-container">
          <div className="StoryLogo__logo-container">
            <img className="StoryLogo__logo-background" src={logoBackground} alt="" />
            <Logotype className="StoryLogo__logo" style={{ color: 'white' }} />
          </div>
          <img className="StoryLogo__blueprint" src={blueprintImg} alt="" />
        </div>

        <div className="StoryLogo__header">
          <h2 className="StoryLogo__title">
            We want to free the media, inspire people and connect them using platform
          </h2>

          <div className="StoryLogo__sketch-img">
            <img src={sketchImg} alt="" />
          </div>
        </div>

        <ColumnsLayout className="StoryLogo__text">
          <div>
            <div className="StoryLogo__text-col">
              <p>
                Creating the Joystream brand prooved to be challenging due to its unparalleled nature and the fact that
                it evolves rapidly.
              </p>
              <p>
                Not only we had to take into account a very wide and diverse user base but also we had to create a brand
                that will be futureproof and flexible enough to cover both existing and upcoming needs of the project
              </p>
            </div>
          </div>
          <div>
            <div className="StoryLogo__text-col">
              <p>
                Joystream branding within itself is quite metaphoric and symbolic often referring to symbolism of
                ancient cities, culture, arts and philosophies.
              </p>
              <p>The challenge was to combine it with a very modern and complex technologies.</p>
            </div>
          </div>
        </ColumnsLayout>
      </BrandLayoutWrapper>

      <BrandLayoutWrapper className="StoryExplanation">
        <div className="StoryExplanation__wrapper">
          <img src={brandExplanationImg} className="StoryExplanation__image" alt="" />
          <div className="StoryExplanation__content">
            <h2 className="StoryExplanation__title">Explaining the Brand</h2>
            <div className="StoryExplanation__text">
              <p>
                Our new branding is about finding good balance between very modern and simplistic tone of communication
                with symbolism and complexity of modern world problems and technologies.
              </p>
              <p>Mosaic, geometrical patterns and shapes combined with explicit colours and symbolic illustrations.</p>
              <p>
                Descriptive icons in combination with simple glyph style system icons and experimental detalic
                illustration style.
              </p>
            </div>
          </div>
        </div>
      </BrandLayoutWrapper>
    </BrandLayout>
  );
};

export default StoryPage;
