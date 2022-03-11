import React, { useState, useEffect } from 'react';
import Pioneer from '../../../assets/svg/builder-illustration.svg';
import Link from '../../Link';
import useContributors from '../../../utils/pages/onboarding/useContributors';
import { ReactComponent as Arrow } from '../../../assets/svg/arrow-down-small.svg';
import BuilderImage from '../../../assets/svg/contributor-builder.svg';
import Curator from '../../../assets/svg/contributor-curator.svg';
import Marketer from '../../../assets/svg/contributor-marketer.svg';
import Organiser from '../../../assets/svg/contributor-organiser.svg';
import Techie from '../../../assets/svg/contributor-techie.svg';
import VideoCreator from '../../../assets/svg/contributor-video-creator.svg';
import './style.scss';

const BuilderSection = ({ t, onShowGetStarted, shouldReloadRole, onRoleReloaded }) => {
  const [role, setRole] = useState();
  const [image, setImage] = useState(Pioneer);
  const { roleSuffixes, getContributorPageUrl } = useContributors();
  const roleImages = {
    Builder: BuilderImage,
    Techie: Techie,
    Marketer: Marketer,
    Organiser: Organiser,
    Curator: Curator,
    'Video Creator': VideoCreator,
  };

  useEffect(() => {
    const newRole = localStorage.getItem('JoystreamRole');
    setRole(newRole);
    if (newRole) {
      setImage(roleImages[newRole]);
    } else {
      setImage(Pioneer);
    }
    onRoleReloaded();
  }, [shouldReloadRole, onRoleReloaded, roleImages]);

  const [title, setTitle] = useState('onboarding.readyToContribureGeneric.title');
  const [text, setText] = useState('onboarding.readyToContribureGeneric.text');

  useEffect(() => {
    if (role && roleSuffixes) {
      const suffix = role.replaceAll(' ', '').toLowerCase();
      const roleTexts = roleSuffixes[suffix];
      setTitle(roleTexts.title);
      setText(roleTexts.text);
    }
  }, [role, roleSuffixes]);

  return (
    <div className="BuilderSection__wrapper">
      <div className="BuilderSection__content">
        <img className="BuilderSection__image" src={image} alt={t('landing.exploreJoystream.pioneer.imageAlt')} />
        <div className="BuilderSection__text">
          <h2 className="BuilderSection__title">{t(title)}</h2>
          <p className="BuilderSection__description">{t(text)}</p>
          {role ? (
            <Link to={getContributorPageUrl(role)}>
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
