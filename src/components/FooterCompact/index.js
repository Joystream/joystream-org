import React from 'react';
import { ReactComponent as Logo } from '../../assets/svg/logo-white.svg';
import { socialMedias } from '../Footer/data';
import Link from '../Link';
import './style.scss';

const FooterCompact = () => {
  return (
    <footer className="FooterCompact">
      <div className="FooterCompact__container">
        <Logo className="FooterCompact__logo" />
        <div className="FooterCompact__socials">
          {socialMedias.map(socialMedia => {
            const Icon = socialMedia.icon;
            return (
              <a href={socialMedia.href} className="FooterCompact__social-wrapper" key={socialMedia.name}>
                <Icon className="FooterCompact__social-icon" />
              </a>
            );
          })}
        </div>
        <Link to="/" className="FooterCompact__link">
          joystream.org
        </Link>
      </div>
    </footer>
  );
};

export default FooterCompact;
