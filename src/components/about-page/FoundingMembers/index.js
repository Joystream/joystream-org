import React, { useEffect, useState } from 'react';

import employees from '../employee-data.json';
import foundingMembers from '../founding-members.json';
import { ReactComponent as InfoIcon } from '../../../assets/svg/landing/info.svg';

import './style.scss';

const INITIAL_RENDER_EMPLOYEES = employees.slice(0, 8);
const OTHER_EMPLOYEES = employees.slice(8);
const INITIAL_RENDER_FOUNDING_MEMBERS = foundingMembers.slice(0, 18);
const OTHER_FOUNDING_MEMBERS = foundingMembers.slice(18);

const preloadImage = (imageSrc, onLoadFunction) => {
  const img = new Image();
  img.src = imageSrc;

  img.onload = () => {
    onLoadFunction();
  };
};

const FMCard = ({
  avatarUrl,
  memberHandle,
  memberId,
  type = 'jsgenesis',
  onlyRenderPlaceholder = false,
  updatePreloadedImageCounter = null,
  shouldRenderOtherMembers,
}) => {
  const [showPlaceholder, setShowPlaceholder] = useState(true);
  const baseClassName = `AboutPage__founding-members__${type}__card`;
  const placeholderClass = `AboutPage__founding-members__${type}__placeholder`

  // Start loading the image when the component is rendered and only remove the
  // placeholder icon, handle and id once the image has fully finished loading.
  useEffect(() => {
    preloadImage(avatarUrl, () => {
      setShowPlaceholder(false);

      if (updatePreloadedImageCounter != null) {
        updatePreloadedImageCounter();
      }
    });
  }, []);

  if (updatePreloadedImageCounter && !shouldRenderOtherMembers) {
    return null;
  }

  if (onlyRenderPlaceholder || showPlaceholder) {
    return (
      <div className={`${baseClassName} ${onlyRenderPlaceholder ? placeholderClass : ""} ${baseClassName}--loading`}>
        <div className={`${baseClassName}__icon ${baseClassName}__icon--loading`} />
        <div className={`${baseClassName}__handle ${baseClassName}__handle--loading`}></div>
        <div className={`${baseClassName}__id ${baseClassName}__id--loading`}></div>
      </div>
    );
  }

  return (
    <div className={`${baseClassName}`}>
      <img className={`${baseClassName}__icon`} src={avatarUrl} alt="" />
      <p className={`${baseClassName}__handle`}>{memberHandle}</p>
      <p className={`${baseClassName}__id`}>#{memberId}</p>
    </div>
  );
};

const FoundingMembers = () => {
  const [shouldRenderAllEmployees, setShouldRenderAllEmployees] = useState(false);
  const [numberOfPreloadedEmployeeImages, setNumberOfPreloadedEmployeeImages] = useState(0);

  const [shouldRenderAllCommunityMembers, setShouldRenderAllCommunityMembers] = useState(false);
  const [numberOfPreloadedCommunityMemberImages, setNumberOfPreloadedCommunityMemberImages] = useState(0);

  // Derived state
  const shouldRenderOtherEmployees =
    shouldRenderAllEmployees && numberOfPreloadedEmployeeImages == OTHER_EMPLOYEES.length;
  const shouldShowTemporaryEmployeePlaceholders =
    shouldRenderAllEmployees && numberOfPreloadedEmployeeImages != OTHER_EMPLOYEES.length;

  const shouldRenderOtherCommunityMembers =
    shouldRenderAllCommunityMembers && numberOfPreloadedCommunityMemberImages == OTHER_FOUNDING_MEMBERS.length;
  const shouldShowTemporaryCommunityMemberPlaceholders =
    shouldRenderAllCommunityMembers && numberOfPreloadedCommunityMemberImages != OTHER_FOUNDING_MEMBERS.length;

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
            {INITIAL_RENDER_EMPLOYEES.map(({ avatarId, memberHandle, memberId }) => (
              <FMCard key={memberHandle} avatarUrl={avatarId} memberHandle={memberHandle} memberId={memberId} />
            ))}
            {shouldShowTemporaryEmployeePlaceholders &&
              Array.from({ length: 4 }, (_, index) => (
                <FMCard key={`placeholder-${index}`} onlyRenderPlaceholder={true} />
              ))}
            {shouldRenderAllEmployees &&
              OTHER_EMPLOYEES.map(({ avatarId, memberHandle, memberId }) => (
                <FMCard
                  key={memberHandle}
                  avatarUrl={avatarId}
                  memberHandle={memberHandle}
                  memberId={memberId}
                  updatePreloadedImageCounter={() => setNumberOfPreloadedEmployeeImages(prev => prev + 1)}
                  shouldRenderOtherMembers={shouldRenderOtherEmployees}
                />
              ))}
          </div>
          {!shouldRenderAllEmployees && (
            <button
              className="AboutPage__founding-members__jsgenesis__show-all"
              onClick={() => setShouldRenderAllEmployees(true)}
            >
              Show all Jsgenesis team members ({employees.length})
            </button>
          )}
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
            {INITIAL_RENDER_FOUNDING_MEMBERS.map(({ avatarId, memberHandle, memberId }) => (
              <FMCard
                key={memberHandle}
                avatarUrl={avatarId}
                memberHandle={memberHandle}
                memberId={memberId}
                type="community"
              />
            ))}
            {shouldShowTemporaryCommunityMemberPlaceholders &&
              Array.from({ length: 6 }, (_, index) => (
                <FMCard key={`placeholder-${index}`} onlyRenderPlaceholder={true} type="community" />
              ))}
            {shouldRenderAllCommunityMembers &&
              OTHER_FOUNDING_MEMBERS.map(({ avatarId, memberHandle, memberId }) => (
                <FMCard
                  key={memberHandle}
                  avatarUrl={avatarId}
                  memberHandle={memberHandle}
                  memberId={memberId}
                  updatePreloadedImageCounter={() => setNumberOfPreloadedCommunityMemberImages(prev => prev + 1)}
                  shouldRenderOtherMembers={shouldRenderOtherCommunityMembers}
                  type="community"
                />
              ))}
          </div>
          {!shouldRenderAllCommunityMembers && (
            <button
              className="AboutPage__founding-members__community__show-all"
              onClick={() => setShouldRenderAllCommunityMembers(true)}
            >
              Show all community members ({foundingMembers.length})
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default FoundingMembers;
