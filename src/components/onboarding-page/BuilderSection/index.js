import React, { useState, useEffect } from 'react';
import Pioneer from '../../../assets/svg/builder-illustration.svg';
import Link from '../../Link';
import { ReactComponent as Arrow } from '../../../assets/svg/arrow-down-small.svg';
import './style.scss';

const BuilderSection = ({ t, onShowGetStarted, shouldReloadRole, onRoleReloaded }) => {
  const [role, setRole] = useState();

  useEffect(() => {
    setRole(localStorage.getItem('JoystreamRole'));
    onRoleReloaded();
  }, [shouldReloadRole, onRoleReloaded]);

  const [title, setTitle] = useState('onboarding.readyToContribureGeneric.title');
  const [text, setText] = useState('onboarding.readyToContribureGeneric.text');

  const [roleSuffixes] = useState({
    builder: {
      title: 'onboarding.readyToContribureRoles.builder.title',
      text: 'onboarding.readyToContribureRoles.builder.text',
    },
    techie: {
      title: 'onboarding.readyToContribureRoles.techie.title',
      text: 'onboarding.readyToContribureRoles.techie.text',
    },
    marketer: {
      title: 'onboarding.readyToContribureRoles.marketer.title',
      text: 'onboarding.readyToContribureRoles.marketer.text',
    },
    organiser: {
      title: 'onboarding.readyToContribureRoles.organiser.title',
      text: 'onboarding.readyToContribureRoles.organiser.text',
    },
    curator: {
      title: 'onboarding.readyToContribureRoles.curator.title',
      text: 'onboarding.readyToContribureRoles.curator.text',
    },
    videocreator: {
      title: 'onboarding.readyToContribureRoles.videoCreator.title',
      text: 'onboarding.readyToContribureRoles.videoCreator.text',
    },
  });

  useEffect(() => {
    if (role && roleSuffixes) {
      const suffix = role.replaceAll(' ', '').toLowerCase();
      const roleTexts = roleSuffixes[suffix];
      setTitle(roleTexts.title);
      setText(roleTexts.text);
    }
  }, [role, roleSuffixes]);

  const contributorUrls = {
    builder: 'builder',
    techie: 'techie',
    marketer: 'marketer',
    organiser: 'organiser',
    curator: 'curator',
    videocreator: 'video-creator',
  };

  const getContributorPageUrl = () => {
    return `/contribute/${contributorUrls[role.toLowerCase().replaceAll(' ', '')]}`;
  };

  return (
    <div className="BuilderSection__wrapper">
      <div className="BuilderSection__content">
        <img className="BuilderSection__image" src={Pioneer} alt={t('landing.exploreJoystream.pioneer.imageAlt')} />
        <div className="BuilderSection__text">
          <h2 className="BuilderSection__title">{t(title)}</h2>
          <p className="BuilderSection__description">{t(text)}</p>
          {role ? (
            <Link to={getContributorPageUrl()}>
              <div className="BuilderSection__button">
                <p className="BuilderSection__button-text">{t('onboarding.button.getStarted.text')}</p>
                <Arrow className="BuilderSection__button-arrow" />
              </div>
            </Link>
          ) : (
            <div className="BuilderSection__button" role="presentation" onClick={onShowGetStarted}>
              <p className="BuilderSection__button-text">{t('onboarding.button.getStarted.text')}</p>
              <Arrow className="BuilderSection__button-arrow" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BuilderSection;
