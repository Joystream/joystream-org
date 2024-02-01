import React from 'react';
import { Trans } from 'gatsby-plugin-react-i18next';
import GetStartedBountiesImage from '../../../assets/svg/get-started-bounties.svg';
import GetStartedRoles from '../../../assets/svg/get-started-roles.svg';
import { ReactComponent as LinkImage } from '../../../assets/svg/link.svg';
import CardCarousel from '../../../components/CardCarousel';
import BountiesCarousel from './Carousel';
import useWindowDimensions from '../../../utils/useWindowDimensions';

import { roleCardData } from '../../../data/pages/get-started';

import './style.scss';

const BountiesRoleCard = ({ RoleImage, title, link, text, t }) => {
  return (
    <div className="GetStarted__bounties__role-card">
      <div className="GetStarted__bounties__role-card__main">
        <RoleImage className="GetStarted__bounties__role-card__image" />
        <div className="GetStarted__bounties__role-card__content">
          <h4 className="GetStarted__bounties__role-card__role-name">{title}</h4>
          <div className="GetStarted__bounties__role-card__overview">
            <h4 className="GetStarted__bounties__role-card__subtitle">{t('getStarted.roleCard.overview')}</h4>
            <p className="GetStarted__bounties__role-card__text"> {text}</p>
          </div>
        </div>
      </div>
      <a href={link ?? '#0'} target="_blank">
        <div className="GetStarted__bounties__role-card__link">
          <p className="GetStarted__bounties__role-card__link-text">{t('getStarted.roleCard.buttonText')}</p>
          <LinkImage className="GetStarted__bounties__role-card__link-image" />
        </div>
      </a>
    </div>
  );
};

const CARD_SIZE_WITH_MARGIN = 626;
const SMALL_CARD_SIZE_WITH_MARGIN = 355;

const GetStartedBounties = ({ t }) => {
  const {
    validator,
    council,
    storageProvider,
    storageLead,
    contentCurator,
    contentCreator,
    contentLead,
  } = roleCardData;
  const { width } = useWindowDimensions();

  return (
    <div className="GetStarted__bounties">
      <h2 id="opportunities" className="GetStarted__bounties__title">
        {t('getStarted.opportunities.title')}
      </h2>
      <div className="GetStarted__bounties__explanation">
        <div className="GetStarted__bounties__explanation__content">
          <h3 className="GetStarted__bounties__explanation__title">{t('getStarted.opportunities.bounties.title')}</h3>
          <p className="GetStarted__bounties__explanation__text">{t('getStarted.opportunities.bounties.text')}</p>
        </div>
        <img src={GetStartedBountiesImage} alt={t('getStarted.opportunities.bounties.imageAlt')} />
      </div>

      <BountiesCarousel t={t}/>

      <div className="GetStarted__bounties__explanation GetStarted__bounties__explanation--reverse">
        <img src={GetStartedRoles} alt={t('getStarted.opportunities.roles.imageAlt')} />
        <div className="GetStarted__bounties__explanation__content">
          <h3 className="GetStarted__bounties__explanation__title">{t('getStarted.opportunities.roles.title')}</h3>
          <p className="GetStarted__bounties__explanation__text">
            <Trans i18nKey="getStarted.opportunities.roles.text" components={[<br />]} />
          </p>
        </div>
      </div>
      <div className="GetStarted__bounties__roles-carousel">
        <h3 className="GetStarted__bounties__roles-carousel__title">
          {t('getStarted.activeRoles.title')} <span>({t('numbers.seven')})</span>
        </h3>
        <CardCarousel scrollAmount={width && width > 768 ? CARD_SIZE_WITH_MARGIN : SMALL_CARD_SIZE_WITH_MARGIN}>
          <BountiesRoleCard
            RoleImage={validator.image}
            title={t('rolesData.validator')}
            text={t('getStarted.activeRoles.validatorText')}
            link={validator.link}
            t={t}
          />
          <BountiesRoleCard
            RoleImage={council.image}
            title={t('rolesData.council')}
            text={t('getStarted.activeRoles.councilMemberText')}
            link={council.link}
            t={t}
          />
          <BountiesRoleCard
            RoleImage={storageProvider.image}
            title={t('rolesData.storageProvider')}
            text={t('getStarted.activeRoles.storageProviderText')}
            link={storageProvider.link}
            t={t}
          />
          <BountiesRoleCard
            RoleImage={storageLead.image}
            title={t('rolesData.storageLead')}
            text={t('getStarted.activeRoles.storageLeadText')}
            link={storageLead.link}
            t={t}
          />
          <BountiesRoleCard
            RoleImage={contentCurator.image}
            title={t('rolesData.contentCurator')}
            text={t('getStarted.activeRoles.contentCuratorText')}
            link={contentCurator.link}
            t={t}
          />
          <BountiesRoleCard
            RoleImage={contentCreator.image}
            title={t('rolesData.contentCreator')}
            text={t('getStarted.activeRoles.contentCreatorText')}
            link={contentCreator.link}
            t={t}
          />
          <BountiesRoleCard
            RoleImage={contentLead.image}
            title={t('rolesData.contentLead')}
            text={t('getStarted.activeRoles.contentLeadText')}
            link={contentLead.link}
            t={t}
          />
        </CardCarousel>
      </div>
    </div>
  );
};

export default GetStartedBounties;
