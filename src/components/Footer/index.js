import React from 'react';
import Button from '../Button';
import Link from '../Link';

import { joystreamLinks, githubLinks, usefulLinks, socialMedias } from './data';

import './style.scss';

const FooterSection = ({ title, links }) => {
  return (
    <div className="Footer__section">
      <h6 className="Footer__section-title">{title}</h6>
      {links.map(({ label, ...link }) => {
        const LinkComponent = link.to ? Link : 'a';
        const props = link.to ? link : { ...link, target: '_blank', rel: 'noopener noreferrer' };

        return (
          <LinkComponent key={label} className="Footer__section-link" {...props}>
            {label}
          </LinkComponent>
        );
      })}
    </div>
  );
};

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
      <div className="Footer__layout">
        <FooterSection title="Joystream" links={joystreamLinks} />
        <FooterSection title="Github" links={githubLinks} />
        <FooterSection title="Useful links" links={usefulLinks} />

        <div className="Footer__section">
          <h6 className="Footer__section-title">Follow us</h6>

          <div className="Footer__socials">
            {socialMedias.map(({ icon: Icon, name, href }) => (
              <a href={href} className="Footer__social-link" key={name}>
                <Icon className="Footer__social-icon" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
