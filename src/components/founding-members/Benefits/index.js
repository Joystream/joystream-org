import React from 'react';
import { Trans } from 'gatsby-plugin-react-i18next';
import ParticipationPayout from '../../../assets/svg/joy-token.svg';
import MembershipStatus from '../../../assets/svg/membership-status.svg';
import HandcraftedAvatar from '../../../assets/svg/handcrafted-avatar.svg';
import TakePart from '../TakePart';

import './style.scss';

const BenefitsItem = ({ imageSrc, text, title, t }) => (
  <div className="FoundingMembersPage__benefit">
    <img src={imageSrc} alt={t('foundingMembers.landing.benefits.itemImageAlt')} />
    <h3 className="FoundingMembersPage__benefit__title">{title}</h3>
    <p>{text}</p>
  </div>
);

const Benefits = ({ newMembers, t }) => (
  <div className={`FoundingMembersPage__benefits ${!newMembers ? 'FoundingMembersPage__benefits--secondary' : ''}`}>
    <div className="FoundingMembersPage__benefits__explanation">
      <h2 className="FoundingMembersPage__benefits__explanation__title">
        <Trans i18nKey="foundingMembers.landing.benefits.title" components={[<br />]} />
      </h2>
      <div className="FoundingMembersPage__benefits__explanation__text">
        <p>{t('foundingMembers.landing.benefits.currentlyBuilding')}</p>
        {/* <p className='FoundingMembersPage__benefits__explanation__quote'>
          "A founding member does have the freedom to opt out of any of these as desired."
        </p> */}
        <p>{t('foundingMembers.landing.benefits.foundingMembers')}</p>
      </div>
    </div>
    <h2 className="FoundingMembersPage__benefits__title">{t('foundingMembers.landing.benefits.benefits')}</h2>
    <h2 className="FoundingMembersPage__benefits__alternate-title">
      {t('foundingMembers.landing.benefits.benefitsAlternate')}
    </h2>

    <div className="FoundingMembersPage__benefits__container">
      <BenefitsItem
        imageSrc={ParticipationPayout}
        title={t('foundingMembers.landing.benefits.payout.title')}
        text={t('foundingMembers.landing.benefits.payout.text')}
        t={t}
      />
      <BenefitsItem
        imageSrc={MembershipStatus}
        title={t('foundingMembers.landing.benefits.membership.title')}
        text={t('foundingMembers.landing.benefits.membership.text')}
        t={t}
      />
      <BenefitsItem
        imageSrc={HandcraftedAvatar}
        title={t('foundingMembers.landing.benefits.avatar.title')}
        text={t('foundingMembers.landing.benefits.avatar.text')}
        t={t}
      />
    </div>

    <TakePart t={t}/>
  </div>
);

export default Benefits;
