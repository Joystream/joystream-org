import React, { useState } from 'react';
import Button from '../Button';
import Link from '../Link';
import Input from '../Input';

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
  const [email, setEmail] = useState('');

  return (
    <footer className="Footer">
      <div className="Footer__form-wrapper">
        <h2 className="Footer__form__title">Stay up to date</h2>
        <p className="Footer__form__subtitle">Don't worry about spam! Keep track of all important updates</p>
        <form
          method="post"
          action="https://joystream.us11.list-manage.com/subscribe/post?u=932de577aec9616d4516b4e0f&amp;id=459ba8d1da"
          name="mc-embedded-subscribe-form"
          target="_blank"
          noValidate
          className="Footer__form"
        >
          <Input
            className="Footer__form__input"
            placeholder="Email Address..."
            type="email"
            name="EMAIL"
            required
            onChange={e => setEmail(e.target.value)}
            value={email}
          />
          <Button className="Footer__form__button" type="submit" name="subscribe">
            Join the newsletter
          </Button>
        </form>
      </div>
      <h2 className="Footer__header">Get notified</h2>
      <Button
        href="https://joystream.us11.list-manage.com/subscribe/post?u=932de577aec9616d4516b4e0f&amp;id=459ba8d1da"
        secondary
        className="Footer__button"
      >
        Join the newsletter
      </Button>
      <div className="Footer__layout">
        <FooterSection title="Joystream" links={joystreamLinks} />
        <FooterSection title="GitHub" links={githubLinks} />
        <FooterSection title="Useful links" links={usefulLinks} />

        <div className="Footer__section">
          <h6 className="Footer__section-title">Follow us</h6>

          <div className="Footer__socials">
            {socialMedias.map(({ icon: Icon, name, href }) => (
              <a href={href} className="Footer__social-link" key={name}>
                <Icon className="Footer__social-icon" />
                <p className="Footer__social-name">{name}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
