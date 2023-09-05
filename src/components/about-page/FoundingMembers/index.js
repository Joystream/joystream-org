import React, { useEffect, useState } from "react";
import { useTranslation, Trans } from "gatsby-plugin-react-i18next";

import employees from "../employee-data.json";
import foundingMembers from "../founding-members.json";
import { ReactComponent as InfoIcon } from "../../../assets/svg/info.svg";

import "./style.scss";

// const INITIAL_RENDER_EMPLOYEES = employees.slice(0, 8);
// const OTHER_EMPLOYEES = employees.slice(8);
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
  type = "jsgenesis",
  onlyRenderPlaceholder = false,
  updatePreloadedImageCounter = null,
  shouldRenderOtherMembers,
}) => {
  const [showPlaceholder, setShowPlaceholder] = useState(true);
  const baseClassName = `AboutPage__founding-members__${type}__card`;
  const placeholderClass = `AboutPage__founding-members__${type}__placeholder`;

  // Start loading the image when the component is rendered and only remove the
  // placeholder icon, handle and id once the image has fully finished loading.
  useEffect(() => {
    preloadImage(avatarUrl, () => {
      setShowPlaceholder(false);

      if (updatePreloadedImageCounter != null) {
        updatePreloadedImageCounter();
      }
    });
  }, [avatarUrl, updatePreloadedImageCounter]);

  if (updatePreloadedImageCounter && !shouldRenderOtherMembers) {
    return null;
  }

  if (onlyRenderPlaceholder || showPlaceholder) {
    return (
      <div
        className={`${baseClassName} ${
          onlyRenderPlaceholder ? placeholderClass : ""
        } ${baseClassName}--loading`}
      >
        <div
          className={`${baseClassName}__icon ${baseClassName}__icon--loading`}
        />
        <div
          className={`${baseClassName}__handle ${baseClassName}__handle--loading`}
        ></div>
        <div
          className={`${baseClassName}__id ${baseClassName}__id--loading`}
        ></div>
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
  const { t } = useTranslation();

  const [
    shouldRenderAllCommunityMembers,
    setShouldRenderAllCommunityMembers,
  ] = useState(false);
  const [
    numberOfPreloadedCommunityMemberImages,
    setNumberOfPreloadedCommunityMemberImages,
  ] = useState(0);

  // Derived state
  const shouldRenderOtherCommunityMembers =
    shouldRenderAllCommunityMembers &&
    numberOfPreloadedCommunityMemberImages == OTHER_FOUNDING_MEMBERS.length;
  const shouldShowTemporaryCommunityMemberPlaceholders =
    shouldRenderAllCommunityMembers &&
    numberOfPreloadedCommunityMemberImages != OTHER_FOUNDING_MEMBERS.length;

  return (
    <section className="AboutPage__founding-members-wrapper">
      <div className="AboutPage__founding-members">
        <header className="AboutPage__founding-members__header">
          <span className="AboutPage__founding-members__header__section-title">
            {t("about.foundingMembers.sectionTitle")}
          </span>
          <h2 className="AboutPage__founding-members__header__title">
            {t("about.foundingMembers.title")}
          </h2>
          <p className="AboutPage__founding-members__header__subtitle">
            <Trans
              i18nKey="about.foundingMembers.subtitle"
              components={{
                linkOne: (
<<<<<<< HEAD
                  <a
                    href="https://www.coindesk.com/business/2022/03/23/decentralized-creator-platform-joystream-raises-58m/"
                    target="_blank"
                  >
=======
                  <a href="https://www.coindesk.com/business/2022/03/23/decentralized-creator-platform-joystream-raises-58m/" target="_blank">
>>>>>>> origin/master
                    Jsgenesis
                  </a>
                ),
                linkTwo: (
                  <a
                    href="https://joystream.gitbook.io/testnet-workspace/founding-member-program"
                    target="_blank"
                  >
                    founding member program
                  </a>
                ),
              }}
            />
          </p>
        </header>
        <div className="AboutPage__founding-members__jsgenesis">
          <div className="AboutPage__founding-members__jsgenesis__title-section">
            <h3 className="AboutPage__founding-members__jsgenesis__title-section__title">
              {t("about.foundingMembers.jsgenesis.title")}
            </h3>
            <div className="AboutPage__founding-members__jsgenesis__title-section__info">
              {t("about.foundingMembers.jsgenesis.info")}
              <InfoIcon className="AboutPage__founding-members__jsgenesis__title-section__info__icon" />
              <div className="AboutPage__founding-members__jsgenesis__title-section__info__modal">
                {t("about.foundingMembers.jsgenesis.modal")}
              </div>
            </div>
          </div>
          <div className="AboutPage__founding-members__jsgenesis__cards">
            {employees.map(({ avatarId, memberHandle, memberId }) => (
              <FMCard
                key={memberHandle}
                avatarUrl={avatarId}
                memberHandle={memberHandle}
                memberId={memberId}
              />
            ))}
          </div>
        </div>
        <div className="AboutPage__founding-members__community">
          <div className="AboutPage__founding-members__community__title-section">
            <h3 className="AboutPage__founding-members__community__title-section__title">
              {t("about.foundingMembers.community.title")}
            </h3>
            <div className="AboutPage__founding-members__community__title-section__info">
              {t("about.foundingMembers.community.info")}
              <InfoIcon className="AboutPage__founding-members__community__title-section__info__icon" />
              <div className="AboutPage__founding-members__jsgenesis__title-section__info__modal">
                {t("about.foundingMembers.community.modal")}
              </div>
            </div>
          </div>
          <div className="AboutPage__founding-members__community__cards">
            {INITIAL_RENDER_FOUNDING_MEMBERS.map(
              ({ avatarId, memberHandle, memberId }) => (
                <FMCard
                  key={memberHandle}
                  avatarUrl={avatarId}
                  memberHandle={memberHandle}
                  memberId={memberId}
                  type="community"
                />
              )
            )}
            {shouldShowTemporaryCommunityMemberPlaceholders &&
              Array.from({ length: 6 }, (_, index) => (
                <FMCard
                  key={`placeholder-${index}`}
                  onlyRenderPlaceholder={true}
                  type="community"
                />
              ))}
            {shouldRenderAllCommunityMembers &&
              OTHER_FOUNDING_MEMBERS.map(
                ({ avatarId, memberHandle, memberId }) => (
                  <FMCard
                    key={memberHandle}
                    avatarUrl={avatarId}
                    memberHandle={memberHandle}
                    memberId={memberId}
                    updatePreloadedImageCounter={() =>
                      setNumberOfPreloadedCommunityMemberImages(
                        (prev) => prev + 1
                      )
                    }
                    shouldRenderOtherMembers={shouldRenderOtherCommunityMembers}
                    type="community"
                  />
                )
              )}
          </div>
          {!shouldRenderAllCommunityMembers && (
            <button
              className="AboutPage__founding-members__community__show-all"
              onClick={() => setShouldRenderAllCommunityMembers(true)}
            >
              {t("about.foundingMembers.community.showAll", {
                numberOfCommunityMembers: foundingMembers.length,
              })}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default FoundingMembers;
