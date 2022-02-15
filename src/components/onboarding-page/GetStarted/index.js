import React, { useState, useEffect, useCallback } from 'react';
import { ReactComponent as NavClose } from '../../../assets/svg/navbar-close.svg';
import { ReactComponent as Builder } from '../../../assets/svg/role-builder.svg';
import { ReactComponent as BuilderActive } from '../../../assets/svg/role-builder-active.svg';
import { ReactComponent as Techie } from '../../../assets/svg/role-techie.svg';
import { ReactComponent as TechieActive } from '../../../assets/svg/role-techie-active.svg';
import { ReactComponent as Organizer } from '../../../assets/svg/role-organizer.svg';
import { ReactComponent as OrganizerActive } from '../../../assets/svg/role-organizer-active.svg';
import { ReactComponent as Marketer } from '../../../assets/svg/role-marketer.svg';
import { ReactComponent as MarketerActive } from '../../../assets/svg/role-marketer-active.svg';
import { ReactComponent as Curator } from '../../../assets/svg/role-curator.svg';
import { ReactComponent as CuratorActive } from '../../../assets/svg/role-curator-active.svg';
import { ReactComponent as VideoCreator } from '../../../assets/svg/role-video-creator.svg';
import { ReactComponent as VideoCreatorActive } from '../../../assets/svg/role-video-creator-active.svg';
import { ReactComponent as RoleSelected } from '../../../assets/svg/role-selected.svg';
import useContributors from '../../../utils/pages/onboarding/useContributors';
import cn from 'classnames';
import { navigate } from 'gatsby';
import './style.scss';

const Role = ({ title, text, icon, iconActive, role, isCurrentRole, onClose, onRoleChange, shouldSwitchRolePage }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { getContributorPageUrl } = useContributors();

  const chooseRole = () => {
    if (role) {
      onRoleChange(role);
    } else {
      onRoleChange('');
    }
    if (shouldSwitchRolePage) {
      navigate(getContributorPageUrl(role));
    } else {
      onClose();
    }
  };

  return (
    <div
      role="presentation"
      className={cn('Role__wrapper', {
        Role__wrapper__notSure: !role,
      })}
      onClick={chooseRole}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="Role__content">
        {icon && (isHovered ? iconActive : isCurrentRole ? <RoleSelected className="Role__icon" /> : icon)}
        <div
          className={cn('Role__texts', {
            Role__texts__notSure: !role,
          })}
        >
          <h3
            className={cn('Role__title', {
              'Role__title--active': isHovered,
            })}
          >
            {title}
          </h3>
          {text && (
            <h3
              className={cn('Role__subtitle', {
                'Role__subtitle--active': isHovered,
              })}
            >
              {text}
            </h3>
          )}
        </div>
      </div>
    </div>
  );
};

const GetStarted = ({ t, onGetStartedClose, onRoleChange, hideNotSureOption, shouldSwitchRolePage }) => {
  const data = [
    {
      title: 'onboarding.getStarted.builder.title',
      text: 'onboarding.getStarted.builder.text',
      icon: <Builder className="Role__icon" />,
      iconActive: <BuilderActive className="Role__icon" />,
      role: 'Builder',
    },
    {
      title: 'onboarding.getStarted.techie.title',
      text: 'onboarding.getStarted.techie.text',
      icon: <Techie className="Role__icon" />,
      iconActive: <TechieActive className="Role__icon" />,
      role: 'Techie',
    },
    {
      title: 'onboarding.getStarted.organiser.title',
      text: 'onboarding.getStarted.organiser.text',
      icon: <Organizer className="Role__icon" />,
      iconActive: <OrganizerActive className="Role__icon" />,
      role: 'Organiser',
    },
    {
      title: 'onboarding.getStarted.marketer.title',
      text: 'onboarding.getStarted.marketer.text',
      icon: <Marketer className="Role__icon" />,
      iconActive: <MarketerActive className="Role__icon" />,
      role: 'Marketer',
    },
    {
      title: 'onboarding.getStarted.curator.title',
      text: 'onboarding.getStarted.curator.text',
      icon: <Curator className="Role__icon" />,
      iconActive: <CuratorActive className="Role__icon" />,
      role: 'Curator',
    },
    {
      title: 'onboarding.getStarted.videoCreator.title',
      text: 'onboarding.getStarted.videoCreator.text',
      icon: <VideoCreator className="Role__icon" />,
      iconActive: <VideoCreatorActive className="Role__icon" />,
      role: 'Video Creator',
    },
    {
      title: 'onboarding.getStarted.notSure.title',
      isHidden: hideNotSureOption,
    },
  ];

  const [role, setRole] = useState();

  useEffect(() => {
    setRole(localStorage.getItem('JoystreamRole'));
  }, []);

  const escFunction = useCallback(
    event => {
      if (event.key === 'Escape') {
        onGetStartedClose();
      }
    },
    [onGetStartedClose]
  );

  useEffect(() => {
    document.addEventListener('keydown', escFunction, false);

    return () => {
      document.removeEventListener('keydown', escFunction, false);
    };
  }, [escFunction]);

  return (
    <div className="GetStarted__wrapper">
      <div className="GetStarted__content">
        <div className="GetStarted__button__wrapper">
          <button className="GetStarted__button" onClick={onGetStartedClose}>
            <NavClose className="GetStarted__button__icon" />
          </button>
        </div>
        <h3 className="GetStarted__title">{t('onboarding.getStarted.title')}</h3>
        <div className="GetStarted__lessons">
          {data &&
            data
              .filter(i => !i.isHidden)
              .map((item, key) => (
                <Role
                  onClose={onGetStartedClose}
                  onRoleChange={onRoleChange}
                  shouldSwitchRolePage={shouldSwitchRolePage}
                  key={key}
                  title={t(item.title)}
                  text={t(item.text)}
                  icon={item.icon}
                  iconActive={item.iconActive}
                  role={item.role}
                  isCurrentRole={item.role === role}
                />
              ))}
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
