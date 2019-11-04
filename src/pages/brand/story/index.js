import React from 'react';
import Link from '../../../components/Link';
import BrandLayout from '../../../components/_layouts/Brand';
import Button from '../../../components/Button';
import ActionButton from '../../../components/ActionButton';
import LayoutWrapper from '../../../components/LayoutWrapper';
import laptopImg from '../../../assets/images/laptop-website.png';
import wavesImg from '../../../assets/svg/waves.svg';
import logoImg from '../../../assets/svg/logo-mark.svg';
import ColumnsLayout from '../../../components/ColumnsLayout';
import './index.scss';

const StoryPage = () => {
  return (
    <BrandLayout>
      <LayoutWrapper className="StoryHeader">
        <div className="StoryHeader__container">
          <div className="StoryHeader__content">
            <h2 className="StoryHeader__title">What Joystream project is all about</h2>
            <div className="StoryHeader__description">
              <p>
                Joystream offers a modern, experimental solution to the problem of governance system in digital media.{' '}
                <strong>
                  Our objective is to build a user governed video platform with a strong sense of community and freedom.
                </strong>{' '}
                Find out more about the foundations in our Manifesto.
              </p>
            </div>
            <Button large>Manifesto</Button>
            <ActionButton className="StoryHeader__action" />
          </div>
          <div className="StoryHeader__image-wrapper">
            <img className="StoryHeader__image" src={logoImg} alt="" />
          </div>
        </div>
      </LayoutWrapper>

      <LayoutWrapper className="StoryWebsite">
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
      </LayoutWrapper>

      <LayoutWrapper className="StoryDescription">
        <p className="StoryDescription__header">
          Our brand identity consists of few key visual elements: logo, typeface, illustrations, patter, colour palette
          and iconography.
        </p>
        <ColumnsLayout className="StoryDescription__text">
          <div>
            <p>
              Each of them has a meaningful role in brand identity as established in the guidelines. But combining all
              of these elements builds much more than just a visual experience.
            </p>
            <p>
              Joystream branding is a powerful tool of communication with all of its users throughout the whole
              experience.
            </p>
            <p>
              Fundamentally, our effort is an experimental one; we do not have all the answers, and we want to be honest
              about that in our communication.
            </p>
          </div>
          <div>
            <p>
              We are not promising cheaper, faster or nicer, like one typically would when selling a consumer widget or
              service. Instead we have hope that we can build something more empowering and accountable through this
              experimentation.{' '}
            </p>
            <p>
              Lastly, at the core of our vision is governance, so what we are building is never finished; we are only
              constructing the first piece. It is a dynamic effort we hope communities will carry forward in amazing
              ways, we are just providing the first set of tools.
            </p>
          </div>
        </ColumnsLayout>
        <p className="StoryDescription__footer">
          So our brand should carry this feeling of experimentation, excitement and building something ethical and
          dynamic.
        </p>
      </LayoutWrapper>
    </BrandLayout>
  );
};

export default StoryPage;
