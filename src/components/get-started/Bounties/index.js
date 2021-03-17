import React from 'react';
import GetStartedBountiesImage from '../../../assets/svg/get-started-bounties.svg';
import GetStartedRoles from '../../../assets/svg/get-started-roles.svg';
import { ReactComponent as LinkImage } from '../../../assets/svg/link.svg';
import CardCarousel from '../../../components/CardCarousel';
import BountiesCarousel from './Carousel';
import useWindowDimensions from '../../../utils/useWindowDimensions';

import { roleCardData } from '../../../data/pages/get-started';

import './style.scss';

const BountiesRoleCard = ({ RoleImage, title, link, text }) => {
  return (
    <div className="GetStarted__bounties__role-card">
      <div className="GetStarted__bounties__role-card__main">
        <RoleImage className="GetStarted__bounties__role-card__image" />
        <div className="GetStarted__bounties__role-card__content">
          <h4 className="GetStarted__bounties__role-card__role-name">{title}</h4>
          <div className="GetStarted__bounties__role-card__overview">
            <h4 className="GetStarted__bounties__role-card__subtitle">Overview</h4>
            <p className="GetStarted__bounties__role-card__text"> {text}</p>
          </div>
        </div>
      </div>
      <a href={link ?? '#0'} target="_blank">
        <div className="GetStarted__bounties__role-card__link">
          <p className="GetStarted__bounties__role-card__link-text">Check details on Github</p>
          <LinkImage className="GetStarted__bounties__role-card__link-image" />
        </div>
      </a>
    </div>
  );
};

const CARD_SIZE_WITH_MARGIN = 626;
const SMALL_CARD_SIZE_WITH_MARGIN = 355;

const GetStartedBounties = () => {
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
        Opportunities
      </h2>
      <div className="GetStarted__bounties__explanation">
        <div className="GetStarted__bounties__explanation__content">
          <h3 className="GetStarted__bounties__explanation__title">Bounties</h3>
          <p className="GetStarted__bounties__explanation__text">
            Bounties are long running tasks which anyone can attempt to tackle in a exchange for some reward. They are
            created either by Jsgenesis, or by the Council.{' '}
          </p>
        </div>
        <img src={GetStartedBountiesImage} alt="money pouch" />
      </div>

      <BountiesCarousel />

      <div className="GetStarted__bounties__explanation GetStarted__bounties__explanation--reverse">
        <img src={GetStartedRoles} alt="money pouch" />
        <div className="GetStarted__bounties__explanation__content">
          <h3 className="GetStarted__bounties__explanation__title">Roles</h3>
          <p className="GetStarted__bounties__explanation__text">
            Our current testnet also allows you to participate in some of the platform roles which will be available on
            mainnet.
            <br />
            <br />
            Participation in these roles is rewarded in tJOY (our testnet token) which is backed by fiat reserves at
            Jsgenesis and redeemable for bitcoin cash.
          </p>
        </div>
      </div>
      <div className="GetStarted__bounties__roles-carousel">
        <h3 className="GetStarted__bounties__roles-carousel__title">
          Active roles on the current testnet <span>(7)</span>
        </h3>
        <CardCarousel scrollAmount={(width && width > 768) ? CARD_SIZE_WITH_MARGIN : SMALL_CARD_SIZE_WITH_MARGIN}>
          <BountiesRoleCard
            RoleImage={validator.image}
            title={validator.title}
            text={validator.text}
            link={validator.link}
          />
          <BountiesRoleCard RoleImage={council.image} title={council.title} text={council.text} link={council.link} />
          <BountiesRoleCard
            RoleImage={storageProvider.image}
            title={storageProvider.title}
            text={storageProvider.text}
            link={storageProvider.link}
          />
          <BountiesRoleCard
            RoleImage={storageLead.image}
            title={storageLead.title}
            text={storageLead.text}
            link={storageLead.link}
          />
          <BountiesRoleCard
            RoleImage={contentCurator.image}
            title={contentCurator.title}
            text={contentCurator.text}
            link={contentCurator.link}
          />
          <BountiesRoleCard
            RoleImage={contentCreator.image}
            title={contentCreator.title}
            text={contentCreator.text}
            link={contentCreator.link}
          />
          <BountiesRoleCard
            RoleImage={contentLead.image}
            title={contentLead.title}
            text={contentLead.text}
            link={contentLead.link}
          />
        </CardCarousel>
      </div>
    </div>
  );
};

export default GetStartedBounties;
