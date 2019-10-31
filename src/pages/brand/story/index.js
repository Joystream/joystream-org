import React from 'react';
import Link from '../../../components/Link';
import BrandLayout from '../../../components/_layouts/Brand';
import Button from '../../../components/Button';
import ActionButton from '../../../components/ActionButton';
import LayoutWrapper from '../../../components/LayoutWrapper';
import laptopImg from '../../../assets/images/laptop-website.png';
import wavesImg from '../../../assets/svg/waves.svg';
import logoImg from '../../../assets/svg/logo-mark.svg';
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
    </BrandLayout>
  );
};

export default StoryPage;
