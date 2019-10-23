import React from 'react';
import cn from 'classnames';

import Button from '../Button';
import Link from '../Link';

import { links, socialMedias } from './data';

import './style.scss';

const Footer = () => {
  return (
    <footer className="Footer">
      <h2 className="Footer__header">Get notified</h2>
      <Button
        href="http://joystream.us11.list-manage.com/subscribe/post?u=932de577aec9616d4516b4e0f&amp;id=459ba8d1da"
        secondary
        className="Footer__button"
      >
        Join the newsletter
      </Button>
      <div className="Footer__socials">
        {socialMedias.map(socialMedia => {
          const Icon = socialMedia.icon;
          return (
            <a href={socialMedia.href} className="Footer__social-wrapper" key={socialMedia.name}>
              <Icon className="Footer__social-icon" />
            </a>
          );
        })}
      </div>
      <div className="Footer__links">
        {links.map(({ label, highlighted, ...link }) => (
          <Link className={cn('Footer__link', { 'Footer__link--highlighted': highlighted })} key={label} {...link}>
            {label}
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
