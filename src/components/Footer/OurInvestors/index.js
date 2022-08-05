import React from 'react';
import Slider from 'react-slick';

import companyIcons from '../../index-page/companies';

import './style.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
  dots: false,
  infinite: true,
  speed: 5000,
  autoplaySpeed: 0,
  centerMode: true,
  cssEase: 'linear',
  slidesToShow: 7,
  slidesToScroll: 1,
  autoplay: true,
  vertical: false,
  pauseOnHover: false,
  rows: 1,
};

const OurInvestors = ({ t }) => {
  return (
    <div className="Footer__our-investors-wrapper">
      <div className="Footer__our-investors">
        <h2 className="Footer__our-investors__title">{t("footer.ourInvestors")}</h2>
        <div className="Footer__our-investors__carousels">
          <Slider {...settings} className="Footer__our-investors__carousels__top">
            {companyIcons.map(({ Icon, key }) => (
              <div key={key} className="Footer__our-investors__list-item">
                <Icon className="Footer__our-investors__list-item__icon" />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default OurInvestors;