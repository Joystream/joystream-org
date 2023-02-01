import React from 'react';

import employees from '../employee-data.json';
import foundingMembers from '../founding-members.json';
import { ReactComponent as InfoIcon } from '../../../assets/svg/landing/info.svg';

import './style.scss';

const FMCard = ({ avatarUrl, memberHandle, memberId, type = 'jsgenesis' }) => {
  const baseClassName = `AboutPage__founding-members__${type}__card`;

  return (
    <div className={baseClassName}>
      <img className={`${baseClassName}__icon`} src={avatarUrl} alt="" />
      <p className={`${baseClassName}__handle`}>{memberHandle}</p>
      <p className={`${baseClassName}__id`}>#{memberId}</p>
    </div>
  );
};

const FoundingMembers = () => {
  return (
    <section className="AboutPage__founding-members-wrapper">
      <div className="AboutPage__founding-members">
        <header className="AboutPage__founding-members__header">
          <span className="AboutPage__founding-members__header__section-title">FOUNDING MEMBERS</span>
          <h2 className="AboutPage__founding-members__header__title">Meet the people who launched Joystream</h2>
          <p className="AboutPage__founding-members__header__subtitle">
            Joystream was launched by people working in the entity{' '}
            <a href="https://joystream.gitbook.io/testnet-workspace/glossary#jsgenesis" target="_blank">
              Jsgenesis
            </a>{' '}
            and to a highly committed subset of the community which participated through many test networks as part of
            the{' '}
            <a href="https://joystream.gitbook.io/testnet-workspace/founding-member-program" target="_blank">
              founding member program
            </a>
            .
          </p>
        </header>
        <div className="AboutPage__founding-members__jsgenesis">
          <div className="AboutPage__founding-members__jsgenesis__title-section">
            <h3 className="AboutPage__founding-members__jsgenesis__title-section__title">Jsgenesis</h3>
            <div className="AboutPage__founding-members__jsgenesis__title-section__info">
              Who are Jsgenesis founding members?{' '}
              <InfoIcon className="AboutPage__founding-members__jsgenesis__title-section__info__icon" />
              <div className="AboutPage__founding-members__jsgenesis__title-section__info__modal">
                Jsgenesis is the founding team and platform development partner set up as a structure to help develop
                and set up the autonomous operation of Joystream DAO. Its focus has been on developing the apps and
                processes to build and train the team of founding members and support the community on the path to
                autonomy and self-organization.
              </div>
            </div>
          </div>
          <div className="AboutPage__founding-members__jsgenesis__cards">
            {employees.map(({ avatarId, memberHandle, memberId }) => (
              <FMCard key={memberHandle} avatarUrl={avatarId} memberHandle={memberHandle} memberId={memberId} />
            ))}
          </div>
        </div>
        <div className="AboutPage__founding-members__community">
          <div className="AboutPage__founding-members__community__title-section">
            <h3 className="AboutPage__founding-members__community__title-section__title">Community</h3>
            <div className="AboutPage__founding-members__community__title-section__info">
              Who are community founding members?{' '}
              <InfoIcon className="AboutPage__founding-members__community__title-section__info__icon" />
              <div className="AboutPage__founding-members__jsgenesis__title-section__info__modal">
                Joystream is built by a strongly committed community of highly skilled founding members, responsible for
                technical infrastructure maintenance, DAO operations management and all aspects contributing to the
                growth of the Joystream platform.
              </div>
            </div>
          </div>
          <div className="AboutPage__founding-members__community__cards">
            {foundingMembers.slice(0, 12).map(({ avatarId, memberHandle, memberId }) => (
              <FMCard
                key={memberHandle}
                avatarUrl={avatarId}
                memberHandle={memberHandle}
                memberId={memberId}
                type="community"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundingMembers;
